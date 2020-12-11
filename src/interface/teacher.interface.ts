import {Document} from 'mongoose';

export interface ITeacher extends Document{
  name: string,
  phone:number
  teacher:ITeacher
}