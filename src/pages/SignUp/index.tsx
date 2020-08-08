import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { SignUpContainer, StyledButton } from './styles';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function SingUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required().email(),
        password: Yup.string().required().min(6),
      });

      await schema.validate({ name, email, password }, { abortEarly: false });
      console.log(schema);

      const response = await axios.post(`${process.env.REACT_APP_API_URL ||'http://localhost:3333'}/user`, {
        name,
        email,
        password,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error('Invalid Credentials');
    }
  }

  return (
    <SignUpContainer>
      <div>
        <h1>Sign Up</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
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
    </SignUpContainer>
  );
}
