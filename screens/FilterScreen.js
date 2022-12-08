import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'

const FilterScreen = () => {
  return (
    <View style = {tailwind`bg-blue-200 h-full`}>
      <Text>Legend</Text>
      <View>
        <Text>Please, Select a date range</Text>
      </View>
      <TouchableOpacity>
        <Text>Custom Range</Text>
      </TouchableOpacity>
      
      <Text>Travel</Text>
      <View>
        <Text>Air Travel</Text>
      </View>
      <TouchableOpacity style={tailwind`px-6 py-2.5 bg-blue-600 leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out`}>
        <Text style = {tailwind`text-white font-medium text-md`}>Apply Filter</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FilterScreen