import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  newTodo: string;
  todos: string[];

  constructor() {
    this.newTodo = '';
    this.todos = [];
  }

  ngOnInit(): void {}

  addTodo() {
    this.todos.push(this.newTodo);
    this.newTodo = '';
    console.log(this.todos);
  }
}
