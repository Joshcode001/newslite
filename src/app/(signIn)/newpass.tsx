

import { View, Text ,StyleSheet,TextInput,TouchableOpacity,ActivityIndicator,Keyboard} from 'react-native'
import React,{useState,useEffect,useContext} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import Octicons from '@expo/vector-icons/Octicons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {lingual } from '@/src/utils/dataset';
import { regex } from '@/src/utils/dataset';
import { Colors } from '@/src/utils/color';
import { typo } from '@/src/utils/typo';





type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";




const newpass = () => {

const [isopen,setisopen] = useState({a:true,b:true})
const {api,WIDTH,HEIGHT,myClient,getlang,appLang,isloading,setisloading,roomKey,theme} = useContext(AuthContext)
const [newpass,setnewpass] = useState('')
const [key, setkey] = useState({a:0,b: 0})
const [lang, setlang] = useState<langt>('en')
const [errState, seterrState] = useState({ password:false,confirm: false })

const errMessage = { password:lingual.fiveMore[lang],confirm: lingual.passwordDont[lang],}







const updatePass = async(pass:string) => {
if (key.a + key.b !== 2 ) return
setisloading(true)
let subdata = []
let message = {id:'pass',query:{newpass:'',email:myClient.email,qxrkey:roomKey,}}



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
<View style={styles.framei}>
<Text allowFontScaling={false} style={[styles.textii,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h2}]}>{lingual.chnagePass[lang]}</Text>
</View>

<View style={styles.frameiii}>
<View style={styles.nesti}>
<Text allowFontScaling={false} style={[styles.textii,{fontSize:typo.h4,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{lingual.enterNPass[lang]}</Text>
</View>
<View style={[styles.nestii,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>
<View style={styles.recti}>
<Octicons name="key" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon :Colors.light.icon} />
</View>
<View style={styles.rectii}>
<TextInput allowFontScaling={false} style={[styles.input,{paddingLeft:typo.h6,color:theme === 'dark' ? Colors.light.primary :Colors.dark.base,fontSize:typo.h2}]} secureTextEntry={isopen.a} 
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
<View style={styles.rectiii}>
<TouchableOpacity onPressIn={() => setisopen({...isopen,a:false})} onPressOut={() => setisopen({...isopen,a:true})}>
<Ionicons name="eye-outline" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon :Colors.light.icon} />
</TouchableOpacity>
</View>
</View>
</View>

{
errState.password && <View style={styles.itemi}>
<Text allowFontScaling={false} style={[styles.textc,{fontSize:typo.h4}]}>{errMessage.password}</Text>
</View>
}


<View style={styles.frameiv}>
<View style={styles.nesti}>
<Text allowFontScaling={false} style={[styles.textii,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{lingual.confirmPass[lang]}</Text>
</View>
<View style={[styles.nestii,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>
<View style={styles.recti}>
<Octicons name="key" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon :Colors.light.icon} />
</View>
<View style={styles.rectii}>
<TextInput allowFontScaling={false} style={[styles.input,{paddingLeft:typo.h6,color:theme === 'dark' ? Colors.light.primary :Colors.dark.base}]} secureTextEntry={isopen.b} 
onChangeText={(text) => {

if (text !== newpass) {
setkey({...key, b:0})
seterrState({...errState, confirm:true})

} else if (text === newpass) {

setkey({...key, b:1})
Keyboard.dismiss()
seterrState({...errState, confirm:false})}

}} />
</View>
<View style={styles.rectiii}>
<TouchableOpacity onPressIn={() => setisopen({...isopen,b:false})} onPressOut={() => setisopen({...isopen,b:true})}>
<Ionicons name="eye-outline" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon :Colors.light.icon} />
</TouchableOpacity>
</View>
</View>
</View>

{
errState.confirm && <View style={styles.itemii}>
<Text allowFontScaling={false} style={[styles.textc,{fontSize:typo.h4}]}>{errMessage.confirm}</Text>
</View>
}

{
isloading ? (<View style={[styles.framev,{borderRadius:typo.h6,columnGap:typo.h3,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}><ActivityIndicator size={typo.h4}  color={Colors.light.primary}/></View>) : (<TouchableOpacity style={[styles.framev,{borderRadius:typo.h6,columnGap:typo.h3,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]} onPress={() => updatePass(newpass)}>
<Text allowFontScaling={false} style={[styles.textii,{color:Colors.light.primary,fontSize:typo.h2}]}>{lingual.resetPass[lang]}</Text>
<FontAwesome name="angle-right" size={typo.h1_5} color={Colors.light.primary} />
</TouchableOpacity>)
}

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

framei: {
justifyContent:'center',
alignItems:'center',
width:'88.1%',
height:'3.7%',
position:'absolute',
top:'9%',
},

textii: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
},

frameiii: {
justifyContent:'center',
alignItems:'center',
position:'absolute',
top:'25.7%',
width:"88.1%",
height:'9.2%',
flexDirection:'column'
},

nesti: {
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'40%',
},

nestii: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'60%',
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
width:'95%',
height:'95%',
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
},

frameiv: {
justifyContent:'center',
alignItems:'center',
position:'absolute',
top:'45%',
width:"88.1%",
height:'9.2%',
flexDirection:'column'
},

framev: {
justifyContent:'center',
alignItems:'center',
position:'absolute',
top:'89.4%',
width:"88.1%",
height:'5.5%',
borderRadius:10,
borderWidth:1,
flexDirection:'row',
},

itemi: {
justifyContent:'flex-start',
alignItems:'center',
position:'absolute',
top:'34.9%',
width:"88.1%",
height:'8%',

},

itemii: {
justifyContent:'center',
alignItems:'center',
position:'absolute',
top:'54.2%',
width:"88.1%",
height:'2%',
},

textc: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
color:'red',
},



})