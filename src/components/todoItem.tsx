import React,{ useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { DeleteButton, 
    ItemContainer, 
    BackGroundPattern, 
    CustomCheckboxWrapper, 
    StyledCheckbox,
    StyledLabel } from '../styles/todolist.styled';
    interface Item { 
        id: number,
        text: string,
        done: boolean
    } 
    interface Props {
        todoItem: {id: number, text: string, done:boolean}[],
        setTodoItem: React.Dispatch<React.SetStateAction<Item[]>>;
        // isChecked: boolean[],
        // setIsChecked: React.Dispatch<React.SetStateAction<boolean[]>>;
    }

const TodoItem = (props:Props) => {

    const onClickDelete = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>  {
        const name = +e.currentTarget.dataset.name;
        const list:Item[] = JSON.parse(localStorage.getItem('item'));
        const updatedList = list.filter((val)=>val.id !== name);
        localStorage.setItem('item',JSON.stringify(updatedList));
        props.setTodoItem([...updatedList]);
    }

    // const [isChecked,setIsChecked] = useState<boolean>(false);
    const onClickCheckbox = (e:React.MouseEvent<HTMLElement,MouseEvent>) => {
        const name = +e.currentTarget.dataset.name;
        const list:Item[] = JSON.parse(localStorage.getItem('item'));
        
        const updatedList = list.map(item => {
            if (item.id === name) {
                const newValue = !item.done;
                // Create a new object with the updated 'done' property
                return { ...item, done: newValue };
            }
            return item;
        });
    
        
        // map((val)=>{
        //     if(val.id === name) {
        //         const newValue = !val.done;
        //         val.done = newValue;
        //     }
        // })
        localStorage.setItem('item',JSON.stringify(updatedList));
        props.setTodoItem(updatedList);

    }

    return(
        <ItemContainer>
            <BackGroundPattern></BackGroundPattern>
            {
                props.todoItem.length===0
                ? <div></div>
                : props.todoItem.map((val,idx) => {
    
                    return(
                    <div 
                        key={idx} 
                        style={{display:"flex", paddingBottom:'14.5px'}}>
                        <CustomCheckboxWrapper>
                            <StyledCheckbox type="checkbox"/>
                            <StyledLabel
                                data-name={val.id} 
                                onClick={(e)=>onClickCheckbox(e)}
                                // isChecked={props.isChecked[idx]}
                                isChecked={val.done}
                                />
                        </CustomCheckboxWrapper>
                        {/* <span>{val.id}: </span> */}
                        <div>{val.text}</div>
                        <DeleteButton
                            data-name={val.id}
                            onClick={(e)=>onClickDelete(e)}
                            >X</DeleteButton>
                    </div>)
                })    
            }
        </ItemContainer>
    )
}

export default TodoItem;