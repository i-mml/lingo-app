import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import LevelTitle from '../components/LevelTitle';
import Carousel from 'react-native-reanimated-carousel';

const HomeScreen = ({ navigation }: any) => {

    return (
        <View style={styles.container}>
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

            <View style={{ flex: 1 }}>
                {/* <Carousel
                    loop
                    width={320}
                    height={320}
                    autoPlay={true}
                    data={[...new Array(6).keys()]}
                    scrollAnimationDuration={500}
                    onSnapToItem={(index: number) => console.log('current index:', index)}
                    panGestureHandlerProps={{
                        activeOffsetX: [-10, 10],
                    }}

                    renderItem={({ index }) => (
                        <View
                            style={{
                                backgroundColor: "blue"
                            }}
                        >
                            <Text style={{ textAlign: 'center', fontSize: 30, color: "red" }}>
                                {index}
                            </Text>
                        </View>
                    )}
                /> */}
            </View>


        </View>
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
        marginBottom: 16
    }
    ,
    slider: {
        width: "100%"
    },
    slide: {
        width: "100%"
    }
});

export default HomeScreen;