import React, { Component } from 'react';
import { View, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';

import BaseScreen from '../../components/BaseScreen/BaseScreen';
import CustomText from '../../components/UI/CustonText';
import Header from './Header';

import ProfileIcon from '../../assets/profileIconSimple.png';
import StatsBg from '../../assets/stats.png';
import BlackBg from '../../assets/blackButton.png';
import YellowBg from '../../assets/yellowButton.png';
import FbShareBg from '../../assets/fbShareQuadrat.png';
import GreenBg from '../../assets/greenPanel.png';

class Profile extends Component {
    static navigationOptions = {
        header: null,
    }

    navigateHome = () => this.props.navigation.navigate('Home');
    navigateLevels = () => this.props.navigation.navigate('Levels')

    render() {
        return (
            <BaseScreen>
                <View style={[styles.max, { alignItems: 'center' }]}>
                    <View style={[styles.headerSize]}>
                        <Header
                            onBack={this.navigateHome}
                            onIcon={this.navigateLevels}
                        />
                    </View>
                    <View style={[styles.nameSize, styles.row]}>
                        <View style={[styles.half, styles.center, styles.profileIconPosition]}>
                            <Image style={[styles.profileIconSize]} source={ProfileIcon} resizeMode='contain' />
                        </View>
                        <View style={[styles.half, styles.center, styles.namePosition]}>
                            <ImageBackground style={[styles.blackButtonSize, styles.center]} source={BlackBg} resizeMode='contain'>
                                <CustomText extra>YOUR{'\n'}
                                    <CustomText normal>PROFILE</CustomText>
                                </CustomText>
                            </ImageBackground>
                        </View>
                    </View>
                    <View style={[styles.statsSize]}>
                        <ImageBackground style={[styles.max]} resizeMode='contain' source={StatsBg}>
                            <View style={[styles.center, styles.statsHeader]}>
                                <CustomText large>LEVELS</CustomText>
                            </View>
                            <View style={[styles.center, styles.row, styles.statsContent]}>
                                <View style={[{ flex: 1 }, styles.center]}>
                                    <View style={[styles.statsHeaderText, styles.oxCenter]}>
                                        <CustomText color='#bcbcbb'>DONE</CustomText>
                                    </View>
                                    <View style={[styles.oxCenter, styles.statsHeaderResult]}>
                                        <CustomText extra color='#9cc028ff'>12</CustomText>
                                    </View>
                                </View>
                                <View style={[{ flex: 1 }, styles.center]}>
                                    <View style={[styles.statsHeaderText, styles.oxCenter]}>
                                        <CustomText color='#bcbcbb'>LOST</CustomText>
                                    </View>
                                    <View style={[styles.oxCenter, styles.statsHeaderResult]}>
                                        <CustomText extra color='#e13344ff'>2</CustomText>
                                    </View>
                                </View>
                                <View style={[{ flex: 1 }, styles.center]}>
                                    <View style={[styles.statsHeaderText, styles.oxCenter]}>
                                        <CustomText color='#bcbcbb'>NOT PLAYED</CustomText>
                                    </View>
                                    <View style={[styles.oxCenter, styles.statsHeaderResult]}>
                                        <CustomText extra color='#f19800ff'>3</CustomText>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={[styles.bottomContent, styles.center, styles.row]}>
                        <View style={[styles.half, styles.center]}>
                            <ImageBackground style={[styles.max, styles.center]} resizeMode='contain' source={GreenBg}>
                                <View style={[{ width: '84%', height: '30%'}, styles.center]}>
                                    <CustomText large>GAMES</CustomText>
                                </View>
                                <View style={[{ width: '70%', height: '40%'}, styles.center]}>
                                    <CustomText giant>80<CustomText normal>%</CustomText></CustomText>
                                </View>
                                <View style={[{ width: '70%', height: '30%'}, styles.center]}>
                                    <CustomText normal>FINISHED</CustomText>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={[styles.half]}>
                            <View style={[{ width: '100%', height: '50%' }]}>
                                <ImageBackground style={[styles.max, styles.center]} resizeMode='contain' source={YellowBg}>
                                    <CustomText large color='#444142ff'>
                                        SEE{'\n'}<CustomText color='#444142ff'>ACHIEVEMENTS</CustomText>
                                    </CustomText>
                                </ImageBackground>
                            </View>
                            <View style={[{ width: '100%', height: '50%' }]}>
                                <ImageBackground style={[styles.max, styles.center]} resizeMode='contain' source={FbShareBg}>
                                    <CustomText large>
                                        FB{'\n'}<CustomText>SHARE YOUR PROFILE</CustomText>
                                    </CustomText>
                                </ImageBackground>
                            </View>
                        </View>
                    </View>
                </View>
            </BaseScreen>
        );
    }
}

const styles = StyleSheet.create({
    bottomContent: {
        width: '94%',
        height: '34%'
    },
    blackButtonSize: {
        width: '100%',
        height: '80%'
    },
    namePosition: {
        position: 'relative',
        right: '8%'
    },
    profileIconPosition: {
        position: 'relative',
        right: '4%'
    },
    profileIconSize: {
        width: '100%',
        height: '90%'
    },
    half: {
        width: '50%',
        height: '100%'
    },
    statsHeaderText: {
        height: '30%',
        width: '100%',
        position: 'relative',
        top: '8%'
    },
    statsHeaderResult: {
        height: '70%',
        width: '100%'
    },
    statsContent: {
        height: '58%',
        width: '100%'
    },
    row: {
        flexDirection: 'row'
    },
    statsHeader: {
        width: '100%',
        height: '35%',
        position: 'relative',
        top: '5%'
    },
    oxCenter: {
        alignItems: 'center'
    },
    nameSize: {
        width: '100%',
        height: '25%'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    max: {
        width: '100%',
        height: '100%'
    },
    headerSize: {
        width: '100%',
        height: '15%'
    },
    statsSize: {
        height: '25%',
        width: '94%'
    }
});

export default Profile;