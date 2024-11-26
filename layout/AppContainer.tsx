import React, {PropsWithChildren, useEffect} from 'react';
import {View} from 'react-native';
import {AuthContext} from '../context/authContext';

export default function AppContainer({
  children,
  navigation,
}: // navigation,
PropsWithChildren) {
  const {auth} = React.useContext(AuthContext);
  const {isLoggedIn} = auth;

  console.log(isLoggedIn, 'navigation,');

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigation.navigate('Auth');
  //   }
  // }, [auth]);

  return <View style={{flex: 1, padding: 20}}>{children}</View>;
}
