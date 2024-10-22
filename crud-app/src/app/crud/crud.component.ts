import { Component } from '@angular/core';

interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  items: Item[] = [];
  currentItem: Item = { id: 0, name: '' };
  editing: boolean = false;

  addItem() {
    if (this.editing) {
      const index = this.items.findIndex(item => item.id === this.currentItem.id);
      if (index !== -1) {
        this.items[index] = this.currentItem;
      }
      this.editing = false;
    } else {
      this.currentItem.id = this.items.length + 1; // Simple ID assignment
      this.items.push(this.currentItem);
    }
    this.resetForm();
  }

  editItem(item: Item) {
    this.currentItem = { ...item };
    this.editing = true;
  }

  deleteItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
  }

  resetForm() {
    this.currentItem = { id: 0, name: '' };
  }
}
