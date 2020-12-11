import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IStudent } from '../interface/student.interface';
import { Model } from 'mongoose'
import { TeacherService } from '../teacher/teacher.service';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel('students')
    private readonly studentModel: Model<IStudent>,
    private readonly teacherService:TeacherService
  ) {
  }
  create(data){
    console.log(data)
    return this.studentModel.create(data)
  }
  async find():Promise<any>{

    const student = (await this.studentModel.find().exec()) as IStudent[]
    for(const stu of student) {
      if(stu.teacher){
        stu.teacher =await this.teacherService.findById(stu.teacher)
      }
      const result = []
      if(stu.favorite){
      for (const fav of stu.favorite)
      {
        result.push(await this.teacherService.findById(fav))
      }
      stu.favorite = result

    }
    }
    return student
  }
  async findById(id):Promise<any>{
    const result = []
    const student =(await this.studentModel.findById(id).exec()) as IStudent
    for(const stu of student.favorite){
     const res = result.push(await this.teacherService.findById(stu))
    }
    student.favorite = result
    return student
  }

  update(data){
    return this.studentModel.findByIdAndUpdate(data._id, {name:data.name})
  }
  remove(id){
    return this.studentModel.findByIdAndDelete(id)
  }
  totalStudents(id){
    return this.studentModel.find({
      teacher:id
    }).countDocuments().exec()
  }
  handleFavorite(data){
      console.log(data)
    return this.studentModel.findByIdAndUpdate(data.studentId,{
      favorite:data.teacherId
    })

  }
  async getFavorite(id):Promise<any>{
    const data = await this.studentModel.findById(id).exec()
    return {fav: data.favorite,name: data.name}

  }
  async addFavorite(data):Promise<any>{
    const result = []
    const student =await this.studentModel.findById(data.id).exec()
    if(student.favorite) {
      for (const fav of student.favorite) {
        result.push(await this.teacherService.findById(fav))
      }
      result.push(data.teacher)
      student.favorite = result
      return await this.studentModel.findByIdAndUpdate(student._id,student).exec()
      }
    else {
        return this.studentModel.findByIdAndUpdate(data.id,{
          favorite:data.teacher
        })
    }
  }
  async findByName(username){
    return this.studentModel.findOne({name: username}).exec()
  }

}

