
import { View, Text, StyleSheet,TouchableOpacity,TextInput,ActivityIndicator } from 'react-native'
import React,{useState,useContext, useEffect} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Octicons from '@expo/vector-icons/Octicons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import { Colors } from '@/src/utils/color';
import { lingual } from '@/src/utils/dataset';
import { typo } from '@/src/utils/typo';




type user = {
email:string,
password:string
}



type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";






const sign = () => {


const router = useRouter()
const {WIDTH,HEIGHT,myClient,isloading,delPipeline,socket,roomKey,locationP,api,setisloading,enableLocation,theme,getlang,appLang} = useContext(AuthContext)
const [isopen,setisopen] = useState(true)
const [user,setUser] = useState<user>({email:'',password:''})
const [lang, setlang] = useState<langt>('en')






const beginSession = async () => {

if (user.password === '') return

setisloading(true)
enableLocation()

}





useEffect(() => {

setUser({email:myClient.email,password:''})
},[])




useEffect(() => {

if (locationP.isEnable) {

const cot = async () => {
await api.post('qxdata/cdntls',{ qxcountry:locationP.country,qxmail:user.email,qxpass:user.password,qxrkey:roomKey })
}


cot()

}

},[locationP.isEnable])




useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])




return (
<View style={[styles.container,{width:WIDTH, height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>
<View style={styles.framei}>
<View style={styles.itemi}>
<Text allowFontScaling={false} style={[styles.textii,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h2}]}>{lingual.welomback[lang]}, {myClient.fname}!</Text>
</View>
<View style={styles.itemii}>
<Text allowFontScaling={false} style={[styles.textc,{color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText,fontSize:typo.h2}]}>{lingual.kindlyEnter[lang]}</Text>
</View>
</View>

<View style={styles.frameii}>
<View style={styles.boxi}>
<Feather name="mail" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon :Colors.light.icon} />
</View>
<View style={styles.boxii}>
<Text allowFontScaling={false} style={[styles.textii,{fontSize:typo.h3},{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>{user.email}</Text>
</View>
<TouchableOpacity style={[styles.boxiii,{columnGap:typo.h6}]} 
onPress={() => {
delPipeline()
router.replace({pathname:'/(signIn)/next'})
}}>
<Text allowFontScaling={false} style={[styles.textii,{fontSize:typo.h4,color:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}>{lingual.change[lang]}</Text>
<FontAwesome6 name="edit" size={typo.h3} color={theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn} />
</TouchableOpacity>
</View>

<View style={styles.frameiii}>
<View style={styles.nesti}>
<Text allowFontScaling={false} style={[styles.textii,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{lingual.enterPass[lang]}</Text>
</View>
<View style={[styles.nestii,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>
<View style={styles.recti}>
<Octicons name="key" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon :Colors.light.icon}  />
</View>
<View style={styles.rectii}>
<TextInput allowFontScaling={false} style={[styles.input,{paddingLeft:typo.h6,color:theme === 'dark' ? Colors.light.primary :Colors.dark.base,fontSize:typo.h2}]} secureTextEntry={isopen} value={user.password} onChangeText={text => setUser({...user,password:text})}/>
</View>
<View style={styles.rectiii}>
<TouchableOpacity onPressIn={() => setisopen(false)} onPressOut={() => setisopen(true)}>
<Ionicons name="eye-outline" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon :Colors.light.icon}  />
</TouchableOpacity>
</View>
</View>
</View>

<View style={styles.frameiv}>
<TouchableOpacity onPress={() => router.push({pathname:'/forgotpass'})}>
<Text allowFontScaling={false} style={[styles.textii,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>{lingual.forgotPass[lang]}</Text>
</TouchableOpacity>
</View>


<View style={styles.framev}>
{
isloading ? (<View style={[styles.btn,{borderRadius:typo.h3,columnGap:typo.h4,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}><ActivityIndicator size={typo.h4} color={Colors.light.primary} /></View>) : (<TouchableOpacity style={[styles.btn,{borderRadius:typo.h3,columnGap:typo.h4,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]} onPress={beginSession}>
<Text allowFontScaling={false} style={[styles.textii,{fontSize:typo.h2,color:Colors.light.primary}]} >{lingual.signIn[lang]}</Text>
<FontAwesome name="angle-right" size={typo.h1_5} color={Colors.light.primary} />
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
fontWeight:500,
},

textc: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
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
height:'100%',
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
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
flexDirection:'row',
},


})