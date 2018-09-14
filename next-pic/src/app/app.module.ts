import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatListModule, MatButtonToggleModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ViewerComponent } from './viewer/viewer.component';
import { WebService } from './Services/web.service';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewerComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MatButtonModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatListModule, MatButtonToggleModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
