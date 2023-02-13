import React from 'react';
import leaseeyeLogo from './leaseeyeLogo.png';
import styled from 'styled-components';

export const Header = () => {
    return (
        <>
            <Logo src={leaseeyeLogo} />
        </>
    );
};

const Logo = styled.img`
    margin: 0px 4px 15px 0px;
    padding: 4px;
    max-width: 100%;
`;
