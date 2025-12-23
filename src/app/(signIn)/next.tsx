

import { View, Text,StyleSheet,TextInput,TouchableOpacity,ActivityIndicator} from 'react-native'
import React,{useState,useEffect,useContext} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {lingual } from '@/src/utils/dataset';
import { regex } from '@/src/utils/dataset';
import { Colors } from '@/src/utils/color';



type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";









const next = () => {

const {setmyClient,WIDTH,HEIGHT,isloading,getClient,getlang,appLang,user,setUser,theme,delPipeline} = useContext(AuthContext)
const [lang, setlang] = useState<langt>('en')
const [iserror,setiserror] = useState(false)




useEffect(() => {

setmyClient({fname:'',lname:'',uname:'',dob:'',email:'',image:''})
setUser({...user,email:''})
delPipeline()
},[])




useEffect(() => {

getlang(appLang,setlang)

},[appLang])





return (
<View  style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>

<View style={styles.framei}>
<View style={styles.boxi}>
<Text style={[styles.textii,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{lingual.lgetStarted[lang]}</Text>
</View>
<View style={styles.boxii}>
<Text style={[styles.textc,{color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText}]}>
{lingual.enterEBegin[lang]}
</Text>
</View>
</View>


<View style={styles.frameii}>
<View style={styles.itemi}>
<Text style={[styles.textii,{fontSize:18,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{lingual.enterEmail[lang]}</Text>
</View>
<View style={[styles.itemii,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>
<View style={styles.recti}>
<Feather name="mail" size={24} color={theme === 'dark' ? Colors.dark.icon :Colors.light.icon} />
</View>
<View style={styles.rectii}>
<TextInput style={[styles.input,{color:theme === 'dark' ? Colors.light.primary :Colors.dark.base}]} placeholderTextColor={theme === 'dark' ? Colors.dark.placeholder :Colors.light.placeholder} placeholder='address@email.com' value={user.email}
onChangeText={(text) => {
if (text.match(regex.email)) {
setUser({...user,email:text})
setiserror(false)
} else {
setiserror(true)
setUser({...user,email:text})
}

}}/>
</View>
</View>
</View>

{
iserror && (<View style={styles.box}><Text style={styles.texterror}>{lingual.validEmail[lang]}</Text></View>)
}


<View style={styles.frameiii}>
{
isloading ? (<View style={[styles.btn,{backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}><ActivityIndicator size={16} color={Colors.light.primary} /></View>) : (<TouchableOpacity style={[styles.btn,{backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}
onPress={() => {
if (iserror) return
if (user.email === '' ) return
getClient()
}}>
<Text style={[styles.textii,{fontSize:22,color:Colors.light.primary}]} >{lingual.next[lang]}</Text>
<FontAwesome name="angle-right" size={30} color={Colors.light.primary} />
</TouchableOpacity>
)
}
</View>

</View>
)
}

export default next





const styles = StyleSheet.create({

container: {
justifyContent:'center',
alignItems:'center',
flex:1,
position:'absolute'
},

textc: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
fontSize:20,
lineHeight:24,
},

textii: {
fontFamily:'CabinetGrotesk-Medium',
fontSize:24,
lineHeight:32,
fontWeight:500,
},

framei: {
justifyContent:'center',
alignItems:'center',
position:'absolute',
bottom:'84.1%',
width:'88.1%',
height:'6.9%',
flexDirection:'column'
},

boxi: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'60%',
},

boxii: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'40%',
},

frameii: {
justifyContent:'center',
alignItems:'center',
position:'absolute',
top:'38.2%',
width:'88.1%',
height:'9.2%',
flexDirection:'column',
},

itemi: {
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'40%',
},

itemii: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'60%',
flexDirection:'row',
borderBottomWidth:1,
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
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
fontSize:22,
},

frameiii: {
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
flexDirection:'row',
columnGap:15,
},

box: {
justifyContent:'flex-end',
alignItems:'center',
position:'absolute',
top:'46.4%',
width:'88.1%',
height:'4%',
paddingTop:5
},

texterror: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
fontSize:16,
color:'red',
},





})