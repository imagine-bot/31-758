import React from 'react';

interface LoginProps {
  username: string;
  password: string;
}

const Login: React.FC<LoginProps> = ({ username, password }) => {
  return (
    <div className="bg-white p-4 rounded-md">
      <h2>Login Component</h2>
      <p>Username: {username}</p>
      <p>Password: {password}</p>
    </div>
  );
};

export default Login;