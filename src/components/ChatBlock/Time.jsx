import styled from 'styled-components'

const Time = ({time}) => {
    return (
        <th>
            <TimeContainer>
                <TimeText>
                    {time}
                </TimeText>
            </TimeContainer>
        </th>
    )
}

const TimeContainer = styled.div`
    
`;

const TimeText = styled.div`
    width: 100%;
    word-wrap: break-word;
    color: #8E8E93;
    font-size: 14px;
`;

export default Time;