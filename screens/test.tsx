import { Button, Text, View } from "react-native-ui-lib";

export const TestScreen = ({navigation}) => {
  const handleOnAdd = () =>
    navigation.navigate('Add')
  
  return (
      <Button
        label="Add Expense"
        onPress={handleOnAdd}
      />
  );
};

export const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};