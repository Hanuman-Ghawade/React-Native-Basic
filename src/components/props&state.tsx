import React, {FC, useState} from 'react';
import {Button, Text, View} from 'react-native';

// Props

// interface properties {
//   name: string;
// }

// const Man: FC<properties> = props => {
//   return (
//     <View>
//       <Text>I am {props.name}</Text>
//     </View>
//   );
// };
// export default Man;

// const App: FC = () => {
//   return (
//     <View>
//       <Man name="Hanuman" />
//       <Man name="Atul" />
//       <Man name="Amol" />
//     </View>
//   );
// };

// export default App;

// State

interface Hungry {
  name: string;
}
const Cat: FC<Hungry> = props => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <>
      <View>
        <Text>
          I am {props.name},I am {isHungry ? 'hungry' : 'full'}
        </Text>
      </View>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Pour me some milk, please!' : 'Thank You'}
      />
    </>
  );
};

const Cafe = () => {
  return (
    <View>
      <Cat name="Hanuman" />
      <Cat name="Vitthal" />
    </View>
  );
};

export default Cafe;
