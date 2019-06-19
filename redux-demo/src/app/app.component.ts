import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from './store';
import { INCREMENT } from './action';

import { fromJS, Map } from 'immutable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Redux';

 // counter=0;

  //newMessages=0;
 // @select(s=>s.get('counter')) counter;
  @select('counter') count;

 constructor(private ngRedux : NgRedux<IAppState>)
 //constructor(private ngRedux : NgRedux<Map<string,any>>)
   {
      // ngRedux.subscribe(()=>{
      //   var store=ngRedux.getState();
      //   this.counter=store.counter;
      //   console.log(ngRedux.getState());

        // store=ngRedux.getState();
        // this.newMessages=store.messaging.newMessages;
        // console.log(ngRedux.getState());
        

  //     });
   }

  increment(){
    this.ngRedux.dispatch({type: INCREMENT});
  }
}
