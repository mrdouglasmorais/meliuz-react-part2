import React from 'react';
import { useSelector } from 'react-redux';
import { IAllPersons } from '../../store/modules/types';

const Footer: React.FC = () => {
  const state = useSelector((state: IAllPersons) => state.persons);
  return (
    <footer>
      Qualquer coisa {state.length}
    </footer>
  );
}

export default Footer;