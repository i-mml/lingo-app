import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const LevelTitle = ({ title = "" }) => {
    return (
        <View >
            <Text>
                <Text style={styles.title}>
                    {title}
                </Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({

    title: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        color: "#74480F",
        fontSize: 12,
        fontWeight: "600",
        backgroundColor: "#FED702",
        width: "auto",
        borderRadius: 20
    }
})

export default LevelTitle