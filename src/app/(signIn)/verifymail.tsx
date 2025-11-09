
import { View, Text } from 'react-native'
import React,{useEffect} from 'react'
import { useLocalSearchParams } from 'expo-router'







const verifymail = () => {

const {uname,pass,email} = useLocalSearchParams()

console.log(uname,pass,email)



return (
<View>
<Text>verifymail</Text>
</View>
)
}

export default verifymail