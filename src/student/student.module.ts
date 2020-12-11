import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { studentSchema } from '../schema/student.schema';
import { TeacherModule } from '../teacher/teacher.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports:[MongooseModule.forFeature([
    {
      name:'students',
      schema:studentSchema
    }
  ]),
    TeacherModule,
    MulterModule.register({
      dest:'../uploads'
    })

  ],
  providers: [StudentService],
  controllers: [StudentController],
  exports: [StudentService]
})
export class StudentModule {}
