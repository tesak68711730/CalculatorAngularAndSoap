import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSoapModule } from 'ngx-soap';
import { AppComponent } from './app.component';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material';
import { MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgxSoapModule,
    MdToolbarModule.forRoot(),
    MatCardModule,
    MdButtonModule,
    MdCardModule,
    MatProgressBarModule,
    MatInputModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
