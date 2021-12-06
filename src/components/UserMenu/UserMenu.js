import { useDispatch, useSelector } from 'react-redux';
// import getIsAuth from '../redux/auth/selectors';
import {logout} from '../../redux/auth/operations'
import { getUserName } from '../../redux/auth/selectors'
import s from './userMenu.module.scss';

// const styles = {
//   container: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   avatar: {
//     marginRight: 4,
//   },
//   name: {
//     fontWeight: 700,
//     marginRight: 12,
//   },
// };

export default function UserMenu() {
  const name = useSelector(getUserName);
  console.log(name);
    const dispatch = useDispatch();
    
    const handleLogout = () => {
        dispatch(logout());
    };

  return (
    <div>
      <span
        className={s.name}>
        {name}
      </span>
      <span
        className={s.span}>
        's phonebook
      </span>

        <button type="button" onClick={handleLogout} className={s.button}>
            Log out
        </button>
    </div>
  );
}