import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { SignInContainer, StyledButton } from './styles';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { signInSuccess } from '../../store/modules/user/actions';
export default function SingUp() {
  // @ts-ignore
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required().email(),
        password: Yup.string().required().min(6),
      });

      await schema.validate({ email, password }, { abortEarly: false });
      console.log(schema);

      const response = await axios.post(`http://${process.env.REACT_APP_API_URL ||'localhost:3333'}/session`, {
        email,
        password,
      });
      dispatch(signInSuccess(response.data.token));
      console.log(response);
    } catch (error) { 
      console.log(error);
      toast.error('Invalid Credentials'); 
    }
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
          <span>Dont have a account?</span>
          <Link to="/sign-up">Sign Up</Link>
        </div>
      </div>
    </SignInContainer>
  );
}
