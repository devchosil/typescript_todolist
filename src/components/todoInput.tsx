import React,{ useState, useEffect } from "react";
import styled from 'styled-components';

interface Props {
    todoInput: string;
    setTodoInput: React.Dispatch<React.SetStateAction<string>>;
    addItem:()=>void;
}

const Button = styled.button`
    cursor:pointer;
    margin-left: 10px;
    font-size: 25px;
    /* font-weight: bold; */
    background-color: transparent;
    border:none;
`;

const Wrapper = styled.div`
    padding: 10px 0 40px 0;
    align-self: center;
`

const TodoInput = (props:Props) => {

    return(
        <Wrapper>
            <input
                style={{backgroundColor:"transparent", fontSize:"20px", width:"230px"}}
                value={props.todoInput}
                onChange={(e)=>props.setTodoInput(e.target.value)}
            />
            <Button onClick={()=>props.addItem()}>+</Button>
        </Wrapper>

    )
}

export default TodoInput;