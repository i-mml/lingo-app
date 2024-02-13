
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import AppNavigation from './src/navigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    return (
        <SafeAreaProvider style={styles.container}>
            <StatusBar animated barStyle={"light-content"} />
            <AppNavigation />
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
