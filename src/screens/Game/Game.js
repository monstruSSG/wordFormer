import React, { Component } from 'react';
import { View, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';

import BaseScreen from '../../components/BaseScreen/BaseScreen';
import CustomText from '../../components/UI/CustonText';
import Header from './Header';

class Game extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <BaseScreen>
                <View style={[{ width: '100%', height: '15%' }]}>
                    <Header />
                </View>
                <CustomText large>game</CustomText>
            </BaseScreen>
        );
    }
}

const styles = StyleSheet.create({
});

export default Game;