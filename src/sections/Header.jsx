import React from 'react';
import { Link } from 'react-router-dom';
import icons from '../assets/images';
import SearchBar from '../components/SearchBar';
import URLs from '../URLs';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { REMOVE_USER_NAME, SET_MODAL } from '../store';
import { CartViewModal } from '../components';

function Header() {
  const userName = useSelector((state) => state.user.username);
  const user = useSelector((state) => state.user.user);
  const cartItems = useSelector((state) => state.cart);
  const favs = useSelector((state) => state.favorites);
  const modal = useSelector((state) => state.variables.modal);
  const dispatch = useDispatch();

  const logOut = async () => {
    await signOut(auth);
    localStorage.removeItem('username');
    dispatch({ type: REMOVE_USER_NAME });
  };

  return (
    <header className='header'>
      {modal ? <CartViewModal /> : null}
      <Link to={URLs.home}>
        <img className='logo' src={icons.Logo} alt='logo' />
      </Link>
      <SearchBar />
      <div className='account'>
        <img className='account-icon' src={icons.Account} alt='account' />
        {_.isEmpty(user) ? (
          <div className='account-text'>
            <span>
              <Link to={URLs.signIn}>SIGN IN</Link>
            </span>
            <span>
              <Link to={URLs.register}>JOIN FOR FREE</Link>
            </span>
          </div>
        ) : (
          <div className='account-after-logged'>
            <button onClick={logOut}>Logout</button>
            <span>{` (${userName})`}</span>
          </div>
        )}
      </div>
      <div className='favorites'>
        <Link to={URLs.home}>
          <img className='heart' src={icons.Heart} alt='' />
          <span>MY FAVORITS</span>

          {favs.length ? (
            <div className='amount'>
              <span>{favs.length}</span>
            </div>
          ) : null}
        </Link>
      </div>
      <div
        className='cart'
        onClick={ () => { dispatch({ type: SET_MODAL, payload: true }); }}
      >
        <img className='cart' src={icons.Cart} alt='' />
        <span>
          $
          {cartItems
            .reduce((acc, { product, quantity }) => {
              return (acc += product.price * quantity);
            }, 0)
            .toFixed(2)}
        </span>
        {cartItems.length ? (
          <div className='amount'>
            <span>
              {cartItems.reduce((acc, { quantity }) => {
                acc += quantity;
                return acc;
              }, 0)}
            </span>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
