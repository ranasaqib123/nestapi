import {Schema} from 'mongoose';

export const giftSchema = new Schema({
  name: String,
  quantity: Number,
  price: Number,
  purchased: Number,
  description: String,
  image:{
    fileName: String,
    filePath: String
  },
})