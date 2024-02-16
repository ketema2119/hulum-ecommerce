import React from 'react';
import { Link } from 'react-router-dom';
import URLs from '../URLs';

function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='content'>
          <ul>
            <li>
              <span>Customer Services</span>
            </li>
            <li>
              <Link to={URLs.home}>Help Center</Link>
            </li>
            <li>
              <Link to={URLs.home}>Report Abuse</Link>
            </li>
            <li>
              <Link to={URLs.home}>Submit a Dispute</Link>
            </li>
            <li>
              <Link to={URLs.home}>Policies & Rules</Link>
            </li>
          </ul>
          <ul>
            <li>
              <span>Get in touch</span>
            </li>
            <li>
              <Link to={URLs.home}>About Us</Link>
            </li>
            <li>
              <Link to={URLs.home}>Careers</Link>
            </li>
            <li>
              <Link to={URLs.home}>Press Releases</Link>
            </li>
            <li>
              <Link to={URLs.home}>Blog</Link>
            </li>
          </ul>
          <ul>
            <li>
              <span>Customer Services</span>
            </li>
            <li>
              <Link to={URLs.home}> Help Center </Link>
            </li>
            <li>
              <Link to={URLs.home}> Report Abuse </Link>
            </li>
            <li>
              <Link to={URLs.home}> Submit a Dispute </Link>
            </li>
            <li>
              <Link to={URLs.home}> Policies & Rules </Link>
            </li>
          </ul>
          <form className='subscribe'>
            <label htmlFor=''>NEWSLETTER</label>
            <input type='text' placeholder='Email address...' />
            <button>
              <span>Subscribe</span>
            </button>
          </form>
        </div>
      </div>
      <div className='copyright'>
        <span>© 2022 hulumservice.com. All rights reserved</span>
      </div>
    </div>
  );
}

export default Footer;
