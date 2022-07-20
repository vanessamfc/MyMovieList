import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { SignInContainer, StyledButton } from './styles';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../../store/modules/user/actions';
import Loading from '../../components/Loading';
import mmlApi from '../../service/api';
export default function SingUp() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required().email(),
        password: Yup.string().required().min(6),
      });

      await schema.validate({ email, password }, { abortEarly: false });

      const response = await mmlApi.post(`/session`, {
        email,
        password,
      });
      dispatch(signInSuccess(response.data.token));
    } catch (error) {
      toast.error('Invalid Credentials');
    }
    setLoading(false);
  }

  return (
    <>
      <SignInContainer>
        <div>
          <h1>Login</h1>

          <input
            type="text"
            placeholder="E-mail"
            data-cy="login-email-input"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            data-cy="login-password-input"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <StyledButton
            variant="contained"
            color="primary"
            data-cy="login-button"
            onClick={handleSubmit}
          >
            Login
          </StyledButton>
          <div>
            <span>Dont have a account?</span>
            <Link to="/sign-up">Sign Up</Link>
          </div>
        </div>
      </SignInContainer>
      <Loading open={loading} />
    </>
  );
}
