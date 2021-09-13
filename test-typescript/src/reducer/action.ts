
export enum CountType {
    INC_NUM = "INC_NUM",
    DEC_NUM = "DEC_NUM"
}

export const increase = ()=>({
    type:CountType.INC_NUM
})

export const decrease = ()=>({
    type:CountType.DEC_NUM
})

export const AsyncIncrease =()=>(dispatch:any)=>{
    setTimeout(()=>{dispatch(increase())},1000);
}


export const AsyncDecrease=()=>(dispatch:any)=>{
    setTimeout(()=>{dispatch(decrease())},1000);
}