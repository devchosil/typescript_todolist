import React from 'react';
import './App.css';
import TodoList from './components/todolist';
import CurrnetTime from './components/currentTime';
import Information from './components/information';
import { Container } from './styles/todolist.styled';

function App() {
  return (
    <Container>
      <CurrnetTime/>
      <TodoList/>
      <Information/>
    </Container>
  );
}

export default App;
