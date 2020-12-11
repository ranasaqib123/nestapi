import {Document} from 'mongoose';

export interface ISchool extends Document{
  name:string,
  city:string,
  address:string,
  email: string,
  phone:number
}