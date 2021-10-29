import React from 'react';
import { useSelector } from 'react-redux';
import { IAllPersons } from '../../store/modules/types';

const Footer: React.FC = () => {
  const state = useSelector((state: IAllPersons) => state.persons);
  return (
    <footer>
      <p
        style={{ textAlign: 'center' }}
      > 
        Qualquer coisa {state.length}
      </p>
    </footer>
  );
}

export default Footer;