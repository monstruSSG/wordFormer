import React from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';

import CustomText from '../../components/UI/CustonText';

import HeaderBg from '../../assets/blueHeader.png';
import BackButton from '../../assets/backArrowBlue.png';
import ProfilePic from '../../assets/radeCarte.png';

export default props => (
    <View style={[styles.container]}>
        <ImageBackground source={HeaderBg} resizeMode='cover' style={[styles.container]}>
            <View style={[styles.center, { width: '25%', height: '100%' }]}>
                <TouchableOpacity style={[styles.center, styles.backButton]} onPress={props.onBack}>
                    <Image source={BackButton} style={styles.max} resizeMode='center' />
                </TouchableOpacity>
            </View>
            <View style={[styles.center, { width: '50%', height: '100%' }]}>
                <CustomText extra style={styles.letter}>LEVELS</CustomText>
            </View>
            <View style={[styles.center, { width: '25%', height: '100%' }]}>
                <TouchableOpacity style={[styles.center, styles.profileIcon]} onPress={props.onIcon}>
                    <Image source={ProfilePic} style={styles.max} resizeMode='center' />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
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
        right: '10%'
    },
    profileIcon: {
        width: '60%',
        height: '70%',
        position: 'relative',
        left: '10%'
    },
    letter: {
        letterSpacing: 4
    }
});