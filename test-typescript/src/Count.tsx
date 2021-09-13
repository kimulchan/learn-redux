import { useDispatch, useSelector } from "react-redux";
import { AsyncDecrease, AsyncIncrease, decrease, increase } from "./reducer/action";
import { RootState } from "./store";

function Count (){
    const dispatch = useDispatch();
    const count = useSelector((state:RootState) => state.countReducer.count);
    console.log(count);
    const onIncrease=()=>{
        dispatch(AsyncIncrease());
    }
    const onDecrease = ()=>{
        dispatch(AsyncDecrease());
    }
    return (
    <>
        <h1>{count}</h1>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
    </>
    );
}

export default Count;