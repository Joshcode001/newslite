

import { View, Text,StyleSheet,TextInput,TouchableOpacity,ActivityIndicator,Keyboard} from 'react-native'
import React,{useState,useEffect,useContext} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {lingual } from '@/src/utils/dataset';
import { regex } from '@/src/utils/dataset';
import { Colors } from '@/src/utils/color';
import { typo } from '@/src/utils/typo';
import { useRouter } from 'expo-router'
import { Image } from 'expo-image';
import {KeyboardStickyView} from 'react-native-keyboard-controller'





type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";









const next = () => {

const router = useRouter()
const { WIDTH,HEIGHT,isloading,getlang,appLang,user,setUser,theme,socket,setmyClient,setisloading,locationP,myClient,api,setisUserReady,isUserReady,setroomKey,platform} = useContext(AuthContext)
const [lang, setlang] = useState<langt>('en')
const [iserror,setiserror] = useState(false)



const placeholder = theme === 'dark' ? require('../../../assets/images/smsdark.png') : 
require('../../../assets/images/smslight.png')



const connectUser = () => {
socket.emit('joinRoom',user.email)
}


const sendEmailTask = async(id:string) => {

setroomKey(id)

await api.post('qxdata/cdntls',{ qxcountry:locationP.country,qxmail:user.email,qxpass:user.password,qxrkey:id })
}


const handleCheckEmail = (newdata:any) => {

try {

if (newdata.message === true ){

setmyClient({
fname:newdata.client.fname,
lname: newdata.client.lname,
uname: newdata.client.uname,
dob: newdata.client.dob,
email:newdata.client.email,
image:newdata.client.image,
gender:newdata.client.gender,
reactions:newdata.client.reactions,
comments:newdata.client.comments,
saved:newdata.client.saved,
history:newdata.client.history,
subCode:newdata.client.subCode
})


router.push({pathname:"/(signIn)/sign"})

} else if (newdata.message === false ) {

router.push({pathname:"/newuser"})
}


setisUserReady(false)
setisloading(false)


}catch(err) {
setisloading(false)
console.log(err)
}
}



const getClient = () => {
Keyboard.dismiss()
if (user.email === '' || iserror || isloading) return

setisloading(true)
setisUserReady(true)

}




useEffect(() => {

setUser({image:'none',email:'',password:'',dob:'',fname:'',lname:'',uname:'',gender:''})

},[])




useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])






useEffect(() => {

if (isUserReady === true ) {

socket.on("connect", connectUser)
socket.on("roomKey",sendEmailTask)
socket.on("scanEmail", handleCheckEmail)

socket.connect()

}


return () => {
socket.off("connect", connectUser)
socket.off("roomKey",sendEmailTask)
socket.off("scanEmail", handleCheckEmail)

}


},[isUserReady])




return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>


<View style={styles.cupA}>

<View style={styles.boxA}>

<View style={styles.bag}>
<View style={styles.boxi}>
<Text allowFontScaling={false} style={[styles.textM400,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h2}]}>{lingual.lgetStarted[lang]}</Text>
</View>
<View style={styles.boxii}>
<Text allowFontScaling={false} style={[styles.textR400,{lineHeight:typo.h2,color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText,fontSize:typo.h4}]}>
{lingual.enterEBegin[lang]}
</Text>
</View>
</View>


</View>


<View style={styles.boxB}>

<View style={styles.framei}>
<View style={styles.itemi}>
<Text allowFontScaling={false} style={[styles.textM400,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{lingual.enterEmail[lang]}</Text>
</View>
<View style={[styles.itemii,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>
<View style={styles.recti}>
<Image source={placeholder} style={{width:'90%',height:'90%'}} contentFit='contain'/>
</View>
<View style={styles.rectii}>
<TextInput allowFontScaling={false} style={[styles.input,{color:theme === 'dark' ? Colors.light.primary :Colors.dark.base,fontSize:typo.h3}]} placeholderTextColor={theme === 'dark' ? Colors.dark.placeholder :Colors.light.placeholder} placeholder='address@email.com' value={user.email}
onChangeText={(text) => {
if (text.match(regex.email)) {
setUser({...user,email:text})
setiserror(false)
} else {
setiserror(true)
setUser({...user,email:text})
}

}}/>
</View>
</View>
</View>

{
iserror && (<View style={[styles.frameii]}>
<Text allowFontScaling={false} style={[styles.textR400,{fontSize:typo.h4,color:theme === 'dark' ? Colors.dark.error :
Colors.light.error}]}>
{lingual.validEmail[lang]}</Text>
</View>)
}

</View>

</View>


<View style={styles.cupB}></View>


<KeyboardStickyView style={styles.cupC}  offset={platform === 'ios' ? {closed:-40,opened:0}:{closed:0,opened:42}}>


{
isloading ? (<View style={[styles.btn,{borderRadius:typo.h3,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}><ActivityIndicator size={typo.h4} color={Colors.light.primary} /></View>) : (<TouchableOpacity style={[styles.btn,{borderRadius:typo.h3,columnGap:typo.h4,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}
onPress={getClient}>
<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h2,color:Colors.light.primary}]} >{lingual.next[lang]}</Text>
<FontAwesome name="angle-right" size={typo.h1_5} color={Colors.light.primary} />
</TouchableOpacity>)
}



</KeyboardStickyView>

</View>
)
}

export default next





const styles = StyleSheet.create({

container:{
flex:1,
justifyContent:'center',
alignItems:'center',
flexDirection:'column'
},

cupA:{
justifyContent:'space-between',
alignItems:'center',
width:'100%',
height:'52%',
flexDirection:'column',
},

cupB:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'42%',
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
height:'33%',
},


boxB:{
justifyContent:'flex-start',
alignItems:'center',
width:'93%',
height:'30%',
flexDirection:'column',
},


itemi: {
justifyContent:'flex-end',
alignItems:'flex-start',
width:'100%',
height:'55%',
},

itemii: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'45%',
flexDirection:'row',
borderBottomWidth:1,
},

recti:{
justifyContent:'flex-end',
alignItems:'flex-end',
width:'8%',
height:'100%',
},

rectii:{
justifyContent:'flex-end',
alignItems:'center',
width:'92%',
height:'100%',
},


btn: {
justifyContent:'center',
alignItems:'center',
width:'90%',
height:'75%',
flexDirection:'row',
},

input: {
width:'95%',
height:'95%',
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
},


framei:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'75%',
flexDirection:'column',
},

frameii:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'25%',
},

bag: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'40%',
flexDirection:'column',
},

boxi: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'60%',
},

boxii: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'40%',
},



textM400: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:400,
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