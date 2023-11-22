import React, { Component,useState  } from 'react'
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

  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [county, setCounty] = useState('');
  const [password, setPassword] = useState('');
  const [video, setVideo] = useState('');

  const handleSubmit = () => {
    // Handle form submission here
  };
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>
           <i className='fas fa-atom' />
          </Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Register for the National competition</FormH1>
              <FormH2>Sign up </FormH2>
              <FormLabel htmlFor='for'>First Name</FormLabel>
              <FormInput placeholder='First Name' type='text' required />
              <FormLabel htmlFor='for'>First Name</FormLabel>
              <FormInput placeholder='Password' type='text' required />
              <FormLabel htmlFor='for'>Second Name</FormLabel>
              <FormInput placeholder='Second Name' type='text' required />
              <FormLabel htmlFor='for'>Phone</FormLabel>
              <FormInput placeholder='Phone' type='number' required />
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput placeholder='Email' type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput placeholder='Password' type='password' required />
              <FormLabel htmlFor='for'>Short Video</FormLabel>
              <FormInput placeholder='Video' type='file' required />

              <FormButton type='submit'>Log in </FormButton>
              <Text>Thank You!.</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>




      <form onSubmit={handleSubmit}>
      <label>
        First name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Second name:
        <input
          type="text"
          value={secondName}
          onChange={(e) => setSecondName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label>
        County:
        <input
          type="text"
          value={county}
          onChange={(e) => setCounty(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        Short video:
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideo(e.target.files[0])}
        />
      </label>
      <button type="submit">Sign up</button>
    </form>
    </>
  );
};

export default SignIn;
