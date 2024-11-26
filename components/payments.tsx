import {FlatList} from 'react-native';
import {Avatar, Colors, Drawer, Text, View} from 'react-native-ui-lib';
import {Button, TextInput} from 'react-native-paper';

const Payments = () => {
  return (
    <View>
      <Text>Payment</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Press me
      </Button>

      <TextInput label="Email"></TextInput>
    </View>
  );
};

export default Payments;
