import styled from 'styled-components';

export const Settings = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GetRecive = styled.div`
display: flex;
margin: 25px;
position: relative;
`;

export const Span = styled.span`
  background-color: #008bd1;
  border-radius: 5px;
  padding: 5px 15px;
  color: #fff;
  margin: 10px auto;
  font-size: 18px;
  display: inline-block;
  text-align: center;
  line-height: 200%;
`;

export const Input = styled.input`
  padding: 10px 15px;
  margin: 10px 25px;
  text-align: center;
  border-radius: 5px;
  border-color: black;
  font-size: 18px;
  color: black;
  cursor: pointer;
`;

export const Select = styled.select`
  background-color: #008bd1;
  border-radius: 5px;
  padding: 5px 15px;
  color: #fff;
  margin: 10px auto;
  cursor: pointer;
`;

export const Score = styled.p`
  display: block;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  padding: 15px 25px;
  text-decoration: underline;
  border: 4px solid #008bd1;
`;

export const Button = styled.button`
  background-color: #008bd1;
  border-radius: 5px;
  padding: 10px 20px;
  color: #fff;
  margin: 10px auto 15px;
  font-size: 20px;
  transition: .3s;
  cursor: pointer;
  border: none;
  letter-spacing: 1px;

  &:hover {
    transform: scale(1.2);
  }
`;
