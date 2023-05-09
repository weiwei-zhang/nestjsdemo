import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { GirlService } from './girl.service';


@Controller('girl')
export class GirlController {
  constructor(private readonly girlService: GirlService) {}

  @Get()
  findAll():Promise<any> {
    return this.girlService.findAll();
  }

  @Post()
  add():Promise<any> {
    return this.girlService.addGirl();
  }

  @Delete(':id')
  remove(@Param('id') id: string):Promise<any> {
    return this.girlService.deleteGirl(id);
  }

  @Put(':id')
  update(@Param('id') id: string):Promise<any> {
    return this.girlService.updateGirl(id);
  }
}
