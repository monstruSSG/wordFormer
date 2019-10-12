import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

import BaseScreen from '../../components/BaseScreen/BaseScreen';
import CustomText from '../../components/UI/CustonText';
import Header from './Header';
import Board from './Board';
import Keyboard from './Keyboard';

import OrangeModal from '../../assets/orangeModal.png';
import constants from '../../utils/constants';

class Game extends Component {
    static navigationOptions = {
        header: null
    }

    state = {
        level: null
    }

    navigateLevels = () => this.props.navigation.navigate('Levels');

    componentDidMount() {
        this.setState({ level: Number(this.props.navigation.getParam('level', 'NO-LEVEL')) })
    }

    render() {
        return (
            <BaseScreen>
                <View style={[styles.alignItemsCenter, styles.max]}>
                    <View style={[styles.header]}>
                        <Header onBack={this.navigateLevels} level={this.state.level} />
                    </View>
                    <View style={[styles.stats]}>
                        <ImageBackground style={[styles.center, styles.statsBg]} source={OrangeModal} resizeMode='stretch'>
                            <View style={[styles.statsStats]}>
                                <CustomText>MOVES</CustomText>
                                <CustomText color={constants.GREY} large>12</CustomText>
                            </View>
                            <View style={[styles.statsStats]}>
                                <CustomText>TIME</CustomText>
                                <CustomText color={constants.BLACK} large>12</CustomText>
                            </View>
                        </ImageBackground>
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
    statsStats: {
        width: '50%', 
        height: '100%', 
        alignItems: 'center'
    },
    statsBg: {
        height: '95%',
        width: '100%',
        flexDirection: 'row'
    },
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
        width: '50%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row'
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