import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/store';
import LandingPage from './components/LandingPage';
import BookingForm from './components/BookingForm';
import ConfirmationPopup from './components/ConfirmationPopUp';

const App = () => {
  return (
    <Provider store={store}>
      <LandingPage />
      <BookingForm />
      <ConfirmationPopup />
    </Provider>
  );
};

export default App;