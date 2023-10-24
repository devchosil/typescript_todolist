import React,{ useState, Dispatch,SetStateAction } from "react";
import styled from "styled-components";

interface Props {
    todoItem: {id: number, text: string}[],
    // setTodoItem: React.Dispatch<React.SetStateAction<object[]>>;

}

const Button = styled.button`
    margin-left: 5px;
    border:none;
    background-color: transparent;
    z-index: 100;
    cursor: pointer;
`;

const Wrapper = styled.div`
    position:relative;
    width:300px;
    height: 380px;
    font-size: 17px;
    /* text-justify: center; */
`;

const BackGroundPattern = styled.div`
    /* padding: 5px; */
    position:absolute;
    /* left:1px; */
    top: 27px;
    width:300px;
    height: 380px;
    background: repeating-linear-gradient(#a07526, #a07526 2px, transparent 0, transparent 40px);
`;

const CustomCheckboxWrapper = styled.div`
    position:relative;
    padding-right:12px;
`;

const StyledCheckbox = styled.input`
    visibility: hidden;
`;

const StyledLabel = styled.label<{isChecked:boolean}>`
    background-color: transparent;
    border: 1px solid #a07526;
    cursor: pointer;
    width: 15px;
    height: 15px;
    position: absolute;
    top:6px;
    left: 10px;
    ${({ isChecked }) => {
        return isChecked
            ? `
                // background-color: #66bb6a;
                // border-color: #66bb6a;
                &:after {
                    border: 2px solid #a07526;
                    border-top: none;
                    border-right: none;
                    content: "";
                    width: 14px;
                    height: 8px;
                    position: absolute;
                    transform: rotate(-45deg);
                }
            `
            : `
                background-color: transparent !important;
                &:after {
                    opacity: 1;
                }
            `}}
`;

const TodoItem = (props:Props) => {

    interface todolistType {
        id: number,
        text: string
    }

    const [item,setItem] = useState<string>('');
    const onClickDelete = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>  {
        const name = +e.currentTarget.dataset.name;
        const list:todolistType[] = JSON.parse(localStorage.getItem('item'));
        
        console.log(list.filter((val)=>val.id !== name));

    }

    const [isChecked,setIsChecked] = useState<boolean>(false);
    const onClickCheckbox = (e:React.MouseEvent<HTMLElement,MouseEvent>) => {
        console.log(e.currentTarget.dataset.name);
        setIsChecked(!isChecked);
    }

    return(
        <Wrapper>
            <BackGroundPattern></BackGroundPattern>
            {
                props.todoItem.length===0
                ? <div></div>
                : props.todoItem.map((val,idx) => {
                    return(
                    <div key={idx} style={{display:"flex", paddingBottom:"14.5px"}}>
                        <CustomCheckboxWrapper>
                            <StyledCheckbox type="checkbox"/>
                            <StyledLabel
                                data-name={idx+1} 
                                onClick={(e)=>onClickCheckbox(e)}
                                isChecked={isChecked}/>
                        </CustomCheckboxWrapper>
                        {/* <span>{val.id}: </span> */}
                        <span>{val.text}</span>
                        <Button
                            data-name={idx}
                            onClick={(e)=>onClickDelete(e)}
                            >X</Button>
                    </div>)
                })    
            }
        </Wrapper>
    )
}

export default TodoItem;