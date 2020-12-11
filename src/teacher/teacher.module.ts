import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TeacherSchema } from '../schema/teacher.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:'teachers',
        schema: TeacherSchema
      }
    ])
  ],
  providers: [TeacherService],
  exports:[TeacherService],
  controllers: [TeacherController]
})
export class TeacherModule {}
