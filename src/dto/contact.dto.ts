import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class ContactCreateDto {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  mobile?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  full_address?: string;

  @Field({ nullable: true })
  postal_code?: string;

  @Field({ nullable: true })
  website?: string;

  @Field({ nullable: true })
  notes?: string;
}

@InputType()
export class ContactUpdateDto extends PartialType(ContactCreateDto) {
  @Field()
  id: string;
}
