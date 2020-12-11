import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IGift } from '../interface/gift.interface';

@Injectable()
export class GiftService {
  constructor(
    @InjectModel('gifts')
    private readonly giftModel: Model<IGift>
  ) {
  }
  create(data){
    return this.giftModel.create(data)
  }
  find(){
    return this.giftModel.find()
  }
  findById(id){
    return this.giftModel.findById(id)
  }
  // update(data){
  //   return this.giftModel.update(data._id)
  // }
}
