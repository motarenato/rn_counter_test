import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { useDispatch } from 'react-redux'
import { addCounter } from '../features/counter/_counterSlice'

import Button from './Button'
import Title from './Title'

const StyledEmptyState =  styled.View`
    align-items: center;
    flex: 1;
    background-color: #0082c9;
    flex-direction: column;
    justify-content: center;
`

const EmptyState = () => {
    const dispatch =  useDispatch()
    return (
        <StyledEmptyState>
            <Title>
                No counters here =/
            </Title>
            <View style={{flexDirection: 'row'}}>
                <Button onPress={() => dispatch(addCounter())}>
                    Touch here to create a counter
                </Button>
            </View>
        </StyledEmptyState>
    )
}

export default EmptyState