import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileScreen, TestScreen} from './screens/test';
import AppContainer from './layout/AppContainer';
import AddExpense from './screens/AddExpense';
import Expenses from './screens/Expenses';
import {AuthContext} from './context/authContext';
import {Auth} from './screens/Auth';
import {View} from 'react-native';
import {MD2Colors} from 'react-native-paper';

const Stack = createNativeStackNavigator();

export const ROUTES = {
  Home: 'home',
  AddPayment: 'addPayment',
  Profile: 'profile',
  Auth: 'auth',
};

export const MyStack = () => {
  const {isLoggedIn} = React.useContext<any>(AuthContext);

  console.log('isLoggedIn', isLoggedIn);
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* {isLoggedIn ? ( */}
          <>
            <Stack.Screen
              name={ROUTES.Home}
              layout={AppContainer}
              component={Expenses}
              options={{title: 'Expense Ease 😎', headerShown: false}}
            />

            <Stack.Screen
              name={ROUTES.AddPayment}
              layout={AppContainer}
              component={AddExpense}
              options={{title: 'Add Expense'}}
            />
            <Stack.Screen
              name={ROUTES.Profile}
              layout={AppContainer}
              component={ProfileScreen}
            />
          </>
          {/* // ) : ( */}
          <Stack.Screen
            name={ROUTES.Auth}
            component={Auth}
            options={{title: 'Auth Page', headerShown: false}}
          />
          {/* // )} */}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
