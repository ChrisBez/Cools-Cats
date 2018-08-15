import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CatViewerComponent } from './cat-viewer/cat-viewer.component';
import { WebService } from './Services/web.service';

@NgModule({
  declarations: [
    AppComponent,
    CatViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
