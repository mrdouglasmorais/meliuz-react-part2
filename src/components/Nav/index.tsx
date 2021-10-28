import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import LogoRick from '../../assets/img/rickandmorty.png';

const Nav: React.FC = () => {
  return (
    <motion.nav
      animate={{ x: [-800, 100, 0]}}
      className="nav-bar"
    >
      <img src={LogoRick} alt="Test" />
      <Link to='/'>Home</Link>
      <Link to='/rm'>RickAndMorty</Link>
      <Link to='/form'>Form</Link>
      <Link to='/todo'>Todo</Link>
    </motion.nav>
  );
}

export default Nav;