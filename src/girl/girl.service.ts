import { Injectable } from '@nestjs/common';
import { Repository} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Girl } from './entities/girl.entity';


@Injectable()
export class GirlService {
  constructor(@InjectRepository(Girl) private readonly girl:Repository<Girl>) {}
  
  addGirl(){
    const data = new Girl()
    data.name = 'zww2';
    data.age = 18;
    data.skill = 'sleep';
    return this.girl.save(data)
  }

  deleteGirl(id:string){
    return this.girl.delete(id)
  }

  updateGirl(id:string){
    let data = new Girl()
    data.name = 'zww2';
    data.age = 19;
    return this.girl.update(id,data)
  }

  findAll() {
    return this.girl.find();
  }
}
