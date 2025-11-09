
import { View, Text,StyleSheet,TouchableOpacity,TextInput,Keyboard,ActivityIndicator} from 'react-native'
import React,{useContext,useEffect,useState} from 'react'
import { useLocalSearchParams } from 'expo-router'
import { AuthContext } from '@/src/utils/authContext'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import { multilingual } from '@/src/utils/dataset';
import { regex } from '@/src/utils/dataset';



type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id";

type user = {
uname:string,
pass:string
}







const newuser = () => {

const router = useRouter()
const {api,WIDTH,HEIGHT,appLang,getlang,showToast} = useContext(AuthContext)
const {email} = useLocalSearchParams()
const [isopen,setisopen] = useState({a:true,b:true})
const [isloading,setisloading] = useState(false)
const [key, setkey] = useState({a:0,b:0,c:0})
const [lang, setlang] = useState<langt>('en')
const [user,setuser] = useState({uname:"",pass:""})
const [errState, seterrState] = useState({username:false, password:false,confirm: false })
const errMessage = { username:multilingual.nameValidation[lang],password: multilingual.passwordValidation[lang],confirm: multilingual.passwordMismatch[lang],}





const handleSignUp = async (user:user) => {
if (key.a + key.b + key.c !== 3) return

setisloading(true)

try {

const resp = await api.post('/data/unamecheck',{uname:user.uname})
const data = await resp.data

if (data.isPresent) {
setuser({...user,uname:''})
setkey({...key,a:0})
const toast = {type:'error',name:"From NEWSWORLD",info:'Username Exists ! try another...',onHide:() => console.log('done'), visibilityTime:6000}
showToast(toast)
setisloading(false)
return

} else if (!data.isPresent) {
setisloading(false)
router.push({pathname:'/verifymail',params:{uname:user.uname,pass:user.pass,email:email}})
}


} catch(err) {
console.log(err)
}
}




useEffect(() => {

getlang(appLang,setlang)

},[appLang])




return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT}]}>
<View style={styles.framei}>

<View style={styles.boxi}>
<TouchableOpacity style={styles.nest} onPress={() => router.back()}>
<FontAwesome name="angle-left" size={24} color='#424A55' />
</TouchableOpacity>
</View>

<View style={styles.boxii}>
<View style={styles.itemi}>
<View style={styles.middle}>
<Text style={[styles.textii,]}>Sign Up</Text>
</View>
</View>
<View style={styles.itemii}>
<View style={styles.nesti}>
<Text style={styles.textc}>Welcome to NEWSWORLD !  Fill up the information</Text>
</View>
<View style={styles.nestii}>
<View style={styles.item}><Text style={styles.textc}>Below to create an account.</Text></View>
</View>
</View>
</View>

</View>

<View style={styles.frameii}>
<View style={styles.samebox}>
<View style={styles.itemiv}>
<Text style={[styles.textii,{fontSize:18}]}>Username</Text>
</View>
<View style={styles.itemv}>
<View style={styles.recti}>
<FontAwesome6 name="clipboard-user" size={20} color="grey" />
</View>
<View style={styles.rectii}>
<TextInput style={styles.input} value={user.uname} placeholderTextColor='grey' placeholder='Username' 
onChangeText={(text) => {
if (text.length <= 3) {
seterrState({...errState,username:true})
setkey({...key,a:0})
setuser({...user,uname:text})
}else if (text.length > 3) {
seterrState({...errState,username:false})
setkey({...key,a:1})
setuser({...user,uname:text})
}
}}/>
</View>
</View>
</View>

{
errState.username && (<View style={styles.errori}><Text style={styles.texterror}>{errMessage.username}</Text></View>)
}

<View style={styles.samebox}>
<View style={styles.itemiv}>
<Text style={[styles.textii,{fontSize:18}]}>Password</Text>
</View>
<View style={styles.itemv}>
<View style={styles.recti}>
<Octicons name="key" size={24} color='grey' />
</View>
<View style={styles.rectiii}>
<TextInput style={styles.input} secureTextEntry={isopen.a} 
onChangeText={(text) => {
if (text.match(regex.password)) {
setkey({...key,b:1})
setuser({...user,pass:text})
seterrState({...errState,password:false})
} else {
setkey({...key,b:0})
setuser({...user,pass:text})
seterrState({...errState,password:true})
}
}}  />
</View>
<View style={styles.recti}>
<TouchableOpacity onPressIn={() => {setisopen({...isopen,a:false})}} onPressOut={() => {setisopen({...isopen,a:true})}}>
<Ionicons name="eye-outline" size={24} color="grey" />
</TouchableOpacity>
</View>
</View>
</View>

