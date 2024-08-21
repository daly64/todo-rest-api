import { TodosService } from './todos.service';
import { Todo } from './schemas/todo.schema';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    findAll(): Promise<Todo[]>;
    findOne(id: string): Promise<Todo>;
    create(createTodoDto: Partial<Todo>): Promise<Todo>;
    update(id: string, updateTodoDto: Partial<Todo>): Promise<Todo>;
    remove(id: string): Promise<any>;
}
