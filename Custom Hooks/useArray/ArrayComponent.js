import {
    Text,
    View,
    Button,
  } from 'react-native';
import useArray from './useArray'

export default function ArrayComponent(){
    const {array, set, push, remove, filter, update, clear} = useArray([
        1, 2, 3, 4, 5, 6
    ])

    return(
        <View>
            <Text>{array.join(",")}</Text>
            <Button
                onPress={()=> push(7)}
                title="Add 7"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={()=> update(1,9)}
                title="Change second element to 9"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={()=> remove(1)}
                title="Remove second element"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={()=> filter(n=> n < 3)}
                title="Keep numbers less than 4"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={()=> set([1,2])}
                title="Set To 1,2"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={clear}
                title="Clear"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}