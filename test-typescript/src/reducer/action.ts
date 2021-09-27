import {delay, put, takeEvery, takeLatest} from "redux-saga/effects"
export enum CountType {
    INC_NUM = "INC_NUM",
    DEC_NUM = "DEC_NUM",
    INCREASE_ASYNC="INCREASE_ASYNC",
    DECREASE_ASYNC="DECREASE_ASYNC"
}

export const increase = ()=>({
    type:CountType.INC_NUM
})

export const decrease = ()=>({
    type:CountType.DEC_NUM
})

export const  increaseAsync = ()=>({type:CountType.INCREASE_ASYNC});
export const  decreaseAsync = ()=>({type:CountType.DECREASE_ASYNC});

export function * increaseSaga(){
    yield delay(1000);
    yield put(increase());
}
export function * decreaseSaga(){
    yield delay(1000);
    yield put(decrease());
}

export function * counterSaga(){
    yield takeEvery(CountType.INCREASE_ASYNC,increaseSaga);
    yield takeLatest(CountType.DECREASE_ASYNC,decreaseSaga);
}