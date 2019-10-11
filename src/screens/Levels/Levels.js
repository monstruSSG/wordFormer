import React, { Component } from 'react';
import { View, Stylesheet } from 'react-native';

import CustomText from '../../components/UI/CustonText';
import BaseScreen from '../../components/BaseScreen/BaseScreen';

export default class Levels extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <BaseScreen>
                <View>
                    <CustomText>LEVLES</CustomText>
                </View>
            </BaseScreen>
        );
    }
}