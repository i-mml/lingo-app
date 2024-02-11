
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import AppNavigation from './src/navigation';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar animated barStyle={"light-content"} />
            <AppNavigation />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
