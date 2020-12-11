import {Document} from 'mongoose';
import { ITeacher } from './teacher.interface';
import { ISchool } from './school.interface';

export interface IStudent extends Document{
  name: string,
  email: string,
  phone: number,
  password: string,
  city: string,
  school: ISchool,
  teacher: ITeacher,
  favorite: ITeacher[],
  image: {
    fileName: string,
    filePath: string
  },
}