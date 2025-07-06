import { View, Text, StyleSheet} from 'react-native'
import React from 'react'


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
width: "100%",
height:200
}
})