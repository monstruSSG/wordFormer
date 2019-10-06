import React, { Component } from 'react';
import { View, Text } from 'react-native';

import BaseScreen from '../../components/BaseScreen/BaseScreen';

class Home extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <BaseScreen>
                <View>
                    <Text>
                        Home
                    </Text>
                </View>
            </BaseScreen>
        );
    }
}

export default Home;