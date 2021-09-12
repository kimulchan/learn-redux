import { DEC_NUM , INC_NUM,increase,decrease } from "./action";

type CounterState ={
    count:number;
}

const initialState:CounterState ={
    count:0
};
type CounterAction = 
        | ReturnType<typeof increase>
        | ReturnType<typeof decrease>;


function countReducer (state:CounterState=initialState,action:CounterAction){
    switch (action.type) {
        case INC_NUM:
            return {count:state.count+1}
        case DEC_NUM:
            return {count:state.count-1}
        default:
            return state;
    }
}

export default countReducer;