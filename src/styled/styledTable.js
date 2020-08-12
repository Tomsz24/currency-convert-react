import styled from 'styled-components';

export const TableforTable = styled.table`
  max-width: 500px;
  margin: 30px auto;
  font-size: 20px;
  border: 2px solid black;
  box-shadow: 3px 3px 3px black;
  border-radius: 10px;
  background-color: #eee;
`;

export const TableHeader = styled.th`
  color: #fff;
  background-color: #008bd1;
  padding: 5px 20px;
`;

export const Flags = styled.img`
  text-align: center;
  width: 30px;
  height: 20px;
  line-height: 20px;
`;

export const TableCell = styled.td`
  text-align: center;
  cursor: pointer;
  transition: .2s;
  padding: 5px 10px;
  background-color: #fff;

  &:hover {
    background-color: #008bd1;
    color: white;
  }
`;