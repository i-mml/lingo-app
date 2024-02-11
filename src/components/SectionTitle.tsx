import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SectionTitle = ({ title = "" }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: "#9CA3AF",
        marginTop: 32,
        marginBottom: 16,
        fontSize: 14,
        fontWeight: "700"
    }
})
export default SectionTitle