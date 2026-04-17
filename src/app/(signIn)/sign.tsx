
import { View, Text, StyleSheet,TouchableOpacity,TextInput,ActivityIndicator,Keyboard } from 'react-native'
import React,{useState,useContext, useEffect} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { useRouter } from 'expo-router';
import { Colors } from '@/src/utils/color';
import { lingual } from '@/src/utils/dataset';
import { typo } from '@/src/utils/typo';
import {KeyboardStickyView} from 'react-native-keyboard-controller'
import AppIcon from '@/src/components/AppIcons';





type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";






const sign = () => {

const router = useRouter()
const {WIDTH,HEIGHT,myClient,isloading,roomKey,locationP,api,setisloading,enableLocation,theme,getlang,appLang,setUser,user,platform,setisUserReady,setroomKey,setmyClient,socket,checkNetwork} = useContext(AuthContext)
const [isopen,setisopen] = useState(true)
const [isActive,setisActive] = useState(false)
const [lang, setlang] = useState<langt>('en')



const placeholderS = theme === 'dark' ? 'smsdark' : 'smslight'
const placeholderK = theme === 'dark' ? 'keydark': 'keylight' 
const placeholderED = theme === 'dark' ? 'editdark': 'editlight'
const placeholderEY = theme === 'dark' ? 'eyedark': 'eyelight'



const beginSession = async () => {
Keyboard.dismiss()
if (user.password === '') return

const result = checkNetwork()
if (!result)return

setisloading(true)
setisActive(true)
enableLocation()
}






const change = () => {
setisUserReady(false)
setroomKey('')
setUser({image:'none',email:'',password:'',dob:'',fname:'',lname:'',uname:'',gender:''})
setmyClient({fname:'',lname: '',uname: '',dob: '',email:'',image: '',gender:'',reactions:[],comments:[],saved:[],history:[],subCode:"null",dailyCount:0,inbox:[]})
socket.close()
router.replace({pathname:'/next'})
}






useEffect(() => {

if (locationP.isEnable && isActive) {

console.log(locationP)

const cot = async () => {
await api.post('qxdata/cdntls',{ qxcountry:locationP.country,qxmail:user.email,qxpass:user.password,qxrkey:roomKey })
}

cot()
setisActive(false)
}



},[locationP,isActive])




useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])




return (
<View style={[styles.container,{width:WIDTH, height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>

<View style={styles.cupA}>

<View style={styles.boxA}>

<View style={styles.hangA}>

<View style={styles.itemi}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h2}]}>{lingual.welomback[lang]}, {myClient.fname}!</Text>
</View>

<View style={styles.itemii}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText,fontSize:typo.h4}]}>{lingual.kindlyEnter[lang]}</Text>
</View>


</View>

</View>

<View style={styles.boxB}>

<View style={styles.rolA}>
<AppIcon name={placeholderS} size={20} />
</View>

<View style={styles.rolB}>
<Text allowFontScaling={false} style={[styles.textR400,{fontSize:typo.h4},{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>{myClient.email}</Text>
</View>

<TouchableOpacity onPress={change} style={styles.rolQ}>

<View style={styles.rolC}>
<Text allowFontScaling={false} style={[styles.textR400,{fontSize:typo.h4},{color:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}>{lingual.change[lang]}</Text>
</View>


<View style={styles.rolD}>
<AppIcon name={placeholderED} size={20} />
</View>
</TouchableOpacity>

</View>


<View style={styles.boxC}>

<View style={styles.nesti}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{lingual.enterPass[lang]}</Text>
</View>

<View style={[styles.nestii,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>

<View style={styles.recti}>
<AppIcon name={placeholderK} size={typo.h1_8} />
</View>

<View style={styles.rectii}>
<TextInput allowFontScaling={false} style={[styles.input,{color:theme === 'dark' ? Colors.light.primary :Colors.dark.base,fontSize:typo.h3}]} secureTextEntry={isopen} value={user.password} onChangeText={text => setUser({...user,password:text})}/>
</View>

<TouchableOpacity onPressIn={() => setisopen(false)} onPressOut={() => setisopen(true)} style={styles.rectiii}>
<AppIcon name={placeholderEY} size={typo.h1_8} />
</TouchableOpacity>

</View>

</View>

</View>

<View style={styles.cupB}>
<View style={styles.line}>
<TouchableOpacity onPress={() => router.push({pathname:'/forgotpass'})}>
<Text allowFontScaling={false} 
style={[styles.textM500,{fontSize:typo.h4,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>
{lingual.forgotPass[lang]}</Text>
</TouchableOpacity>
</View>
</View>


<KeyboardStickyView style={styles.cupC}  offset={platform === 'ios' ? {closed:-40,opened:0}:{closed:-50,opened:0}}>

{
isloading ? (<View style={[styles.btn,{borderRadius:typo.h3,columnGap:typo.h4,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}><ActivityIndicator size={typo.h4} color={Colors.light.primary} /></View>) : (<TouchableOpacity style={[styles.btn,{borderRadius:typo.h3,columnGap:typo.h4,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]} onPress={beginSession}>
<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h3,color:Colors.light.primary}]} >{lingual.signIn[lang]}</Text>
<AppIcon name='arrowright' size={typo.h1_8} />
</TouchableOpacity>)
}

</KeyboardStickyView>


</View>
)
}

export default sign









const styles = StyleSheet.create({

container: {
justifyContent:'center',
alignItems:'center',
flex:1
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

line:{
justifyContent:'flex-end',
alignItems:'flex-end',
width:'90%',
height:'10%',
},


boxA:{
justifyContent:'flex-end',
alignItems:'center',
width:'100%',
height:'33%'
},

boxB:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'13%',
flexDirection:'row'
},


boxC:{
justifyContent:'flex-end',
alignItems:'flex-start',
width:'94%',
height:'22%',
flexDirection:'column'
},


itemi: {
justifyContent:'center',
alignItems:'center',
width:"100%",
height:'55%',
},

itemii: {
justifyContent:'center',
alignItems:'center',
width:"100%",
height:'45%',
},


hangA:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'45%',
flexDirection:'column'
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

nesti: {
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'45%',
},

nestii: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'55%',
flexDirection:'row',
borderBottomWidth:1,
},


rolA:{
justifyContent:'flex-end',
alignItems:'center',
width:'10%',
height:'60%',
},


rolB:{
justifyContent:'flex-end',
alignItems:'flex-start',
width:'61%',
height:'60%',
},

rolC:{
justifyContent:'flex-end',
alignItems:'flex-end',
width:'60%',
height:'100%',
},


rolD:{
justifyContent:'flex-end',
alignItems:'center',
width:'40%',
height:'100%',
},


rolQ:{
justifyContent:'center',
alignItems:'center',
width:'29%',
height:'60%',
flexDirection:'row'
},


input: {
width:'95%',
height:'100%',
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
},


btn: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'75%',
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