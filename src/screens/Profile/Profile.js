import React, { Component } from 'react';
import { View, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';

import BaseScreen from '../../components/BaseScreen/BaseScreen';
import CustomText from '../../components/UI/CustonText';

class Profile extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <BaseScreen>
                <CustomText large>profile</CustomText>
            </BaseScreen>
        );
    }
}

const styles = StyleSheet.create({
});

export default Profile;