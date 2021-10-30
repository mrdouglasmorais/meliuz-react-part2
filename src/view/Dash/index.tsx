import React from 'react';

const Dash: React.FC = () => {
  const storage: any = localStorage.getItem('@MeliuzSession');
  const { user } = JSON.parse(storage)
  return (
    <div className="container">
      <h1>Está e a dashboard</h1>
      <span>{user?.name}, tudo bem?</span>
    </div>
  );
}

export default Dash;