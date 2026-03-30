

import { View, Text,StyleSheet,TouchableOpacity,ActivityIndicator, Keyboard} from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import CustomOtp from '@/src/components/CustomOtp'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import { Colors } from '@/src/utils/color';
import { lingual } from '@/src/utils/dataset';
import { typo } from '@/src/utils/typo';
import {KeyboardStickyView} from 'react-native-keyboard-controller'
import { Image } from 'expo-image';



type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";






const forgotpass = () => {

const router = useRouter()
const {WIDTH,HEIGHT,myClient,api,isloading,setisloading,roomKey,isactive,setisactive,setiscdactive,theme,getlang,appLang,platform} = useContext(AuthContext)
const [code,setcode] = useState('')
const [isReset,setisReset] = useState(false)
const [lang, setlang] = useState<langt>('en')


const placeholder = theme === 'dark' ? require('../../../assets/images/smsdark.png') : 
require('../../../assets/images/smslight.png')




const getCode = (id:string) => {
setcode(id)
}



const sendCode = async () => {
Keyboard.dismiss()
setisloading(true)
await api.post('/qxdata/uthxcd',{qxrkey:roomKey,qxmail:myClient.email,qxcode:'',qxid:'forgot',qxname:myClient.fname,qxintel:'qxftz',qxlang:appLang.value})
}

const verifyCode = async (code:string) => {

Keyboard.dismiss()
if (code === '') return

setisloading(true)
setisReset(false)
await api.post('/qxdata/uthxcd',{qxrkey:roomKey,qxmail:myClient.email,qxcode:code,qxid:'forgot',qxname:myClient.fname,qxintel:'qxftz'})
setisReset(true)
}

const resendCode = async () => {
await api.post('/qxdata/uthxcd',{qxrkey:roomKey,qxmail:myClient.email,qxcode:'',qxid:'forgot',qxname:myClient.fname,qxintel:'qxftz'})
}


const goBack = () => {
setiscdactive(false)
router.back()
}



useEffect(() => {

setiscdactive(false)
setisactive(false)
},[])




useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])






return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>

<View style={styles.cupA}>

<View style={styles.boxA}>

<View style={styles.hang}>

<TouchableOpacity onPress={goBack} style={styles.hangai}>
<FontAwesome name="angle-left" size={typo.h1_8} color={theme === 'dark' ? Colors.light.secondary: Colors.dark.secondary} />
</TouchableOpacity>

<View style={styles.hangaiq}></View>

<View style={styles.hangaii}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h2}]}>{lingual.forgotPass[lang]}</Text>
</View>

</View>

</View>

<View style={styles.boxB}>

<View style={styles.cola}>

<View style={styles.rola}>
<Image source={placeholder} style={{width:'65%',height:'65%'}} contentFit='contain'/>
</View>


<View style={styles.rolb}>
<Text allowFontScaling={false} style={[styles.textR400,{fontSize:typo.h4},{color:theme === 'dark' ? Colors.light.border :
Colors.dark.primary}]}>{myClient.email}</Text>
</View>
</View>


<View style={styles.colb}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText,fontSize:typo.h4}]}>{lingual.byTapping[lang]}</Text>
</View>

</View>



<View style={styles.boxC}>

<CustomOtp getCode={getCode} isReset={isReset} resendCode={resendCode}/>

</View>

</View>

<View style={styles.cupB}></View>






<KeyboardStickyView style={styles.cupC} offset={platform === 'ios' ? {closed:-40,opened:0}:{closed:-50,opened:0}}>


{
isactive ? (isloading ? (<View style={[styles.framev,{borderRadius:typo.h6,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}>
<ActivityIndicator size={typo.h3} color={Colors.light.primary}/></View>):<TouchableOpacity onPress={() => verifyCode(code)}
style={[styles.framev,{borderRadius:typo.h6,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn,flexDirection:'row',columnGap:typo.h3}]}>
<Text allowFontScaling={false} style={[styles.textB700,{color:Colors.light.primary,fontSize:typo.h2}]}>{lingual.chnagePass[lang]}</Text>
<FontAwesome name="angle-right" size={typo.h1_5} color={Colors.light.primary} />
</TouchableOpacity>) : (isloading ? (<View style={[styles.framev,{borderRadius:typo.h6,backgroundColor:theme === 'dark' ? Colors.dark.primary :Colors.light.primary}]}><ActivityIndicator size={typo.h3} color={theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}/></View>) : (<TouchableOpacity style={[styles.framev,{borderRadius:typo.h6,backgroundColor:theme === 'dark' ? Colors.dark.primary :Colors.light.primary}]} onPress={sendCode}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.border :Colors.dark.primary,fontSize:typo.h2}]}>{lingual.sendCode[lang]}</Text>
</TouchableOpacity>))
}


</KeyboardStickyView>

</View>
)
}

export default forgotpass





const styles = StyleSheet.create({

container: {
justifyContent:'center',
alignItems:'center',
},

cupA:{
justifyContent:'space-between',
alignItems:'center',
width:'100%',
height:'52%',
flexDirection:'column',
},

cupB:{
justifyContent:'flex-start',
alignItems:'center',
width:'100%',
height:'42%',
},


cupC:{
justifyContent:'flex-end',
alignItems:'center',
width:'90%',
height:'6%',
},

boxA:{
justifyContent:'flex-end',
alignItems:'center',
width:'100%',
height:'23%',
},

boxB:{
justifyContent:'center',
alignItems:'center',
width:'95%',
height:'23%',
flexDirection:'column',
},


boxC:{
justifyContent:'flex-end',
alignItems:'center',
width:'100%',
height:'22%',
flexDirection:'column',
},


hang:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'40%',
flexDirection:'row'
},

hangai:{
justifyContent:'flex-end',
alignItems:'center',
width:'14%',
height:'100%',
},


hangaiq:{
justifyContent:'flex-end',
alignItems:'center',
width:'14%',
height:'100%',
},



hangaii:{
justifyContent:'flex-end',
alignItems:'flex-start',
width:'72%',
height:'100%',
},



cola:{
justifyContent:'flex-start',
alignItems:'center',
width:'100%',
height:'40%',
flexDirection:'row'
},

colb:{
justifyContent:'flex-start',
alignItems:'flex-start',
width:'90%',
height:'60%',
},


rola:{
justifyContent:'flex-start',
alignItems:'center',
width:'12%',
height:'100%',
},

rolb:{
justifyContent:'flex-start',
alignItems:'flex-start',
width:'88%',
height:'100%',
},



framev: {
justifyContent:'center',
alignItems:'center',
width:"95%",
height:'90%',
borderRadius:10,
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


textT400: {
fontFamily:'CabinetGrotesk-Thin',
fontWeight:400,
},

textB700: {
fontFamily:'CabinetGrotesk-Bold',
fontWeight:700,
},



})