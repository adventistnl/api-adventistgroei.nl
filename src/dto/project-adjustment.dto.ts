import { InputType, Field, Int } from '@nestjs/graphql';
import { IsArray, IsBoolean, IsEnum, IsInt, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { AdjustmentStatus } from 'src/@generated/prisma/adjustment-status.enum';

@InputType()
export class AdjustmentTaskInput {
  @Field()
  @IsString()
  title: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  position?: number;
}

/** Cria um Adjustment vinculado a uma entrada de ProjectHistory (ADJUSTMENT_NEEDED). */
@InputType()
export class CreateAdjustmentDto {
  @Field()
  @IsString()
  project_id: string;

  /** Descrição textual do ajuste — também funciona sem tasks (só texto). */
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  comment?: string;

  /** Lista de tarefas (todo list). Pode ser enviada vazia ou omitida. */
  @Field(() => [AdjustmentTaskInput], { nullable: true })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AdjustmentTaskInput)
  tasks?: AdjustmentTaskInput[];
}

/** Atualiza o status de um adjustment (OPEN → IN_PROGRESS → CLOSED). */
@InputType()
export class UpdateAdjustmentStatusDto {
  @Field()
  @IsString()
  id: string;

  @Field(() => AdjustmentStatus)
  @IsEnum(AdjustmentStatus)
  status: AdjustmentStatus;
}

/** Adiciona uma nova tarefa a um adjustment existente. */
@InputType()
export class AddAdjustmentTaskDto {
  @Field()
  @IsString()
  adjustment_id: string;

  @Field()
  @IsString()
  title: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  position?: number;
}

/** Marca/desmarca uma tarefa como concluída. */
@InputType()
export class ToggleAdjustmentTaskDto {
  @Field()
  @IsString()
  task_id: string;

  @Field()
  @IsBoolean()
  completed: boolean;
}
