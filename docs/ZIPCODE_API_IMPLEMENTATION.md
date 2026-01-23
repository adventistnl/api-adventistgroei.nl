# ZipCode API Module - Implementation Guide

## 📋 Overview
This module provides a GraphQL query to fetch city and province information for Dutch postal codes (ZIP codes) using the PostcodeAPI.nu v3 API. **Important:** The API requires both ZIP code and house number to return accurate address information.

## 🏗️ Architecture

### Module Structure
```
src/
├── models/
│   └── zip-info.model.ts          # GraphQL ObjectType for ZIP info
├── services/
│   └── zip-code.service.ts        # Business logic & API integration
├── graphql/
│   └── zip-code.resolver.ts       # GraphQL resolver
└── modules/
    └── zip-code.module.ts         # NestJS module
```

## 📦 Components

### 1. ZipInfo Model
**File:** `src/models/zip-info.model.ts`

GraphQL ObjectType that represents the response:

```graphql
type ZipInfo {
  city: String
  province: String
}
```

**Fields:**
- `city`: City name (nullable)
- `province`: Province name (nullable)

### 2. ZipCodeService
**File:** `src/services/zip-code.service.ts`

**Responsibilities:**
- Validates Dutch postal code format (1234AB)
- Makes HTTP requests to PostcodeAPI.nu
- Handles errors (invalid ZIP, not found, API errors)
- Returns city and province information

**Key Methods:**
- `getZipInfo(zip: string, houseNumber: number)`: Fetches ZIP code information

**Error Handling:**
- Invalid format → `VALIDATION_ERROR` (400)
- Invalid/missing house number → `VALIDATION_ERROR` (400)
- ZIP not found → `NOT_FOUND` (404)
- Invalid API credentials → `UNAUTHORIZED` (401)
- API service error → `INTERNAL_SERVER_ERROR` (503)
- Unknown errors → `INTERNAL_SERVER_ERROR` (500)

**ZIP Validation:**
- Format: 4 digits + 2 uppercase letters (e.g., "6545CA")
- Spaces are automatically removed
- Letters are converted to uppercase

**House Number Validation:**
- Must be greater than 0
- Required parameter

### 3. ZipCodeResolver
**File:** `src/graphql/zip-code.resolver.ts`

**GraphQL Query:**
```graphql
query {
  getZipInfo(zip: String!, houseNumber: Int!): ZipInfo
}
```

**Parameters:**
- `zip`: Dutch postal code (format: 1234AB)
- `houseNumber`: House number (required by PostcodeAPI.nu)

### 4. ZipCodeModule
**File:** `src/modules/zip-code.module.ts`

NestJS module that bundles all components and exports the service for reuse.

## 🔧 Configuration

### Environment Variables
Add to your `.env` file:

```env
# POSTCODE API (PostcodeAPI.nu)
POSTCODES_API_KEY=your_actual_api_key_here
POSTCODES_API_URL=https://api.postcodeapi.nu/v3/lookup
```

