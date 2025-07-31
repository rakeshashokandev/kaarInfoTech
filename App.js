import { NewAppScreen } from '@react-native/new-app-screen';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import Navigation from './src/navigation/Navigation';

function App() {
  return (
   <NavigationContainer>
    <Navigation/>
   </NavigationContainer>
  );
}



export default App;
