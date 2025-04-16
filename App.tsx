import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/root-navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from "@rneui/themed";
import theme from "./theme.ts";

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
          <ThemeProvider theme={theme}>
              <RootNavigator></RootNavigator>
          </ThemeProvider>

      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
