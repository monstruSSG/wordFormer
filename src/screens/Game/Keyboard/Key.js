import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, Animated, Easing } from 'react-native';

import CustomText from '../../../components/UI/CustonText';

import BlueCard from '../../../assets/blueCard.png';

export default class Key extends Component {
    state = {
        animated: new Animated.Value(1)
    }

    animation = () => Animated.sequence([
        Animated.timing(this.state.animated, {
            toValue: 1.3,
            duration: 300,
            useNativeDriver: true
        }),
        Animated.timing(this.state.animated, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        })
    ]).start();

    render() {
        const scaleAnimation = {
            transform: [
                { scale: this.state.animated }
            ]
        }

        return (
            <Animated.View style={[styles.center, styles.max, { ...scaleAnimation }]}>
                <TouchableOpacity style={[styles.center, styles.max]} onPress={this.animation}>
                    <ImageBackground source={BlueCard} style={[styles.center, styles.max]} resizeMode='stretch'>
                        <CustomText size={this.props.textSize}>{this.props.letter}</CustomText>
                    </ImageBackground>
                </TouchableOpacity>
            </Animated.View>
        );
    }
};

const styles = StyleSheet.create({
    square: {
        marginLeft: 2,
        marginRight: 2
    },
    key: {
        marginBottom: 2,
        marginTop: 2,
        width: '100%',
        flexDirection: 'row'
    },
    max: {
        width: '100%',
        height: '100%'
    },
    buttonSize: {
        width: '90%',
        height: '90%'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
