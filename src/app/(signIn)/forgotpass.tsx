

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
<TouchableOpacity style={[styles.nest,{backgroundColor:theme === 'dark' ? Colors.dark.primary : Colors.light.primary}]}
onPress={() => {
setiscdactive(false)
router.back()
}}>
<FontAwesome name="angle-left" size={24} color={theme === 'dark' ? Colors.light.secondary: Colors.dark.secondary} />
</TouchableOpacity>
<Text style={[styles.textii,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{lingual.forgotPass[lang]}</Text>
</View>

<View style={styles.frameii}>
<View style={styles.boxi}>
<Feather name="mail" size={24} color={theme === 'dark' ? Colors.dark.icon :Colors.light.icon}  />
</View>
<View style={styles.boxii}>
<Text style={[styles.textii,{fontSize:18,color:theme === 'dark' ? Colors.light.primary : Colors.dark.primary}]}>{myClient.email}</Text>
</View>
<TouchableOpacity style={styles.boxiii} 
onPress={() => {

delPipeline()
router.replace({pathname:'/next'})}}>
<Text style={[styles.textii,{fontSize:16,color:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}>{lingual.change[lang]}</Text>
<FontAwesome6 name="edit" size={18} color={theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn} />
</TouchableOpacity>
</View>

<View style={styles.frameiii}>
<Text style={[styles.textc,{color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText}]}>{lingual.byTapping[lang]}</Text>
</View>

<View style={styles.frameiv}>
<CustomOtp getCode={getCode} isReset={isReset} resendCode={resendCode}/>
</View>

{
isactive ? (isloading ? (<View style={[styles.framev,{backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}>
<ActivityIndicator size={18} color={Colors.light.primary}/></View>):<TouchableOpacity onPress={() => verifyCode(code)}
style={[styles.framev,{backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn,flexDirection:'row',columnGap:17}]}>
<Text style={[styles.textii,{color:Colors.light.primary}]}>{lingual.chnagePass[lang]}</Text>
<FontAwesome name="angle-right" size={30} color={Colors.light.primary} />
</TouchableOpacity>) : (isloading ? (<View style={[styles.framev,{backgroundColor:theme === 'dark' ? Colors.dark.primary :Colors.light.primary}]}><ActivityIndicator size={18} color={theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}/></View>) : (<TouchableOpacity style={[styles.framev,{backgroundColor:theme === 'dark' ? Colors.dark.primary :Colors.light.primary}]} onPress={sendCode}>
<Text style={[styles.textii,{color:theme === 'dark' ? Colors.light.border :Colors.dark.primary}]}>{lingual.sendCode[lang]}</Text>
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
borderRadius:12,
borderWidth:1,
},

textii: {
fontFamily:'CabinetGrotesk-Medium',
fontSize:25,
lineHeight:32,
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
columnGap:10,
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
fontSize:19,
lineHeight:24,
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