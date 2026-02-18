
import { View,Text,StyleSheet,TouchableOpacity,TextInput,ActivityIndicator,Keyboard} from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { Colors } from '@/src/utils/color'
import { useRouter } from 'expo-router'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { typo } from '@/src/utils/typo'
import { regex } from '@/src/utils/dataset'
import { lingual } from '@/src/utils/dataset'
import { Image } from 'expo-image'











const deletey = () => {

const router = useRouter()
const { theme,WIDTH,HEIGHT} = useContext(AuthContext)




return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}> 

<View style={styles.cupA}></View>

<View style={[styles.cupB,{rowGap:typo.h1_5}]}>

<View style={styles.colA}>
<TouchableOpacity onPress={() => router.back()} style={styles.rolA}>
<EvilIcons name="chevron-left" size={typo.h1_2} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</TouchableOpacity>

<View style={styles.rolB}>

<View style={styles.sideA}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h1_8,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>Settings</Text>
</View>

<View style={styles.sideB}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>Privacy & Data  {'>'}  Delete Account?</Text>
</View>

</View>
</View>



<View style={styles.colB}>

<View style={styles.boxa}>

<View style={[styles.imageBox,{marginVertical:typo.h6}]}>
<Image source={require('../../../../../assets/images/user-remove.png')} 
style={{width:'100%',height:'100%'}} contentFit='contain' />
</View>

<View style={[styles.textBoxi,{marginVertical:typo.h6}]}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h3}]}>Please confirm your request for account closure.</Text>
</View>

<View style={[styles.textBoxii,{marginVertical:typo.h6}]}>
<Text numberOfLines={5} allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h3,lineHeight:typo.h2}]}>By clicking Proceed, you authorize the permanent removal of all your associated data and records with NEWSWORLD.
</Text>
</View>

</View>


<View style={[styles.boxb,{bottom:typo.h2,columnGap:typo.h6}]}>

<TouchableOpacity onPress={() => router.back()} 
style={[styles.button,{backgroundColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary,borderRadius:typo.h2,}]}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary,fontSize:typo.h4}]}>Cancel</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=>router.push({pathname:'/(protected)/(profile)/(subsettings)/deletez'}) } 
style={[styles.button,{backgroundColor:theme === 'dark' ? Colors.light.trash : Colors.dark.trash,borderRadius:typo.h2,}]}>
<Text allowFontScaling={false} style={[styles.textB700,{color:Colors.light.primary,fontSize:typo.h4}]}>Proceed</Text>
</TouchableOpacity>

</View>

</View>

</View>

</View>
)
}

export default deletey







const styles = StyleSheet.create({
container:{
justifyContent:'center',
alignItems:'center',
flexDirection:'column'
},

cupA:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'8%'
},

cupB:{
justifyContent:'flex-start',
alignItems:'center',
width:'100%',
height:'92%',
flexDirection:'column',
},



colA:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'8%',
flexDirection:'row',
},

colB:{
justifyContent:'flex-start',
alignItems:'center',
width:'100%',
height:'87%',
flexDirection:'column'
},


rolA:{
justifyContent:'flex-start',
alignItems:'center',
width:'14%',
height:'100%'
},

rolB:{
justifyContent:'center',
alignItems:'center',
width:'86%',
height:'100%',
flexDirection:'column'
},

sideA:{
justifyContent:'flex-start',
alignItems:'flex-start',
width:'100%',
height:'50%'
},


boxa:{
justifyContent:'flex-end',
alignItems:'center',
width:'95%',
height:'40%',
flexDirection:'column'
},


boxb:{
justifyContent:'center',
alignItems:'center',
width:'95%',
height:'15%',
position:'absolute',
flexDirection:'row',
},


button:{
justifyContent:'center',
alignItems:'center',
width:'43%',
height:'45%',
borderWidth:1
},



imageBox:{
justifyContent:'center',
alignItems:'center',
width:'50%',
height:'28%',
},


textBoxi:{
justifyContent:'center',
alignItems:'flex-start',
width:'98%',
height:'17%',
},



textBoxii:{
justifyContent:'center',
alignItems:'flex-start',
width:'95%',
height:'30%',
},




sideB:{
justifyContent:'flex-start',
alignItems:'flex-start',
width:'100%',
height:'50%'
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

textError: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
color:'red',
},








})