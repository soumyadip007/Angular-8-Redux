import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgRedux,NgReduxModule } from 'ng2-redux';
import { IAppState , rootReducer} from './store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngRedux : NgRedux<IAppState>){

    ngRedux.configureStore(rootReducer, {counter : 0});
  }

 }