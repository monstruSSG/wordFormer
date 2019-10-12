import React, { Component } from 'react';
import { View, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';

import BaseScreen from '../../components/BaseScreen/BaseScreen';
import CustomText from '../../components/UI/CustonText';

import Logo from '../../assets/logo.png';
import PlayButton from '../../assets/greenButton.png';
import FbButton from '../../assets/fbButton.png';
import ProfilePic from '../../assets/radeCarte.png';
import About from '../../assets/about.png';

class Home extends Component {
    static navigationOptions = {
        header: null,
    }

    navigateLevels = () => this.props.navigation.navigate('Levels');
    navigateProfile = () => this.props.navigation.navigate('Profile');

    render() {
        return (
            <BaseScreen>
                <View style={[styles.max, styles.center]}>
                    <View style={[styles.center, styles.logoContainer]}>
                        <Image source={Logo} resizeMode='contain' style={styles.logoSize} />
                    </View>
                    <View style={[styles.buttonsContainer, styles.buttonsPosition]}>
                        <View style={[styles.half, styles.centerOX, styles.flexEnd]}>
                            <TouchableOpacity style={[styles.playButton, styles.center]} onPress={this.navigateLevels}>
                                <ImageBackground source={PlayButton} style={styles.playButton} resizeMode='contain'>
                                    <View style={[styles.center, styles.playButton]}>
                                        <CustomText large>PLAY</CustomText>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.half, styles.centerOX]}>
                            <TouchableOpacity style={[styles.playButton, styles.center]}>
                                <ImageBackground source={FbButton} style={styles.playButton} resizeMode='contain'>
                                    <View style={[styles.center, styles.playButton]}>
                                        <CustomText large>SHARE ON FB</CustomText>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.bottomContainer, styles.row]}>
                        <View style={[styles.styleSmallIconsSize, styles.aboutPosition]}>
                            <TouchableOpacity style={[styles.max, styles.centerOY]} onPress={this.navigateProfile}>
                                <Image source={About} style={styles.rade} resizeMode='contain' />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.styleSmallIconsSize, styles.center, styles.profilePosition]}>
                            <TouchableOpacity style={[styles.max, styles.flexEnd, styles.centerOY]} onPress={this.navigateProfile}>
                                <Image source={ProfilePic} style={styles.rade} resizeMode='contain' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </BaseScreen>
        );
    }
}

const styles = StyleSheet.create({
    flexEnd: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    centerOX: {
        alignItems: 'center'
    },
    centerOY: {
        justifyContent: 'center'
    },
    styleSmallIconsSize: {
        height: '80%',
        width: '50%'
    },
    row: {
        flexDirection: 'row'
    },
    aboutPosition: {
        position: 'relative',
        right: '15%'
    },
    profilePosition: {
        position: 'relative',
        left: '15%'
    },
    rade: {
        width: '80%',
        height: '65%'
    },
    buttonsPosition: {
        position: 'relative',
        top: '5%'
    },
    playButton: {
        width: '100%',
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