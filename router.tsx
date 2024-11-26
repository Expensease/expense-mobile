import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ProfileScreen, TestScreen } from './screens/test';
import AppContainer from './layout/AppContainer';
import AddExpense from './screens/AddExpense';
import Expenses from './screens/Expenses';

const Stack = createNativeStackNavigator();

export const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          layout={AppContainer}
          component={Expenses}
          options={{title: 'Expense Ease 😎'}}
        />
        <Stack.Screen
          name="addPayment"
          layout={AppContainer}
          component={AddExpense}
          options={{title: 'Add Expense'}}
        />
        <Stack.Screen name="Profile" layout={AppContainer} component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
