import { useEffect } from "react";
import styled from 'styled-components';
import moment from "moment";

// const Button = styled.button`
//     margin-left: 5px;
//     background-color: #435334;
//     border:none;
//     border-radius: 3px;
//     color:#FAF1E4;
// `;

const TimeWrapper = styled.div`
    font-size: 40px;
    width:25%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 60px;
`;

const CurrnetTime = () => {

    const date = moment().format('YYYY/MM/DD');
    const time = moment().format('hh:mm:ss');
    const day = moment().format('ddd');

    return(
        <TimeWrapper>
            <div>{date}</div>
            <div>
                <span>{day} </span>
                <span>{time}</span>
            </div>
        </TimeWrapper>

    )
}

export default CurrnetTime;