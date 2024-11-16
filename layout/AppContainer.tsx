import { PropsWithChildren } from "react";
import { View } from "react-native-ui-lib";

export default function AppContainer({ children }: PropsWithChildren) {
  return (
    <View style={{ padding: 10 }}>
      {children}
    </View>
  )
}