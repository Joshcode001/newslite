

import { View, Text,StyleSheet,TouchableOpacity,TextInput,Keyboard,ActivityIndicator} from 'react-native'
import React,{useContext,useEffect,useState} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import {lingual } from '@/src/utils/dataset';
import { regex } from '@/src/utils/dataset';
import { Colors } from '@/src/utils/color';
import { typo } from '@/src/utils/typo';
import {KeyboardStickyView} from 'react-native-keyboard-controller'
import { Image } from 'expo-image';


type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";


type objNum = {
a:number,
b:number,
c:number
}





const newuser = () => {

const router = useRouter()
const { api,WIDTH,HEIGHT,appLang,getlang,user,isloading,setisloading,setUser,roomKey,isReject,setisReject,socket,theme,showToast,setisUserReady,setroomKey,platform} = useContext(AuthContext)
const [isopen,setisopen] = useState({a:true,b:true})
const [key, setkey] = useState<objNum>({a:0,b:0,c:0})
const [lang, setlang] = useState<langt>('en')
const [errState, seterrState] = useState({username:false, password:false,confirm: false })
const errMessage = { username:lingual.threeMore[lang],password: lingual.fiveMore[lang],confirm: lingual.passwordDont[lang] }



const placeholderA = theme === 'dark' ? require('../../../assets/images/keydark.png') : 
require('../../../assets/images/keydark.png')



const handleCheckUname = (id:string,mail:string,name:string) => {

return async function (data:any){

if (data.isUser) {
socket.removeAllListeners("scanUname")
setisloading(false)
setisReject(true)
setUser({...user,uname:''})
const toast = {type:'error',name:lingual.fromNEWSW[lang],info:lingual.unameExists[lang],onHide:() => {}, visibilityTime:6000}
showToast(toast)

} else if (!data.isUser) {

await api.post('/qxdata/uthxcd',{qxrkey:id,qxmail:mail,qxcode:'',qxid:'signup',qxname:name,qxintel:'qxISz'})
}

}

}




const handleSignUp = async (id:string) => {

if (isloading) return
Keyboard.dismiss()
if (key.a + key.b + key.c !== 3 ) return
setisloading(true)

socket.on("scanUname", handleCheckUname(roomKey,user.email,user.uname))

try {
await api.post('/qxdata/usrnmchck',{ qxrkey:roomKey,qxusrnm:id })

} catch(err) {
console.log(err)
}

}



const goBack = () => {
setisUserReady(false)
setroomKey('')
setUser({image:'none',email:'',password:'',dob:'',fname:'',lname:'',uname:'',gender:''})
socket.close()
router.back()
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

getlang(appLang.value,setlang)

},[appLang])




return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>

<View style={styles.cupA}>

<View style={styles.boxA}>
<View style={styles.frame}>

<View style={styles.framei}>

<View style={styles.hang}>

<TouchableOpacity onPress={goBack} style={styles.hangai}>
<FontAwesome name="angle-left" size={typo.h1_8} color={theme === 'dark' ? Colors.light.secondary: Colors.dark.secondary} />
</TouchableOpacity>

<View style={styles.hangaiq}></View>

<View style={styles.hangaii}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h2}]}>{lingual.signUP[lang]}</Text>
</View>

</View>

</View>

<View style={styles.frameii}>

<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText,fontSize:typo.h4}]}>{lingual.createAccStart[lang]}</Text>

</View>

</View>
</View>

<View style={styles.boxB}>

<View style={styles.infobox}>

<View style={styles.infobi}>

<View style={styles.infobx}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{lingual.username[lang]}</Text>
</View>

