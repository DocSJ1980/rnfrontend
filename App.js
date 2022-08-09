import React from 'react';

import { AuthProvider } from './context/AuthContext.js';
import AppNav from './navigators/AppNav.js';

export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  )
}