import styled from 'styled-components'

export const Pagination = (props) => {
    return (
        <TimeContainer>
            <TimeText>
                1, 2, 3, 4 ... 6, 7
            </TimeText>
        </TimeContainer>
    )
}

const TimeContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 1024px
`;

const TimeText = styled.div`
    text-align: right;
    width: 100%;
    padding: 10px 25px;
`;