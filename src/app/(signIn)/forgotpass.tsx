

import { View, Text,StyleSheet,TouchableOpacity,ActivityIndicator} from 'react-native'
import React,{useContext,useState} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import CustomOtp from '@/src/components/CustomOtp'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';








const forgotpass = () => {

const router = useRouter()
const {WIDTH,HEIGHT,myClient,api,showToast} = useContext(AuthContext)
const [code,setcode] = useState('')
const [isloading,setisloading] = useState(false)
const [isactive,setisactive] = useState(false)

const getCode = (id:string) => {
setcode(id)
}



const sendMail = async (email:string) => {
setisloading(true)
const password = ''

try {

const resp = await api.post('/data/update', {email, password})

if (resp.data.isClient) {
setisloading(false)
setisactive(true)
const toast = {type:'success',name:myClient.fname,info:'Email sent!',onHide:() => console.log('done'), visibilityTime:4000}
showToast(toast)
}

} catch(err){
console.log(err)
}


}


const verifyCode = async (id:string) => {
setisloading(true)

if (id === '') {
setisloading(false)
return
}


try {

const resp = await api.post('/data/verify', {code:id})

if (resp.data.verify) {
setisloading(false)
router.push({pathname:'/newpass'})
}else if (!resp.data.verify) {
setisloading(false)
const toast = {type:'error',name:myClient.fname,info:'Invalid Code!', onHide:() => console.log('done'), visibilityTime:4000}
showToast(toast)
}

} catch(err) {
console.log(err)
}


}





return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT}]}>
<View style={styles.framei}>
<TouchableOpacity style={styles.nest} onPress={() => router.back()}>
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
<TouchableOpacity style={styles.boxiii} onPress={() => router.push({pathname:'/next'})}>
<Text style={[styles.textii,{fontSize:16,color:'#2B47FF'}]}>Change</Text>
<FontAwesome6 name="edit" size={18} color='#2B47FF' />
</TouchableOpacity>
</View>

<View style={styles.frameiii}>
<Text style={styles.textc}>By tapping “Send Code” we’ll send a code to your email address. Check and enter the code below.</Text>
</View>

<View style={styles.frameiv}>
<CustomOtp getCode={getCode}/>
</View>

{
isactive ? (isloading ? (<View style={[styles.framev,{backgroundColor:'#2B47FF'}]}>
<ActivityIndicator size={18} color='#FFFFFF'/></View>):<TouchableOpacity onPress={() => verifyCode(code)}
style={[styles.framev,{backgroundColor:'#2B47FF',flexDirection:'row',columnGap:17}]}>
<Text style={[styles.textii,{color:'#FFFFFF'}]}>Change Password</Text>
<FontAwesome name="angle-right" size={30} color="#FFFFFF" />
</TouchableOpacity>) : (isloading ? (<View style={styles.framev}><ActivityIndicator size={18} color='#2B47FF'/></View>) : (<TouchableOpacity style={styles.framev} onPress={() => sendMail(myClient.email)}>
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