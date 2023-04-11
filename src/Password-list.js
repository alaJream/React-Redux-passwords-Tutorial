import React from 'react';
import { useSelector } from 'react-redux';

function PasswordList() {
  const passwords = useSelector((state) => state.passwords);

  const passwordList = passwords.map((pass, index) => {
    return (
      <div key={index}>
        name:{pass.name} password: {pass.password}
      </div>
    );
  });

  return <div>{passwordList}</div>;
}

export default PasswordList;
