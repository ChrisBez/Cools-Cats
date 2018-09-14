import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  selectedCategory: string = 'cat';

  constructor() { }

  ngOnInit() {
  }

  changeCategory(newCategory: string) {
    if (newCategory === null){
      return;
    }

    this.selectedCategory = newCategory;

    console.log(this.selectedCategory);
  }


}
