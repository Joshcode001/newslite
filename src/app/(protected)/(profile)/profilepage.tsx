

import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useContext,useState,useEffect } from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { Colors } from '@/src/utils/color'





const profilepage = () => {

const {theme} = useContext(AuthContext)


return (
<View style={[styles.container,{backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>
<Text>profilepage</Text>
</View>
)
}

export default profilepage






const styles = StyleSheet.create({
container:{
flex:1,
width:'100%',
height:'100%',
justifyContent:'center',
alignItems:'center'
}
})