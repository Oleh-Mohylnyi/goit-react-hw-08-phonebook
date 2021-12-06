import { Navigate } from "react-router-dom";
import { getIsAuth } from "../redux/auth/selectors";
import { useSelector } from 'react-redux';


export function PublicRoute({ component: Component }) {
  const isAuth = useSelector(getIsAuth);
  console.log('public',Component)
  
  return (
    <>
      {isAuth ? <Navigate to="/contacts" /> : <Component />}
    </>
  );
}