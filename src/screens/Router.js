import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './Home/Home';
import Game from './Game/Game';
import Profile from './Profile/Profile';

const ApplicationStack = createStackNavigator({
    Home: {
        screen: Home
    },
    Profile: {
        screen: Profile
    },
    Game: {
        screen: Game
    }
}, {
    initialRouteName: 'Home'
});

export default createAppContainer(ApplicationStack);