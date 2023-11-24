import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
function 
export default function App() {
  const [totalLiters, setTotalLiters] = useState(50);
  const [selectedGas, setSelectedGas] = useState();
  const [resultPrice, setResultPrice] = C();

  return (
    <View style={styles.container}>
      <Text>Gasolina Carro</Text>
      <View>
        <Picker
          selectedValue={selectedGas}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedGas(itemValue)
          }>
          <Picker.Item label="Ethanol" value="ethanol" />
          <Picker.Item label="Gasoline" value="gasoline" />
        </Picker>
          <TextInput
            onChangeText={text => onChangeText(setTotalLiters(text))}
            value={totalLiters}
          />
      </View>
      <View>
        <Text>
          Result: {resultPrice}
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
