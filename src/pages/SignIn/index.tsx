import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { SignInContainer, StyledButton } from './styles';
import axios from 'axios';
export default function SingUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(data: any) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required(),
        password: Yup.string().required().min(6),
      });

      await schema.validate(data, { abortEarly: false });

      const response = await axios.post('http://localhost:3333/session', {
        email,
        password,
      });
      console.log(response);
    } catch (error) {}
  }

  return (
    <SignInContainer>
      <div>
        <h1>Sign In</h1>

        <input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <StyledButton
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Sign Up
        </StyledButton>
        <div>
          <span>Already have an account?</span>
          <Link to="/">Sign In</Link>
        </div>
      </div>
    </SignInContainer>
  );
}
