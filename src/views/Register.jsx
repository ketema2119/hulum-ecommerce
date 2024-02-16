import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import URLs from '../URLs';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';

import { collection, addDoc, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { SET_USER_MESSAGE, REMOVE_USER_MESSAGE, ADD_USER_NAME } from '../store';
import LoadingButton from '@mui/lab/LoadingButton';
import { motion } from 'framer-motion/dist/framer-motion';

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message.user);

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const [regRequested, setRegRequested] = useState(false);

  const userNameExsists = async () => {
    const data = await getDocs(collection(db, 'users'));
    const userList = data.docs.map((doc) => ({ ...doc.data() }));
    const user = userList.find((user) => {
      return user['userName'] === userName;
    });

    if (user) return true;
    return false;
  };

  const saveUsernameWithEmail = async () => {
    await addDoc(collection(db, 'users'), { userName, email });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setRegRequested(true);
    dispatch({ type: REMOVE_USER_MESSAGE });
    if (userName && email && password && passwordConf && !regRequested) {
      if (password === passwordConf) {
        if (await userNameExsists()) {
          dispatch({ type: SET_USER_MESSAGE, payload: 'The username in use' });
        } else {
          try {
            const user = await createUserWithEmailAndPassword(
              auth,
              email,
              password
            );
            await sendEmailVerification(user.user);

            saveUsernameWithEmail();
            localStorage.setItem('username', userName);
            dispatch({ type: ADD_USER_NAME, payload: userName });
            navigate(URLs.home);
          } catch (e) {
            dispatch({ type: SET_USER_MESSAGE, payload: e.code });
          }
        }
      } else {
        dispatch({ type: SET_USER_MESSAGE, payload: "Passwords don't match!" });
      }
    } else {
      dispatch({
        type: SET_USER_MESSAGE,
        payload: 'make sure you filled-in all the fields',
      });
    }
    setRegRequested(false);
  };

  useEffect(() => {
    return () => {
      dispatch({ type: SET_USER_MESSAGE, payload: '' });
    };
  }, []);

  const buttonStyle = {
    backgroundColor: '#e9e9e9',
    fontSize: '1.4rem',
    color: '#181818',
    border: 'solid .1rem gray',
    textTransform: 'none',
    fontFamily: 'inherit',
    fontWeight: 'normal',
  };
  return (
    <motion.div 
      className='register'
      initial={{scale: 1.02, opacity: 0}}
      animate={{scale: 1, opacity: 1}}  
      transition={{duration: .3}}
    >
      <form className='container' onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
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
        <div className='email'>
          <label htmlFor='email'>Email address</label>
          <input
            type='text'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='password'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='password-confirm'>
          <label htmlFor='password-c'>Confirm password</label>
          <input
            type='password'
            id='password-c'
            value={passwordConf}
            onChange={(e) => setPasswordConf(e.target.value)}
          />
        </div>
        <div className='message'>
          <span>{message}</span>
        </div>
        <LoadingButton
          onClick={handleSubmit}
          sx={buttonStyle}
          loading={regRequested}
        >
          Create an Account
        </LoadingButton>
        <Link to={URLs.home}>or, Login</Link>
      </form>
    </motion.div>
  );
}

export default Register;
