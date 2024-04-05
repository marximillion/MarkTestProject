import { StackNavigationProp } from '@react-navigation/stack';
import {Component, ReactNode} from 'react';
import {ImageBackground, KeyboardAvoidingView, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { StackParamList } from '../navigation/StackParamList';
import { RouteProp } from '@react-navigation/native';

/**
 * Props
 */
interface Props {
  navigation: StackNavigationProp<StackParamList, 'Info'>
  route: RouteProp<StackParamList, 'Info'>
}

export interface InfoProps {
}

/**
 * State
 */
interface State {
  firstName: string;
  lastName: string;
  age: number | null;
}

export default class InfoScreen extends Component<Props, State> {
  /**
   *
   * @param props
   */
  constructor(props: Props) {
    super(props);
    console.log('InfoScreen::Constructor::Firing');

    this.state = {
      firstName: '',
      lastName: '',
      age: null,
    };
  } // End of contructor()

  /**
   * on Mount
   */
  public componentDidMount(): void {
    console.log('InfoScreen::OnMount::Firing');
  } // End of componentDidMount()

  /**
   * on UnMount
   */
  public componentWillUnmount(): void {
    console.log('InfoScreen::UnMount::Firing');
  } // End of componentWillMount()

  public render(): ReactNode {
    console.log('InfoScreen::Render::Firing');

    return (
      <>
        <StatusBar barStyle={"dark-content"}  translucent backgroundColor={"transparent"}></StatusBar>
        <SafeAreaView style={styles.safeAreaContainer}>
          <KeyboardAvoidingView style={styles.mainContainer}>
              <Text style={styles.mainText}>
                WELCOME TO THE GREATEST APP IN THE WORLD
              </Text>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    width: '100%',
  },
  mainContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    paddingTop: 150,
  },
  mainText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    margin: 10,
  },
});
