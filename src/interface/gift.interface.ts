import {Document} from 'mongoose';

export interface IGift extends Document{
  name: string,
  quantity: number,
  price: number,
  purchased: number,
  description: string,
  image: {
    fileName: string,
    filePath: string
  },
}