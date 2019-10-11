import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './Home/Home';
import Game from './Game/Game';
import Profile from './Profile/Profile';
import Levels from './Levels/Levels';

const ApplicationStack = createStackNavigator({
    Levels:{
        screen: Levels
    },
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