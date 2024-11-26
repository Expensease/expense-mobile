import {Button, Text, View} from 'react-native';

export const TestScreen = ({navigation}) => {
  const handleOnAdd = () => navigation.navigate('Add');

  return <Button title="Add Expense" onPress={handleOnAdd} />;
};

export const ProfileScreen = ({navigation, route}) => {
  return <Text>This is 's profile</Text>;
};
