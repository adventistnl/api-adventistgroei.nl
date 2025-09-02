import { InputType, Field, PartialType } from '@nestjs/graphql';
import { ContactCreateDto } from './contact.dto';

@InputType()
export class ChurchCreateDto {
  @Field()
  institution_id: string;

  @Field()
  name: string;

  @Field()
  region_id: string;

  @Field(() => ContactCreateDto, { nullable: true })
  contact?: ContactCreateDto;
}

@InputType()
export class ChurchUpdateDto extends PartialType(ChurchCreateDto) {
  @Field()
  id: string;

  @Field({ nullable: true })
  contact_id?: string;
}
