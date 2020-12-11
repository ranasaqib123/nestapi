import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ITeacher } from '../interface/teacher.interface';
import { Model } from 'mongoose';

@Injectable()
export class TeacherService {
  constructor(@InjectModel('teachers')
  private readonly teacherModel: Model<ITeacher>
  ) {
  }
  create(data){
    return this.teacherModel.create(data)
  }

  find(){
    return this.teacherModel.find()
  }
  async findById(id):Promise<ITeacher>{
    return await this.teacherModel.findById(id).exec()
  }
  update(data){
    return this.teacherModel.findByIdAndUpdate(data._id,{
      name:data.name
    })
  }
  remove(id){
    return this.teacherModel.findByIdAndDelete(id)
  }

}
