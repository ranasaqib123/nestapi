import { Schema } from 'mongoose'

export const TeacherSchema = new Schema({
  name: String,
  phone: Number
})