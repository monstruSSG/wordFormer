import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, FlatList, Dimensions } from 'react-native';

import CustomText from '../../components/UI/CustonText';
import BaseScreen from '../../components/BaseScreen/BaseScreen';
import Header from './Header';
import Card from './Card';

import LevelsModalBg from '../../assets/levelsModal.png';
import GreenButtonBg from '../../assets/greenButton.png';

export default class Levels extends Component {
    static navigationOptions = {
        header: null,
    }

    state = {
        cardSize: {
            height: Math.floor(Number(Dimensions.get('window').height) * (1.5/10)),
            width: Math.floor(Number(Dimensions.get('window').width) * (8 / 10))
        }
    }

    navigateHome = () => this.props.navigation.navigate('Home');
    navigateProfile = () => this.props.navigation.navigate('Profile');

    render() {
        console.log(this.state.cardSize)
        return (
            <BaseScreen>
                <View style={[styles.max, styles.alignCenter]}>
                    <View style={[styles.headerSize]}>
                        <Header
                            onBack={this.navigateHome}
                            onIcon={this.navigateProfile}
                        />
                    </View>
                    <View style={[styles.levelsSize, styles.center]}>
                        <ImageBackground style={[styles.levelsContent, styles.alignCenter]} resizeMode='stretch' source={LevelsModalBg}>
                            <View style={[styles.center, styles.levelHeaderSize]}>
                                <CustomText large>ALL</CustomText>
                            </View>
                            <View style={[styles.center, styles.levelsSize]}>
                                <FlatList
                                    data={[{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 6 }, { key: 7 }, { key: 8 }, { key: 9 }, { key: 10 }]}
                                    renderItem={({ item }) => (
                                        <View style={{
                                            width: this.state.cardSize.width,
                                            height: this.state.cardSize.height,
                                        }}>
                                            <Card level={item.key} />
                                        </View>
                                    )}
                                />
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={[styles.playButtonSize, styles.center]}>
                        <TouchableOpacity style={[styles.max, styles.center]} >
                            <ImageBackground style={[styles.max, styles.center]} resizeMode='stretch' source={GreenButtonBg}>
                                <CustomText large>PLAY LEVEL 21</CustomText>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
            </BaseScreen>
        );
    }
}

const styles = StyleSheet.create({
    levelsSize: {
        width: '90%',
        height: '80%'
    },
    levelHeaderSize: {
        width: '100%',
        height: '14%'
    },
    playButtonSize: {
        width: '94%',
        height: '10%'
    },
    alignCenter: {
        alignItems: 'center'
    },
    headerSize: {
        width: '100%',
        height: '10%'
    },
    levelsSize: {
        width: '94%',
        height: '75%'
    },
    levelsContent: {
        height: '90%',
        width: '100%'
    },
    max: {
        width: '100%',
        height: '100%'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});