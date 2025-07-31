import {MD3LightTheme as DefaultTheme} from 'react-native-paper';

const CustomThemes = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: 'YourCustomFont-Regular', // Replace with your font's name
    medium: 'YourCustomFont-Medium', // Replace with your font's name
    segoeregular: 'segoe-regular',
    segoebold: 'segoe-bold',
    // You can define other font styles (e.g., bold) here if needed
  },
};

export default CustomThemes;
