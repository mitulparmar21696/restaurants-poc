import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

// components
import GuestGuard from 'components/auth/GuestGuard';
// pages
import { Dashboard, MainLayout, PizzaList } from 'routes/elements';

export const Router: React.FC = () => {
  return useRoutes([
    // Auth
    {
      path: '/',
      children: [
        {
          path: '/',
          element: <Navigate to="/dashboard" replace />
        },
        {
          path: 'dashboard',
          element: (
            <GuestGuard>
              <Dashboard />
            </GuestGuard>
          )
        },
        {
          path: 'pizza-list',
          element: (
            <GuestGuard>
              <MainLayout>
                <PizzaList />
              </MainLayout>
            </GuestGuard>
          )
        }
      ]
    }
  ]);
};

export default Router;
