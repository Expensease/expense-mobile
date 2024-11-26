import {View} from 'react-native';
import Payments from '../components/payments';
import {Button, Card, Text, MD2Colors} from 'react-native-paper';
import {useContext} from 'react';
import {AuthContext} from '../context/authContext';
import Stats from '../components/stats';
import {formatAmount} from '../utils';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../router';

export default function Expenses() {
  const {navigate} = useNavigation();
  const gotoNewPayment = () => {
    navigate(ROUTES.AddPayment as never);
  };

  const {auth} = useContext<any>(AuthContext);

  // const {colors} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        gap: 10,
        marginVertical: 10,
        // backgroundColor: MD2Colors.amber100,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Text variant="headlineLarge" style={{flex: 1}}>
          Hi, {auth.user.name}
        </Text>
        <Button onPress={gotoNewPayment} mode="contained" icon="plus">
          Payment
        </Button>
      </View>

      <View>
        <Text
          variant="titleLarge"
          style={{color: MD2Colors.green800, fontWeight: '800'}}>
          You will receive {formatAmount(25000)} 😁
        </Text>
      </View>

      <Stats />
      <Payments />
    </View>
  );
}
