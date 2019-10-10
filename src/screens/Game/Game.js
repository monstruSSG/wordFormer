import React, { Component } from 'react';
import { View, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';

import BaseScreen from '../../components/BaseScreen/BaseScreen';
import CustomText from '../../components/UI/CustonText';
import Header from './Header';
import Board from './Board';
import Stats from './Stats';

class Game extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <BaseScreen>
                <View style={[{alignItems: 'center'}, styles.max]}>
                    <View style={[{width: '100%', height: '12%'}]}>
                        <Header />
                    </View>
                    <View style={[{height: '38%', width: '90'}]}>
                        <Stats />
                    </View>

                    <View style={[styles.center, { width: '50%', height: '50%' }]}>
                        <Board size={6} lines={[
                            [{ color: 'white', letter: 'x' }, { color: 'white', letter: 'x' }, { color: 'white', letter: 'x' }, { color: 'white', letter: 'x' }],
                            [{ color: '', letter: 'x' }, { color: 'white', letter: 'x' }, { color: '', letter: 'x' }, { color: 'white', letter: 'x' }],
                            [{ color: 'white', letter: 'x' }, { color: '', letter: 'x' }, { color: 'white', letter: 'x' }, { color: 'white', letter: 'x' }],
                            [{ color: 'white', letter: 'x' }, { color: 'white', letter: 'x' }, { color: '', letter: 'x' }, { color: 'white', letter: 'x' }]
                        ]} />
                    </View>

                </View>
            </BaseScreen>
        );
    }
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    max: {
        width: '100%',
        height: '100%'
    }
});

export default Game;