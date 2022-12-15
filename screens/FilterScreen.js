import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tailwind from 'twrnc'
import ModalDropdown from 'react-native-modal-dropdown'
import CheckBox from '../components/Checkbox'

// import ModalDropdown from 'react-native-modal-dropdown';

const FilterScreen = () => {

  const [checked1,setChecked1] = useState("checked")
  const [checked2,setChecked2] = useState("checked")
  const [checked3,setChecked3] = useState("checked")
  const [checkedAir,setCheckedAir] = useState("checked")

  const ifChecked = (stateA) =>{
    if(stateA === "checked"){
      return "unchecked"
    } else {
      return 'checked'
    }
  }


  const arrayExample = [['one',checked1,setChecked1],['two',checked2,setChecked2],['three',checked3,setChecked3]]

  const mapOfArray = (arr) => {
    return arr.map(item => <CheckBox label = {item[0]} status = {item[1]} onPress = {(e)=>item[2](ifChecked(item[1]))} />)
    
  }

  return (
    <View style = {tailwind`bg-blue-200 h-full`}>
      <View style = {tailwind`items-center border-4 border-lime-600 bg-sky-700`}>
        <Text style = {tailwind`text-xl font-bold text-white`}>Date Range</Text>
      </View>
      <ModalDropdown
      style = {tailwind`bg-blue-100 items-center`}
      textStyle ={tailwind`text-xl font-bold`}
      options={
        [
          '3 Months', '6 Months', '1 Year','2 Years','3 Years','All Available'
          ]}/>
         <View style = {tailwind`items-center border-4 border-lime-600 bg-sky-700`}>
        <Text  style = {tailwind`text-xl font-bold text-white`}>Diseases</Text>
      </View>
      {mapOfArray(arrayExample)}
      <View>
      <View style = {tailwind`items-center border-4 border-lime-600 bg-sky-700`}>
        <Text  style = {tailwind`text-xl font-bold text-white`}>Travel</Text>
      </View>
          <CheckBox status = {checkedAir} label = {"Include Air Travel"} onPress = {(e)=>setCheckedAir(ifChecked(checkedAir))} />
      </View>
    
      <TouchableOpacity style={tailwind` items-center px-6 py-2.5 bg-sky-700 leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out`}>
        <Text style = {tailwind`text-white font-medium text-lg`}>Apply Filter</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FilterScreen