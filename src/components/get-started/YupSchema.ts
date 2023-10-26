import * as yup from 'yup';

export const RegisterSchema = yup.object().shape({
  fullName: yup.string().required('Full name is required'),
  email: yup
    .string()
    .required('Email is required')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      'Invalid email address! Email must end with co.uk'
    )
    .test(
      'co.uk',
      'Email must end with co.uk',
      (value:any) => value && value.endsWith('gmail.com')
    ),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  passwordConfirm: yup
    .string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
});
export const LoginSchema = yup.object().shape({
  
  email: yup
    .string()
    .required('Email is required')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      'Invalid email address! Email must end with co.uk'
    )
    .test(
      'co.uk',
      'Email must end with co.uk',
      (value:any) => value && value.endsWith('gmail.com')
    ),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  
});
