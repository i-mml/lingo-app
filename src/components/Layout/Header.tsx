import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

const CustomHeader = (props: any) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props?.title}</Text>
            <Ionicons name="menu" size={32} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        paddingTop: 10,
        backgroundColor: '#f4511e',
        alignItems: 'center',
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 16
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CustomHeader