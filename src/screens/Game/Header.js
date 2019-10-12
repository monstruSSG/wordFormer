import React from 'react';
import { Image, ImageBackground, StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import CustomText from '../../components/UI/CustonText';

import HeaderBg from '../../assets/gameHeader.png';
import BackButton from '../../assets/backArrowBlue.png';
import constants from '../../utils/constants';

const styles = StyleSheet.create({
    max: {
        width: '100%',
        height: '100%'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    ending: {
        width: '20%',
        height: '100%'
    },
    backButton: {
        width: '60%',
        height: '100%',
        position: 'relative',
        bottom: '8%',
        right: '10%'
    },
    middle: {
        width: '60%'
    },
    level: {
        position: 'relative',
        top: '4%'
    },
    rowFlexDirection: {
        flexDirection: 'row'
    }
});

export default props => (
    <ImageBackground style={[styles.max, props.size, styles.rowFlexDirection]} source={HeaderBg} resizeMode='cover'>
        <View style={[styles.ending, styles.center]}>
            <TouchableOpacity style={[styles.center, styles.backButton]} onPress={props.onBack}>
                <Image source={BackButton} style={styles.max} resizeMode='center' />
            </TouchableOpacity>
        </View>
        <View style={[styles.middle]}></View>
        <View style={[styles.ending]}>
            <View style={[styles.level, styles.center]}>
                <CustomText color={constants.BLACK} large>{props.level}</CustomText>
            </View>
        </View>
    </ImageBackground>
);
