import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

import CustomText from '../../components/UI/CustonText';

import OrangeHolder from '../../assets/orangeModal.png';

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    justCenter: {
        justifyContent: 'center'
    },
    max: {
        width: '100%',
        height: '100%'
    }
});

export default props => (
    <View style={[styles.justCenter, styles.max]}>
        <ImageBackground source={OrangeHolder} style={[styles.justCenter, styles.max]} resizeMode='center' >
            <CustomText>Ceau</CustomText>
        </ImageBackground>
    </View>
);