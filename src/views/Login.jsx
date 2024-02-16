import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import URLs from '../URLs';
import { auth, db } from '../firebase';
import { getDocs, collection } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { SET_USER_MESSAGE, REMOVE_USER_MESSAGE, ADD_USER_NAME } from '../store';
import { LoadingButton } from '@mui/lab';
import { motion } from 'framer-motion/dist/framer-motion';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message.user);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loginRequested, setLoginRequested] = useState(false);

  const buttonStyle = {
    backgroundColor: '#e9e9e9',
    fontSize: '1.4rem',
    color: '#181818',
    border: 'solid .1rem gray',
    textTransform: 'none',
    fontFamily: 'inherit',
    fontWeight: 'normal',
  };


  const getEmailFromUserName = async () => {
    const data = await getDocs(collection(db, 'users'));
    const userList = data.docs.map((doc) => ({ ...doc.data() }));

    const user = userList.find((user) => {
      return user['userName'] === userName;
    });

    if (user) return user['email'];
    return null;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!loginRequested) {
      setLoginRequested(true);
      if (userName && password) {
        dispatch({ type: REMOVE_USER_MESSAGE });
        try {
          const email = await getEmailFromUserName();
          if (!email) {
            dispatch({ type: SET_USER_MESSAGE, payload: 'username not found' });
            setLoginRequested(false);
            return;
          } else {
            try {
              await signInWithEmailAndPassword(auth, email, password);
              dispatch({type: ADD_USER_NAME, payload: userName});
              localStorage.setItem('username', userName);
              navigate(URLs.home);
            } catch (e) {
              dispatch({ type: SET_USER_MESSAGE, payload: e.code });
            }
          }
        } catch (e) {
          dispatch({ type: SET_USER_MESSAGE, payload: e.code });
        }
      } else {

        dispatch({
          type: SET_USER_MESSAGE,
          payload: 'make sure you filled-in all the fields',
        });
      }
    }
    setLoginRequested(false);

  };

  return (
    <motion.div 
      className='login'
      initial={{scale: 1.02, opacity: 0}}
      animate={{scale: 1, opacity: 1}}  
      transition={{duration: .3}}
    >
      <form onSubmit={handleLogin}>
        <h2>Sign In</h2>
        <hr></hr>
        <div className='username'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className='password'>
          <div className='wrapper'>
            <label htmlFor='password'>Password</label>
            <Link to={URLs.home}>Forget password?</Link>
          </div>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='message'>{message}</div>
        <LoadingButton
          onClick={handleLogin}
          sx={buttonStyle}
          loading={loginRequested}
        >
          Sign In
        </LoadingButton>
        <Link to={URLs.home}>Create Account</Link>
      </form>
    </motion.div>
  );
}

export default Login;
