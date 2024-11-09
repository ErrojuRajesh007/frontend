import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Container,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  ErrorMessage,
  SubmitButton
} from './registerStyles';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number').required('Phone number is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
    alert('Registration successful!');
  };

  return (
    <Container>
      <Title>Register</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input 
            type="text" 
            id="name" 
            {...register('name')} 
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && <ErrorMessage role="alert">{errors.name.message}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input 
            type="email" 
            id="email" 
            {...register('email')} 
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <ErrorMessage role="alert">{errors.email.message}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phone">Phone Number</Label>
          <Input 
            type="tel" 
            id="phone" 
            {...register('phone')} 
            aria-invalid={errors.phone ? "true" : "false"}
          />
          {errors.phone && <ErrorMessage role="alert">{errors.phone.message}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input 
            type="password" 
            id="password" 
            {...register('password')} 
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password && <ErrorMessage role="alert">{errors.password.message}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input 
            type="password" 
            id="confirmPassword" 
            {...register('confirmPassword')} 
            aria-invalid={errors.confirmPassword ? "true" : "false"}
          />
          {errors.confirmPassword && <ErrorMessage role="alert">{errors.confirmPassword.message}</ErrorMessage>}
        </FormGroup>
        <SubmitButton type="submit">Register</SubmitButton>
      </Form>
    </Container>
  );
}