import { View, Text , StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator} from 'react-native'
import React, { useState , useContext, useEffect} from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import DatePicker from 'react-native-date-picker'
import { AuthContext } from '../utils/authContext'
import RNPickerSelect from 'react-native-picker-select';
import Entypo from '@expo/vector-icons/Entypo';
import { multilingual } from '../utils/dataset';





export const regex = {
email:new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
password:new RegExp(/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,20}$/)
}



type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id";






const signup = () => {


const { backToLogIn, WIDTH, HEIGHT, platform, isloading, setisloading,appLang,getlang} = useContext(AuthContext) 
const [key, setkey] = useState({ a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0 })
const [lang, setlang] = useState<langt>("en")


const [isOpen, setisOpen] =useState(false)
const [client, setclient] = useState({
fname: '',
lname: '',
uname: '',
dob: '',
password: '',
confirm :'',
email:'',
gender:''
})

const [errState, seterrState] = useState({
fname: false,
lname: false,
uname: false,
password: false,
confirm :false,
email:false,
gender:false
})

const errMessage = {
fname: multilingual.nameValidation[lang],
lname: multilingual.nameValidation[lang],
uname: multilingual.nameValidation[lang],
password: multilingual.passwordValidation[lang],
confirm: multilingual.passwordMismatch[lang],
email: multilingual.emailValidation[lang],
gender: multilingual.genderValidation[lang],
}







useEffect(() => {

getlang(appLang,setlang)


},[appLang])





return (
<KeyboardAvoidingView  behavior={platform === 'ios' ? 'padding' : 'height'} style={[styles.container, {width:WIDTH, height: HEIGHT }]}>
<View style={styles.content}>
<View style={styles.cancel} >
<TouchableOpacity onPress={() => backToLogIn()}>
<MaterialIcons name="cancel" size={36} color="#bf2828" />
</TouchableOpacity>
</View>


<View style={styles.box}>
<TextInput placeholderTextColor="#804646" style={styles.input} textContentType='none' placeholder={multilingual.firstName[lang]} value={client.fname} 
onChangeText={(text)=>{

if (text.length < 3) {

setkey({...key, a:0})
seterrState({...errState, fname:true})
} else {
seterrState({...errState, fname:false})
setkey({...key, a:1})}

setclient({...client,fname:text })}}/>

{
errState.fname && (<Text  style={styles.boxtxt}>{errMessage.fname}</Text>)
}
</View>





<View style={styles.box}>
<TextInput placeholderTextColor="#804646" style={styles.input} textContentType='none' placeholder={multilingual.lastName[lang]}value={client.lname} 
onChangeText={(text)=>{

if (text.length < 3) {

setkey({...key, b:0})
seterrState({...errState, lname:true})
} else {
setkey({...key, b:1})
seterrState({...errState, lname:false})}

setclient({...client,lname:text })}}/>

{
errState.lname && (<Text style={styles.boxtxt}>{errMessage.lname}</Text>)
}
</View>






<View style={styles.box}>
<TextInput  placeholderTextColor="#804646" style={styles.input} textContentType='none' placeholder={multilingual.Username[lang]} value={client.uname} 
onChangeText={(text)=>{

if (text.length < 3) {

setkey({...key, c:0})
seterrState({...errState, uname:true})
} else {
setkey({...key, c:1})
seterrState({...errState, uname:false})}

setclient({...client,uname:text })}}/>


{
errState.uname && (<Text style={styles.boxtxt}>{errMessage.uname}</Text>)
}
</View>




<View style={styles.box}>
<TextInput placeholderTextColor="#804646" style={styles.input} textContentType='none' placeholder={multilingual.Email[lang]} value={client.email} 
onChangeText={(text)=>{

if (text.match(regex.email)) {

setkey({...key, d:1})
seterrState({...errState, email:false})
} else {
setkey({...key, d:0})
seterrState({...errState, email:true})}

setclient({...client,email:text })}}/>


{
errState.email && (<Text style={styles.boxtxt}>{errMessage.email}</Text>)
}
</View>




<TextInput placeholderTextColor="#804646" onPress={() => setisOpen(true)} style={styles.input} textContentType='none' 
placeholder={multilingual.Birthday[lang]} value={client.dob} />


<View style={styles.box}>


{
(platform === 'android') && (<RNPickerSelect key={lang} Icon={() => {return <Entypo name="triangle-down" size={16} color="grey" />}} style={{inputAndroidContainer:{backgroundColor: 'white', width:400}, iconContainer:{paddingTop:15}, inputAndroid:{fontSize:19, borderRadius:7, color:'green'}}} useNativeAndroidPickerStyle={false} placeholder={{label: multilingual.selectGender[lang], value: null}} 


onValueChange={(value) => {

if (value === null) {
setkey({...key, h:0})
seterrState({...errState, gender:true})
} else if (value !== null) {
setkey({...key, h:1})
seterrState({...errState, gender:false})
}
setclient({...client, gender: value})}}


items={[{label: multilingual.Male[lang] , value: 'male'}, {label: multilingual.Female[lang], value: 'female'}]}/>
)
}

{
(platform === 'ios') && (<RNPickerSelect key={lang} style={{inputIOSContainer:{backgroundColor: 'white', width:400, height:35, marginLeft:17, paddingTop:10, borderRadius:7}, iconContainer:{paddingTop:12, paddingRight:13}, inputIOS:{fontSize:19, borderRadius:7, color:'green'}}} Icon={() => {return <Entypo name="triangle-down" size={16} color="grey" />}}  placeholder={{label: multilingual.selectGender[lang], value: null}} 

onValueChange={(value) => {

if (value === null) {
setkey({...key, h:0})
seterrState({...errState, gender:true})
} else if (value !== null) {
setkey({...key, h:1})
seterrState({...errState, gender:false})
}
setclient({...client, gender: value})}}


items={[{label: multilingual.Male[lang] , value: 'male'}, {label: multilingual.Female[lang], value: 'female'}]}/>
)
}




{
errState.gender && (<Text style={styles.boxtxt}>{errMessage.gender}</Text>)
}
</View>







<View style={styles.box}>
<TextInput placeholderTextColor="#804646"  style={styles.input} textContentType='none' secureTextEntry={true}  
placeholder={multilingual.password[lang]} value={client.password} onChangeText={(text)=>{

if (text.match(regex.password)) {

setkey({...key, e:1})
seterrState({...errState, password:false})
} else {
setkey({...key, e:0})
seterrState({...errState, password:true})}


setclient({...client,password:text })}}/>


{
errState.password && (<Text style={styles.boxtxt}>{errMessage.password}</Text>)
}
</View>


<View style={styles.box}>
<TextInput placeholderTextColor="#804646" style={styles.input} textContentType='none' secureTextEntry={true} 
placeholder={multilingual.confirmPassword[lang]} value={client.confirm} onChangeText={(text)=>{

if ( text !== client.password) {

setkey({...key, f:0})
seterrState({...errState, confirm:true})
} else {
setkey({...key, f:1})
seterrState({...errState, confirm:false})
}

setclient({...client,confirm:text })}}/>


{
errState.confirm && (<Text style={styles.boxtxt}>{errMessage.confirm}</Text>)
}
</View>


{
(key.a + key.b + key.c + key.d + key.e + key.f + key.g + key.h === 8 ) && (<TouchableOpacity style={styles.button}
onPress={() => {
setisloading(true)
}}>
<Text style={styles.btntxt}>{isloading ? <ActivityIndicator /> : multilingual.CreateAccount[lang]}</Text>
</TouchableOpacity>)
}

</View>

<DatePicker maximumDate={new Date('2015-12-01')} theme='dark'  mode='date' date={new Date('2015-12-01')} modal onCancel={()=> setisOpen(false)} open={isOpen}
onConfirm={(date) => {
setkey({...key, g:1})
setisOpen(false)
const newdate = date.toDateString()
setclient({...client, dob:newdate})
} }/>
</KeyboardAvoidingView>
)
}

export default signup













const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
alignItems: "center",

},

content: {
justifyContent: "center",
alignItems: "center",
width:'100%',
height:'100%',
backgroundColor:'rgba(11, 61, 80, 0.46)',
flexDirection:'column',
rowGap:20
},

input: {
backgroundColor:'white',
padding:8,
width:400,
borderRadius:9,
height:40,
fontSize:19,
color:'green'
},

button: {
borderRadius:9,
height:30,
padding:7,
backgroundColor:'green',
width:270,
justifyContent: "center",
alignItems: "center",
marginBottom:50
},

btntxt:{
color: 'azure',
fontSize:16,
fontWeight:'condensedBold'
},

box: {
flexDirection:'column',
rowGap: 5,
width:'100%',
height:50,
justifyContent: "center",
alignItems: "center"
},

boxtxt:{
color: 'rgba(226, 15, 15, 0.76)',
fontSize:13,
width: 400,
},

cancel: {
width:100,
height:40,
alignSelf:'flex-end',
justifyContent:'center',
alignItems:'center',

},



})