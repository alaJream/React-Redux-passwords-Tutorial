import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPassword } from './actions';

function generatePassword() {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function Password() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('p@$$w0rd');
  const [name, setName] = useState('');

  return (
    <div>
      <input
        placeholder="enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="enter password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div>{password}</div>
      <div>
        <button
          onClick={(e) => {
            const newPassword = generatePassword();
            setPassword(newPassword);
          }}
        >
          Generate
        </button>
        <div>
          <button
            onClick={(e) => {
              dispatch(addPassword(name, password));
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Password;
