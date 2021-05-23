import { IsInt, IsNotEmpty, IsNumberString } from 'class-validator';
import { ObjectID } from 'mongodb';

export class CreateReviewDto {
  @IsNotEmpty()
  coments: string;

  @IsInt()
  score: number;

  courseId?: ObjectID;
}
