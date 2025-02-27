import { Route, Routes } from 'react-router';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import BookingPage from './pages/Booking';
import ConfirmationPage from './pages/Confirmation';
import NotFoundPage from './pages/NotFound';

export default function () {
  return (
    <Routes>
      <Route element={<DefaultLayout />} path='/'>
        <Route index element={<Home />} />
        <Route element={<BookingPage />} path='/bookings' />
        <Route element={<ConfirmationPage />} path='/confirmation' />
      </Route>
      <Route element={<NotFoundPage />} path='*' />
    </Routes>
  );
}
