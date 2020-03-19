import React from 'react'
import { StatusBar } from 'react-native'
import styled from 'styled-components/native'

const StyledHeader = styled.View`
    justify-content: flex-end;
    background-color: #001c46;
    height: 12%;
    padding: 5px 10px;
    width: 100%;
`
const HeaderText = styled.Text`
    color: #ffffff;
    font-size: 40px;
    font-weight: bold;
`

const Header = ({title}) => (
    <>
        <StatusBar backgroundColor="#001c46" barStyle="light-content" />
        <StyledHeader>
            <HeaderText>{title}</HeaderText>
        </StyledHeader>
    </>
)

export default Header