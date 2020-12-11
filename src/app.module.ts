import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { UsersModule } from './users/users.module';
import { SchoolModule } from './school/school.module';
import { AuthModule } from './auth/auth.module';
import { GiftModule } from './gift/gift.module';
import { MulterModule } from '@nestjs/platform-express';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/school__db'),
    StudentModule,
    TeacherModule,
    UsersModule,
    SchoolModule,
    AuthModule,
    GiftModule,
    MulterModule.register({
    dest:'../uploads'
  }) ],
  controllers: [AppController],
  providers: [AppService],
  exports:[AppService]
})
export class AppModule {}
