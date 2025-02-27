import type { FC } from 'react';
import { Outlet } from 'react-router';
import { Footer, Header } from '../components';

const DefaultLayout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
