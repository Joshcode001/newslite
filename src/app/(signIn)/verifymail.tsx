
import { View, Text,StyleSheet,TouchableOpacity,ActivityIndicator } from 'react-native'
import React,{useEffect,useState,useContext} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import CustomOtp from '@/src/components/CustomOtp';








const verifymail = () => {

const [code,setcode] = useState('')
const {api,WIDTH,HEIGHT,user,roomKey,setisloading,isloading,delPipeline} = useContext(AuthContext)
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








return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT}]}>

<View style={styles.framei}>
<View style={styles.itemi}>
<Text style={styles.textii}>Verify Email</Text>
</View>
<View style={styles.itemii}>
<View style={styles.nesti}>
<Text style={styles.textc}>Please verify email by entering the code</Text>
</View>
<View style={styles.nestii}>
<Text style={styles.textc}>sent to the email provided</Text>
</View>
</View>
</View>



<View style={styles.frameii}>
<View style={styles.boxi}>
<Feather name="mail" size={24} color="grey" />
</View>
<View style={styles.boxii}>
<Text style={[styles.textii,{fontSize:18}]}>{user.email.toLowerCase()}</Text>
</View>
<TouchableOpacity style={styles.boxiii} onPress={() => {
delPipeline()
router.push({pathname:'/next'})}}>
<Text style={[styles.textii,{fontSize:16,color:'#2B47FF'}]}>Change</Text>
<FontAwesome6 name="edit" size={18} color='#2B47FF' />
</TouchableOpacity>
</View>


<View style={styles.frameiii}>
<CustomOtp getCode={getCode} isReset={isReset} resendCode={resendCode}/>
</View>


{
isloading ? (<View style={styles.frameiv}><ActivityIndicator size={17} color='azure' /></View>):(<TouchableOpacity onPress={() => verifyCode(code)} style={styles.frameiv}>
<Text style={[styles.textii,{color:'#FFFFFF'}]}>Verify</Text>
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