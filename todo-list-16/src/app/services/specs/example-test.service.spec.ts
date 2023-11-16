import { TestBed } from "@angular/core/testing";
import { ExampleTestService } from "../example-test.service"
import { TodoSignalsService } from "../todo-signals.service";
import { Todo } from "src/app/models/model/todo.model";

describe('ExampleTestService', () => {
  let service: ExampleTestService;
  let todoService: TodoSignalsService;

  beforeEach(() => {
    service = TestBed.inject(ExampleTestService);
    todoService = TestBed.inject(TodoSignalsService);
  })

  it('should return correct list', () => {
    service.getTestNamesList()
      .subscribe({
        next: (list) => {
          expect(list).toEqual([
            { id: 1, name: 'test 1' },
            { id: 2, name: 'test 2' }
          ])
        }
      })
    
  })

  it('should correct todo list', () => {
    const newTodo: Todo = {
      id: 0,
      title: "new todo",
      description: "description for test",
      done: true
    }

    jest.spyOn(todoService, 'updateTodos');

    service.handleCreateTodo(newTodo).subscribe({
      next: (todoList) => {
        expect(todoList).toEqual([newTodo]);
        expect(todoService.updateTodos).toHaveBeenCalledWith(newTodo)
      }
    })
  })

})