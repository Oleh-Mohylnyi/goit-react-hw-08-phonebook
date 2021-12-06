import { Navigate } from "react-router-dom";

export function PrivateRoute({ isAuth, component: Contacts }) {
  console.log('privetrout',Contacts)
  
  return (
    <>
      {isAuth ? <Contacts /> : <Navigate to="/login" />}
    </>
  );
}