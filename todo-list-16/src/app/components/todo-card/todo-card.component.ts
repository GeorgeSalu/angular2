import { Component, OnInit, computed, inject } from '@angular/core';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { TodoSignalsService } from 'src/app/services/todo-signals.service';
import { TodoKeyLocalStorage } from 'src/app/models/enum/todoKeyLocalStorage';
import { Todo } from 'src/app/models/model/todo.model';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    NgTemplateOutlet,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule
  ],
  templateUrl: './todo-card.component.html',
  styleUrls: []
})
export class TodoCardComponent implements OnInit {
  
  private todoSingalService = inject(TodoSignalsService);
  private todosSignal = this.todoSingalService.todosState;
  public todosList = computed(() => this.todosSignal());
  
  ngOnInit(): void {
    this.getTodosInLocalStorage();
  }

  private saveTodoInLocalStorage(): void {
    this.todoSingalService.saveTodoInLocalStorage();
  }

  private getTodosInLocalStorage() {
    const todosDatas = localStorage.getItem(TodoKeyLocalStorage.TODO_LIST) as string;
    todosDatas && (this.todosSignal.set(JSON.parse(todosDatas)))
  }

  public handleDoneTodo(todoId: number): void {
    if(todoId) {
      this.todosSignal.mutate((todos) => {
        const todoSelected = todos.find((todo) => todo?.id === todoId) as Todo
        todoSelected && (todoSelected.done = true)   
        this.saveTodoInLocalStorage();     
      })
    }
  }

  public handleDeleteTodo(todo: Todo) {
    if(todo) {
      const index = this.todosList().indexOf(todo);

      if(index !== -1) {
        this.todosSignal.mutate((todo) => {
          todo.slice(index, 1);
          this.saveTodoInLocalStorage()
        })
      }

    }
  }

}
