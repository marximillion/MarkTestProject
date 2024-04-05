import { StackNavigationProp } from '@react-navigation/stack';
import {Component, ReactNode} from 'react';
import {StyleSheet, Text} from 'react-native';
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
    // console.log(this.props.user);

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
        <Text>Success to InfoScreen</Text>
      </>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    margin: 10,
  },
});
