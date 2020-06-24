import React from 'react';
import { Link } from 'react-router-dom';

import { SignInContainer, StyledButton } from './styles';
import theme from '../../styles/themes';
export default function SingUp() {
  return (
    <SignInContainer>
      <div>
        <h1>Sign In</h1>

        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Password" />
        <StyledButton variant="contained" color="primary">
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
