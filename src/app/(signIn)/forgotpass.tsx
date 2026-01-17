

import { View, Text,StyleSheet,TouchableOpacity,ActivityIndicator} from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import CustomOtp from '@/src/components/CustomOtp'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';
import { Colors } from '@/src/utils/color';
import { lingual } from '@/src/utils/dataset';
import { typo } from '@/src/utils/typo';
import { moderateVerticalScale,vh } from '@/src/utils/scale';




type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";






const forgotpass = () => {

const router = useRouter()
const {WIDTH,HEIGHT,myClient,api,delPipeline,isloading,setisloading,roomKey,isactive,setisactive,setiscdactive,theme,getlang,appLang} = useContext(AuthContext)
const [code,setcode] = useState('')
const [isReset,setisReset] = useState(false)
const [lang, setlang] = useState<langt>('en')





const getCode = (id:string) => {
setcode(id)
}



const sendCode = async () => {

setisloading(true)
await api.post('/qxdata/uthxcd',{qxrkey:roomKey,qxmail:myClient.email,qxcode:'',qxid:'forgot',qxname:myClient.fname,qxintel:'qxftz'})
}

const verifyCode = async (code:string) => {

if (code === '') return

setisloading(true)
setisReset(false)
await api.post('/qxdata/uthxcd',{qxrkey:roomKey,qxmail:myClient.email,qxcode:code,qxid:'forgot',qxname:myClient.fname,qxintel:'qxftz'})
setisReset(true)
}

const resendCode = async () => {
await api.post('/qxdata/uthxcd',{qxrkey:roomKey,qxmail:myClient.email,qxcode:'',qxid:'forgot',qxname:myClient.fname,qxintel:'qxftz'})
}






useEffect(() => {

setiscdactive(false)
setisactive(false)
},[])




useEffect(() => {

getlang(appLang,setlang)

},[appLang])






return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>
<View style={styles.framei}>
<TouchableOpacity style={[styles.nest,{borderRadius:typo.h5,backgroundColor:theme === 'dark' ? Colors.dark.primary : Colors.light.primary}]}
onPress={() => {
setiscdactive(false)
router.back()
}}>
<FontAwesome name="angle-left" size={typo.h2} color={theme === 'dark' ? Colors.light.secondary: Colors.dark.secondary} />
</TouchableOpacity>
<Text allowFontScaling={false} style={[styles.textii,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h2}]}>{lingual.forgotPass[lang]}</Text>
</View>

<View style={styles.frameii}>
<View style={styles.boxi}>
<Feather name="mail" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon :Colors.light.icon}  />
</View>
<View style={styles.boxii}>
<Text allowFontScaling={false} style={[styles.textii,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.primary : Colors.dark.primary}]}>{myClient.email}</Text>
</View>
<TouchableOpacity style={[styles.boxiii,{columnGap:typo.h6}]} 
onPress={() => {

delPipeline()
router.replace({pathname:'/next'})}}>
<Text allowFontScaling={false} style={[styles.textii,{fontSize:typo.h4,color:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}>{lingual.change[lang]}</Text>
<FontAwesome6 name="edit" size={typo.h3} color={theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn} />
</TouchableOpacity>
</View>

<View style={styles.frameiii}>
<Text allowFontScaling={false} style={[styles.textc,{lineHeight:typo.h2,color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText,fontSize:typo.h3}]}>{lingual.byTapping[lang]}</Text>
</View>

<View style={styles.frameiv}>
<CustomOtp getCode={getCode} isReset={isReset} resendCode={resendCode}/>
</View>

{
isactive ? (isloading ? (<View style={[styles.framev,{borderRadius:typo.h6,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}>
<ActivityIndicator size={typo.h3} color={Colors.light.primary}/></View>):<TouchableOpacity onPress={() => verifyCode(code)}
style={[styles.framev,{borderRadius:typo.h6,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn,flexDirection:'row',columnGap:typo.h3}]}>
<Text allowFontScaling={false} style={[styles.textii,{color:Colors.light.primary,fontSize:typo.h2}]}>{lingual.chnagePass[lang]}</Text>
<FontAwesome name="angle-right" size={typo.h1_5} color={Colors.light.primary} />
</TouchableOpacity>) : (isloading ? (<View style={[styles.framev,{borderRadius:typo.h6,backgroundColor:theme === 'dark' ? Colors.dark.primary :Colors.light.primary}]}><ActivityIndicator size={typo.h3} color={theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}/></View>) : (<TouchableOpacity style={[styles.framev,{borderRadius:typo.h6,backgroundColor:theme === 'dark' ? Colors.dark.primary :Colors.light.primary}]} onPress={sendCode}>
<Text allowFontScaling={false} style={[styles.textii,{color:theme === 'dark' ? Colors.light.border :Colors.dark.primary,fontSize:typo.h2}]}>{lingual.sendCode[lang]}</Text>
</TouchableOpacity>))
}

</View>
)
}

export default forgotpass





const styles = StyleSheet.create({

container: {
justifyContent:'center',
alignItems:'center',
},

framei: {
justifyContent:'center',
alignItems:'center',
width:'88.1%',
height:'3.7%',
position:'absolute',
top:'9%',
},

frameiv: {
justifyContent:'center',
alignItems:'center',
width:'88.1%',
height:'10.76%',
position:'absolute',
top:'44.9%',
},


nest: {
justifyContent:'center',
alignItems:'center',
width:'11.3%',
height:'100%',
position:'absolute',
left:0,
borderWidth:1,
},


textii: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
},


frameii: {
justifyContent:'center',
alignItems:'center',
position:'absolute',
top:'25.7%',
width:"88.1%",
height:'2.8%',
flexDirection:'row'
},

boxi: {
justifyContent:'center',
alignItems:'center',
width:"12%",
height:'100%',
},

boxii: {
justifyContent:'center',
alignItems:'flex-start',
width:"60%",
height:'100%',
},

boxiii: {
justifyContent:'flex-end',
alignItems:'center',
width:"28%",
height:'100%',
flexDirection:'row',
},

frameiii: {
justifyContent:'center',
alignItems:'center',
position:'absolute',
top:'31.2%',
width:"88.1%",
height:'5.5%',
flexDirection:'row'
},

textc: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
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
},


})