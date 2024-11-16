import { TextInput } from 'react-native';
import {Card, Text, View} from 'react-native-ui-lib';

function AddExpense() {
  return (
    <View>
      <Card height={200} style={{padding: 10}}>
          <Text>Hi</Text>
          <TextInput focusable placeholder='Enter Amount' keyboardType='number-pad' />
      </Card>
    </View>
  );
}

export default AddExpense;
