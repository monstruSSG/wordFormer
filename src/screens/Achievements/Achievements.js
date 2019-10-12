import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import CustomText from '../../components/UI/CustonText';

export default class Achievements extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <View>
                <CustomText>Achievements</CustomText>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});