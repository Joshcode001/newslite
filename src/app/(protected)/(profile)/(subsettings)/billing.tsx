

import { View,Text,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useContext,useState} from 'react'
import { useRouter } from 'expo-router'
import { AuthContext } from '@/src/utils/authContext'
import { Colors } from '@/src/utils/color'
import { typo } from '@/src/utils/typo'
import EvilIcons from '@expo/vector-icons/EvilIcons';


const billing = () => {

const router = useRouter()
const { theme,WIDTH,HEIGHT} = useContext(AuthContext)



return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>

<View style={[styles.cupA,{backgroundColor:theme === 'dark' ? Colors.dark.bill : Colors.light.bill}]}>

<View style={styles.colA}></View>

<View style={styles.colB}>

<View style={styles.xbox}>

<View style={styles.xboxa}>

<TouchableOpacity style={styles.rowa}>
<EvilIcons name="chevron-left" size={typo.h1_2} color={Colors.light.primary } />
</TouchableOpacity>

<View style={styles.rowb}></View>

<View style={styles.rowc}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h1_8,color:theme === 'dark' ? Colors.light.primary : Colors.light.secondary}]}>Premium</Text>
</View>

</View>

<View style={styles.xboxb}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.primary : Colors.light.secondary,fontSize:typo.h3}]}>Enhance your reading experience</Text>
</View>

</View>

<View style={styles.ybox}></View>

<View style={styles.zbox}></View>

</View>

</View>


<View style={styles.cupB}></View>


</View>
)
}

export default billing







const styles = StyleSheet.create({
container:{
justifyContent:'flex-start',
alignItems:'center',
flexDirection:'column',
rowGap:20
},

cupA:{
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
width:'92%',
height:'60%',
borderBottomLeftRadius:20,
borderBottomRightRadius:20
},

colA:{
width:'100%',
height:'13%',
justifyContent:'center',
alignItems:'center',
},

colB:{
justifyContent:'flex-start',
alignItems:'center',
flexDirection:'column',
rowGap:20,
width:'100%',
height:'87%',
},


xbox:{
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
width:'98%',
height:'16%',
},


xboxa:{
justifyContent:'center',
alignItems:'center',
flexDirection:'row',
width:'100%',
height:'65%',
},

rowa:{
justifyContent:'center',
alignItems:'center',
width:'10%',
height:'100%',
},

rowb:{
justifyContent:'center',
alignItems:'center',
width:'22%',
height:'100%',
},


rowc:{
justifyContent:'center',
alignItems:'flex-start',
width:'68%',
height:'100%',
},


xboxb:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'35%',
},






ybox:{
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
width:'98%',
height:'50%',
},


zbox:{
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
width:'98%',
height:'23%',
},



cupB:{
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
width:'90%',
height:'20%',
borderRadius:15,
borderWidth:1,
backgroundColor:'green'
},


textM500: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
},

textR400: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
},


textT700: {
fontFamily:'CabinetGrotesk-Thin',
fontWeight:700,
},

textB700: {
fontFamily:'CabinetGrotesk-Bold',
fontWeight:700,
},


})