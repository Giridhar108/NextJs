import Link from 'next/link'
import React from 'react'
import styles from "../styles/components/index.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/slices/count";
import { RootState } from "../redux/store/store";
import { Count } from "../interface/count";
import { Users, User  } from '../interface/users';
import { fetchSubject } from '../redux/slices/users';

export default function Home() {
  const dispatch = useDispatch();
  const { number } = useSelector<RootState, Count>(state => state.count)
  const data = useSelector<RootState, Users>(state => state.users)

  console.log(data)

  React.useEffect(() => {
    dispatch(fetchSubject('http://localhost:3000/api/users'))
  }, [])

  // if (data.error) return <div>Failed to load users</div>
  // if (!data) return <div>Loading...</div>

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
    <ul>
      Hare Krishna
      {data.users && data.users.map((user: User) => (
        <li key={user.id}>
          <Link href="/user/[id]" as={`/user/${user.id}`}>
            <a>{`User ${user.id}`}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>;
}
