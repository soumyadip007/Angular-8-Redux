import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from './store';
import { VirtualTimeScheduler } from 'rxjs';
import { INCREMENT } from './action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-demo';

  counter=0;
  constructor(private ngRedux : NgRedux<IAppState>)
  {
      ngRedux.subscribe(()=>{
        console.log(ngRedux.getState());
      });
  }

  increment(){
    this.ngRedux.dispatch({type: INCREMENT});
  }
}
