import { Module } from '@nestjs/common';
import { GiftController } from './gift.controller';
import { GiftService } from './gift.service';
import { MongooseModule } from '@nestjs/mongoose';
import { giftSchema } from '../schema/gift.schema';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:'gifts',
        schema:giftSchema
      }
    ]),
    MulterModule.register({
      dest:'../uploads'
    })
  ],
  controllers: [GiftController],
  providers: [GiftService]
})
export class GiftModule {}
