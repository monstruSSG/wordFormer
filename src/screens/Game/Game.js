import React, { Component } from 'react';
import { View, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';

import BaseScreen from '../../components/BaseScreen/BaseScreen';
import CustomText from '../../components/UI/CustonText';

class Game extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <BaseScreen>
                <CustomText large>game</CustomText>
            </BaseScreen>
        );
    }
}

const styles = StyleSheet.create({
});

export default Game;