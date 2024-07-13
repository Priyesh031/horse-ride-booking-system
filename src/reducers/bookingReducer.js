const initialState = {
    horse: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
  };
  
  export default function bookingReducer(state = initialState, action) {
    switch (action.type) {
      case 'BOOK_HORSE':
        return {
         ...state,
          horse: action.horse,
          date: action.date,
          time: action.time,
          name: action.name,
          email: action.email,
          phone: action.phone,
        };
      default:
        return state;
    }
  }