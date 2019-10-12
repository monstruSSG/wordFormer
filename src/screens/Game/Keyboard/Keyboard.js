import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import Key from './Key';


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

    square = letter => <View style={[styles.center, styles.square, {
        height: Number(this.state.cellSize),
        width: Number(this.state.cellSize),

    }]}>
        <Key
            textSize={Math.floor(this.state.cellSize * 2 / 3)}
            letter={letter}
        />
    </View>

    render() {

        return (
            <View style={[styles.buttonSize, styles.backgroundColor, styles.center]}>
                {keys.map(line => <View style={[styles.key, { height: this.state.cellSize, }, styles.center]}>
                    {line.map(element => this.square(element))}
                </View>)}
            </View>
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

