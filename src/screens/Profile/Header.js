import React from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';

import CustomText from '../../components/UI/CustonText';

import HeaderBg from '../../assets/coloredHeader.png';
import BackButton from '../../assets/backArrowBlue.png';
import Levels from '../../assets/levels.png';

export default props => (
    <View style={[styles.container]}>
        <ImageBackground source={HeaderBg} resizeMode='cover' style={[styles.container]}>
            <View style={[styles.center, styles.endsSizes]}>
                <TouchableOpacity style={[styles.center, styles.backButton]} onPress={props.onBack}>
                    <Image source={BackButton} style={styles.max} resizeMode='center' />
                </TouchableOpacity>
            </View>
            <View style={[styles.center, styles.profileTextSize, styles.letterPosition]}>
                <CustomText extra style={styles.letter}>PROFILE</CustomText>
            </View>
            <View style={[styles.center, styles.endsSizes]}>
                <TouchableOpacity style={[styles.center, styles.profileIcon]} onPress={props.onIcon}>
                    <Image source={Levels} style={styles.max} resizeMode='center' />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
    profileTextSize: {
        width: '50%',
        height: '100%'
    },
    endsSizes: {
        width: '25%',
        height: '100%'
    },
    letterPosition: {
        position: 'relative',
        bottom: '4%'
    },
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'row'
    },
    max: {
        height: '100%',
        width: '100%'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    backButton: {
        width: '50%',
        height: '90%',
        position: 'relative',
        right: '10%',
        bottom: '18%'
    },
    profileIcon: {
        width: '42%',
        height: '70%',
        position: 'relative',
        left: '10%',
        bottom: '18%'
    },
    letter: {
        letterSpacing: 2
    }
});