import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

import HeaderBg from '../../assets/gameHeader.png';

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
    middle: {
        height: '100%',
        width: '60%'
    }
});

export default props => (
    <ImageBackground style={[styles.max, props.size, styles.center]} source={HeaderBg} resizeMode='cover'>
        <View style={[styles.ending]}>

        </View>
        <View style={[styles.middle]}>
        </View>
        <View style={[styles.ending]}>

        </View>
    </ImageBackground>
);
