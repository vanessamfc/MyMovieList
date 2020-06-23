import React from 'react';
import { Link } from 'react-router-dom';

import { StyledInput, SignUpContainer, StyledButton } from './styles';
import theme from '../../styles/themes';
export default function SingUp() {
  return (
    <SignUpContainer>
      <div>
        <h1>Sign Up</h1>
        <StyledInput fullWidth label="Name" variant="outlined"></StyledInput>
        <StyledInput
          fullWidth
          label="E-mail"
          //@ts-ignore
          color="grayColor"
          variant="outlined"
        ></StyledInput>
        <StyledInput
          fullWidth
          label="Password"
          variant="outlined"
        ></StyledInput>
        <StyledButton variant="contained" color="primary">
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
