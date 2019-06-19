import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { AppComponent } from './app.component';
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
    
    constructor(
      ngRedux: NgRedux<IAppState>,
      devTools : DevToolsExtension) {

        var enhancer=isDevMode()? [devTools.enhancer()] : [];
        ngRedux.configureStore(rootReducer, INITIAL_STATE,[], enhancer);
    }
}