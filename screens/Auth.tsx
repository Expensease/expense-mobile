import {useContext} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {AuthContext} from '../context/authContext';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../router';

export function Auth({navigation}) {
  const {setAuth} = useContext(AuthContext);
  const {navigate} = useNavigation();
  const doLogin = () => {
    setAuth(crr => ({
      ...crr,
      isLoggedIn: true,
    }));
    // console.log('navigation', navigation);
    navigate(ROUTES.Home);
  };
  return (
    <View style={{padding: 10, gap: 10}}>
      {/* <Text>Auth Page</Text> */}
      <Button mode="contained" onPress={doLogin}>
        Mock Login
      </Button>
    </View>
  );
}
