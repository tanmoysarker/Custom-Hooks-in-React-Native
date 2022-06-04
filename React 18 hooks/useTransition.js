import { useEffect, useState, useTransition } from 'react';
import { Button, View, Text } from 'react-native';

const SlowUI = ({ value }) => (
  <>
    {Array(value)
      .fill(1)
      .map((_, index) => (
        <span key={index}>{value - index} </span>
      ))}
  </>
);

function UseTransition() {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(100000);
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    setValue(value + 1);
    startTransition(() => setValue2(value2 + 1));
  };

  return (
    <>
      <Button onClick={handleClick}>
          <Text>{value}</Text>
      </Button>
      <View
        style={{
          opacity: isPending ? 0.5 : 1,
        }}
      >
        <SlowUI value={value2} />
      </View>
    </>
  );
}

export default UseTransition;