{
errState.password && (<View style={styles.errorii}><Text style={styles.texterror}>{errMessage.password}</Text></View>)
}

<View style={styles.samebox}>
<View style={styles.itemiv}>
<Text style={[styles.textii,{fontSize:18}]}> Confirm Password</Text>
</View>
<View style={styles.itemv}>
<View style={styles.recti}>
<Octicons name="key" size={24} color='grey' />
</View>
<View style={styles.rectiii}>
<TextInput style={styles.input} secureTextEntry={isopen.b} 
onChangeText={(text) => {
if (text === user.pass) {
setkey({...key,c:1})
seterrState({...errState,confirm:false})
Keyboard.dismiss()
} else {
setkey({...key,c:0})
seterrState({...errState,confirm:true})
}
}}/>
</View>
<View style={styles.recti}>
<TouchableOpacity onPressIn={() => {setisopen({...isopen,b:false})}} onPressOut={() => {setisopen({...isopen,b:true})}}>
<Ionicons name="eye-outline" size={24} color="grey" />
</TouchableOpacity>
</View>
</View>
</View>
</View>

{
errState.confirm && (<View style={styles.erroriii}><Text style={styles.texterror}>{errMessage.confirm}</Text></View>)
}

<View style={styles.frameiii}>
<Text style={[styles.textc]}>By signing Up, You agree to Our</Text>
<TouchableOpacity>
<Text style={[styles.textii,{fontSize:18,textDecorationLine:'underline',textDecorationColor:'#1A1D21'}]}>Terms of service</Text>
</TouchableOpacity>
</View>


{
isloading ? (<View style={styles.frameiv}><ActivityIndicator size={18} color='#FFFFFF'/></View>) : (<TouchableOpacity style={styles.frameiv} onPress={() => handleSignUp(user)}>
<Text style={[styles.textii,{fontSize:24,color:'#FFFFFF'}]}>Sign Up</Text>
</TouchableOpacity>)
}
</View>
)
}

export default newuser






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
width:'88.1%',
height:'9.6%',
position:'absolute',
top:'9%',
flexDirection:'row'
},

itemi: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'38.1%',
},

itemii: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'61.9%',
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

item: {
justifyContent:'flex-end',
alignItems:'flex-start',
width:'100%',
height:'100%',
position:'absolute',
left:'15%',
},

textii: {
fontFamily:'CabinetGrotesk-Medium',
fontSize:28,
fontWeight:500,
color:'#1A1D21'
},

itemiii: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'38.1%',
},

nest: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'38.1%',
backgroundColor:'#FFFFFF',
borderRadius:12,
borderWidth:1,
borderColor:'#9AA3AF'
},

boxi: {
justifyContent:'flex-start',
alignItems:'center',
width:'12%',
height:'100%',
},


boxii: {
justifyContent:'center',
alignItems:'center',
width:'87%',
height:'100%',
flexDirection:'column'
},

middle: {
justifyContent:'center',
alignItems:'center',
width:'30%',
height:'100%',
position:'absolute',
left:'23.6%'
},

textc: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
fontSize:18,
color:'#424A55'
},

frameii: {
justifyContent:'space-between',
alignItems:'center',
width:'88.1%',
height:'33%',
position:'absolute',
top:'23.8%',
flexDirection:'column',

},


samebox: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'27.8%',
},

itemiv: {
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'40%',
},

itemv: {
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
width:'92%',
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
},

rectiii:{
justifyContent:'center',
alignItems:'center',
width:'84%',
height:'100%',
},


frameiii: {
justifyContent:'space-around',
alignItems:'center',
width:'79.6%',
height:'3%',
position:'absolute',
top:'85.6%',
flexDirection:'row',
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
borderWidth:1,
borderColor:'#9AA3AF'
},

errori: {
justifyContent:'center',
alignItems:'center',
position:'absolute',
top:'28.5%',
width:"100%",
height:'7.5%',
},

errorii: {
justifyContent:'flex-start',
alignItems:'center',
position:'absolute',
top:'64.6%',
width:"100%",
height:'15%',
marginBottom:10
},

erroriii: {
justifyContent:'center',
alignItems:'center',
position:'absolute',
top:'57%',
width:"88.1%",
height:'2.7%',
},

texterror: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
fontSize:16,
color:'red',
},




})