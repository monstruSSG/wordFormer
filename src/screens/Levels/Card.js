import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

import CONSTANTS from '../../utils/constants';
import CustomText from '../../components/UI/CustonText';

import Icon1 from '../../assets/levelFace1.png'
import Icon2 from '../../assets/levelFace2.png'
import PlayButton from '../../assets/greenPlayButton.png';

export default props => (
    <View style={[styles.max, styles.content, styles.rowFlexDirection]}>
        <View style={[styles.center, styles.icon]}>
            <Image
                style={[styles.max]}
                resizeMode='contain'
                source={props.iconOne ?  Icon1: Icon2}
            />
        </View>
        <View style={[styles.description]}>
            <CustomText normal color={CONSTANTS.BLACK}>Level {props.level}</CustomText>
            <CustomText large color={props.finished ? CONSTANTS.GREEN : CONSTANTS.RED}>{props.finished ? 'FINISHED' : 'NOT DONE'}</CustomText>
        </View>
        <View style={[styles.buttonContent]}>
            <TouchableOpacity style={[styles.center,styles.buttonSize]} onPress={props.onPlay}>
                <Image style={styles.max} resizeMode='contain' source={PlayButton} />
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    buttonSize: {
        width: '80%',
        height: '100%'
    },
    buttonContent: {
        width: '20%',
        height: '100%'
    },
    description: {
        width: '60%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: '4%'
    },
    rowFlexDirection: {
        flexDirection: 'row'
    },
    icon: {
        width: '20%',
        height: '90%'
    },
    line: {
        height: 12,
        width: '100%'
    },
    max: {
        width: '100%',
        height: '100%'
    },
    content: {
        borderBottomColor: CONSTANTS.GREY,
        borderBottomWidth: 1
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});