export default function validate(input) {
  let errors = {};

  if (!input.user_name) errors.user_name = 'Username is required';
  
  if (!input.user_email) {
    errors.user_email = 'Useremail is required';
  } else if (!/\S+@\S+\.\S+/.test(input.user_email)) {
    errors.user_email = 'Useremail is invalid';
  }

  if (!input.message) errors.message = 'Message is required';
  
  return errors;
};