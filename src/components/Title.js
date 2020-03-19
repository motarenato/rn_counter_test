import React from 'react'
import styled from 'styled-components/native'

const StyledTile = styled.Text`
    color: #323031;
    font-size: ${({size}) => size || 30}px;
    font-weight: bold;
`

const Title = ({children, size}) => <StyledTile size={size}>{children}</StyledTile>

export default Title