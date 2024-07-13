export const BOOK_HORSE = 'BOOK_HORSE';

export function bookHorse(horse, date, time, name, email, phone) {
  return {
    type: BOOK_HORSE,
    horse,
    date,
    time,
    name,
    email,
    phone,
  };
}