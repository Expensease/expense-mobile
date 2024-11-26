import {Text, View, ScrollView} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  IconButton,
  Searchbar,
  TextInput,
} from 'react-native-paper';
import {formatAmount} from '../utils';
import {useContext, useState} from 'react';
import {PaymentContext} from '../context/paymentContext';

const Payments = () => {
  const {payments} = useContext(PaymentContext);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ScrollView>
      <View style={{paddingHorizontal: 10}}>
        <Searchbar
          style={{flex: 1}}
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        {payments.map(i => (
          <Card style={{marginVertical: 10}} key={i.id}>
            <Card.Title
              title={formatAmount(i.amount)}
              subtitle={i.message}
              left={props => <Avatar.Icon {...props} icon={i.category} />}
              right={props => (
                <IconButton
                  {...props}
                  icon="dots-vertical"
                  onPress={() => {}}
                />
              )}
            />
          </Card>
        ))}
      </View>
    </ScrollView>
  );
};

export default Payments;
