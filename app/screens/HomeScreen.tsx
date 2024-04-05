import { StackNavigationProp } from '@react-navigation/stack';
import {Component, ReactNode} from 'react';
import {Button, Dimensions, Image, ImageBackground, KeyboardAvoidingView, StatusBar, StyleSheet, Text} from 'react-native';
import { StackParamList } from '../navigation/StackParamList';
import { Route, RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

/**
 * Props
 */
interface Props {
  navigation: StackNavigationProp<StackParamList, 'Home'>
  route: RouteProp<StackParamList, 'Home'>
}

export interface HomeProps {

}
/**
 * State
 */
interface State {

}

export default class HomeScreen extends Component<Props, State> {
  /**
   * Constructor
   * 
   * @param props
   */
  constructor(props: Props) {
    super(props);
    console.log('HomeScreen::Constructor::Firing');

    this.state = {

    };
  } // End of contructor()

  /**
   * on Mount
   */
  public componentDidMount(): void {
    console.log('HomeScreen::OnMount::Firing');
  } // End of componentDidMount()

  /**
   * on UnMount
   */
  public componentWillUnmount(): void {
    console.log('HomeScreen::UnMount::Firing');
  } // End of componentWillMount()

  /**
   * Render HomeScreen
   * 
   * @returns ReactNode
   */
  public render(): ReactNode {
    console.log('HomeScreen::Render::Firing');
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
      <>
        <ImageBackground
          source={require('../assets/backgroundImage.jpg')}
          resizeMode='cover'
          style={[styles.image, { opacity: 0.8 }]}
        >
        <StatusBar barStyle={"dark-content"}  translucent backgroundColor={"transparent"}></StatusBar>
        <SafeAreaView style={styles.safeAreaContainer}>
          <KeyboardAvoidingView style={styles.mainContainer}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                  ENTER IF YOU DARE
                </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
          </SafeAreaView>
        </ImageBackground>
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
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: "100%",
  },
  button: {
    backgroundColor: 'rgba(255, 105, 180, 0.2)', // Pinkish color with 60% transparency
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // Shadow effect
    width: 300,
    height: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});