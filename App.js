import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import tailwind from 'twrnc';
import logo from './assets/pcbrand.png';


export default function App() {
  return (
    <View style={tailwind`bg-blue-300 h-full items-center justify-center`}>
        <View style = {tailwind`bg-white`}>
            <View style = {tailwind`mb-8 items-center`}>
              <Image source={logo}  style={{ width: 150, height: 200 }} />
            </View>
          <View style={tailwind`items-center`}>
            <Text style = {tailwind` text-3xl font-bold text-sky-900`}>Population Council</Text>
            <Text style = {tailwind` text-3xl font-bold text-sky-900`}>Disease Tracker</Text>
            <TouchableOpacity style = {tailwind`px-6 py-2.5 bg-blue-600 leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out`}>
              <Text style = {tailwind`text-white font-medium text-md`}>Start</Text>
            </TouchableOpacity>
          </View>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
