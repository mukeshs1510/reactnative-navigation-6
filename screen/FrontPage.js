import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import styles from './components/styles'
import GamingImg from '../assets/gaming_svg.svg'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const FrontPage = ({navigation}) => {
    return (
        <SafeAreaView style={styles.safeAreaStyle}>
            <View style={{marginTop: 30}}>
                <Text style={styles.headingStyle}>GAMEON</Text>
            </View>
            <View style={styles.svgImgContainer}>
            <GamingImg style={styles.svgImg} width={300} height={300}/>
            </View>
            <TouchableOpacity
             onPress={() => navigation.navigate('Home')}
             activeOpacity={0.58} style={styles.buttonStyle}>
                <Text style={styles.normalText}>Let's Begin</Text>
                <MaterialIcons name="arrow-forward-ios" size={22} color="#fff"/>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default FrontPage
