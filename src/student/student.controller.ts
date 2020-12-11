import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Put,
  Patch,
  Delete,
  UseGuards,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { IStudent } from '../interface/student.interface';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { JwtStrategy } from '../auth/jwt-strategy';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('student')
export class StudentController {
  constructor(protected service: StudentService) {
  }
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@UploadedFile() file, @Body() data:IStudent){
    data.image = {
      fileName: file.filename,
      filePath: file.path
    }
    return this.service.create(data)
  }

  @Get()
  find(){
    return this.service.find()
  }

  @Get('/:id')
  findById(@Param('id') id){
    return this.service.findById(id)
  }
  @Patch()
  update(@Body() data){
    return this.service.update(data)
  }
  @Delete('/:id')
  remove(@Param('id') id){
    return this.service.remove(id)
  }
  @Get('total-students/:id')
  totalStudents(@Param('id') id){
    return this.service.totalStudents(id)
  }
  @Patch('handle-favorite')
  handleFavorite(@Body() data){
  return this.service.handleFavorite(data)
  }
  @Get('favorite-teacher/:id')
  getFavorite(@Param('id')id):any{
    return this.service.getFavorite(id)
  }
  @Patch('add-favorite')
  addFavorite(@Body() data){
    return this.service.addFavorite(data)
  }
}
