import React, { Component } from 'react';
import { StyleSheet, Image, View, Modal, Animated } from 'react-native';

import CONSTANTS from '../../utils/constants';

import Icon from '../../assets/levelFace2.png';

const styles = StyleSheet.create({
    max: {
        width: '100%',
        height: '100%'
    },
    backgroundColor: {
        backgroundColor: CONSTANTS.MODAL_BACKGROUND_COLOR
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: '30%',
        height: '30%'
    }
});

export default class LoadingModal extends Component {
    state = {
        animatedValue: new Animated.Value(0)
    }

    componentDidMount() {
        
        Animated.loop(
            Animated.timing(this.state.animatedValue, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true
            })
        ).start();
    }

    render() {
        const spinStyle = {
            transform: [
                {
                    rotate: this.state.animatedValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '360deg']
                    })
                }
            ]
        };

        return (
            <Modal transparent visible={this.props.isVisible}>
                <View style={[styles.center, styles.icon, styles.max, styles.backgroundColor]}>
                    <Animated.View style={[styles.icon, styles.center, { ...spinStyle }]}>
                        <Image source={Icon} resizeMode='contain' style={styles.max} />
                    </Animated.View>
                </View>
            </Modal>
        );
    }
}