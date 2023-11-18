import React from 'react';
import styled from 'styled-components';

// Styled components for the form elements
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 20px auto;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// React component representing the form
const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name:</Label>
        <Input type="text" id="name" name="name" />

        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" name="email" />

        <Label htmlFor="message">Message:</Label>
        <Input type="text" id="message" name="message" />

        <Button type="submit">Submit</Button>
      </form>
    </FormContainer>
  );
};

export default Form;
