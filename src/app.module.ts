import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://thiago:passw0rd@cluster0.vqq92.mongodb.net/test'
    ),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
