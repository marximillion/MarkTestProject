/**
 * imports
 */
import React, {Component, ReactNode} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './app/screens/HomeScreen.tsx';
import {NavigableAppContainer} from './app/navigation/NavigableAppContainer.tsx';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

/**
 * Props
 */
interface Props {
}

/**
 * State
 */
interface State {

}

/**
 * App Screen
 */
export default class App extends Component<Props, State> {
  /**
   * Constructor
   * 
   * @param props
   */
  constructor(props: Props) {
    super(props);
    console.log('Constructor::Firing');

    this.state = {

    };
  } // End of contructor()

  /**
   * on Mount
   */
  public componentDidMount(): void {
    console.log('App::DidMount');
  }// End of componentDidMount()

  /**
   * on UnMount
   */
  public componentWillUnmount(): void {
    console.log('App::Unmount');
  }// End of componentWillUnmount

  /**
   * Render Main
   * 
   * @returns ReactNode
   */
  public render(): ReactNode {
    console.log('App::Render::Firing');

    return (
      <>
        <NavigableAppContainer />
      </>
    );
  } // End of render()
} // End of class()
// End of file
