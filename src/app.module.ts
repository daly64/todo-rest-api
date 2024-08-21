import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TodosModule,
    // MongooseModule.forRoot('mongodb://localhost:27017/todo-api'),
    MongooseModule.forRoot(
      'mongodb+srv://daly:123123123@cluster0.tunc1.mongodb.net/todo-api',
    ),
  ],
  // controllers: [AppController],
  // providers: [AppService],
  controllers: [],
  providers: [],
})
export class AppModule {}
