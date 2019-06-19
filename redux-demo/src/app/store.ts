import { INCREMENT } from './action';

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

export function rootReducer(state : IAppState, action): IAppState{
   
    switch(action.type)
   {
       case INCREMENT:
           Object.assign({}, state, {counter : state.counter +1,isOnline : true});

       // : return {counter: state.counter+1};
   }
    return state;
}