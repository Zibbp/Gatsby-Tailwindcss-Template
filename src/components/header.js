import { graphql, useStaticQuery, Link } from 'gatsby';
import React, { useState } from 'react';

function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-blue-200'>
      <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <a
            className='font-bold text-2xl lg:text-4xl text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap text-black'
            href='#pablo'
          >
            ZIBB
          </a>
          <button
            className='text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
            type='button'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center' +
            (navbarOpen ? ' flex' : ' hidden')
          }
          id='example-navbar-danger'
        >
          <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
            <li className='nav-item'>
              <a
                className='px-3 py-2 flex items-center text-lg font-bold leading-snug text-black hover:opacity-50'
                href='#pablo'
              >
                <span className='ml-2'>Share</span>
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='px-3 py-2 flex items-center text-lg leading-snug text-black hover:opacity-50'
                href='#pablo'
              >
                <span className='ml-2'>Tweet</span>
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='px-3 py-2 flex items-center text-lg leading-snug text-black hover:opacity-50'
                href='#pablo'
              >
                <span className='ml-2'>Pin</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
