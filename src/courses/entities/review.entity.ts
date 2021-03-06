import { ObjectID } from 'bson';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Review {
  @ObjectIdColumn()
  id?: ObjectID;

  @Column()
  comments: string;

  @Column()
  score: number;

  @Column()
  courseId: ObjectID;
}
