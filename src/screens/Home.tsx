import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const HomeScreen = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.reportsList}>
                <View style={styles.reportsBox}>
                    <Text style={{ ...styles.reportTitle, ...{ color: "#61D058" } }}>۳ لغت</Text>
                    <Ionicons name="school-outline" size={32} color="#61D058" />
                </View>
                <View style={styles.reportsBox}>
                    <Text style={{ ...styles.reportTitle, ...{ color: "#88C1FF" } }}>۸۸ لغت</Text>
                    <Ionicons name="person-add-outline" size={32} color="#88C1FF" />
                </View>
                <View style={styles.reportsBox}>
                    <Text style={{ ...styles.reportTitle, ...{ color: "#FFDA1B" } }}>00:58 ساعت</Text>
                    <Ionicons name="eye-outline" size={32} color="#FFDA1B" />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 8
    },
    reportsList: {
        alignItems: 'center',
        justifyContent: "space-between",
        flexDirection: "row-reverse",
        width: "100%",
        paddingHorizontal: 38
    },
    reportsBox: {
        alignItems: 'center',
        flexDirection: "row",
        gap: 4
    },
    reportTitle: {
        fontSize: 16,
        fontWeight: "500",
    }
});

export default HomeScreen;