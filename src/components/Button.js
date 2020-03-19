import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'

import If from '../components/If'



const StyledButton = styled.TouchableHighlight`
    align-items: center;
    background-color: #d8d8d8;
    border-radius: 3px;
    flex: 1;
    justify-content: center;
    padding: 10px;
    margin: 20px 10px 0;
`
const ButtonText =  styled.Text`
    color: #214d81;
    font-size: 18px;
    font-weight: bold;
`

const Button = ({ children, disabled, icon, onPress, }) => (
    <StyledButton disabled={disabled} onPress={onPress}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <If condition={!!icon}>
                <View style={{marginRight: 10, justifyContent: 'center'}}>
                    <Icon name={icon} color="#214d81" size={20} />
                </View>
            </If>
            <View>
                <ButtonText>{children}</ButtonText>
            </View>
        </View>
    </StyledButton>
)

export default Button