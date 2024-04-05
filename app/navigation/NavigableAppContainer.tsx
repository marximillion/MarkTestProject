/**
 * Imports
 */
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StackParamList} from './StackParamList';
import DetailsScreen from '../screens/InfoScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

/**
 * Initialization
 */
const Stack = createStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator<StackParamList>();

// export const navRef = createNavigationContainerRef<StackParamList>(); TODO: Look into this

/**
 * configures screen order for the main stack
 */
function MainStack() {
  <Stack.Navigator>
    <Stack.Screen name={'Home'} component={HomeScreen} />
    <Stack.Screen name={'Info'} component={DetailsScreen} />
    <Stack.Screen name={'Profile'} component={ProfileScreen} />
  </Stack.Navigator>;
}

/**
 * Main Navigation Container
 *
 * @returns React.JSX.Element
 */
export function NavigableAppContainer() {
  return (
    // ref={navRef}
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
