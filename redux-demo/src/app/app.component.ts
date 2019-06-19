import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from './store';
import { INCREMENT } from './action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-demo';

  //counter=0;

  @select('counter') count;

  constructor(private ngRedux : NgRedux<IAppState>)
  {
      // ngRedux.subscribe(()=>{
      //   var store=ngRedux.getState();
      //   this.counter=store.counter;
      //   console.log(ngRedux.getState());
      // });
  }

  increment(){
    this.ngRedux.dispatch({type: INCREMENT});
  }
}
