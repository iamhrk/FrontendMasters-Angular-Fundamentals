import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: ` <h1>Building a TODO List</h1>
  @for (item of todo(); track $index) {
    <label [ngStyle]="{'text-decoration': item.completed ? 'line-through' : 'none'}">item.title</label>
    <input type="checkbox" [checked]="item.completed" (change)="updateTodo(item)"/>
  }

  `,
  styles: `label { display: block }`,
})
export class AppComponent {
  todo = signal<Todo[]>([
    {
      id: 1,
      title: "Learn Angular",
      completed: false,
    },
    {
      id: 2,
      title: "Learn TypeScript",
      completed: false,
    },
    {
      id: 3,
      title: "Learn RxJS",
      completed: false,
    },
  ])

  updateTodo(todo: Todo) {
    this.todo.update((todoList)=>{
      return todoList.map(
        (todoItem) => {
          if(todo.id == todoItem.id){
            todoItem.completed = !todoItem.completed;
          }
          return todoItem
        })
    })
  }
}
