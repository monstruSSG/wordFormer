import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, View, Dimensions } from 'react-native';

import CustomText from '../../components/UI/CustonText';

import BlackCard from '../../assets/blueCard.png';


const keys = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
]

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cellSize: Math.floor(Number(Dimensions.get('window').width) / 12) - 2
        };
    }

    square = letter => <View style={[styles.center, {
        height: Number(this.state.cellSize),
        width: Number(this.state.cellSize),
        marginLeft: 2,
        marginRight: 2
    }]}>
        <TouchableOpacity style={[styles.center, styles.max]} onPress={() => this.props.onKeyPress(letter)}>
            <ImageBackground source={BlackCard} style={[styles.center, styles.max]} resizeMode='stretch'>
                <CustomText size={Math.floor(this.state.cellSize * 2 / 3)}>{letter}</CustomText>
            </ImageBackground>
        </TouchableOpacity>
    </View>

    render() {

        return (
            <View style={[styles.buttonSize, styles.backgroundColor, styles.center]}>
                {keys.map(line => <View style={[{
                    marginBottom: 2,
                    marginTop: 2,
                    width: '100%',
                    height: this.state.cellSize,
                    flexDirection: 'row'
                }, styles.center]}>
                    {line.map(element => this.square(element))}
                </View>)}
            </View>
        );
    }
};

const styles = StyleSheet.create({
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

