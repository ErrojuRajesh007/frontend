import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #666;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

export const ErrorMessage = styled.span`
  color: #f44336;
  font-size: 14px;
  margin-top: 5px;
  display: block;
`;

export const SubmitButton = styled.button`
  background-color: #ff7900;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e66d00;
  }
`;
