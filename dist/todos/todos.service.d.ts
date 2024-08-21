import { Model } from 'mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';
export declare class TodosService {
    private todoModel;
    constructor(todoModel: Model<TodoDocument>);
    findAll(): Promise<Todo[]>;
    findOne(id: string): Promise<Todo>;
    create(createTodoDto: Partial<Todo>): Promise<Todo>;
    update(id: string, updateTodoDto: Partial<Todo>): Promise<Todo>;
    remove(id: string): Promise<any>;
}
