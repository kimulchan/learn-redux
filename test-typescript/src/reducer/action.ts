export const INC_NUM = "INC_NUM" as const;
export const DEC_NUM = "DEC_NUM" as const;

export const increase = ()=>({
    type:INC_NUM
})

export const decrease = ()=>({
    type:DEC_NUM
})