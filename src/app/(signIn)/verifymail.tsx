
import { View, Text,StyleSheet,TouchableOpacity,ActivityIndicator } from 'react-native'
import React,{useEffect,useState,useContext} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { useRouter } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import CustomOtp from '@/src/components/CustomOtp';
import { Colors } from '@/src/utils/color';
import { lingual } from '@/src/utils/dataset';
import { typo } from '@/src/utils/typo';
import { moderateVerticalScale,vh } from '@/src/utils/scale';




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
<Text allowFontScaling={false} style={[styles.textii,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h2}]}>{lingual.verifyEmail[lang]}</Text>
</View>
<View style={styles.itemii}>
<View style={styles.nesti}>
<Text allowFontScaling={false} style={[styles.textc,{color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText,fontSize:typo.h3}]}>{lingual.pleaseVerify[lang]}</Text>
</View>
<View style={styles.nestii}>
<Text allowFontScaling={false} style={[styles.textc,{color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText,fontSize:typo.h3}]}>{lingual.eprovided[lang]}</Text>
</View>
</View>
</View>



<View style={styles.frameii}>
<View style={styles.boxi}>
<Feather name="mail" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon :Colors.light.icon} />
</View>
<View style={styles.boxii}>
<Text allowFontScaling={false} style={[styles.textii,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{user.email.toLowerCase()}</Text>
</View>
<TouchableOpacity style={[styles.boxiii,{columnGap:typo.h6}]} onPress={() => {
delPipeline()
router.push({pathname:'/next'})}}>
<Text allowFontScaling={false} style={[styles.textii,{fontSize:typo.h4,color:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}>{lingual.change[lang]}</Text>
<FontAwesome6 name="edit" size={typo.h3} color={theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn} />
</TouchableOpacity>
</View>


<View style={styles.frameiii}>
<CustomOtp getCode={getCode} isReset={isReset} resendCode={resendCode}/>
</View>


{
isloading ? (<View style={[styles.frameiv,{borderRadius:typo.h6,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}><ActivityIndicator size={typo.h4} color={Colors.light.primary} /></View>):(<TouchableOpacity onPress={() => verifyCode(code)} style={[styles.frameiv,{borderRadius:typo.h6,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}>
<Text allowFontScaling={false} style={[styles.textii,{color:Colors.light.primary,fontSize:typo.h2}]}>{lingual.verify[lang]}</Text>
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


textc: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,

},

textii: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
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
},


})