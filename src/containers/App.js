import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import LandingPage from '../components/LandingPage';
import BookingForm from '../components/BookingForm';
import ConfirmationPopUp from '../components/ConfirmationPopUp';

const App = () => {
  return (
    <Provider store={store}>
      <LandingPage />
      <BookingForm />
      <ConfirmationPopUp />
    </Provider>
  );
};

export default App;