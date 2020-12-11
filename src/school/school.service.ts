import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ISchool } from '../interface/school.interface';
import { IStudent } from '../interface/student.interface';

@Injectable()
export class SchoolService {
  constructor(@InjectModel('school')
  private readonly schoolModel:Model<ISchool>
  ) {
  }
  create(data){
    return this.schoolModel.create(data)

  }
  find(){
    return this.schoolModel.find()
  }
  findById(id){
    return this.schoolModel.findById(id)
  }
  remove(id){
    return this.schoolModel.findByIdAndDelete(id)
  }
  async getCity():Promise<any>{
    const result = new Set()
    const student = await this.schoolModel.find().exec()
    for(const data of student){
      if (data.city){
        result.add(data.city)
      }
    }
    return (Array.from(result))


  }
  async getSchool(name):Promise<any>{
    console.log(name)
    const result = []
    const school = await this.schoolModel.find({city:name}).exec()
    for(const name of school){
      if(name.name){
        result.push(name)
      }
    }
    return result
  }
}
