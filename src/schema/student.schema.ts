import {Schema} from 'mongoose';

export const studentSchema = new Schema({
  name : String,
  email: String,
  phone: Number,
  password: String,
  city: String,
  school:{
    type:Schema.Types.ObjectId,
    ref:'school'
  },
  teacher:
    {
      type:Schema.Types.ObjectId,
      ref:'teachers'
    },
  favorite:
    [
      {
      type:Schema.Types.ObjectId,
      ref:'teachers'
    }
    ],
  image:{
    fileName: String,
    filePath: String
  },

})