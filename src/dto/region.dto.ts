import { InputType, Field, PartialType } from '@nestjs/graphql';
import { ContactCreateDto } from './contact.dto';

@InputType()
export class RegionCreateDto {
  @Field()
  institution_id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  parent_region_id?: string;

  @Field(() => ContactCreateDto, { nullable: true })
  contact?: ContactCreateDto;
}

@InputType()
export class RegionUpdateDto extends PartialType(RegionCreateDto) {
  @Field()
  id: string;

  @Field({ nullable: true })
  contact_id?: string;
}
