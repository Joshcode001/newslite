

import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useContext,useState,useEffect } from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { Colors } from '@/src/utils/color'
import Cusloader from '@/src/components/Cusloader'




const searchpage = () => {

const {theme,myClient} = useContext(AuthContext)
console.log(myClient.fname)

return (
<View style={[styles.container,{backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>
<Cusloader top={350} />
</View>
)
}

export default searchpage






const styles = StyleSheet.create({
container:{
flex:1,
width:'100%',
height:'100%',
justifyContent:'center',
alignItems:'center'
}
})