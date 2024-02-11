import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import LevelTitle from '../components/LevelTitle';


const HomeScreen = ({ navigation }: any) => {
    const images = [
        "https://www.niikidaily.info/wp-content/uploads/2023/07/Barbie1.webp",
        "https://cutmedia.tv/wp-content/uploads/2023/11/OPENHIMER.webp",
        "https://gharbtv.com/wp-content/uploads/2021/12/The-Batman-2022.jpg",
        "https://filmsara.info/wp-content/uploads/2021/12/the-godfather-part-ii-1300.jpg",
        "https://upload.wikimedia.org/wikipedia/fa/d/df/John_Wick_-_Chapter_4_promotional_poster.jpg.webp   "
    ]
    return (
        <ScrollView style={styles.container}>
            <View style={styles.reportsList}>
                <View style={styles.reportsBox}>
                    <Text style={{ ...styles.reportTitle, ...{ color: "#61D058" } }}>۳ لغت</Text>
                    <Ionicons name="school-outline" size={24} color="#61D058" />
                </View>
                <View style={styles.reportsBox}>
                    <Text style={{ ...styles.reportTitle, ...{ color: "#88C1FF" } }}>۸۸ لغت</Text>
                    <Ionicons name="person-add-outline" size={24} color="#88C1FF" />
                </View>
                <View style={styles.reportsBox}>
                    <Text style={{ ...styles.reportTitle, ...{ color: "#FFDA1B" } }}>00:58 ساعت</Text>
                    <Ionicons name="eye-outline" size={24} color="#FFDA1B" />
                </View>
            </View>

            <Image
                source={require("../../assets/catalog-player-banner.png")}
                style={styles.playerBanner}
            />
            <View style={styles.lvlTitle}>
                <LevelTitle title='سطح: متوسط' />
            </View>

            <FlatList
                data={images}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.sliderImageBox}>
                        <Image
                            source={{ uri: item }}
                            style={styles.sliderImage}
                            resizeMode="cover"
                        />
                    </View>
                )}
            />


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 8,
        paddingHorizontal: 16
    },
    reportsList: {
        alignItems: 'center',
        justifyContent: "space-between",
        flexDirection: "row-reverse",
        width: "100%",
        paddingHorizontal: 20
    },
    reportsBox: {
        alignItems: 'center',
        flexDirection: "row",
        gap: 4
    },
    reportTitle: {
        fontSize: 12,
        fontWeight: "500",
    },
    playerBanner: {
        width: Dimensions.get('window').width * 0.888,
        height: Dimensions.get('window').width * 0.555,
        marginHorizontal: "auto",
        marginTop: 24
    },
    lvlTitle: {
        marginTop: 24,
        marginBottom: 16,
        alignItems: "flex-end"
    },
    sliderImageBox: {
        width: Dimensions.get('window').width * 0.433,
        height: Dimensions.get('window').width * 0.638,
        borderRadius: 16,
        marginHorizontal: Dimensions.get('window').width * 0.022,

    },
    sliderImage: {
        width: "100%",
        height: "100%",
        borderRadius: 16,
    }
});

export default HomeScreen;