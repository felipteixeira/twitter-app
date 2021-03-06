import styled, { css } from 'styled-components';
import { shade } from 'polished'

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 38px;
    color: #3a3a3a;
    max-width: 450px;
    line-height: 56px;

    margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border: 2px solid #fff;
        border-right: 0;

        ${(props) => props.hasError && css`
        border-color: #c53030;
        
        `}
    }

    &::placeholder {
        color: #3a3a3a;
    }

    button {
        width: 210px;
        height: 70px;
        background: #1E90FF;
        border-radius: 0px 5px 5px 0px;
        border: 0;
        color: #FFF;
        font-weight: bold;
        transition: background-color 0.2s; 

        &:hover {
            background: ${shade(0.2, '#1E90FF')};
        }
    }
`;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 10px;

`;

export const Tweets = styled.div`
margin-top: 80px;
max-width: 700px;

a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
        margin-top: 16px;
    }

    img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }

    div {
        margin: 0 16px;
        flex: 1;

        strong {
            font-size: 20px;
            color: #3D3D4D;
        }

        p {
            font-size: 18px;
            color: #a8a8b3;
            margin-top: 8px;
            margin-bottom: -20px;
        }

        p:nth-child(1) {
            font-size: 18px;
            color: #3D3D4D;
            margin-top: -20px;
            margin-bottom: 8px;
        }
    }

    svg {
        margin-left: auto;
        color: #cbcbd6;
    }

    &:hover{
        transform: translateX(10px);
    }
}
 `;

