import React from 'react';

import { Backdrop, CircularProgress } from '@material-ui/core';

// import { Container } from './styles';

function Loading({ open }: { open: boolean }) {
  return (
    <Backdrop style={{ zIndex: 100, color: '#e53935' }} open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default Loading;
