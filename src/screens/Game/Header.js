import React from 'react';
import { Image, ImageBackground, StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import HeaderBg from '../../assets/gameHeader.png';
import BackButton from '../../assets/backArrowBlue.png';

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
    }
});

export default props => (
    <ImageBackground style={[styles.max, props.size]} source={HeaderBg} resizeMode='cover'>
        <View style={[styles.ending, styles.center]}>
            <TouchableOpacity style={[styles.center, styles.backButton]} onPress={() => alert('Back')}>
                <Image source={BackButton} style={styles.max} resizeMode='center' />
            </TouchableOpacity>
        </View>
    </ImageBackground>
);
