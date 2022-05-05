import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRoutes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modules
import { CoreModule } from './core/core.module'; 
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule

  ],
  providers: [ {
    provide: LocationStrategy,
    useClass: PathLocationStrategy
  } ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
