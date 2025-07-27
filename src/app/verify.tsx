import { View, Text , StyleSheet, TextInput, Pressable, KeyboardAvoidingView} from 'react-native'
import React, {useState, useContext, useRef, useEffect} from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { AuthContext } from '../utils/authContext';
import { useLocalSearchParams } from 'expo-router';










const verify = () => {

const {from} = useLocalSearchParams()
const Ref = useRef<TextInput>(null)
const [code, setcode] = useState('')
const [data, setdata] = useState('')
const {verify, display, backToLogIn, cemail, HEIGHT, WIDTH, backToForgot, platform, setdisplay} = useContext(AuthContext)



const select = (from: string) => {

if (from === 'signup') {
setdata(' verify and create your ACCOUNT')
} else if (from === 'forgot')
setdata(' retrieve and update your PASSWORD ')
}



const Auth = async (code: string) => {
const path1 = '/login/verify'
const path2 = '/data/verify'
try {
if (from === 'forgot') {

verify(code, path2)

} else if (from === 'signup')
verify(code, path1)

}catch(err) {
console.log(err)
}
}


useEffect(() => {
if (typeof from === 'string') {
select(from)
}

setdisplay('')

}, [])



return (
<KeyboardAvoidingView behavior={platform === 'ios' ? 'padding' : 'height'} style={[styles.container,{width:WIDTH, height: HEIGHT}]}>
<View style={[styles.content, {width: WIDTH < 650 ? '100%' : '65%'}, {height: WIDTH < 650 ? '100%' : '83%'}]}>
<View style={[styles.box]}>
<MaterialCommunityIcons name="email-check" size={95} color="#305237" />
<Text style={styles.boxtxt}>A Verification email has been sent to  <Text style={styles.email}>{cemail}</Text>  . Please enter the code below to {data}</Text>
</View>

<TextInput  ref={Ref}  style={styles.input} textContentType='none' placeholder='' value={code} onChangeText={(text) => {
setcode(text)
}} />

<Pressable style={[styles.button, {opacity: (display === 'Success!') ? 0: 1}]} onPress={() => {
Ref.current?.blur()
Auth(code)}}>
<Text style={styles.btntxt}>Verify</Text>
</Pressable>



<View style={styles.display}>
{
(display ==='Invalid Code!' ) && (<MaterialIcons name="cancel" size={40} color="red" />)
}
{
(display === 'Success!') && (<MaterialIcons name="verified" size={40} color="green" />)
}
<Text style={{color: display === 'Success!' ? 'green' : "red", fontSize: 23}}>{display}</Text>
</View>




{(display === 'Success!' && from === 'signup') && <Pressable onPress={() => backToLogIn()}><Text style={styles.log}>click here to Login</Text></Pressable>}

{(display === 'Success!' && from === 'forgot') && <Pressable onPress={() => backToForgot()}><Text style={styles.log}>click here to Continue</Text></Pressable>}
</View>
</KeyboardAvoidingView>
)
}

export default verify










const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
alignItems: "center",
backgroundColor:'#dedede',
},


content:{
justifyContent:'center',
alignItems:'center',
backgroundColor:'white',
textAlign:'center',
borderRadius:50
},

box: {
width:'80%',
justifyContent:'center',
alignItems:'center',
backgroundColor:'rgba(22, 53, 13, 0.41)',
height:300,
flexDirection:'column',
rowGap:10,
borderRadius:12 
},


input: {
backgroundColor: '#dedede',
width: 200,
marginTop:30,
height:30,
color:'#305237'
}, 

boxtxt: {
padding:15,
color:'#305237',
fontSize:16
},

button: {
borderRadius:9,
height:40,
padding:3,
backgroundColor:'#305237',
width:100,
justifyContent: "center",
alignItems: "center",
marginTop:30,
},

btntxt:{
color: 'azure',
fontSize:15,
fontWeight:'condensedBold'
},

display:{
flexDirection:'row',
justifyContent: "center",
alignItems: "center",
width:'60%',
height:50,
marginTop: 25,
columnGap:5,
},

log:{
marginTop: 60,
color:'#305237',
fontSize: 17
},

email: {
fontSize: 17,
fontWeight:'bold',
color:'#dedede',
fontStyle:'italic'
}


})