### Getting API Key
1. Visit [PostcodeAPI.nu](https://postcodes.nu/)
2. Sign up for an account
3. Get your API key from the dashboard
4. Add it to your `.env` file

## 📝 GraphQL Usage

### Basic Query
```graphql
query {
  getZipInfo(zip: "6545CA", houseNumber: 29) {
    city
    province
  }
}
```

### Response Example
```json
{
  "data": {
    "getZipInfo": {
      "city": "Nijmegen",
      "province": "Gelderland"
    }
  }
}
```

### Error Response - Invalid Format
```json
{
  "errors": [
    {
      "message": "Invalid ZIP code format. Expected format: 1234AB",
      "extensions": {
        "code": "VALIDATION_ERROR",
        "statusCode": 400
      }
    }
  ]
}
```

### Error Response - Not Found
```json
{
  "errors": [
    {
      "message": "ZIP code 9999ZZ not found",
      "extensions": {
        "code": "NOT_FOUND",
        "statusCode": 404
      }
    }
  ]
}
```

## 🧪 Testing Examples

### Valid ZIP Codes (Netherlands)
```graphql
# Nijmegen
query { getZipInfo(zip: "6545CA", houseNumber: 29) { city province } }

# Amsterdam
query { getZipInfo(zip: "1012JS", houseNumber: 1) { city province } }

# Rotterdam
query { getZipInfo(zip: "3011AD", houseNumber: 100) { city province } }

# Utrecht
query { getZipInfo(zip: "3511LX", houseNumber: 5) { city province } }
```

### Invalid Cases
```graphql
# Invalid format
query { getZipInfo(zip: "12345", houseNumber: 1) { city province } }

# Missing house number
query { getZipInfo(zip: "1234AB", houseNumber: 0) { city province } }

# Negative house number
query { getZipInfo(zip: "1234AB", houseNumber: -5) { city province } }
```

## 🔄 Integration in App Module

The `ZipCodeModule` is automatically imported in `app.module.ts`:

```typescript
@Module({
  imports: [
    // ... other imports
    ZipCodeModule,
    // ... other imports
  ],
  // ...
})
export class AppModule {}
```

## 💡 Service Reusability

The `ZipCodeService` is exported from the module and can be injected into other services:

```typescript
import { Injectable } from '@nestjs/common';
import { ZipCodeService } from './services/zip-code.service';

@Injectable()
export class YourService {
  constructor(private readonly zipCodeService: ZipCodeService) {}

  async validateAddress(zip: string) {
    const zipInfo = await this.zipCodeService.getZipInfo(zip);
    // Use zipInfo.city and zipInfo.province
    return zipInfo;
  }
}
```

## 🛡️ Validation Rules

### ZIP Code Format
- **Pattern:** `/^\d{4}[A-Z]{2}$/`
- **Example Valid:** "1234AB", "8240BW", "3011AD"
- **Example Invalid:** "12345", "123AB", "1234ABC"

### Preprocessing
1. Remove all whitespace from ZIP: "6545 CA" → "6545CA"
2. Convert to uppercase: "6545ca" → "6545CA"
3. Validate ZIP pattern
4. Validate house number > 0
5. Make API request to `/v3/lookup/{zip}/{houseNumber}`

## 🔐 Security Considerations

1. **API Key Protection:**
   - Store in `.env` file (not committed)
   - Use `ConfigService` to load securely
   - Never expose in client-side code
   - Send via `X-Api-Key` header (not Authorization)

2. **Rate Limiting:**
   - PostcodeAPI.nu has rate limits
   - Consider implementing caching for frequent requests
   - Monitor API usage

3. **Error Messages:**
   - Don't expose API key in error messages
   - Use generic messages for security errors

4. **API Request Format:**
   - Use GET requests only (no POST/PUT)
   - Do not send Content-Type header
   - Do not send request payload

## 📊 API Response Mapping

PostcodeAPI.nu v3 returns the following structure:

```json
{
  "postcode": "6545CA",
  "number": 29,
  "street": "Binderskampweg",
  "city": "Nijmegen",
  "municipality": "Nijmegen",
  "province": "Gelderland",
  "location": {
    "type": "Point",
    "coordinates": [5.858910083770752, 51.84376540294041]
  }
}
```

Our service maps these fields:

| API Field | Mapped To |
|-----------|-----------|
| `city` | `city` |
| `province` | `province` |

**Note:** Currently only city and province are exposed. Future versions may include street, municipality, and location coordinates.

## ⚠️ Known Limitations

1. **Dutch ZIP Codes Only:** This service only supports Netherlands postal codes
2. **API Dependency:** Requires active PostcodeAPI.nu subscription
3. **Network Dependency:** Requires internet connection

## 🚀 Future Enhancements

Potential improvements:

1. **Caching:**
   ```typescript
   // Add Redis cache for frequently requested ZIP codes
   @Injectable()
   export class ZipCodeService {
     constructor(
       private readonly cache: CacheService,
       private readonly configService: ConfigService
     ) {}
   }
   ```

2. **Batch Queries:**
   ```graphql
   query {
     getMultipleZipInfo(zips: [String!]!): [ZipInfo!]!
   }
   ```

3. **Extended Information:**
   ```graphql
   type ZipInfo {
     city: String
     province: String
     street: String
     municipality: String
     latitude: Float
     longitude: Float
   }
   ```

## 🐛 Troubleshooting

### Issue: "PostcodeAPI key not configured"
**Solution:** Add `POSTCODES_API_KEY` to your `.env` file

### Issue: "Invalid PostcodeAPI credentials"
**Solution:** Verify your API key is correct and active

### Issue: "ZIP code not found"
**Solution:** Verify the ZIP code exists in the Netherlands

### Issue: "Failed to connect to PostcodeAPI service"
**Solution:** 
- Check internet connection
- Verify `POSTCODES_API_URL` is correct
- Check if PostcodeAPI.nu is operational

## 📞 PostcodeAPI.nu Documentation

- **Website:** https://postcodes.nu/
- **API Docs:** https://postcodes.nu/docs
- **Support:** Contact PostcodeAPI.nu support team

## ✅ Checklist

Before deploying:
- [ ] Add `POSTCODES_API_KEY` to `.env`
- [ ] Add `POSTCODES_API_URL` to `.env`
- [ ] Test with valid Dutch ZIP codes
- [ ] Test error handling (invalid format, not found)
- [ ] Verify API key is not exposed in logs
- [ ] Configure rate limiting if needed
- [ ] Monitor API usage and costs

## 📄 License

This implementation follows the project's license. PostcodeAPI.nu usage subject to their terms of service.
