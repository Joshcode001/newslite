

import { View, Text ,StyleSheet,TextInput,TouchableOpacity,ActivityIndicator,Keyboard} from 'react-native'
import React,{useState,useEffect,useContext} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {lingual } from '@/src/utils/dataset';
import { regex } from '@/src/utils/dataset';
import { Colors } from '@/src/utils/color';
import { typo } from '@/src/utils/typo';
import { Image } from 'expo-image';
import {KeyboardStickyView} from 'react-native-keyboard-controller'



type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";




const newpass = () => {

const [isopen,setisopen] = useState({ a:true,b:true })
const {api,WIDTH,HEIGHT,myClient,getlang,appLang,isloading,setisloading,roomKey,theme,platform} = useContext(AuthContext)
const [newpass,setnewpass] = useState('')
const [key, setkey] = useState({a:0,b: 0})
const [lang, setlang] = useState<langt>('en')
const [errState, seterrState] = useState({ password:false,confirm: false })

const errMessage = { password:lingual.fiveMore[lang],confirm: lingual.passwordDont[lang]}





const placeholderA = theme === 'dark' ? require('../../../assets/images/keydark.png') : 
require('../../../assets/images/keylight.png') 


const placeholderZ = theme === 'dark' ? require('../../../assets/images/eyedark.png'):
require('../../../assets/images/eyelight.png')




const updatePass = async(pass:string) => {
Keyboard.dismiss()
if (key.a + key.b !== 2 ) return
setisloading(true)
let subdata = []
let message = {id:'pass',query:{ newpass:'',email:myClient.email,qxrkey:roomKey, }}



try {

message.query.newpass = pass
subdata.push(message)

if (subdata.length > 0) {
const gzdata = JSON.stringify(subdata)
await api.post('/qxdata/updcldtls', gzdata)
}







}catch(err) {
console.log(err)
}





}








useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])






return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>

<View style={styles.cupA}>

<View style={styles.boxA}>
<View style={styles.frame}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h2}]}>{lingual.chnagePass[lang]}</Text>
</View>
</View>

<View style={styles.boxB}>

<View style={styles.hang}>

<View style={styles.hanga}>

<View style={styles.nesti}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h4,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{lingual.enterNPass[lang]}</Text>
</View>
<View style={[styles.nestii,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>
<View style={styles.recti}>
<Image source={placeholderA} style={{width:'65%',height:'65%'}} contentFit='contain' />
</View>
<View style={styles.rectii}>
<TextInput allowFontScaling={false} style={[styles.input,{color:theme === 'dark' ? Colors.light.primary :Colors.dark.base,fontSize:typo.h2}]} secureTextEntry={isopen.a} 
onChangeText={(text) => {

if (!text.match(regex.password)) {
setkey({...key, a:0})
seterrState({...errState, password:true})

} else if (text.match(regex.password)) {

setkey({...key, a:1})
seterrState({...errState, password:false})}

setnewpass(text)

}} />
</View>
<TouchableOpacity style={styles.rectiii}
onPressIn={() => setisopen({...isopen,a:false})} onPressOut={() => setisopen({...isopen,a:true})}>
<Image source={placeholderZ} style={{width:'65%',height:'65%'}} contentFit='contain'/>
</TouchableOpacity>
</View>

</View>

{
errState.password && <View style={styles.hangb}>
<Text allowFontScaling={false} style={[styles.textR400,{fontSize:typo.h5,color:theme === 'dark' ? Colors.dark.error :
Colors.light.error}]}>{errMessage.password}</Text>
</View>
}

</View>

<View style={styles.hang}>

<View style={styles.hanga}>

<View style={styles.nesti}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{lingual.confirmPass[lang]}</Text>
</View>
<View style={[styles.nestii,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>
<View style={styles.recti}>
<Image source={placeholderA} style={{width:'65%',height:'65%'}} contentFit='contain' />
</View>
<View style={styles.rectii}>
<TextInput allowFontScaling={false} style={[styles.input,{color:theme === 'dark' ? Colors.light.primary :Colors.dark.base,fontSize:typo.h2}]} secureTextEntry={isopen.b} 
onChangeText={(text) => {

if (text !== newpass) {
setkey({...key, b:0})
seterrState({...errState, confirm:true})

} else if (text === newpass) {

setkey({...key, b:1})
seterrState({...errState, confirm:false})}

}} />
</View>
<TouchableOpacity style={styles.rectiii}
onPressIn={() => setisopen({...isopen,b:false})} onPressOut={() => setisopen({...isopen,b:true})}>
<Image source={placeholderZ} style={{width:'65%',height:'65%'}} contentFit='contain'/>
</TouchableOpacity>
</View>

</View>

{
errState.confirm && <View style={[styles.hangb]}>
<Text allowFontScaling={false} style={[styles.textR400,{fontSize:typo.h5,color:theme === 'dark' ? Colors.dark.error :
Colors.light.error}]}>{errMessage.confirm}</Text>
</View>
}

</View>

</View>

</View>

<View style={styles.cupB}></View>

<KeyboardStickyView style={styles.cupC} offset={platform === 'ios' ? {closed:-40,opened:0}:{closed:-50,opened:0}}>

{
isloading ? (<View style={[styles.framev,{borderRadius:typo.h6,columnGap:typo.h3,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}><ActivityIndicator size={typo.h4}  color={Colors.light.primary}/></View>) : (<TouchableOpacity style={[styles.framev,{borderRadius:typo.h6,columnGap:typo.h3,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]} onPress={() => updatePass(newpass)}>
<Text allowFontScaling={false} style={[styles.textB700,{color:Colors.light.primary,fontSize:typo.h2}]}>
{lingual.resetPass[lang]}</Text>
<FontAwesome name="angle-right" size={typo.h1_5} color={Colors.light.primary} />
</TouchableOpacity>)
}


</KeyboardStickyView>

</View>
)
}

export default newpass







const styles = StyleSheet.create({

container: {
justifyContent:'center',
alignItems:'center',
flex:1,
},


cupA:{
justifyContent:'space-between',
alignItems:'center',
width:'100%',
height:'54%',
flexDirection:'column',
},

cupB:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'40%',
},


cupC:{
justifyContent:'flex-end',
alignItems:'center',
width:'100%',
height:'6%',
},


boxA:{
justifyContent:'flex-end',
alignItems:'center',
width:'100%',
height:'23%',
},

boxB:{
justifyContent:'space-between',
alignItems:'center',
width:'100%',
height:'57%',
flexDirection:'column',
},

frame: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'30%',
},


hang: {
justifyContent:'center',
alignItems:'center',
width:'92%',
height:'44%',
flexDirection:'column'
},


hanga:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'80%',
flexDirection:'column'
},


hangb:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'20%',
},


nesti: {
justifyContent:'flex-end',
alignItems:'flex-start',
width:'100%',
height:'50%',
},

nestii: {
justifyContent:'flex-end',
alignItems:'center',
width:'100%',
height:'50%',
flexDirection:'row',
borderBottomWidth:1,
},

recti:{
justifyContent:'center',
alignItems:'flex-end',
width:'8%',
height:'100%',


},

rectii:{
justifyContent:'center',
alignItems:'center',
width:'84%',
height:'100%',
},

rectiii:{
justifyContent:'center',
alignItems:'center',
width:'8%',
height:'100%',

},

input: {
width:'100%',
height:'100%',
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
padding:5
},


framev: {
justifyContent:'center',
alignItems:'center',
width:"95%",
height:'90%',
borderRadius:10,
borderWidth:1,
flexDirection:'row',
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