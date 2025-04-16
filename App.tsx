import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import RootNavigator from "./src/navigation/root-navigator";

function App(): React.JSX.Element {
    return (
        <NavigationContainer>
          <RootNavigator></RootNavigator>
        </NavigationContainer>
  );
}


export default App;
