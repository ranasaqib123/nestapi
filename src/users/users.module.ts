import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { StudentModule } from '../student/student.module';

@Module({
  imports:[
    StudentModule
  ],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
