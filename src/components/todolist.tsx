import React,{ useState, useEffect } from "react";
import TodoItem from "./todoItem";
import TodoInput from './todoInput';
import { TodoListContainer } from '../styles/todolist.styled'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { todoState, TodoTypes } from '../recoil/atoms';

const TodoList = () => {
    // const [todoItem,setTodoItem] = useState<Item[]>([]);
    const [todoInput, setTodoInput] = useState<string>('');

    const todos = useRecoilValue<TodoTypes[]>(todoState);
    const setTodos = useSetRecoilState<TodoTypes[]>(todoState);

    const addItem = () => {
        const nextId = todos.length > 0? todos[todos.length-1].id + 1 : 0;
        
        const todo: TodoTypes = {
            id: nextId,
            text: todoInput,
            done: false
        }
        
        setTodos([...todos, todo]);
        setTodoInput('');
    }

    useEffect(()=>{
        console.log(todos);
    },[todos])

    return(
        <TodoListContainer>
            <div 
                style={{paddingTop:"20px", fontSize:"25px"}}
            >To-Do List</div>
                <TodoInput 
                    todoInput={todoInput}
                    setTodoInput={setTodoInput}
                    addItem={addItem}
                    />
                <TodoItem
                    todos={todos}
                    setTodos={setTodos}
                />
        </TodoListContainer>
    )
}

export default TodoList;