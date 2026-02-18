
import { View,Text,StyleSheet,TouchableOpacity,TextInput,ActivityIndicator,Keyboard} from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { Colors } from '@/src/utils/color'
import { useRouter } from 'expo-router'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { typo } from '@/src/utils/typo'
import {KeyboardStickyView} from 'react-native-keyboard-controller'
import { lingual } from '@/src/utils/dataset'
import { Image } from 'expo-image'




const deletez = () => {

const router = useRouter()
const { theme,WIDTH,HEIGHT,isloading,setisloading,roomKey,myClient,socket,showToast,LogOut} = useContext(AuthContext)
const [pass,setpass] = useState('')





const handleDelete = async () => {

if (pass === '' && !isloading) return

setisloading(true)

const data = { pass,rkey:roomKey,userId:myClient.uname }

await socket.emit('terminate', data)

}




useEffect(() => {

socket.on('kill',(data:any) => {

if (data.isKilled) {

LogOut()

}else if (!data.isKilled) {

setisloading(false)

const toast = {type:'error',name:myClient.fname,info:'wrong password !',onHide:() => {}, visibilityTime:4000}
showToast(toast)

}

})

},[socket])





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
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>Confirm Delete</Text>
</View>

</View>
</View>


<View style={styles.colB}>

<View style={styles.boxa}>

<View style={[styles.imageBox,{marginVertical:typo.h6}]}>
<Image source={require('../../../../../assets/images/user-remove.png')} 
style={{width:'100%',height:'100%'}} contentFit='contain' />
</View>

<View style={[styles.textBox,{marginVertical:typo.h6}]}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h3}]}>Confirm password to delete account.</Text>
</View>

<View style={[styles.inputBox,{marginVertical:typo.h6}]}>
<View style={[styles.inputboard,{borderBottomWidth:1,borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>

<View style={[styles.boxi]}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h3}]}>Enter password</Text>
</View>

<View style={[styles.boxii]}>
<TextInput allowFontScaling={false} style={[styles.input,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h2}]}  secureTextEntry={true} onChangeText={(text) => setpass(text)} value={pass}
/>
</View>

</View>

</View>

</View>

</View>

</View>


<View style={styles.cupC}>

<KeyboardStickyView  style={[styles.stickyB,{columnGap:10}]} offset={{closed:-60,opened:0}}>

<TouchableOpacity 
onPress={() => {
Keyboard.dismiss()
router.back()
}} 

style={[styles.button,{backgroundColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary,borderRadius:typo.h2}]}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary,fontSize:typo.h4}]}>Cancel</Text>
</TouchableOpacity>

<TouchableOpacity  
onPress={() => {
Keyboard.dismiss()
handleDelete()
}} 
style={[styles.button,{backgroundColor:theme === 'dark' ? Colors.light.trash : Colors.dark.trash,borderRadius:typo.h2}]}>

{
isloading ? (<ActivityIndicator size={typo.h4} color={Colors.light.primary}  />) :
(<Text allowFontScaling={false} style={[styles.textB700,{color:Colors.light.primary,fontSize:typo.h4}]}>Delete Account</Text>)
}

</TouchableOpacity>

</KeyboardStickyView>

</View>

</View>
)
}

export default deletez











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
height:'77%',
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

sideB:{
justifyContent:'flex-start',
alignItems:'flex-start',
width:'100%',
height:'50%'
},


stickyB:{
justifyContent:'center',
alignItems:'flex-end',
width:'100%',
height:'50%',
flexDirection:'row',
},


cupC:{
justifyContent:'flex-end',
alignItems:'center',
width:'100%',
height:'15%',
},


button:{
justifyContent:'center',
alignItems:'center',
width:'43%',
height:'70%',
borderWidth:1
},

input:{
width:'100%',
height:'100%',
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
},


inputboard:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'100%',
flexDirection:'column',
},


boxa:{
justifyContent:'flex-end',
alignItems:'center',
width:'95%',
height:'50%',
flexDirection:'column'
},

imageBox:{
justifyContent:'center',
alignItems:'center',
width:'50%',
height:'28%',
},


textBox:{
justifyContent:'center',
alignItems:'center',
width:'98%',
height:'17%',
},

inputBox:{
justifyContent:'center',
alignItems:'flex-start',
width:'95%',
height:'30%',
},

boxi:{
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'35%',

},


boxii:{
justifyContent:'flex-end',
alignItems:'flex-start',
width:'100%',
height:'65%',
},

image:{
width:'70%',
height:'60%'
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