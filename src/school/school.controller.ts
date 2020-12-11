import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SchoolService } from './school.service';

@Controller('school')
export class SchoolController {
  constructor(private service: SchoolService) {
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
  @Delete('/:id')
  remove(@Param('id')id){
    return this.service.remove(id)
  }
  @Get('get/city')
  getCity(){
    return this.service.getCity()
  }
  @Get('/get/school/:name')
  getSchool(@Param('name') name){
    return this.service.getSchool(name)
  }
}
