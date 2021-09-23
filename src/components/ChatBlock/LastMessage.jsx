import React from 'react';
import styled from 'styled-components'

const LastMessage = ({message}) => {
    return (
        <th>
            <MessageContainer>
                <MessageText>{message}</MessageText>
            </MessageContainer>
        </th>
    )
}

const MessageContainer = styled.div`

`;

const MessageText = styled.p`
    display: -webkit-box;
    overflow: hidden;
    text-align: left;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-width: 300px;
    font-size: 14px;
`;

export default LastMessage;