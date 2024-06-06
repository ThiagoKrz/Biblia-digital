import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BookScreen from "./screens/BookScreen";
import ChapterScreen from "./screens/ChapterScreen";
import VerseScreen from "./screens/VerseScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="book">
        <Stack.Screen name="book" component={BookScreen} />
        <Stack.Screen name="chapter" component={ChapterScreen} />
        <Stack.Screen name="verse" component={VerseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
