import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './schemas/todo.schema';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Todo> {
    return this.todosService.findOne(id);
  }

  @Post()
  create(@Body() createTodoDto: Partial<Todo>): Promise<Todo> {
    return this.todosService.create(createTodoDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTodoDto: Partial<Todo>,
  ): Promise<Todo> {
    return this.todosService.update(id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<any> {
    return this.todosService.remove(id);
  }
}
