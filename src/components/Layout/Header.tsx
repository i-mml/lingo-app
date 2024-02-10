import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import MenuIcon from '../svgIcons/menu';
import SerchIcon from '../svgIcons/search';
import LingoIcon from '../svgIcons/lingo';

const CustomHeader = (props: any) => {
    return (
        <View style={styles.header}>
            <SerchIcon />
            <View>
                <LingoIcon />
                <Text style={styles.title}>لینگولرد</Text>
            </View>
            <MenuIcon />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 16
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CustomHeader