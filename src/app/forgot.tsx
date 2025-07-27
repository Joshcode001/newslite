import { View, Text, StyleSheet ,TextInput, Pressable, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import React, {useState, useContext, useEffect} from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { AuthContext } from '../utils/authContext';
import { useLocalSearchParams } from 'expo-router';
import { regex } from './signup';









type nclient = {
email: string,
newPass: string,
confirm: string
}





const forgot = () => {


const {email} = useLocalSearchParams()
let nemail = ''

const [key, setkey] = useState({
a:0,
b: 0
})

const [errState, seterrState] = useState({
password:false,
confirm: false
})

const errMessage = {
password: `password can not be less than 5 digit and must 
contain a number and a special character like [ @ , $ , % , !, & , * ]`,
confirm :'password do not match',
}

const {changePass, backToLogIn, isClient, errTxt, seterrTxt, fgtdisplay,setfgtdisplay, WIDTH, HEIGHT, platform} = useContext(AuthContext)
const [client, setclient] = useState({
email:'',
newPass:'',
confirm: '',
})


if (email) {
if (typeof email === 'string') {
nemail = email
}

}


useEffect(() => {
seterrTxt('')
setfgtdisplay('')
setkey({a:0, b:0})

}, [])





return (
<KeyboardAvoidingView behavior={platform === 'ios' ? 'padding' : 'height'} style={[styles.container, {width:WIDTH, height: HEIGHT }]}>
<View style={styles.cancel}>

{
(isClient === false) && (<TouchableOpacity onPress={() => {
seterrTxt('')
backToLogIn()
}}>
<MaterialIcons name="cancel" size={36} color="#a83838" />
</TouchableOpacity>)
}

</View>


<View style={styles.content}>

 <Text style={styles.title}>PASSWORD RESET </Text>
<View style={styles.form}>



<View style={styles.fbox}>
<TextInput placeholderTextColor="#804646" editable={isClient ? false : true} textContentType='none' style={styles.input} placeholder='email'
value={isClient ? nemail : client.email} onChangeText={(text) => {
seterrTxt('')
setclient({...client, email:text})}}/>

<Text style={{color: 'rgba(255, 1, 1, 0.56)'}}>{errTxt}</Text>
</View>

{
isClient && (

<View style={styles.fbox} >
<TextInput placeholderTextColor="#804646" secureTextEntry textContentType='none' style={styles.input}  placeholder='New Password' 
value={client.newPass} onChangeText={(text) => {


if (!text.match(regex.password)) {
setkey({...key, a:0})
seterrState({...errState, password:true})

} else if (text.match(regex.password)) {

setkey({...key, a:1})
seterrState({...errState, password:false})}

setclient({...client,newPass: text})}}/>

{
errState.password && (<Text style={styles.errtxt}>{errMessage.password}</Text>)
}
</View>
)
}


{

isClient && (
<View style={styles.fbox}>
<TextInput placeholderTextColor="#804646"  secureTextEntry textContentType='none' style={styles.input}  placeholder='Confirm Password'
value={client.confirm} onChangeText={(text) => {

if (text !== client.newPass) {
setkey({...key, b:0})
seterrState({...errState, confirm:true})

} else if (text === client.newPass) {

setkey({...key, b:1})
seterrState({...errState, confirm:false})}


setclient({...client, confirm:text})}}/>

{
errState.confirm && (<Text style={styles.errtxt}>{errMessage.confirm}</Text>)
}
</View>
)
}


{
(isClient === false || (key.a + key.b) === 2  ) && (<Pressable style={[styles.box, {opacity: (fgtdisplay === 'Password Changed Successfully!') ? 0 : 1}]} 
onPress={() => {
changePass({email:client.email || nemail , password:client.newPass})
}} >
<Text style={styles.text}>{isClient ? 'RESET' : 'NEXT'}</Text>
</Pressable>

)
}


<View style={styles.display}>

{
(fgtdisplay === 'Reset Failed. try Again!' ) && (<MaterialIcons name="cancel" size={40} color="red" />)
}
{
(fgtdisplay === 'Password Changed Successfully!') && (<MaterialIcons name="verified" size={40} color="green" />)
}
<Text style={[{color: fgtdisplay === 'Password Changed Successfully!'  ?  'green' : 'red'}, styles.fgtdisplay]}>{fgtdisplay}</Text>
</View>






{
fgtdisplay === 'Password Changed Successfully!' && (<Pressable onPress={backToLogIn}><Text style={styles.linktxt}>Click here to Login</Text></Pressable>)
}


</View>
</View>
</KeyboardAvoidingView>
)
}

export default forgot








const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
alignItems: "center",
backgroundColor:'rgba(11, 61, 80, 0.46)',

},


content:{
flexDirection:'column',
justifyContent:'center',
alignItems:'center',
textAlign:'center',
width:500,
height:600,
borderRadius:40,
backgroundColor:'#394d3b'
},


box:{
backgroundColor:'teal',
width: 100,
height: 50,
justifyContent: 'center',
alignItems:'center',
borderRadius:10
},

text: {
color:'azure',
},

form: {
width: 400,
height: 500,
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
rowGap:20,
backgroundColor: '#c7c7c7'
},

input:{
width:320,
padding:10,
height:50,
backgroundColor:'#d6d6d6',
fontSize: 19,
color:'#0c1c0d'
}, 

cancel: {
width:100,
height:40,
alignSelf:'flex-end',
alignItems:'center',

},

fbox: {
flexDirection:'column',
rowGap:5,
width:'100%',
justifyContent:'center',
alignItems:'center',
},

title: {
fontSize:19,
fontWeight:'condensedBold',
paddingBottom:20,
color:'azure'
},


errtxt: {
color: 'rgba(255, 1, 1, 0.56)',
width:'80%',
padding:10
}, 

display:{
flexDirection:'row',
justifyContent: "center",
alignItems: "center",
width:'60%',
height:100,
marginTop: 35,
columnGap:5,
fontSize:18,
},

linktxt: {
fontSize: 18,
paddingTop: 80,
color:'#143016'
},


fgtdisplay: {
fontSize: 22, 
justifyContent: "center",
alignItems: "center",
}


})