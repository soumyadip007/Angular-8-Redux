import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from './store';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-demo';

  constructor(private ngRedux : NgRedux<IAppState>)
  {

  }

  increment(){
    this.ngRedux.dispatch({type: 'INCREMENT'});
  }
}
