/* eslint-disable react/display-name */
import React, { Suspense, lazy, ElementType } from 'react';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: React.ComponentProps<'div'>) => {
  return (
    <Suspense fallback={'Loading'}>
      <Component {...props} />
    </Suspense>
  );
};
// Main Layout
export const MainLayout = Loadable(lazy(() => import('components/Layout')));

// Dashboard Pages
export const Dashboard = Loadable(lazy(() => import('pages/Dashboard/Dashboard')));
// Pizza list
export const PizzaList = Loadable(lazy(() => import('pages/PizzaList/PizzaList')));
// Checkout list
export const CheckoutList = Loadable(lazy(() => import('pages/Checkout/Checkout')));
