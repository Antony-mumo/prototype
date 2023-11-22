import React from "react";
import {
  FormButton,
  FormInput,
  Formbox,
  FormLabel,
  Container,
  FormWrap,
  Icon,
  Text,
  FormContent,
  Form,
  FormH1,
  FormH2,
} from "./SigninElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>
           <i className='fas fa-atom' />
          </Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>National competition</FormH1>
              <FormH2>Login</FormH2>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput placeholder='Email' type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput placeholder='Password' type='email' required />
              <FormButton type='submit'>Log in </FormButton>
              <Text>Thank You!.</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
