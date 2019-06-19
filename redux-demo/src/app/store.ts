import { INCREMENT } from './action';
import { tassign } from 'tassign';

export interface IAppState{

    counter: number;
    // messaging:{
    //     newMessages : number;
    // }
}

export const INITIAL_STATE : IAppState={
    counter: 0,
    // messaging?:{
    //     newMessages:5,
    // }
}

export function rootReducer(state : Map<string,any>, action): Map<string,any>{
   
    switch(action.type)
   {
       case INCREMENT:
        // return  Object.assign({}, state, {counter : state.counter +1,isOnline : true});
       // : return {counter: state.counter+1};
      //state.counter++;
      //return tassign(state, {counter : state.counter +1});
      return state.set('couter',state.get('counter')+1);
   }
    return state;
}