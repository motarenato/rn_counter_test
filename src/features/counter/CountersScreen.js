import React from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { selectCounters, selectSelectedCounter, selectCounter } from './_counterSlice'

import CounterCard from '../../components/Countercard'
import EmptyState from '../../components/EmptyState'
import If from '../../components/If'
import Header from '../../components/Header'

const StyledCountersScreen = styled.SafeAreaView`
    background-color: #0082c9;
    flex: 1;
    flex-direction: column;
    width: 100%;
`

const CountersScreen = () => {
    const dispatch =  useDispatch()
    const counters = useSelector(selectCounters)
    const selectedCounter = useSelector(selectSelectedCounter)

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#001c46'}}>
            <StyledCountersScreen>
                <Header title="Counters" />
                <If condition={counters.length === 0}>
                    <EmptyState />
                </If>
                <If condition={counters.length > 0}>
                <FlatList
                    data={counters}
                    renderItem={({item, index}) => (
                        <CounterCard
                            index={index+1}
                            selected={selectedCounter === item.id}
                            value={item.value}
                            onPress={() => dispatch(selectCounter(item.id))}
                        />
                        )}
                    keyExtractor={item => item.id}
                />
                </If>
            </StyledCountersScreen>
        </SafeAreaView>
    )
}

export default CountersScreen