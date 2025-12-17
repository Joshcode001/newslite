

import { View, Text,StyleSheet,TouchableOpacity,ActivityIndicator} from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import CustomOtp from '@/src/components/CustomOtp'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';








const forgotpass = () => {

const router = useRouter()
const {WIDTH,HEIGHT,myClient,api,delPipeline,isloading,setisloading,roomKey,isactive,setisactive,setiscdactive} = useContext(AuthContext)
const [code,setcode] = useState('')
const [isReset,setisReset] = useState(false)


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


return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT}]}>
<View style={styles.framei}>
<TouchableOpacity style={styles.nest}
onPress={() => {
setiscdactive(false)
router.back()}}>
<FontAwesome name="angle-left" size={24} color='#424A55' />
</TouchableOpacity>
<Text style={styles.textii}>Forgot Password ?</Text>
</View>

<View style={styles.frameii}>
<View style={styles.boxi}>
<Feather name="mail" size={24} color="grey" />
</View>
<View style={styles.boxii}>
<Text style={[styles.textii,{fontSize:18}]}>{myClient.email}</Text>
</View>
<TouchableOpacity style={styles.boxiii} 
onPress={() => {

delPipeline()
router.push({pathname:'/next'})}}>
<Text style={[styles.textii,{fontSize:16,color:'#2B47FF'}]}>Change</Text>
<FontAwesome6 name="edit" size={18} color='#2B47FF' />
</TouchableOpacity>
</View>

<View style={styles.frameiii}>
<Text style={styles.textc}>By tapping “Send Code” we’ll send a code to your email address. Check and enter the code below.</Text>
</View>

<View style={styles.frameiv}>
<CustomOtp getCode={getCode} isReset={isReset} resendCode={resendCode}/>
</View>

{
isactive ? (isloading ? (<View style={[styles.framev,{backgroundColor:'#2B47FF'}]}>
<ActivityIndicator size={18} color='#FFFFFF'/></View>):<TouchableOpacity onPress={() => verifyCode(code)}
style={[styles.framev,{backgroundColor:'#2B47FF',flexDirection:'row',columnGap:17}]}>
<Text style={[styles.textii,{color:'#FFFFFF'}]}>Change Password</Text>
<FontAwesome name="angle-right" size={30} color="#FFFFFF" />
</TouchableOpacity>) : (isloading ? (<View style={styles.framev}><ActivityIndicator size={18} color='#2B47FF'/></View>) : (<TouchableOpacity style={styles.framev} onPress={sendCode}>
<Text style={styles.textii}>Send Code</Text>
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
backgroundColor:'#F9FAFB'
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
backgroundColor:'#FFFFFF',
borderRadius:12,
borderWidth:1,
borderColor:'#9AA3AF'
},

textii: {
fontFamily:'CabinetGrotesk-Medium',
fontSize:25,
lineHeight:32,
fontWeight:500,
color:'#1A1D21'
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
color:'#424A55',
},

framev: {
justifyContent:'center',
alignItems:'center',
position:'absolute',
top:'89.4%',
width:"88.1%",
height:'5.5%',
borderRadius:10,
backgroundColor:'#FFFFFF',
borderWidth:1,
borderColor:'#9AA3AF'
},


})