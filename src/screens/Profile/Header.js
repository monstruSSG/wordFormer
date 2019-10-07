import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

import HeaderBg from '../../assets/profileTopHeader.png';
import BackArrow from '../../assets/backArrowBlue.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
    <ImageBackground style={[styles.max, props.size]} source={HeaderBg} resizeMode='cover'>
        <View style={[styles.ending,  {justifyContent:'center'}]}>
            <TouchableOpacity style={[{ width: '60%', height: '80%'}, styles.center]}>
                <Image source={BackArrow} style={styles.max} resizeMode='contain' />
            </TouchableOpacity>
        </View>
        <View style={[styles.ending]}>

        </View>
    </ImageBackground>
);
