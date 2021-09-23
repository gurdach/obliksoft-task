import React from "react";
import styled from 'styled-components'

const Avatar = ({data}) => {
    
    // console.log(data)

    const requireImage = (name) => {
        return require('../../assets/icons/' + name + '.svg').default
    }

    return (
            <AvaterContainer gender={data.gender} contentSrc={requireImage(data.social)} >
                <Image src={requireImage(data.gender)} alt="user avatar" />
            </AvaterContainer>
    )
}

const AvaterContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 65px;
        height: 65px;
        background-color: ${props => props.gender === "male" ? 'rgba(139,145,221,0.4)' : 'rgba(246,87,110,0.4)'};
        border: 3px solid #fff;
        border-radius: 50%;
        &:after {
            content: url(${props => props.contentSrc});
            position: absolute;
            width: 15px;
            height: 15px;
            top: 100%;
            right: -20px;
            transform: translate(-15px, -100%);
            border: 2px solid #fff;
            border-radius: 50%;
            padding: 0px 7px 7px 0px;
        }
    `;
    
    const Image = styled.img`
        max-width: 100%;
        max-height: 100%;
    `;

export default Avatar;

