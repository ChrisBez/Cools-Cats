import { Component, OnInit, Input } from '@angular/core';
import { WebService } from '../Services/web.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  currentImageUrl: string;

  @Input() category:string; 

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