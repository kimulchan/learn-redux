import { increase,decrease, CountType} from "./action";

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
        case CountType.INC_NUM:
            return {count:state.count+1}
        case CountType.DEC_NUM:
            return {count:state.count-1}
        default:
            return state;
    }
}

export default countReducer;