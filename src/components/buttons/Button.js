import styled from 'styled-components';

const Btn = styled.button`
    width: 90%;
    background-color: #000;
    height: 30px;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`;
export default function Button(props) {
    return(
        <Btn onClick={props.onClickHandler}>{props.content}</Btn>
    )
}