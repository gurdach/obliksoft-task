import styled from 'styled-components'

const Date = ({date}) => {
    return (
        <th>
            <DateContainer>
                <DateText>
                    {date}
                </DateText>
            </DateContainer>
        </th>
    )
}

const DateContainer = styled.div`
    
`;

const DateText = styled.div`
    width: 100%;
    word-wrap: break-word;
    color: #8E8E93;
    font-size: 14px;
`;

export default Date;