import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import MenuIcon from '../svgIcons/menu';
import SerchIcon from '../svgIcons/search';
import LingoIcon from '../svgIcons/lingo';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomHeader = (props: any) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{ ...styles.header, ...{ paddingTop: Platform.OS === 'ios' ? insets.top : 16 } }} >
            <SerchIcon />
            <View style={styles.logoBox}>
                <LingoIcon />
                <View>
                    <Text style={styles.title}>لینگولرد</Text>
                    <Text style={styles.subTitle}>Lingolord</Text>
                </View>
            </View>
            <MenuIcon />
        </View >
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 16,
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 10,
        fontWeight: "500",
        color: '#fff',
        textAlign: "right",
        marginTop: 4
    },
    logoBox: {
        flexDirection: "row-reverse",
        gap: 8
    }
});

export default CustomHeader