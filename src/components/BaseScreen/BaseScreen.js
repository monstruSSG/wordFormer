import React from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

import Background from '../../assets/background.png';

const styles = StyleSheet.create({
    max: {
        width: '100%',
        height: '100%'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default props => (
    <SafeAreaView style={styles.max}>
        <ImageBackground source={Background} style={[styles.max, styles.center]} resizeMode='cover'>
            {props.children}
        </ImageBackground>
    </SafeAreaView>
);