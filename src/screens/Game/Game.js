import React, { Component } from 'react';
import { View, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';

import BaseScreen from '../../components/BaseScreen/BaseScreen';
import CustomText from '../../components/UI/CustonText';
import Header from './Header';
import Board from './Board';
import Keyboard from './Keyboard';

class Game extends Component {
    static navigationOptions = {
        header: null
    }

    navigateLevels = () => this.props.navigation.navigate('Levels');

    componentDidMount() {
        console.log(this.props.navigation.getParam('level', 'NO-LEVEL'), 'PARAM HERE')
    }

    render() {
        return (
            <BaseScreen>
                <View style={[styles.alignItemsCenter, styles.max]}>
                    <View style={[styles.header]}>
                        <Header onBack={this.navigateLevels} />
                    </View>
                    <View style={[styles.stats]}>

                    </View>
                    <View style={[styles.board]}>
                        <Board size={12} lines={[
                            [{ color: 'white', letter: 'c' }, { color: 'white', letter: '' },
                            { color: 'white', letter: 'e' }, { color: 'white', letter: 'x' },
                            { color: 'white', letter: 'e' }, { color: 'white', letter: 'x' },
                            { color: 'white', letter: 'x' }, { color: 'white', letter: 'e' },
                            { color: 'white', letter: 'x' }, { color: 'white', letter: 'x' }],
                            [{ color: 'white', letter: 'c' }, { color: 'white', letter: '' },
                            { color: 'white', letter: 'e' }, { color: 'white', letter: 'x' },
                            { color: 'white', letter: 'e' }, { color: 'white', letter: 'x' },
                            { color: 'white', letter: 'x' }, { color: 'white', letter: 'e' },
                            { color: 'white', letter: 'x' }, { color: 'white', letter: 'x' }],
                            [{ color: 'white', letter: 'c' }, { color: 'white', letter: '' },
                            { color: 'white', letter: 'e' }, { color: 'white', letter: 'x' },
                            { color: 'white', letter: 'e' }, { color: 'white', letter: 'x' },
                            { color: 'white', letter: 'x' }, { color: 'white', letter: 'e' },
                            { color: 'white', letter: 'x' }, { color: 'white', letter: 'x' }],
                            [{ color: 'white', letter: 'c' }, { color: 'white', letter: '' },
                            { color: 'white', letter: 'e' }, { color: 'white', letter: 'x' },
                            { color: 'white', letter: 'e' }, { color: 'white', letter: 'x' },
                            { color: 'white', letter: 'x' }, { color: 'white', letter: 'e' },
                            { color: 'white', letter: 'x' }, { color: 'white', letter: 'x' }],
                            [{ color: 'white', letter: 'c' }, { color: 'white', letter: '' },
                            { color: 'white', letter: 'e' }, { color: 'white', letter: 'x' },
                            { color: 'white', letter: 'e' }, { color: 'white', letter: 'x' },
                            { color: 'white', letter: 'x' }, { color: 'white', letter: 'e' },
                            { color: 'white', letter: 'x' }, { color: 'white', letter: 'x' }],
                            [{ color: 'white', letter: 'c' }, { color: 'white', letter: '' },
                            { color: 'white', letter: 'e' }, { color: 'white', letter: 'x' },
                            { color: 'white', letter: 'e' }, { color: 'white', letter: 'x' },
                            { color: 'white', letter: 'x' }, { color: 'white', letter: 'e' },
                            { color: 'white', letter: 'x' }, { color: 'white', letter: 'x' }],
                            [{ color: 'white', letter: 'c' }, { color: 'white', letter: '' },
                            { color: 'white', letter: 'e' }, { color: 'white', letter: 'x' },
                            { color: 'white', letter: 'e' }, { color: 'white', letter: 'x' },
                            { color: 'white', letter: 'x' }, { color: 'white', letter: 'e' },
                            { color: 'white', letter: 'x' }, { color: 'white', letter: 'x' }],
                            [{ color: 'white', letter: 'c' }, { color: 'white', letter: '' },
                            { color: 'white', letter: 'e' }, { color: 'white', letter: 'x' },
                            { color: 'white', letter: 'e' }, { color: 'white', letter: 'x' },
                            { color: 'white', letter: 'x' }, { color: 'white', letter: 'e' },
                            { color: 'white', letter: 'x' }, { color: 'white', letter: 'x' }],
                            [{ color: 'white', letter: 'c' }, { color: 'white', letter: '' },
                            { color: 'white', letter: 'e' }, { color: 'white', letter: 'x' },
                            { color: 'white', letter: 'e' }, { color: 'white', letter: 'x' },
                            { color: 'white', letter: 'x' }, { color: 'white', letter: 'e' },
                            { color: 'white', letter: 'x' }, { color: 'white', letter: 'x' }],
                        ]} />
                    </View>
                    <View style={[styles.keyboard, styles.center]}>
                        <Keyboard onKeyPress={letter => alert(letter)} />
                    </View>
                </View>
            </BaseScreen>
        );
    }
}

const styles = StyleSheet.create({
    keyboard: {
        width: '100%',
        height: '25%'
    },
    board: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    stats: {
        height: '13%',
        width: '90%'
    },
    alignItemsCenter: {
        alignItems: 'center'
    },
    header: {
        width: '100%',
        height: '12%'
    },
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