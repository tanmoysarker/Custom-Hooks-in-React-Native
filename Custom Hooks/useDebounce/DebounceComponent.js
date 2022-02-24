import { useState } from "react";
import useDebounce from './useDebounce';
import {
    Text,
    View,
    Button,
  } from 'react-native';

export default function DebounceComponent(){
    const [count, setCount] = useState(10);

    useDebounce(()=> console.log(count), 1000, [count])

    return(
        <View>
            <Text>{count}</Text>
            <Button
                onPress={()=> setCount(c=> c + 1)}
                title="Increment"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}