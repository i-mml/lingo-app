import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const LevelTitle = ({ title = "" }) => {
    return (
        <View >
            <Text style={{
                backgroundColor: "#FED702",
                paddingTop: 8,
                paddingBottom: 8,
                paddingHorizontal: 12,
                borderRadius: 20
            }}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </Text>
        </View >
    )
}

const styles = StyleSheet.create({
    title: {
        color: "#74480F",
        fontSize: 12,
        fontWeight: "600",
        width: "auto",
        borderRadius: 20
    }
})

export default LevelTitle