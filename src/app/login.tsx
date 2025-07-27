import { View, Text, StyleSheet,Pressable ,StatusBar, TextInput} from 'react-native'
import React, {useContext, useState, useRef, useEffect}from 'react'
import { AuthContext } from '../utils/authContext'
import { Link } from 'expo-router'
import { ActiveColors } from '../utils/color'











const login = () => {
const ref1 = useRef<TextInput>(null)
const ref2 = useRef<TextInput>(null)
const {setCredentials, isClient, myClient, errTxt, seterrTxt, theme, WIDTH, HEIGHT} = useContext(AuthContext)
const [user, setUser] = useState({
email: '',
password: ''
})


useEffect(() => {
seterrTxt('')
}, [])









return (
<View style={[styles.container, {backgroundColor: theme === 'dark' ? ActiveColors.dark.tertiary : ActiveColors.light.secondary},{width: WIDTH, height:HEIGHT}]}>
<StatusBar hidden={true}/>
<View style={[styles.content,{backgroundColor: theme === 'dark' ? ActiveColors.dark.wblue : ActiveColors.light.wblue}]}>
<View style={[styles.form, {backgroundColor: theme === 'dark' ? ActiveColors.dark.mgreen : ActiveColors.light.mgreen}]}>

<TextInput placeholderTextColor="#804646" ref={ref1}  editable={ isClient ? false : true } style={styles.input} placeholder="email"  value={isClient ? myClient.email : user.email}
onChangeText={text => {
seterrTxt('')
setUser({...user, email:text})
}}/>


{

(isClient) && (<TextInput placeholderTextColor="#804646" ref={ref2} style={styles.input} secureTextEntry={true} placeholder="password" value={user.password}
onChangeText={text => {
seterrTxt('')
setUser({...user, password:text})}}/>
)

}


<Text style={{color: 'rgba(226, 15, 15, 0.76)'}}>{errTxt}</Text>

<Pressable style={[styles.box, {backgroundColor:theme === 'dark' ? ActiveColors.dark.tint : ActiveColors.light.tint }]} 
onPress={() => {
ref1.current?.blur()
ref2.current?.blur()
setCredentials(user)
setUser({...user, password:''})
}} >
<Text style={styles.text}>{isClient ? 'LOGIN': 'NEXT'}</Text>
</Pressable>

<View style={styles.linkcon}>
<Link href='/signup'><Text style={[styles.linktxt, {color: theme === 'dark' ? ActiveColors.light.accent : ActiveColors.light.accent}]}>create new account</Text></Link>
<Link href='/forgot'><Text style={[styles.linktxt,{color: theme === 'dark' ? ActiveColors.light.accent : ActiveColors.light.accent} ]}>forgot Password?</Text></Link>
</View>
</View>

</View>

</View>
)
}

export default login








const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
alignItems: "center",

},


content:{
justifyContent:'center',
alignItems:'center',
textAlign:'center',
width:500,
height:600,
borderRadius:40
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
width: 300,
height: 600,
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
rowGap:20,
},

input:{
width:260,
padding:10,
height:50,
backgroundColor:'#d6d6d6',
fontSize: 17
}, 

linkcon: {
width:'100%',
flexDirection:'row',
justifyContent:'space-around',
alignContent:'center',
paddingTop:110,
columnGap:19
},

linktxt:{
fontSize:16,

}

})