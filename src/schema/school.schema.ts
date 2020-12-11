import {Schema} from 'mongoose';

export const schoolSchema = new Schema({
  name: String,
  city: String,
  address: String,
  email: String,
  phone: Number
})