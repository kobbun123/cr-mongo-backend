import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ObjectID } from 'mongodb';

export class ParseObjectIdPipe implements PipeTransform<any, ObjectID> {
  transform(value: any, metadata: ArgumentMetadata): ObjectID {
    try {
      const transformObjectId: ObjectID = ObjectID.createFromHexString(value);
      return transformObjectId;
    } catch (error) {
      throw new BadRequestException('เเปลงค่าไม่ได้');
    }
  }
}
