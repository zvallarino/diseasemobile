import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tailwind from 'twrnc'
import ModalDropdown from 'react-native-modal-dropdown'
import CheckBox from '../components/Checkbox'

// import ModalDropdown from 'react-native-modal-dropdown';

const FilterScreen = () => {

  const [checked,setChecked] = useState(false)

  const arrayExample = ['one','two','three']

  const mapOfArray = () => {
    
  }
  
  return (
    <View style = {tailwind`bg-blue-200 h-full`}>
      <Text>Legend</Text>
      <View>
        <Text>Please, Select a date range</Text>
      </View>
      <ModalDropdown
      options={
        [
          '3 Months', '6 Months', '1 Year','2 Years','3 Years','All Available'
          ]}/>
      
      <Text>Travel</Text>
      <View>
        <Text>Air Travel</Text>
          <CheckBox status = {'checked'} label = {"Next"} onPress = {(e)=>console.log('hello')} />
      </View>
    
      <TouchableOpacity style={tailwind`px-6 py-2.5 bg-blue-600 leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out`}>
        <Text style = {tailwind`text-white font-medium text-md`}>Apply Filter</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FilterScreen