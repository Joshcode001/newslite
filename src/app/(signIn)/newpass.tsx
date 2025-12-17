

import { View, Text ,StyleSheet,TextInput,TouchableOpacity,ActivityIndicator,Keyboard} from 'react-native'
import React,{useState,useEffect,useContext} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import Octicons from '@expo/vector-icons/Octicons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { multilingual } from '@/src/utils/dataset';
import { regex } from '@/src/utils/dataset';





type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id";




const newpass = () => {

const [isopen,setisopen] = useState({a:true,b:true})
const {api,WIDTH,HEIGHT,myClient,getlang,appLang,isloading,setisloading,roomKey} = useContext(AuthContext)
const [newpass,setnewpass] = useState('')
const [key, setkey] = useState({a:0,b: 0})
const [lang, setlang] = useState<langt>('en')
const [errState, seterrState] = useState({ password:false,confirm: false })

const errMessage = { password: multilingual.passwordValidation[lang],confirm: multilingual.passwordMismatch[lang],}







const updatePass = async(pass:string) => {
if (key.a + key.b !== 2 ) return
setisloading(true)
let subdata = []
let message = {id:'pass',query:{newpass:'',email:myClient.email,qxrkey:roomKey,}}



try {

message.query.newpass = pass
subdata.push(message)

if (subdata.length > 0) {
const gzdata = JSON.stringify(subdata)
await api.post('/qxdata/updcldtls', gzdata)
}







}catch(err) {
console.log(err)
}





}








useEffect(() => {

getlang(appLang,setlang)

},[appLang])






return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT}]}>
<View style={styles.framei}>
<Text style={styles.textii}>Change Password</Text>
</View>

<View style={styles.frameiii}>
<View style={styles.nesti}>
<Text style={[styles.textii,{fontSize:18}]}>Enter New Password</Text>
</View>
<View style={styles.nestii}>
<View style={styles.recti}>
<Octicons name="key" size={24} color='grey' />
</View>
<View style={styles.rectii}>
<TextInput style={styles.input} secureTextEntry={isopen.a} 
onChangeText={(text) => {

if (!text.match(regex.password)) {
setkey({...key, a:0})
seterrState({...errState, password:true})

} else if (text.match(regex.password)) {

setkey({...key, a:1})
seterrState({...errState, password:false})}

setnewpass(text)

}} />
</View>
<View style={styles.rectiii}>
<TouchableOpacity onPressIn={() => setisopen({...isopen,a:false})} onPressOut={() => setisopen({...isopen,a:true})}>
<Ionicons name="eye-outline" size={24} color="grey" />
</TouchableOpacity>
</View>
</View>
</View>

{
errState.password && <View style={styles.itemi}>
<Text style={styles.textc}>{errMessage.password}</Text>
</View>
}


<View style={styles.frameiv}>
<View style={styles.nesti}>
<Text style={[styles.textii,{fontSize:18}]}>Confirm Password</Text>
</View>
<View style={styles.nestii}>
<View style={styles.recti}>
<Octicons name="key" size={24} color='grey' />
</View>
<View style={styles.rectii}>
<TextInput style={styles.input} secureTextEntry={isopen.b} 
onChangeText={(text) => {

if (text !== newpass) {
setkey({...key, b:0})
seterrState({...errState, confirm:true})

} else if (text === newpass) {

setkey({...key, b:1})
Keyboard.dismiss()
seterrState({...errState, confirm:false})}

}} />
</View>
<View style={styles.rectiii}>
<TouchableOpacity onPressIn={() => setisopen({...isopen,b:false})} onPressOut={() => setisopen({...isopen,b:true})}>
<Ionicons name="eye-outline" size={24} color="grey" />
</TouchableOpacity>
</View>
</View>
</View>

{
errState.confirm && <View style={styles.itemii}>
<Text style={styles.textc}>{errMessage.confirm}</Text>
</View>
}

{
isloading ? (<View style={styles.framev}><ActivityIndicator size={15}  color='#FFFFFF'/></View>) : (<TouchableOpacity style={styles.framev} onPress={() => updatePass(newpass)}>
<Text style={[styles.textii,{color:'#FFFFFF'}]}>Reset Password</Text>
<FontAwesome name="angle-right" size={30} color="#FFFFFF" />
</TouchableOpacity>)
}

</View>
)
}

export default newpass







const styles = StyleSheet.create({

container: {
justifyContent:'center',
alignItems:'center',
flex:1,

},

framei: {
justifyContent:'center',
alignItems:'center',
width:'88.1%',
height:'3.7%',
position:'absolute',
top:'9%',
},

textii: {
fontFamily:'CabinetGrotesk-Medium',
fontSize:25,
lineHeight:32,
fontWeight:500,
color:'#1A1D21'
},

frameiii: {
justifyContent:'center',
alignItems:'center',
position:'absolute',
top:'25.7%',
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
alignItems:'center',
position:'absolute',
top:'45%',
width:"88.1%",
height:'9.2%',
flexDirection:'column'
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
borderColor:'#9AA3AF',
backgroundColor:'#2B47FF',
flexDirection:'row',
columnGap:17
},

itemi: {
justifyContent:'flex-start',
alignItems:'center',
position:'absolute',
top:'34.9%',
width:"88.1%",
height:'8%',

},

itemii: {
justifyContent:'center',
alignItems:'center',
position:'absolute',
top:'54.2%',
width:"88.1%",
height:'2%',
},

textc: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
fontSize:19,
lineHeight:24,
color:'red',
},



})