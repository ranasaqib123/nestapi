import { Module } from '@nestjs/common';
import { SchoolController } from './school.controller';
import { SchoolService } from './school.service';
import { MongooseModule } from '@nestjs/mongoose';
import { schoolSchema } from '../schema/school.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:'school',
        schema:schoolSchema
      }
    ])
  ],
  controllers: [SchoolController],
  providers: [SchoolService]
})
export class SchoolModule {}
