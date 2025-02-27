import { Route, Routes } from 'react-router';

import Home from './pages/Home';
import BookingPage from './pages/Booking';
import ConfirmationPage from './pages/Confirmation';

export default function () {
  return (
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<BookingPage />} path='/bookings' />
      <Route element={<ConfirmationPage />} path='/confirmation' />
    </Routes>
  );
}
