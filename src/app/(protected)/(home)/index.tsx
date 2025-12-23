

import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useContext,useState,useEffect } from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { Colors } from '@/src/utils/color'
import { Image } from 'expo-image';




const index = () => {

const {theme,WIDTH,HEIGHT} = useContext(AuthContext)


return (
<View style={[styles.container,{backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base, width:WIDTH,height:HEIGHT}]}>

<View style={styles.cupone}>
<View style={styles.header}>
<View style={styles.headone}>
<View style={styles.itema}>
{
theme === 'dark' ? (<Image source={require('../../../../assets/images/activelogo-dark.png')} style={{width:'70%', height:'85%'}}/>) : (<Image source={require('../../../../assets/images/activelogo-light.png')} style={{width:'70%', height:'85%'}}/>)
}
</View>
<View style={styles.itemb}></View>
</View>


<View style={styles.headtwo}>
<View style={styles.diva}></View>
<View style={styles.divb}></View>
</View>
</View>
</View>


<View style={styles.cuptwo}></View>
</View>
)
}

export default index








const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center',
flexDirection:'column'
},

cupone:{
justifyContent:'flex-end',
alignItems:'center',
width:'100%',
height:'17.7%',
borderColor:'brown',
borderWidth:1
},


cuptwo:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'82.3%',
borderColor:'brown',
borderWidth:1
},


header:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'63%',
flexDirection:'column'
},


headone:{
justifyContent:'space-between',
alignItems:'center',
width:'100%',
height:'50%',
flexDirection:'row'
},

itema:{
justifyContent:'center',
alignItems:'center',
width:'20%',
height:'100%',
backgroundColor:'brown',
},


itemb:{
justifyContent:'center',
alignItems:'center',
width:'20%',
height:'100%',
backgroundColor:'brown',
},




headtwo:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'50%',
flexDirection:'row'
},

diva:{
justifyContent:'center',
alignItems:'center',
width:'32%',
height:'100%',
backgroundColor:'grey',
},


divb:{
justifyContent:'center',
alignItems:'center',
width:'68%',
height:'100%',
backgroundColor:'green',
},




})