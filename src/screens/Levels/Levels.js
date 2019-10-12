import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import CustomText from '../../components/UI/CustonText';
import BaseScreen from '../../components/BaseScreen/BaseScreen';
import Header from './Header';

export default class Levels extends Component {
    static navigationOptions = {
        header: null,
    }

    navigateHome = () => this.props.navigation.navigate('Home');
    navigateProfile = () => this.props.navigation.navigate('Profile');

    render() {
        return (
            <BaseScreen>
                <View style={[styles.max]}>
                    <View style={[styles.headerSize]}>
                        <Header 
                            onBack={this.navigateHome}
                            onIcon={this.navigateProfile}
                        />
                    </View>
                    <CustomText>LEVLES</CustomText>
                </View>
            </BaseScreen>
        );
    }
}

const styles = StyleSheet.create({
    headerSize: {
        width: '100%', 
        height: '10%'
    },
    max: {
        width: '100%',
        height: '100%'
    }
});