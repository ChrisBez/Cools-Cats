import { Component, OnInit } from '@angular/core';
import { WebService } from '../Services/web.service';

@Component({
  selector: 'app-cat-viewer',
  templateUrl: './cat-viewer.component.html',
  styleUrls: ['./cat-viewer.component.css']
})
export class CatViewerComponent implements OnInit {

  currentImageUrl: string;

  constructor(private web: WebService) { }

  ngOnInit() {
    this.getPhoto();
  }

  onClick(){
    this.getPhoto();
  }

  getPhoto(){
    this.web.getPhoto('cat')
      .subscribe(
        json => this.currentImageUrl = json.urls.regular
    );
  }

}