<View style={[styles.infoby,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>

<View style={styles.recti}>
<FontAwesome6 name="clipboard-user" size={typo.h3} color={theme === 'dark' ? Colors.dark.icon :Colors.light.icon} />
</View>
<View style={styles.rectii}>
<TextInput allowFontScaling={false} style={[styles.input,{color:theme === 'dark' ? Colors.light.primary :Colors.dark.base,fontSize:typo.h3}]}
value={user.uname}  
onChangeText={(text) => {
if (text.length < 3) {
setisReject(false)
seterrState({...errState,username:true})
setkey({...key,a:0})
setUser({...user,uname:text})
}else if (text.length >= 3) {
seterrState({...errState,username:false})
setkey({...key,a:1})
setUser({...user,uname:text})
}
}}/>
</View>

</View>

</View>

{
errState.username && (<View style={styles.infobii}>
<Text style={[styles.textR400,{fontSize:typo.h5,color:theme === 'dark' ? Colors.dark.error : Colors.light.error}]}>
{errMessage.username}</Text>
</View>
)
}
</View>

<View style={styles.infobox}>

<View style={styles.infobi}>

<View style={styles.infobx}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h4,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{lingual.password[lang]}</Text>
</View>

<View style={[styles.infoby,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>

<View style={styles.recti}>
<Image source={placeholderA} style={{width:'80%',height:'80%'}} contentFit='contain'/>
</View>
<View style={styles.rectiii}>
<TextInput allowFontScaling={false} style={[styles.input,{color:theme === 'dark' ? Colors.light.primary :Colors.dark.base,fontSize:typo.h3}]} 
secureTextEntry={isopen.a} 
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

<TouchableOpacity style={styles.recti} onPressIn={() => {setisopen({...isopen,a:false})}} 
onPressOut={() => {setisopen({...isopen,a:true})}}>
<Ionicons name="eye-outline" size={24} color={theme === 'dark' ? Colors.dark.icon :Colors.light.icon}/>
</TouchableOpacity>

</View>
</View>

{
errState.password && (<View style={[styles.infobii]}>
<Text style={[styles.textR400,{fontSize:typo.h5,color:theme === 'dark' ? Colors.dark.error : Colors.light.error}]}>{errMessage.password}</Text>
</View>)
}

</View>

<View style={styles.infobox}>

<View style={styles.infobi}>

<View style={styles.infobx}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h4,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{lingual.confirmPass[lang]}</Text>
</View>

<View style={[styles.infoby,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>

<View style={styles.recti}>
<Image source={placeholderA} style={{width:'80%',height:'80%'}} contentFit='contain'/>
</View>
<View style={styles.rectiii}>
<TextInput allowFontScaling={false} style={[styles.input,{color:theme === 'dark' ? Colors.light.primary :Colors.dark.base,fontSize:typo.h3}]} 
secureTextEntry={isopen.b} 
onChangeText={(text) => {
if (text === user.password) {
setkey({...key,c:1})
seterrState({...errState,confirm:false})
} else {
setkey({...key,c:0})
seterrState({...errState,confirm:true})
}
}}/>
</View>

<TouchableOpacity style={styles.recti} onPressIn={() => {setisopen({...isopen,b:false})}} 
onPressOut={() => {setisopen({...isopen,b:true})}}>
<Ionicons name="eye-outline" size={24} color={theme === 'dark' ? Colors.dark.icon :Colors.light.icon} />
</TouchableOpacity>


</View>

</View>

{
errState.confirm && (<View style={styles.infobii}>
<Text style={[styles.textR400,{fontSize:typo.h4,color:theme === 'dark' ? Colors.dark.error : Colors.light.error}]}>{errMessage.confirm}</Text>
</View>)
}

</View>


</View>

</View>

<View style={styles.cupB}></View>

<KeyboardStickyView style={styles.cupC} offset={platform === 'ios' ? {closed:-40,opened:0}:{closed:0,opened:42}}>

<View style={styles.frameiii}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText,fontSize:typo.h4}]}>{lingual.bySigning[lang]}</Text>
<TouchableOpacity onPress={() => router.push({pathname:'/(signIn)/privacyterms'})}>
<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h4,textDecorationLine:'underline',textDecorationColor:theme === 'dark' ? Colors.light.primary : Colors.dark.base,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{lingual.termsService[lang]}</Text>
</TouchableOpacity>
</View>


<TouchableOpacity onPress={() => handleSignUp(user.uname)} 
style={[styles.frameiv,{borderRadius:typo.h6,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}>

{
isloading ? (<ActivityIndicator size={typo.h3} color={Colors.light.primary}/>) :
(<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h2,color:Colors.light.primary}]}>{lingual.signUP[lang]}</Text>)
}


</TouchableOpacity>

</KeyboardStickyView>

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
height:'38%',
},


cupC:{
justifyContent:'center',
alignItems:'center',
width:'90%',
height:'8%',
flexDirection:'column'
},


boxA:{
justifyContent:'flex-end',
alignItems:'center',
width:'100%',
height:'27%',
},

boxB:{
justifyContent:'space-between',
alignItems:'center',
width:'90%',
height:'57%',
flexDirection:'column',
},


frame:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'50%',
flexDirection:'column',

},

framei:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'55%',
},

frameii:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'45%',
},


hang:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'100%',
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
width:'25%',
height:'100%',
},


hangaii:{
justifyContent:'flex-end',
alignItems:'flex-start',
width:'61%',
height:'100%',
},




infobox:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'33%',
flexDirection:'column'
},


infobi:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'75%',
flexDirection:'column'
},


infobii:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'25%',
},


infobx:{
justifyContent:'flex-start',
alignItems:'flex-start',
width:'100%',
height:'40%',
},



infoby:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'60%',
flexDirection:'row',
borderBottomWidth:1
},


recti:{
justifyContent:'center',
alignItems:'center',
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
justifyContent:'space-between',
alignItems:'center',
width:'100%',
height:'30%',
flexDirection:'row',
},


frameiv: {
justifyContent:'center',
alignItems:'center',
width:"100%",
height:'70%',
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