import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { SignUpContainer, StyledButton } from './styles';
import { toast } from 'react-toastify';

import Loading from '../../components/Loading';
import mmlApi from '../../service/api';

export default function SingUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit() {
    setLoading(true);
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required().email(),
        password: Yup.string().required().min(6),
      });

      await schema.validate({ name, email, password }, { abortEarly: false });

      await mmlApi.post(`/user`, {
        name,
        email,
        password,
      });
      toast.success('Your account has been successfully created');
      history.push('/');
    } catch (error) {
      toast.error('Failed to create account');
    }
    setLoading(true);
  }

  return (
    <>
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
          <p>Your password must have at least 8 characters.</p>
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
      <Loading open={loading} />
    </>
  );
}
