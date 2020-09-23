import React from 'react';
import PropTypes from 'prop-types';

import { AuthProvider } from './auth';
import { DragonsProvider } from './dragons';

export const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <DragonsProvider>{children}</DragonsProvider>
    </AuthProvider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};