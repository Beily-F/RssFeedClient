import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component'; // היבוא של הקומפוננטה NewsComponent

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent // הוספת הקומפוננטה NewsComponent לרשימת ה-declarations
  ],
  imports: [
    BrowserModule,
    HttpClientModule // הוספת HttpClientModule עבור ביצוע קריאות HTTP
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

