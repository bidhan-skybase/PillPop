import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/root-navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '@rneui/themed';
import theme from './src/styles/theme.ts';
import { StatusBar} from 'react-native';
import {Provider} from "react-redux";
import store from "./src/redux/store.ts";

function App(): React.JSX.Element {
  return (
      <Provider store={store}>
          <SafeAreaProvider>
              <NavigationContainer>
                  <ThemeProvider theme={theme}>
                      <StatusBar barStyle="dark-content" />
                      <RootNavigator />
                  </ThemeProvider>
              </NavigationContainer>
          </SafeAreaProvider>
      </Provider>

  );
}


export default App;
