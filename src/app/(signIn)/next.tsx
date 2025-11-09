

import { View, Text,StyleSheet,TextInput,TouchableOpacity,ActivityIndicator} from 'react-native'
import React,{useState,useEffect,useContext} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { multilingual } from '@/src/utils/dataset';
import { regex } from '@/src/utils/dataset';


type user = {
email:string,
password:string
}


type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id";




const next = () => {

const {setmyClient,WIDTH,HEIGHT,isloading,getClient,getlang,appLang} = useContext(AuthContext)
const [user,setUser] = useState<user>({email:'',password:''})
const [lang, setlang] = useState<langt>('en')
const [iserror,setiserror] = useState(false)




useEffect(() => {

setmyClient({
fname:'',
lname:'',
uname:'',
dob:'',
email:'',
gender:'',
image:''
})

},[])


useEffect(() => {

getlang(appLang,setlang)

},[appLang])


return (
<View  style={[styles.container,{width:WIDTH,height:HEIGHT}]}>

<View style={styles.framei}>
<View style={styles.boxi}>
<Text style={styles.textii}>Let's get started</Text>
</View>
<View style={styles.boxii}>
<Text style={styles.textc}>
Enter your email address to begin
</Text>
</View>
</View>


<View style={styles.frameii}>
<View style={styles.itemi}>
<Text style={[styles.textii,{fontSize:18}]}>Enter email Address</Text>
</View>
<View style={styles.itemii}>
<View style={styles.recti}>
<Feather name="mail" size={24} color="grey" />
</View>
<View style={styles.rectii}>
<TextInput style={styles.input} placeholderTextColor='grey' placeholder='address@email.com' value={user.email}
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
iserror && (<View style={styles.box}><Text style={styles.texterror}>{multilingual.emailValidation[lang]}</Text></View>)
}


<View style={styles.frameiii}>
{
isloading ? (<View style={styles.btn}><ActivityIndicator size={16} color='azure' /></View>) : (<TouchableOpacity style={styles.btn} onPress={() => getClient(user)}>
<Text style={[styles.textii,{fontSize:22,color:"#FFFFFF"}]} >Next</Text>
<FontAwesome name="angle-right" size={30} color="#FFFFFF" />
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
backgroundColor:'#F9FAFB',
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
color:'#2C3239',
},

textii: {
fontFamily:'CabinetGrotesk-Medium',
fontSize:24,
lineHeight:32,
fontWeight:500,
color:'#1A1D21'
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
backgroundColor:'#2B47FF',
flexDirection:'row',
columnGap:15,
},

box: {
justifyContent:'flex-end',
alignItems:'center',
position:'absolute',
top:'46.4%',
width:'88.1%',
height:'3%',
},

texterror: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
fontSize:16,
color:'red',
},





})