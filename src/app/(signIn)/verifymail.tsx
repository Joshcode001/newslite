
import { View, Text,StyleSheet,TouchableOpacity,ActivityIndicator } from 'react-native'
import React,{useEffect,useState,useContext} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import CustomOtp from '@/src/components/CustomOtp';
import { Colors } from '@/src/utils/color';
import { lingual } from '@/src/utils/dataset';



type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";



const verifymail = () => {

const [lang, setlang] = useState<langt>('en')
const [code,setcode] = useState('')
const {api,WIDTH,HEIGHT,user,roomKey,setisloading,isloading,delPipeline,theme,getlang,appLang} = useContext(AuthContext)
const [isReset,setisReset] = useState(false)
const router = useRouter()



const getCode = (id:string) => {
setcode(id)
}


const verifyCode = async (code:string) => {

if (code === '') return

setisloading(true)
setisReset(false)
await api.post('/qxdata/uthxcd',{qxrkey:roomKey,qxmail:user.email,qxcode:code,qxid:'signup',qxname:user.uname,qxintel:'qxVMz'})
setisReset(true)
}



const resendCode = async () => {

await api.post('/qxdata/uthxcd',{qxrkey:roomKey,qxmail:user.email,qxcode:'',qxid:'signup',qxname:user.uname,qxintel:'qxRSz'})
}





useEffect(() => {

getlang(appLang,setlang)

},[appLang])




return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>

<View style={styles.framei}>
<View style={styles.itemi}>
<Text style={[styles.textii,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{lingual.verifyEmail[lang]}</Text>
</View>
<View style={styles.itemii}>
<View style={styles.nesti}>
<Text style={[styles.textc,{color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText}]}>{lingual.pleaseVerify[lang]}</Text>
</View>
<View style={styles.nestii}>
<Text style={[styles.textc,{color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText}]}>{lingual.eprovided[lang]}</Text>
</View>
</View>
</View>



<View style={styles.frameii}>
<View style={styles.boxi}>
<Feather name="mail" size={24} color={theme === 'dark' ? Colors.dark.icon :Colors.light.icon} />
</View>
<View style={styles.boxii}>
<Text style={[styles.textii,{fontSize:18,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{user.email.toLowerCase()}</Text>
</View>
<TouchableOpacity style={styles.boxiii} onPress={() => {
delPipeline()
router.push({pathname:'/next'})}}>
<Text style={[styles.textii,{fontSize:16,color:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}>{lingual.change[lang]}</Text>
<FontAwesome6 name="edit" size={18} color={theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn} />
</TouchableOpacity>
</View>


<View style={styles.frameiii}>
<CustomOtp getCode={getCode} isReset={isReset} resendCode={resendCode}/>
</View>


{
isloading ? (<View style={[styles.frameiv,{backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}><ActivityIndicator size={17} color={Colors.light.primary} /></View>):(<TouchableOpacity onPress={() => verifyCode(code)} style={[styles.frameiv,{backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}>
<Text style={[styles.textii,{color:Colors.light.primary}]}>{lingual.verify[lang]}</Text>
</TouchableOpacity>
)
}

</View>





)
}

export default verifymail









const styles = StyleSheet.create({

container: {
justifyContent:'center',
alignItems:'center',
flex:1,
backgroundColor:'#F9FAFB'
},

framei: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'9.6%',
position:'absolute',
top:'9%',
flexDirection:'column',

},

itemi: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'42.9%',
},

itemii: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'57.1%',
flexDirection:'column',
},

nesti: {
justifyContent:'flex-end',
alignItems:'center',
width:'100%',
height:'50%',

},

nestii: {
justifyContent:'flex-end',
alignItems:'center',
width:'100%',
height:'50%',
},



middle: {
justifyContent:'center',
alignItems:'center',
width:'50%',
height:'100%',
position:'absolute',
left:'23.6%',
backgroundColor:'pink'
},

textc: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
fontSize:18,
color:'#424A55'
},

textii: {
fontFamily:'CabinetGrotesk-Medium',
fontSize:28,
fontWeight:500,
color:'#1A1D21'
},


frameii: {
justifyContent:'center',
alignItems:'center',
position:'absolute',
top:'27.2%',
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
width:'88.1%',
height:'10.76%',
position:'absolute',
top:'35%',
},

frameiv: {
justifyContent:'center',
alignItems:'center',
position:'absolute',
top:'89.4%',
width:"88.1%",
height:'5.5%',
borderRadius:10,
backgroundColor:'#2B47FF',
},


})