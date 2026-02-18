
import { View,Text,StyleSheet,TouchableOpacity,TextInput,ActivityIndicator,Keyboard} from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { Colors } from '@/src/utils/color'
import { useRouter } from 'expo-router'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { typo } from '@/src/utils/typo'
import {KeyboardStickyView} from 'react-native-keyboard-controller'
import { regex } from '@/src/utils/dataset'
import { lingual } from '@/src/utils/dataset'





type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";











const changepass = () => {


const router = useRouter()
const { theme,WIDTH,HEIGHT,isloading,socket,roomKey,setisloading,getlang,appLang,showToast,myClient} = useContext(AuthContext)
const [pass,setpass] = useState({ current:'',newa:'',newb:'' })
const [key,setkey] = useState({ a:0,b:0,c:0})
const [errState, seterrState] = useState({ password:false,confirm: false })
const [lang, setlang] = useState<langt>('en')
const errMessage = { password:lingual.fiveMore[lang],confirm: lingual.passwordDont[lang]}





const handleUpdate = async () => {
Keyboard.dismiss()
if (isloading || key.a + key.b + key.c !== 3) return


setisloading(true)

const data = { current:pass.current,newpass:pass.newa,rkey:roomKey,userId:myClient.uname }

await socket.emit('security',data)

}




useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])




useEffect(() => {

socket.on('secured',(data:any) => {

if (data.isMatch) {

setpass({current:'',newa:'',newb:''})
setkey({a:0,b:0,c:0})
setisloading(false)

const toast = {type:'success',name:myClient.fname,info:'password Updated !',onHide:() => {}, visibilityTime:4000}
showToast(toast)

}else if (!data.isMatch) {

setpass({current:'',newa:'',newb:''})
setkey({a:0,b:0,c:0})
setisloading(false)

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
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>Privacy & Data  {'>'}  Change Password</Text>
</View>

</View>
</View>



<View style={styles.colB}>

<View style={styles.multi}>
<View style={[styles.inputBox,{borderBottomWidth:1,borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>

<View style={[styles.boxi]}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h3}]}>Enter current password</Text>
</View>

<View style={[styles.boxii]}>
<TextInput  style={[styles.input,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h2}]}  secureTextEntry={true} value={pass.current} allowFontScaling={false}
onChangeText={(text) => {

if (!text.match(regex.password)) {
setkey({...key, a:0})


}else if (text.match(regex.password)) {
setkey({...key, a:1})
}

setpass({...pass,current:text})

}}
/>
</View>

</View>

<View style={[styles.inputBox,{borderBottomWidth:1,borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>

<View style={[styles.boxi]}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h3}]}>Enter new password</Text>
</View>

<View style={[styles.boxii]}>
<TextInput allowFontScaling={false} style={[styles.input,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h2}]}  secureTextEntry={true} value={pass.newa}
onChangeText={(text) => {

if (!text.match(regex.password)) {

setkey({...key, b:0})
seterrState({...errState, password:true})

}else if (text.match(regex.password)) {

seterrState({...errState, password:false})
setkey({...key, b:1})
}

setpass({...pass,newa:text})

}}
/>
</View>

</View>

{
errState.password && (<View style={[styles.errorBox]}>
<Text allowFontScaling={false} style={[styles.textError,{fontSize:typo.h5}]}>{errMessage.password}</Text>
</View>)
}

<View style={[styles.inputBox,{borderBottomWidth:1,borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>

<View style={[styles.boxi]}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h3}]}>Confirm password</Text>
</View>

<View style={[styles.boxii]}>
<TextInput allowFontScaling={false} style={[styles.input,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h2}]}  secureTextEntry={true} value={pass.newb}
onChangeText={(text) => {

if (text !== pass.newa) {

setkey({...key, c:0})
seterrState({...errState, confirm:true})

}else if (text === pass.newa) {

seterrState({...errState, confirm:false})
setkey({...key, c:1})
}

setpass({...pass,newb:text})

}}
/>
</View>

</View>

{
errState.confirm && (<View style={[styles.errorBox]}>
<Text allowFontScaling={false} style={[styles.textError,{fontSize:typo.h5}]}>{errMessage.confirm}</Text>
</View>)
}

</View>


</View>

</View>


<KeyboardStickyView  style={styles.stickyB} offset={{closed:-50,opened:0}}>

<TouchableOpacity onPress={handleUpdate}  style={[styles.button,{borderRadius:typo.h4,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn : 
Colors.light.Activebtn}]}>

{
isloading ? (<ActivityIndicator size={typo.h4} color={Colors.light.primary}  />) : (<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h3,color: 
Colors.light.primary}]}>Change Password</Text>)
}

</TouchableOpacity>

</KeyboardStickyView>



</View>
)
}

export default changepass







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
height:'83%',
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

multi:{
justifyContent:'flex-start',
alignItems:'center',
width:'95%',
height:'50%',
flexDirection:'column',
},

inputBox:{
justifyContent:'center',
alignItems:'center',
width:'95%',
height:'28%',
flexDirection:'column',
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


input:{
width:'100%',
height:'88%',
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
},


errorBox:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'8%',
},

stickyB:{
justifyContent:'flex-end',
alignItems:'center',
width:'100%',
height:'6%',
},


button:{
justifyContent:'center',
alignItems:'center',
width:'95%',
height:'80%',
borderWidth:1,
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