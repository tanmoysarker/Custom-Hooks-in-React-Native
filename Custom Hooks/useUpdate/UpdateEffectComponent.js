import { useState } from "react";
import useUpdate from './useUpdate';
import {
    Text,
    View,
    Button,
  } from 'react-native';

export default function UpdateEffectComponent(){
    const [count, setCount] = useState(10);

    useUpdate(()=> console.log(count), [count])

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