import React from 'react';
import './App.css';
import TodoList from './components/todolist';
import CurrnetTime from './components/currentTime';
import Information from './components/information';
import styled from 'styled-components';

// interface Container {

// }

const Contianer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fafaf3;
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
`;

function App() {
  return (
    <Contianer>
      <CurrnetTime/>
      <TodoList/>
      <Information/>
    </Contianer>
  );
}

export default App;
