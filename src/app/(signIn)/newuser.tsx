

import { View, Text,StyleSheet,TouchableOpacity,TextInput,Keyboard,ActivityIndicator} from 'react-native'
import React,{useContext,useEffect,useState} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import {lingual } from '@/src/utils/dataset';
import { regex } from '@/src/utils/dataset';
import { Colors } from '@/src/utils/color';
import { typo } from '@/src/utils/typo';




type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";


type objNum = {
a:number,
b:number,
c:number
}





const newuser = () => {

const router = useRouter()
const { api,WIDTH,HEIGHT,appLang,getlang,delPipeline,user,isloading,setisloading,setUser,roomKey,isReject,setisReject,handleCheckUname,socket,theme } = useContext(AuthContext)
const [isopen,setisopen] = useState({a:true,b:true})
const [key, setkey] = useState<objNum>({a:0,b:0,c:0})
const [lang, setlang] = useState<langt>('en')
const [errState, seterrState] = useState({username:false, password:false,confirm: false })
const errMessage = { username:lingual.threeMore[lang],password: lingual.fiveMore[lang],confirm: lingual.passwordDont[lang] }






const handleSignUp = async (id:string) => {

if (key.a + key.b + key.c !== 3) return
setisloading(true)
socket.on("scanUname", handleCheckUname(roomKey,user.email,user.uname))
try {
await api.post('/qxdata/usrnmchck',{ qxrkey:roomKey,qxusrnm:id })

} catch(err) {
console.log(err)
}

}



useEffect(() => {

setUser({ ...user,uname:'',password:'' })
setkey({ a:0,b:0,c:0 })
},[])





useEffect(() => {

if (isReject === true){
setkey({ ...key,a:0 })
}

},[isReject])



useEffect(() => {

getlang(appLang,setlang)

},[appLang])




return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>
<View style={styles.framei}>

<View style={styles.boxi}>
<TouchableOpacity style={[styles.nest,{borderRadius:typo.h5,backgroundColor:theme === 'dark' ? Colors.dark.primary : Colors.light.primary}]} 
onPress={() => {
delPipeline()
router.back()}}>
<FontAwesome name="angle-left" size={typo.h2} color={theme === 'dark' ? Colors.light.secondary: Colors.dark.secondary} />
</TouchableOpacity>
</View>

<View style={styles.boxii}>
<View style={styles.itemi}>
<View style={styles.middle}>
<Text allowFontScaling={false} style={[styles.textii,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h2}]}>{lingual.signUP[lang]}</Text>
</View>
</View>
<View style={styles.itemii}>
<View style={styles.nesti}>
<Text allowFontScaling={false} style={[styles.textc,{color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText,fontSize:typo.h3}]}>{lingual.welcmCreate[lang]}</Text>
</View>
<View style={styles.nestii}>
<View style={styles.item}><Text allowFontScaling={false} style={[styles.textc,{color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText,fontSize:typo.h3}]}>{lingual.belowCreate[lang]}</Text></View>
</View>
</View>
</View>

</View>

