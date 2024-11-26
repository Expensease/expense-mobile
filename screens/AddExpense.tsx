import {useCallback, useState} from 'react';
import {ToastAndroid, View, ScrollView, Pressable} from 'react-native';
import {Avatar, Button, Text, TextInput, useTheme} from 'react-native-paper';

import {ROUTES} from '../router';
import {usePayments} from '../hooks/use-payments';
import {useNavigation} from '@react-navigation/native';

const categories = [
  {icon: 'car', label: 'car'},
  {icon: 'food', label: 'food'},
  {icon: 'hospital', label: 'hospital'},
  {icon: 'home', label: 'home'},
  {icon: 'heart', label: 'heart'},
  {icon: 'flower-pollen', label: 'flower'},
];

function AddExpense() {
  const {payments, setPayments} = usePayments();
  const [newPayment, setNewPayment] = useState({
    amount: 0,
    message: '',
    category: 'car',
  });

  const {colors} = useTheme();
  const {navigate} = useNavigation();
  const handleAdd = () => {
    if (!newPayment.amount || !newPayment.message) {
      ToastAndroid.show('Invalid Payment!', ToastAndroid.LONG);
      return;
    }
    setPayments(crr => [
      {
        id: payments.length + 1,
        amount: newPayment.amount,
        membersCount: 3,
        message: newPayment.message,
        category: 'car',
        date: '10/10/2024',
      },
      ...crr,
    ]);
    ToastAndroid.show('Payment Added!', ToastAndroid.LONG);
    navigate(ROUTES.Home as never);
  };

  const handleOnCategoryChange = useCallback((newCategory: string) => {
    setNewPayment(crr => ({
      ...crr,
      category: newCategory,
    }));
  }, []);

  return (
    <View style={{gap: 10, flex: 1}}>
      <TextInput
        focusable
        placeholder="Amount"
        keyboardType="number-pad"
        mode="outlined"
        onChangeText={amount =>
          setNewPayment(crr => ({
            ...crr,
            amount: parseFloat(amount),
          }))
        }
      />
      <TextInput
        focusable
        mode="outlined"
        placeholder="Message"
        onChangeText={message =>
          setNewPayment(crr => ({
            ...crr,
            message,
          }))
        }
      />
      <Text variant="labelLarge">Date</Text>

      <Text variant="labelLarge">Category</Text>
      <View>
        <ScrollView horizontal>
          {categories.map(i => (
            <Pressable
              key={i.icon}
              onPress={() => handleOnCategoryChange(i.icon)}>
              <Avatar.Icon
                style={{
                  marginRight: 5,
                  backgroundColor:
                    newPayment.category !== i.icon
                      ? colors.secondary
                      : colors.primary,
                }}
                icon={i.icon}
              />
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <View style={{marginTop: 'auto'}}>
        <Button mode="contained" onPress={handleAdd}>
          Add Payment
        </Button>
      </View>
    </View>
  );
}

export default AddExpense;
