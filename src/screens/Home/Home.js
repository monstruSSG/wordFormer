import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

import BaseScreen from '../../components/BaseScreen/BaseScreen';
import CustomText from '../../components/UI/CustonText';

import Logo from '../../assets/logo.png';
import PlayButton from '../../assets/greenButton.png';
import FbButton from '../../assets/fbButton.png';
import ProfilePic from '../../assets/radeCarte.png';

class Home extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <BaseScreen>
                <View style={[styles.max, styles.center]}>
                    <View style={[styles.center, styles.logoContainer]}>
                        <Image source={Logo} resizeMode='contain' style={styles.logoSize} />
                    </View>
                    <View style={[styles.buttonsContainer, styles.buttonsPosition]}>
                        <View style={[styles.half, { alignItems: 'center', justifyContent: 'flex-end' }]}>
                            <ImageBackground source={PlayButton} style={styles.playButton} resizeMode='contain'>
                                <View style={[styles.center, styles.playButton]}>
                                    <CustomText large>PLAY</CustomText>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={[styles.half, { alignItems: 'center' }]}>
                            <ImageBackground source={FbButton} style={styles.playButton} resizeMode='contain'>
                                <View style={[styles.center, styles.playButton]}>
                                    <CustomText large>SHARE ON FB</CustomText>
                                </View>
                            </ImageBackground>
                        </View>
                    </View>
                    <View style={[styles.bottomContainer, { flexDirection: 'row', justifyContent: 'flex-end' }]}>
                        <View style={[{ height: '120%', width: '30%'}, styles.center]}>
                            <Image source={ProfilePic} style={styles.playButton} resizeMode='cover' />
                        </View>
                    </View>
                </View>
            </BaseScreen>
        );
    }
}

const styles = StyleSheet.create({
    buttonsPosition: {
        position:'relative',
        top: '5%',
        left: '5%'
    },
    playButton: {
        width: '90%',
        height: '80%'
    },
    half: {
        width: '100%',
        height: '50%'
    },
    max: {
        width: '100%',
        height: '100%'
    },
    logoSize: {
        width: '85%',
        height: '90%'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        width: '100%',
        height: '50%'
    },
    buttonsContainer: {
        width: '100%',
        height: '35%'
    },
    bottomContainer: {
        width: '100%',
        height: '15%'
    }
});

export default Home;