<View style={styles.frameii}>
<View style={styles.samebox}>
<View style={styles.itemiv}>
<Text allowFontScaling={false} style={[styles.textii,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{lingual.username[lang]}</Text>
</View>
<View style={[styles.itemv,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>
<View style={styles.recti}>
<FontAwesome6 name="clipboard-user" size={typo.h3} color={theme === 'dark' ? Colors.dark.icon :Colors.light.icon} />
</View>
<View style={styles.rectii}>
<TextInput style={[styles.input,{color:theme === 'dark' ? Colors.light.primary :Colors.dark.base,fontSize:typo.h2}]} value={user.uname} placeholderTextColor={theme === 'dark' ? Colors.dark.placeholder :Colors.light.placeholder} placeholder={lingual.Name[lang]} 
onChangeText={(text) => {
if (text.length <= 3) {
setisReject(false)
seterrState({...errState,username:true})
setkey({...key,a:0})
setUser({...user,uname:text})
}else if (text.length > 3) {
seterrState({...errState,username:false})
setkey({...key,a:1})
setUser({...user,uname:text})
}
}}/>
</View>
</View>
</View>

{
errState.username && (<View style={styles.errori}><Text style={[styles.texterror,{fontSize:typo.h4}]}>{errMessage.username}</Text></View>)
}

<View style={styles.samebox}>
<View style={styles.itemiv}>
<Text allowFontScaling={false} style={[styles.textii,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{lingual.password[lang]}</Text>
</View>
<View style={[styles.itemv,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>
<View style={styles.recti}>
<Octicons name="key" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon :Colors.light.icon} />
</View>
<View style={styles.rectiii}>
<TextInput style={[styles.input,{color:theme === 'dark' ? Colors.light.primary :Colors.dark.base,fontSize:typo.h2}]} secureTextEntry={isopen.a} 
onChangeText={(text) => {
if (text.match(regex.password)) {
setkey({...key,b:1})
setUser({...user,password:text})
seterrState({...errState,password:false})
} else {
setkey({...key,b:0})
setUser({...user,password:text})
seterrState({...errState,password:true})
}
}}  />
</View>
<View style={styles.recti}>
<TouchableOpacity onPressIn={() => {setisopen({...isopen,a:false})}} onPressOut={() => {setisopen({...isopen,a:true})}}>
<Ionicons name="eye-outline" size={24} color={theme === 'dark' ? Colors.dark.icon :Colors.light.icon}/>
</TouchableOpacity>
</View>
</View>
</View>

{
errState.password && (<View style={[styles.errorii,{marginBottom:typo.h6}]}><Text style={[styles.texterror,{fontSize:typo.h4}]}>{errMessage.password}</Text></View>)
}

<View style={styles.samebox}>
<View style={styles.itemiv}>
<Text allowFontScaling={false} style={[styles.textii,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{lingual.confirmPass[lang]}</Text>
</View>
<View style={[styles.itemv,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>
<View style={styles.recti}>
<Octicons name="key" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon :Colors.light.icon} />
</View>
<View style={styles.rectiii}>
<TextInput style={[styles.input,{color:theme === 'dark' ? Colors.light.primary :Colors.dark.base,fontSize:typo.h2}]} secureTextEntry={isopen.b} 
onChangeText={(text) => {
if (text === user.password) {
setkey({...key,c:1})
seterrState({...errState,confirm:false})
Keyboard.dismiss()
} else {
setkey({...key,c:0})
seterrState({...errState,confirm:true})
}
}}/>
</View>
<View style={styles.recti}>
<TouchableOpacity onPressIn={() => {setisopen({...isopen,b:false})}} onPressOut={() => {setisopen({...isopen,b:true})}}>
<Ionicons name="eye-outline" size={24} color={theme === 'dark' ? Colors.dark.icon :Colors.light.icon} />
</TouchableOpacity>
</View>
</View>
</View>

{
errState.confirm && (<View style={styles.erroriii}><Text style={[styles.texterror,{fontSize:typo.h4}]}>{errMessage.confirm}</Text></View>)
}

</View>



<View style={styles.frameiii}>
<Text allowFontScaling={false} style={[styles.textc,{color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText,fontSize:typo.h4}]}>{lingual.bySigning[lang]}</Text>
<TouchableOpacity>
<Text allowFontScaling={false} style={[styles.textii,{fontSize:typo.h4,textDecorationLine:'underline',textDecorationColor:theme === 'dark' ? Colors.light.primary : Colors.dark.base,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{lingual.termsService[lang]}</Text>
</TouchableOpacity>
</View>


{
isloading ? (<View style={[styles.frameiv,{borderRadius:typo.h6,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}><ActivityIndicator size={typo.h3} color={Colors.light.primary}/></View>) : (<TouchableOpacity style={[styles.frameiv,{borderRadius:typo.h6,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]} onPress={() => handleSignUp(user.uname)}>
<Text allowFontScaling={false} style={[styles.textii,{fontSize:typo.h2,color:Colors.light.primary}]}>{lingual.signUP[lang]}</Text>
</TouchableOpacity>)
}
</View>
)
}

export default newuser






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
height:'10%',
position:'absolute',
top:'9%',
flexDirection:'row'
},

itemi: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'38.1%',
},

itemii: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'61.9%',
flexDirection:'column',
},

nesti: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'70%',
},

nestii: {
justifyContent:'flex-end',
alignItems:'center',
width:'100%',
height:'30%',
},

item: {
justifyContent:'flex-end',
alignItems:'flex-start',
width:'100%',
height:'100%',
position:'absolute',
left:'15%',
},

textii: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
},

itemiii: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'38.1%',
},

nest: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'38.1%',
borderWidth:1,
},

boxi: {
justifyContent:'flex-start',
alignItems:'center',
width:'12%',
height:'100%',
},


boxii: {
justifyContent:'center',
alignItems:'center',
width:'87%',
height:'100%',
flexDirection:'column',
},

middle: {
justifyContent:'center',
alignItems:'center',
width:'30%',
height:'100%',
position:'absolute',
left:'23.6%'
},

textc: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
},


frameii: {
justifyContent:'flex-start',
alignItems:'center',
width:'88.1%',
height:'37%',
position:'absolute',
top:'23.8%',
flexDirection:'column',

},


samebox: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'25%',
},

itemiv: {
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'40%',
},

itemv: {
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
width:'92%',
height:'100%',
},

input: {
width:'95%',
height:'95%',
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
},

rectiii:{
justifyContent:'center',
alignItems:'center',
width:'84%',
height:'100%',
},


frameiii: {
justifyContent:'space-around',
alignItems:'center',
width:'100%',
height:'5%',
position:'absolute',
top:'85.6%',
flexDirection:'row',
},


frameiv: {
justifyContent:'center',
alignItems:'center',
position:'absolute',
top:'89.4%',
width:"88.1%",
height:'5.5%',
borderRadius:10,
borderWidth:1,
},

errori: {
justifyContent:'flex-start',
alignItems:'center',
width:"100%",
height:'5%',
},

errorii: {
justifyContent:'flex-start',
alignItems:'center',
width:"100%",
height:'7%',
},

erroriii: {
justifyContent:'flex-start',
alignItems:'center',
width:"88.1%",
height:'5%',
},

texterror: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
color:'red',
},




})