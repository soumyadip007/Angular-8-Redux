import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { fromJS, Map } from 'immutable';
import { NgRedux,NgReduxModule } from 'ng2-redux';
import { IAppState , rootReducer, INITIAL_STATE} from './store';

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

  constructor(ngRedux : NgRedux<Map<string,any>>){

    ngRedux.configureStore(rootReducer, fromJS(INITIAL_STATE));
  }

 }