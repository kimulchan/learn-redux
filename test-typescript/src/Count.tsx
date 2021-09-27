import { useDispatch, useSelector } from "react-redux";
import { decrease, decreaseAsync, decreaseSaga, increase, increaseAsync, increaseSaga } from "./reducer/action";
import { RootState } from "./store";

function Count (){
    const dispatch = useDispatch();
    const count = useSelector((state:RootState) => state.countReducer.count);
    console.log(count);
    const onIncrease=()=>{
        dispatch(increaseAsync());
    }
    const onDecrease = ()=>{
        dispatch(decreaseAsync());
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