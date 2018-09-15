import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Next Pic';

  category = 'cat';

  onCategoryChange(newCategory: string) {
    if (!newCategory) {
      this.category = 'cat';
      return;
    }

    this.category = newCategory;
    console.log(newCategory);
  }

}
