import React,{ useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
  ActivityIndicator,
  Switch
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import useRandomColor from './Custom Hooks/useRandomColor';
import useQuery from './Custom Hooks/useQuery';
import useToggle from './Custom Hooks/useToggle';
import useTimeout from './Custom Hooks/useTimeout';

import UseTransition from './React 18 hooks/useTransition';


const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  const [count, setCount] = useState(10)

  const {color, changeColor} = useRandomColor();
  const {response, loading, error} = useQuery("https://foodish-api.herokuapp.com/api");
  const {value,toggleValue} = useToggle();
  const { clear, reset } = useTimeout(() => setCount(0), 1000)

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <View style={{backgroundColor: "#" + color ,width: '100%',height:'100%'}}>
       
      <Button
        onPress={changeColor}
        title="Color Changer"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <ActivityIndicator animating={loading} size="small" color="#0000ff" />
      <Image
        style={{width: 200 ,height: 200, alignSelf:'center',marginTop:50}}
        source={{
          uri: response.image,
        }}
      />

       <View style={styles.container}>
         <Text>Toggle</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={value ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleValue}
          value={value}
        />
       </View>
       
       <Text>{count}</Text>
       <Button
        onPress={()=> setCount(c=> c + 1)}
        title="Increment"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={clear}
        title="Clear Timeout"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={reset}
        title="Reset Timeout"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      {/* <UseTransition/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
