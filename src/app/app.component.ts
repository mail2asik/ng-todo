import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  ComponentTitle = 'My To Do list';

  filter: "all" | "active" | "done" = "all";

  allItems = [
    { description: "eat", done: false},
    { description: "sleep", done: true},
    { description: "code", done: false},
    { description: "repeat", done: false}
  ];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }

    return this.allItems.filter((item) => {
      this.filter === "done" ? item.done: !item.done;
    });
  }

  addItem(description: string) {
    if (!description) return;
    
    this.allItems.unshift({
      description,
      done: false
    });
  }
}
