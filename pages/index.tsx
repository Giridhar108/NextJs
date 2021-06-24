import styles from "../styles/components/index.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/slices/count";
import { RootState } from "../redux/store/store";
import { Count } from "../interface/count";

export default function Home() {
  const { number } = useSelector<RootState, Count>(state => state.count)
  const dispatch = useDispatch();
  console.log(number)
  return <div className={styles.container}>
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{number}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  </div>;
}
