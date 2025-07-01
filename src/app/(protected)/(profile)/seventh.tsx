import { View, Text , ScrollView, StyleSheet} from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../(home)'

const seventh = () => {
return (
<View style={style.container}>
<Text>Seventh screen</Text>
</View>
)
}

export default seventh





const style = StyleSheet.create({
container: {
flex:1,
backgroundColor: 'grey',
width: SCREEN_WIDTH,
height:200
}
})