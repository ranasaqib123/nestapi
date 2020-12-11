import { Body, Controller, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { GiftService } from './gift.service';
import { IGift } from '../interface/gift.interface';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('gift')
export class GiftController {
  constructor(protected service: GiftService) {}

  @Post()
  // @UseInterceptors(FileInterceptor('image'))
  // @UploadedFile() file, @Body()
  create(@Body()data:any) {
    // if(file) {
    //   data.image = {
    //     fileName: file.filename,
    //     filePath: file.path
    //   }
    // }
    console.log(data);
    return this.service.create(data);

  }

  @Get()
  find(){
    return this.service.find()
  }
  @Get('/:id')
  findById(@Param('id') id){
    return this.service.findById(id)
  }
  // @Patch('/:id')
  // @UseInterceptors(FileInterceptor('image'))
  // update(@UploadedFile() file, @Body() data:IGift){
  //   data.image = {
  //     fileName: file.name,
  //     filePath: file.path
  //   }
  //   return this.service.update(data)
  //
  // }
}
