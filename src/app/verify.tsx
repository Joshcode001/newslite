

import { View, Text , StyleSheet, TextInput, Pressable, KeyboardAvoidingView, ActivityIndicator} from 'react-native'
import React, {useState, useContext, useRef, useEffect} from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { AuthContext } from '../utils/authContext';
import { useLocalSearchParams } from 'expo-router';
import { multilingual } from '../utils/dataset';





type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id";




const verify = () => {

const [lang, setlang] = useState<langt>("en")
const {from} = useLocalSearchParams()
const Ref = useRef<TextInput>(null)
const [code, setcode] = useState('')
const [data, setdata] = useState('')
const {verify, display, backToLogIn, cemail, HEIGHT, WIDTH, backToForgot, platform, setdisplay, isloading, setisloading,appLang,getlang} = useContext(AuthContext)



const select = (from: string, id:string) => {

if (from === 'signup') {

switch (id) {

case "en": 
setdata(multilingual.verifycreate.en)
break;

case "fr":

setdata(multilingual.verifycreate.fr)
break;

case "de": 

setdata(multilingual.verifycreate.de)
break;

case "ar":

setdata(multilingual.verifycreate.ar)
break;

case "es": 

setdata(multilingual.verifycreate.es)
break;

case "tr":

setdata(multilingual.verifycreate.tr)
break;

case "nl":

setdata(multilingual.verifycreate.nl)
break;


case "it":

setdata(multilingual.verifycreate.it)
break;

case "ja":

setdata(multilingual.verifycreate.ja)
break;

case "zh":

setdata(multilingual.verifycreate.zh)
break;

case "ko":

setdata(multilingual.verifycreate.ko)
break;

case "hi":

setdata(multilingual.verifycreate.hi)
break;

case "pt":

setdata(multilingual.verifycreate.pt)
break;

case "ru":

setdata(multilingual.verifycreate.ru)
break;

case "sw":

setdata(multilingual.verifycreate.sw)
break;

case "pl":

setdata(multilingual.verifycreate.pl)
break;


}

} else if (from === 'forgot') {

switch (id) {

case "en": 
setdata(multilingual.retrieve.en)
break;

case "fr":

setdata(multilingual.retrieve.fr)
break;

case "de": 

setdata(multilingual.retrieve.de)
break;

case "ar":

setdata(multilingual.retrieve.ar)
break;

case "es": 

setdata(multilingual.retrieve.es)
break;

case "tr":

setdata(multilingual.retrieve.tr)
break;

case "nl":

setdata(multilingual.retrieve.nl)
break;


case "it":

setdata(multilingual.retrieve.it)
break;

case "ja":

setdata(multilingual.retrieve.ja)
break;

case "zh":

setdata(multilingual.retrieve.zh)
break;

case "ko":

setdata(multilingual.retrieve.ko)
break;

case "hi":

setdata(multilingual.retrieve.hi)
break;

case "pt":

setdata(multilingual.retrieve.pt)
break;

case "ru":

setdata(multilingual.retrieve.ru)
break;

case "sw":

setdata(multilingual.retrieve.sw)
break;

case "pl":

setdata(multilingual.retrieve.pl)
break;


}

}

}



const Auth = async (code: string) => {
const path1 = '/login/verify'
const path2 = '/data/verify'
try {
if (from === 'forgot') {

verify(code, path2,appLang)

} else if (from === 'signup')
verify(code, path1,appLang)

}catch(err) {
console.log(err)
}
}


useEffect(() => {
if (typeof from === 'string') {
select(from, appLang)
}
setisloading(false)
setdisplay('')

}, [])



useEffect(() => {

getlang(appLang,setlang)

},[appLang])




return (
<KeyboardAvoidingView behavior={platform === 'ios' ? 'padding' : 'height'} style={[styles.container,{width:WIDTH, height: HEIGHT}]}>
<View style={[styles.content, {width: WIDTH < 650 ? '100%' : '65%'}, {height: WIDTH < 650 ? '100%' : '83%'}]}>
<View style={[styles.box]}>
<MaterialCommunityIcons name="email-check" size={95} color="#305237" />
<Text style={styles.boxtxt}>{multilingual.emailsent[lang]} <Text style={styles.email}>{cemail}</Text>  . {multilingual.entercode[lang]} {data}</Text>
</View>

<TextInput  ref={Ref}  style={styles.input} textContentType='none' placeholder='' value={code} onChangeText={(text) => {
setcode(text)
}} />

<Pressable style={[styles.button, {opacity: (display === multilingual.success[lang]) ? 0: 1}]} onPress={() => {
Ref.current?.blur()
Auth(code)}}>
<Text style={styles.btntxt}>{isloading ? (<ActivityIndicator />) : multilingual.Verify[lang]}</Text>
</Pressable>



<View style={styles.display}>
{
(display === multilingual.invalidCode[lang] ) && (<MaterialIcons name="cancel" size={40} color="red" />)
}
{
(display === multilingual.success[lang]) && (<MaterialIcons name="verified" size={40} color="green" />)
}
<Text style={{color: display === multilingual.success[lang] ? 'green' : "red", fontSize: 23}}>{display}</Text>
</View>




{(display === multilingual.success[lang] && from === 'signup') && <Pressable onPress={() => backToLogIn()}><Text style={styles.log}>{multilingual.clickLogin[lang]}</Text></Pressable>}

{(display === multilingual.success[lang] && from === 'forgot') && <Pressable onPress={() => backToForgot()}><Text style={styles.log}>{multilingual.clickcontinue[lang]}</Text></Pressable>}
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