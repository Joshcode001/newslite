

import { View, Text,StyleSheet,TextInput,TouchableOpacity,ActivityIndicator} from 'react-native'
import React,{useState,useEffect,useContext} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {lingual } from '@/src/utils/dataset';
import { regex } from '@/src/utils/dataset';
import { Colors } from '@/src/utils/color';
import { typo } from '@/src/utils/typo';
import { useRouter } from 'expo-router'



type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";









const next = () => {

const router = useRouter()
const { WIDTH,HEIGHT,isloading,getlang,appLang,user,setUser,theme,socket,setmyClient,setisloading,locationP,myClient,api,setisUserReady,isUserReady,setroomKey} = useContext(AuthContext)
const [lang, setlang] = useState<langt>('en')
const [iserror,setiserror] = useState(false)


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
<View  style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>

<View style={styles.framei}>
<View style={styles.boxi}>
<Text allowFontScaling={false} style={[styles.textii,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h2}]}>{lingual.lgetStarted[lang]}</Text>
</View>
<View style={styles.boxii}>
<Text allowFontScaling={false} style={[styles.textc,{lineHeight:typo.h2,color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText,fontSize:typo.h4}]}>
{lingual.enterEBegin[lang]}
</Text>
</View>
</View>


<View style={styles.frameii}>
<View style={styles.itemi}>
<Text allowFontScaling={false} style={[styles.textii,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{lingual.enterEmail[lang]}</Text>
</View>
<View style={[styles.itemii,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>
<View style={styles.recti}>
<Feather name="mail" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon :Colors.light.icon} />
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
iserror && (<View style={[styles.box,{paddingTop:typo.h8}]}><Text allowFontScaling={false} style={[styles.texterror,{fontSize:typo.h4}]}>{lingual.validEmail[lang]}</Text></View>)
}


<View style={styles.frameiii}>
{
isloading ? (<View style={[styles.btn,{borderRadius:typo.h3,columnGap:typo.h4,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}><ActivityIndicator size={typo.h4} color={Colors.light.primary} /></View>) : (<TouchableOpacity style={[styles.btn,{borderRadius:typo.h3,columnGap:typo.h4,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}
onPress={getClient}>
<Text allowFontScaling={false} style={[styles.textii,{fontSize:typo.h2,color:Colors.light.primary}]} >{lingual.next[lang]}</Text>
<FontAwesome name="angle-right" size={typo.h1_5} color={Colors.light.primary} />
</TouchableOpacity>
)
}
</View>

</View>
)
}

export default next





const styles = StyleSheet.create({

container: {
justifyContent:'center',
alignItems:'center',
flex:1,
},

textc: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
},

textii: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
},

framei: {
justifyContent:'center',
alignItems:'center',
position:'absolute',
bottom:'84.1%',
width:'95%',
height:'6.9%',
flexDirection:'column'
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

frameii: {
justifyContent:'center',
alignItems:'center',
position:'absolute',
top:'38.2%',
width:'88.1%',
height:'9.2%',
flexDirection:'column',
},

itemi: {
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'40%',
},

itemii: {
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

frameiii: {
justifyContent:'center',
alignItems:'center',
position:'absolute',
top:'89.4%',
width:'88.1%',
height:'5.5%',
},

btn: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'95%',
flexDirection:'row',
},

box: {
justifyContent:'flex-end',
alignItems:'center',
position:'absolute',
top:'46.4%',
width:'88.1%',
height:'4%',
paddingTop:5
},

texterror: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
color:'red',
},




})