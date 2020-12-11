import { Injectable } from '@nestjs/common';
import { StudentService } from '../student/student.service';

export type User = any;

@Injectable()
export class UsersService {
  constructor(
    protected readonly studentService: StudentService
) {
}
  async findOne(username: string): Promise<User | undefined> {
    return await this.studentService.findByName(username);
  }

}