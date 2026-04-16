
import { View, Text,StyleSheet,TouchableOpacity,ActivityIndicator, Keyboard } from 'react-native'
import React,{useEffect,useState,useContext} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { useRouter } from 'expo-router';
import CustomOtp from '@/src/components/CustomOtp';
import { Colors } from '@/src/utils/color';
import { lingual } from '@/src/utils/dataset';
import { typo } from '@/src/utils/typo';
import {KeyboardStickyView} from 'react-native-keyboard-controller'
import AppIcon from '@/src/components/AppIcons';





type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";



const verifymail = () => {

const [lang, setlang] = useState<langt>('en')
const [code,setcode] = useState('')
const {api,WIDTH,HEIGHT,user,roomKey,setisloading,isloading,theme,getlang,appLang,setisUserReady,setroomKey,setUser,socket,platform} = useContext(AuthContext)
const router = useRouter()



const placeholderS = theme === 'dark' ? 'smsdark' : 'smslight'
const placeholderE = theme === 'dark' ?  'editdark': 'editlight'




const getCode = (id:string) => {
setcode(id)
}


const verifyCode = async (code:string) => {

if (code === '') return
Keyboard.dismiss()
setisloading(true)
await api.post('/qxdata/uthxcd',{qxrkey:roomKey,qxmail:user.email,qxcode:code,qxid:'signup',qxname:user.uname,qxintel:'qxVMz'})

}



const resendCode = async () => {

await api.post('/qxdata/uthxcd',{qxrkey:roomKey,qxmail:user.email,qxcode:'',qxid:'signup',qxname:user.uname,qxintel:'qxRSz'})
}


const change = () => {
setisUserReady(false)
setroomKey('')
setUser({image:'none',email:'',password:'',dob:'',fname:'',lname:'',uname:'',gender:''})
socket.close()
router.replace({pathname:'/next'})
}




useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])




return (

<View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>

<View style={styles.cupA}>

<View style={styles.boxA}>

<View style={styles.frame}>

<View style={styles.framei}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText,fontSize:typo.h2}]}>{lingual.verifyEmail[lang]}</Text>
</View>

<View style={styles.frameii}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText,fontSize:typo.h4}]}>{lingual.Entercode[lang]}</Text>
</View>

</View>

</View>

<View style={styles.boxB}>

<View style={styles.rolA}>
<AppIcon name={placeholderS} size={typo.h2} />
</View>

<View style={styles.rolB}>
<Text allowFontScaling={false} style={[styles.textR400,{fontSize:typo.h4},{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>{user.email}</Text>
</View>

<TouchableOpacity onPress={change} style={styles.rolQ}>

<View style={styles.rolC}>
<Text allowFontScaling={false} style={[styles.textR400,{fontSize:typo.h4},{color:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}>{lingual.change[lang]}</Text>
</View>


<View style={styles.rolD}>
<AppIcon name={placeholderE} size={typo.h2} />
</View>
</TouchableOpacity>


</View>

<View style={styles.boxC}>
<CustomOtp getCode={getCode} resendCode={resendCode}/>
</View>

</View>

<View style={styles.cupB}></View>

<KeyboardStickyView style={styles.cupC} offset={platform === 'ios' ? {closed:-40,opened:0}:{closed:-50,opened:0}}>

<TouchableOpacity onPress={() => verifyCode(code)} 
style={[styles.frameiv,{borderRadius:typo.h6,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :
Colors.light.Activebtn}]}>

{
isloading ? (<ActivityIndicator size={typo.h4} color={Colors.light.primary} />) : 
(<Text allowFontScaling={false} style={[styles.textB700,{color:Colors.light.primary,fontSize:typo.h2}]}>
{lingual.verify[lang]}</Text>)
}

</TouchableOpacity>

</KeyboardStickyView>

</View>

)
}

export default verifymail









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
height:'28%',
},

boxB:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'8%',
flexDirection:'row',
},


boxC:{
justifyContent:'space-between',
alignItems:'center',
width:'100%',
height:'24%',
flexDirection:'column',

},

frame:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'50%',
flexDirection:'column'
},


framei:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'60%',
},



frameii:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'40%',
},

rolA:{
justifyContent:'flex-end',
alignItems:'center',
width:'10%',
height:'80%',
},


rolB:{
justifyContent:'flex-end',
alignItems:'flex-start',
width:'61%',
height:'80%',
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
height:'80%',
flexDirection:'row'
},


frameiv: {
justifyContent:'center',
alignItems:'center',
width:"95%",
height:'80%',
borderRadius:10,
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