import { Button, Text, View } from "react-native-ui-lib";

export const TestScreen = ({navigation}) => {
  return (
      <Button
        label="Add Expense"
        onPress={() =>
          navigation.navigate('Add')
        }
      />
  );
};

export const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};