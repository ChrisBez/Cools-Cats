import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  @Output() updatedCategory: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  changeCategory(newCategory: string) {
    if (newCategory === null){
      return;
    }

    this.updatedCategory.emit(newCategory);

    console.log(newCategory);
  }

}
