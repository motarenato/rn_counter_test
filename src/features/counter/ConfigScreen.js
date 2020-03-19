import React, {useEffect} from 'react'
import { SafeAreaView, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { addCounter, removeCounter, increment, decrement, reset, selectSelectedCounter } from './_counterSlice'

import Button from '../../components/Button'
import Header from '../../components/Header'
import Title from '../../components/Title'

const StyledConfigScreen = styled.SafeAreaView`
    background-color: #0082c9;
    flex: 1;
    flex-direction: column;
    width: 100%;
`

const FlexWrapper = styled.View`
    flex: 1;
    padding: 25px;
`

const ConfigScreen = () => {
    const dispatch = useDispatch()
    const selectedCounter =  useSelector(selectSelectedCounter)

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#001c46'}}>
            <StyledConfigScreen>
                <Header title="Config" />
                <FlexWrapper>
                    <Title>Counters</Title>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Button onPress={() => dispatch(addCounter())}>Add Counter</Button>
                        <Button disabled={!selectedCounter} onPress={() => dispatch(removeCounter())}>Remove Counter</Button>
                    </View>
                </FlexWrapper>
                <FlexWrapper>
                    <Title>Selected Counter</Title>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Button disabled={!selectedCounter} icon="plus" onPress={() => dispatch(increment())}>Increment</Button>
                        <Button disabled={!selectedCounter} icon="minus" onPress={() => dispatch(decrement())}>Decrement</Button>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Button disabled={!selectedCounter} icon="undo" onPress={() => dispatch(reset())}>Reset</Button>
                    </View>
                </FlexWrapper>
            </StyledConfigScreen>
        </SafeAreaView>
    )
}

export default ConfigScreen