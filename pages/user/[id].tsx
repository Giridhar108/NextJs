import React from 'react'
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { fetchSubject } from '../../redux/slices/users';
import { RootState } from '../../redux/store/store';
import { Users } from '../../interface/users';

export default function User() {
  const dispatch = useDispatch();
  const router = useRouter();
  console.log(router)
  const path = router.query.id ? `http://localhost:3000/api/user/${router.query.id}` : "";
  const data = useSelector<RootState, Users>(state => state.users)

  React.useEffect(() => {
    dispatch(fetchSubject(path))
  }, [])

  console.log(data)
  // if (data.error) return <div>Failed to load user</div>;
  if (!data) return (<div>Loading...</div>);

  return <div>{data.name}</div>;
}
