import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
// components

// ----------------------------------------------------------------------

type GuestGuardProps = {
  children: ReactNode;
};

export default function GuestGuard({ children }: GuestGuardProps) {
  const isAuthenticated = false;

  if (isAuthenticated) {
    return <Navigate to={'/dashboard'} />;
  }

  return <>{children}</>;
}
