import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';
import tailwind from 'twrnc';

function CheckBox({ label, status, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center',backgroundColor:'#dbeafe'
 }}>
        <Checkbox status={status} />
        <Text style={tailwind`text-lg font-bold`}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default CheckBox;