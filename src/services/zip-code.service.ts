import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CustomGraphQLError, ErrorCode } from '../common/errors/custom-graphql-error';

@Injectable()
export class ZipCodeService {
  private readonly apiKey: string;
  private readonly apiUrl: string;

  constructor(private readonly configService: ConfigService) {
    this.apiKey = this.configService.get<string>('POSTCODES_API_KEY') || '';
    this.apiUrl = this.configService.get<string>('POSTCODES_API_URL') || 'https://api.postcodeapi.nu/v3/lookup';

    if (!this.apiKey) {
      console.warn('⚠️  POSTCODES_API_KEY not configured in environment variables');
    }
  }

  async getZipInfo(zip: string, houseNumber: number): Promise<{ city?: string; province?: string }> {
    // Validate ZIP format (Dutch postal code format: 1234AB)
    const cleanZip = zip.replace(/\s+/g, '').toUpperCase();
    
    if (!/^\d{4}[A-Z]{2}$/.test(cleanZip)) {
      throw new CustomGraphQLError(
        'Invalid ZIP code format. Expected format: 1234AB',
        ErrorCode.VALIDATION_ERROR,
        400
      );
    }

    if (!houseNumber || houseNumber <= 0) {
      throw new CustomGraphQLError(
        'House number is required and must be greater than 0',
        ErrorCode.VALIDATION_ERROR,
        400
      );
    }

    if (!this.apiKey) {
      throw new CustomGraphQLError(
        'PostcodeAPI key not configured',
        ErrorCode.INTERNAL_SERVER_ERROR,
        500
      );
    }

    try {
      const url = `${this.apiUrl}/${cleanZip}/${houseNumber}`;
      
      console.log(`🔍 PostcodeAPI Request: ${url}`);
      console.log(`🔑 API Key configured: ${this.apiKey ? 'Yes (length: ' + this.apiKey.length + ')' : 'No'}`);
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Api-Key': this.apiKey,
        },
      });

      console.log(`📡 PostcodeAPI Response Status: ${response.status}`);

      if (response.status === 404) {
        throw new CustomGraphQLError(
          `ZIP code ${cleanZip} with house number ${houseNumber} not found`,
          ErrorCode.NOT_FOUND,
          404
        );
      }

      if (response.status === 401 || response.status === 403) {
        const errorBody = await response.text();
        console.error(`🚫 PostcodeAPI Auth Error: ${errorBody}`);
        throw new CustomGraphQLError(
          'Invalid PostcodeAPI credentials',
          ErrorCode.UNAUTHORIZED,
          401
        );
      }

      if (!response.ok) {
        const errorBody = await response.text();
        console.error(`❌ PostcodeAPI Error (${response.status}): ${errorBody}`);
        throw new CustomGraphQLError(
          `PostcodeAPI error: ${response.status} ${response.statusText}`,
          ErrorCode.INTERNAL_SERVER_ERROR,
          response.status
        );
      }

      const data: any = await response.json();
      console.log(`✅ PostcodeAPI Success:`, JSON.stringify(data, null, 2));

      return {
        city: data?.city || null,
        province: data?.province || null,
      };
    } catch (error) {
      // Re-throw CustomGraphQLError
      if (error instanceof CustomGraphQLError) {
        throw error;
      }

      // Handle fetch errors with more details
      console.error(`💥 Fetch Error:`, error);
      
      if (error instanceof TypeError) {
        throw new CustomGraphQLError(
          `Failed to connect to PostcodeAPI service: ${error.message}`,
          ErrorCode.INTERNAL_SERVER_ERROR,
          503
        );
      }

      // Handle unknown errors
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      throw new CustomGraphQLError(
        'An unexpected error occurred while fetching ZIP code information',
        ErrorCode.INTERNAL_SERVER_ERROR,
        500,
        { additional: { originalError: errorMessage } }
      );
    }
  }
}
