import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import styled from 'styled-components/native'

const StyledCounterCard =  styled.View`
    background-color: ${({selected}) => selected ? '#d8d8d8': '#6dadd1'};
    border-radius: 5px;
    border-width: ${({selected}) => selected ? '2px': 0};
    border-color: #17457b;
    flex-direction: column;
    padding: 15px;
    margin: 20px;
    elevation: 5;
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.5;
    shadow-radius: 3.80px;
`

const CounterCard = ({ index, selected, onPress, value })  => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <StyledCounterCard selected={selected}>
                <View>
                    <Text style={{color: selected ?'#a3a3a3' : '#4e8db2', fontSize: 18, fontWeight: 'bold'}}>
                        Counter {index}
                    </Text>
                </View>
                <View style={{ alignItems: 'flex-end', marginTop: 50 }}>
                    <Text style={{color: selected ? '#333333' : '#4e8db2' ,  fontSize: 60, fontWeight: 'bold'}}>
                        {value}
                    </Text>
                </View>
            </StyledCounterCard>
        </TouchableWithoutFeedback>
    )
}

export default CounterCard
