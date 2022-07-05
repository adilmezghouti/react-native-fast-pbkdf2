import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import Pbkdf2 from 'react-native-fast-pbkdf2';

export default function App() {
  const [syncResult, setSyncResult] = React.useState<string | undefined>();
  const [asyncResult, setAsyncResult] = React.useState<string | undefined>();

  React.useEffect(() => {
    console.log(
      'Sync call: ',
      Pbkdf2.deriveSync('cGFzc3dvcmQ=', 'c2FsdA==', 1, 16, 'sha-256')
    );
    const syncValue = Pbkdf2.deriveSync(
      'cGFzc3dvcmQ=',
      'c2FsdA==',
      1,
      16,
      'sha-256'
    );
    setSyncResult(syncValue);
    (async () => {
      let res = await Pbkdf2.derive(
        'cGFzc3dvcmQ=',
        'c2FsdA==',
        1,
        16,
        'sha-256'
      );
      console.warn(res);
      setAsyncResult(res);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result from the async call: {asyncResult}</Text>
      <Text>Result from the sync call: {syncResult}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
