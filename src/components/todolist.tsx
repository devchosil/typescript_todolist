import React,{ useState, useEffect } from "react";
import TodoItem from "./todoItem";
import TodoInput from './todoInput';
import styled from 'styled-components';
import { Container } from '../styles/todolist.styled'
const TodoList = () => {

    interface Item { 
        id: number,
        text: string
    } 
    const [todoItem,setTodoItem] = useState<Item[]>([]);
    const [count,setCount] = useState<number>(0);

    const [todoInput, setTodoInput] = useState<string>('');

    const addItem = () => {
        if(todoItem.length===0) {
            setTodoItem([{id:0, text:todoInput}]);
            localStorage.setItem('item',JSON.stringify([{id:0, text:todoInput}]));
        } else {
            const originArray = JSON.parse(localStorage.getItem('item')||"[]");
            const newId = parseInt(originArray[originArray.length-1].id)+1;
            const newArray = [...originArray, {id:newId, text:todoInput}]
            setTodoItem([...newArray]);
            localStorage.setItem('item',JSON.stringify(newArray));
        }
    }

    return(
        <Container>
            <div 
                style={{paddingTop:"20px", fontSize:"25px"}}
            >To-Do List</div>
                <TodoInput 
                    todoInput={todoInput}
                    setTodoInput={setTodoInput}
                    addItem={addItem}
                    />
                <TodoItem todoItem={todoItem} />
        </Container>
    )
}

export default TodoList;