import { Button, View } from "react-native-ui-lib";
import Payments from "../components/payments";

export default function Expenses({ navigation }){
  const gotoNewPayment = () => {
    navigation.navigate('addPayment')
  }
  return (
    <View>
      <Button onPress={gotoNewPayment} size={Button.sizes.large} label='+ New Payment'  />
      <Payments />
    </View>
  )
}