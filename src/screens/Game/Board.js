import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, View, Dimensions } from 'react-native';

import CustomText from '../../components/UI/CustonText';

import Grey from '../../assets/greySquare.png';
import White from '../../assets/lightGreySquare.png';

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cellSize: Math.floor(Number(Dimensions.get('window').width) / props.size)
        };
    }

    square = (color, letter) => <View style={[styles.center, {
        height: Number(this.state.cellSize),
        width: Number(this.state.cellSize),
        margin: '1%'
    }]}>
        <TouchableOpacity style={[styles.center, styles.max]}>
            <ImageBackground source={color === 'white' ? White : Grey} style={[styles.center, styles.max]} resizeMode='stretch'>
                <CustomText size={Math.floor(this.state.cellSize * 2 / 3)}>{letter ? letter : ''}</CustomText>
            </ImageBackground>
        </TouchableOpacity>
    </View>

    render() {

        return (
            <View style={[styles.max, styles.backgroundColor, styles.center]}>
                {this.props.lines.map(line => <View style={[{
                    margin: '2%',
                    width: '100%',
                    height: this.state.cellSize,
                    flexDirection: 'row'
                }, styles.center]}>
                    {line.map(element => this.square(element.color, element.letter))}
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
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

