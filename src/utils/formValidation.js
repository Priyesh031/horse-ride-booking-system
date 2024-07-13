export const formValidation = (formData) => {
    const errors = {};
    if (!formData.name) {
      errors.name = 'Please enter your name';
    }
    if (!formData.email) {
      errors.email = 'Please enter your email';
    }
    if (!formData.phone) {
      errors.phone = 'Please enter your phone number';
    }
    return errors;
  };