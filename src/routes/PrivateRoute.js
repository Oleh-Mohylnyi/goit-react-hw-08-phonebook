import { Navigate } from "react-router-dom";

export function PrivateRoute({ isAuth, component: Contacts }) {
  console.log('privetrout',Contacts)
  
  return (
    <>
      <h1>PRIVATE</h1>
      {isAuth ? <Contacts /> : <Navigate to="/login" />}
    </>
  );
}