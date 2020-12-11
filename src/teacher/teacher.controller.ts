import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TeacherService } from './teacher.service';

@Controller('teacher')
export class TeacherController {
  constructor(protected service: TeacherService) {
  }
  @Post()
  create(@Body() data){
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
  @Delete()
  remove(@Param('id') id){
    return this.service.remove(id)
  }
}
