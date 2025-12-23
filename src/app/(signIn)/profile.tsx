

import { View,Text,StyleSheet,TextInput,TouchableOpacity,Modal,ActivityIndicator,Keyboard} from 'react-native'
import React,{useState,useEffect,useContext} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import DatePicker from 'react-native-date-picker'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'expo-image';
import * as ImageManipulator from "expo-image-manipulator";
import { Colors } from '@/src/utils/color';
import { lingual } from '@/src/utils/dataset';





type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";








const profile = () => {


const {WIDTH,HEIGHT,user,setUser,api,setisloading,isloading,roomKey,locationP,enableLocation,isLocationLoading,theme,getlang,appLang} = useContext(AuthContext)
const [isDpOpen, setisDpOpen] = useState(false)
const [isModal, setisModal] = useState(false)
const [isSwitch, setisSwitch] = useState({male:false,female:false})
const [key, setkey] = useState({a:0,b:0,c:0,d:0,e:0})
const [preview, setpreview] = useState('')
const [lang, setlang] = useState<langt>('en')
let id = 0





const upload_DB = async (uri:string) => {

try {

const manipulatedImage = await ImageManipulator.manipulateAsync(
uri,
[{ resize: { width: 500 } }],
{ compress: 0.7, format: ImageManipulator.SaveFormat.JPEG, base64:true }
);


if (manipulatedImage.base64) {
setUser({...user,image:manipulatedImage.base64})
}


} catch(err) {
console.log(`status:${err}`)
}

}


const pickImage = async () => {
let result = await ImagePicker.launchImageLibraryAsync({
mediaTypes: ['images', 'videos'],
allowsEditing: true,
aspect: [4, 3],
quality: 1,
});


if (!result.canceled) {

setpreview(result.assets[0].uri)
await upload_DB(result.assets[0].uri)
};

}



const sendDetails = async (user:any) => {

setisloading(true)
await api.post('/qxdata/gznwcl', JSON.stringify(user))
} 





useEffect(() => {

if (locationP.isEnable === true) {
setkey({...key,e:1})
}

},[locationP.isEnable])




useEffect(() => {

getlang(appLang,setlang)

},[appLang])



return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>

<View style={styles.blocka}>
<View style={styles.cola}>
<Text style={[styles.textM500,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{lingual.complteProfile[lang]}</Text>
</View>
<View style={styles.colb}>
<Text style={[styles.textR400,{color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText}]}>{lingual.fillingdetls[lang]}</Text>
</View>
</View>


<View style={[styles.footboxb]}>
{
theme === 'dark' ? (<Image source={require('../../../assets/images/firstdark.png')} style={{width:'10%',height:'40%'}} />) : (<Image source={require('../../../assets/images/firsllight.png')} style={{width:'10%',height:'40%'}} />)
}
</View>


<View style={styles.blockb}>
<View style={styles.itema}>
<TouchableOpacity onPress={pickImage} style={styles.childma}>
{
(preview === '') && (theme === 'dark' ? (<Image source={require('../../../assets/images/bigusericondark.png')} style={{width:'95%', height:'95%'}}/>) : (<Image source={require('../../../assets/images/bigusericonlight.png')} style={{width:'95%', height:'95%'}}/>))
}
{
(preview !== '') && (<Image source={preview} style={{width:'95%', height:'95%', borderRadius:'50%'}}/>)
}
</TouchableOpacity>
</View>

<View style={styles.itemb}>
<View style={styles.fchildmb}>
<View style={styles.fone}>
<View style={styles.parta}>
<Text style={[styles.textM500,{fontSize:20,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{lingual.Firstname[lang]}</Text>
</View>
<View style={[styles.partb,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>
<TextInput placeholder={lingual.Name[lang]} placeholderTextColor={theme === 'dark' ? Colors.dark.placeholder :Colors.light.placeholder} style={[styles.input,{color:theme === 'dark' ? Colors.light.primary :Colors.dark.base}]} value={user.fname} 
onChangeText={(text) => {

if (text.length <= 1) {

setkey({...key,a:0})
setUser({...user,fname:text})

} else if (text.length > 1) {

setkey({...key,a:1})
setUser({...user,fname:text})

}else if (text.length === 0) {
setkey({...key,a:0})
setUser({...user,fname:text})
}

}}/>
</View>
</View>
<View style={styles.ftwo}>
<View style={styles.parta}>
<Text style={[styles.textM500,{fontSize:18,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{lingual.Lastname[lang]}</Text>
</View>
<View style={[styles.partb,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>
<TextInput placeholder={lingual.Name[lang]} placeholderTextColor={theme === 'dark' ? Colors.dark.placeholder :Colors.light.placeholder} style={[styles.input,{color:theme === 'dark' ? Colors.light.primary :Colors.dark.base}]} value={user.lname} 
onChangeText={(text) => {

if (text.length <= 1) {

setkey({...key,b:0})
setUser({...user,lname:text})

} else if (text.length > 1) {

setkey({...key,b:1})
setUser({...user,lname:text})

}else if (text.length === 0) {
setkey({...key,b:0})
setUser({...user,lname:text})
}


}}/>
</View>
</View>
</View>

<View style={[styles.childmb,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>
<View style={styles.parta}>
<Text style={[styles.textM500,{fontSize:20,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{lingual.DateofBirth[lang]}</Text>
</View>
<View style={styles.partc}>
<View style={styles.diva}>
{
key.c === 1 ? (<Text style={[styles.textM500,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:22}]}>{user.dob}</Text>):(<Text style={[styles.textR400,{color:theme === 'dark' ? Colors.dark.placeholder :Colors.light.placeholder}]}>{lingual.SelectDate[lang]}</Text>)
}
</View>
<View style={styles.divb}>
<TouchableOpacity onPress={() => setisDpOpen(true)}>
<MaterialIcons name="calendar-month" size={24} color={theme === 'dark' ? Colors.dark.icon :Colors.light.icon} />
</TouchableOpacity>
</View>
</View>
</View>

<View style={[styles.childmb,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>
<View style={styles.parta}>
<Text style={[styles.textM500,{fontSize:20,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{lingual.Gender[lang]}</Text>
</View>
<View style={styles.partc}>
<View style={styles.diva}>
{
key.d === 1 ? (<Text style={[styles.textM500,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:22}]}>{user.gender}</Text>) : (<Text style={[styles.textR400,{color:theme === 'dark' ? Colors.dark.placeholder :Colors.light.placeholder}]}>{lingual.SelectGender[lang]}</Text>)
}
</View>
<View style={styles.divb}>
<TouchableOpacity onPress={() => setisModal(true)}>
<MaterialIcons name="keyboard-arrow-down" size={24} color={theme === 'dark' ? Colors.dark.icon :Colors.light.icon} />
</TouchableOpacity>
</View>
</View>
</View>

<View style={[styles.childmb,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>
<View style={styles.parta}>
<Text style={[styles.textM500,{fontSize:20,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{lingual.Location[lang]}</Text>
</View>
<View style={styles.partc}>
<View style={styles.divc}>
<View style={styles.boxci}>
<Entypo name="location" size={22} color={locationP.isEnable ? (theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn):(theme === 'dark' ? Colors.dark.placeholder :Colors.light.placeholder)} />
</View>
<View style={styles.boxcii}>
{
locationP.isEnable ? (<Text style={[styles.textM500,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:22}]}>{`${locationP.region}, ${locationP.country}`}</Text>): (<Text style={[styles.textR400,{color:theme === 'dark' ? Colors.dark.placeholder :Colors.light.placeholder}]}>{lingual.NotEnabled[lang]}</Text>)
}
</View>
</View>
<View style={styles.divd}>
{
(locationP.isEnable === false) && (<TouchableOpacity onPress={enableLocation}>
{isLocationLoading ? (<ActivityIndicator color={theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn} size={13}/>):(<Text style={[styles.textR400,{color:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}>{lingual.Enable[lang]}</Text>)}
</TouchableOpacity>)
}
</View>
</View>
</View>
</View>
</View>

<View style={styles.blockc}>
<Text style={[styles.textR400,{color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText, fontSize:17}]}>{lingual.yliveLocation[lang]}</Text>
</View>

{
(key.a + key.b + key.c + key.d + key.e === 5) ? (isloading ? (<View style={[styles.blockd,{backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}><ActivityIndicator color={Colors.light.primary} size={18} /></View>) : (<TouchableOpacity style={[styles.blockd,{backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]} 
onPress={() => {
const client = {qximage:user.image,qxfname:user.fname,qxlname:user.lname,qxdob:user.dob,qxgender:user.gender,qxrkey:roomKey,qxuname:user.uname,qxpass:user.password,qxmail:user.email,qxcountry:locationP.isocode}
sendDetails(client)
clearTimeout(id)
}}>
<Text style={[styles.textM500,{fontSize:22,color:Colors.light.primary}]}>{lingual.next[lang]}</Text>
<FontAwesome name="angle-right" size={30} color={Colors.light.primary} />
</TouchableOpacity>)) : (<View style={[styles.blockd,{backgroundColor:theme === 'dark' ? Colors.dark.primary : Colors.light.border}]}>
<Text style={[styles.textM500,{fontSize:22,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>{lingual.next[lang]}</Text>
<FontAwesome name="angle-right" size={30} color={theme === 'dark' ? Colors.light.border : Colors.dark.primary} />
</View>)

}


<DatePicker maximumDate={new Date('2015-12-01')} theme='dark'  mode='date' date={new Date('2015-12-01')} modal 
onCancel={()=> setisDpOpen(false)} open={isDpOpen}
onConfirm={(date) => {
setkey({...key,c:1})
setUser({...user,dob:date.toDateString()})
Keyboard.dismiss()
setisDpOpen(false)
} }/>

<Modal transparent={true} visible={isModal} onRequestClose={() => setisModal(false)} animationType='slide'>
<View style={styles.centeredView}>
<View style={[styles.modalView,{backgroundColor:theme === 'dark' ? Colors.dark.modal : Colors.light.modal}]}>
<TouchableOpacity style={[styles.modalBoxa,{borderBottomColor:theme === 'dark' ? Colors.dark.modalBorder : Colors.light.modalBorder}]} 
onPress={() => {
setisSwitch({male:true,female:false})
setUser({...user,gender:'Male'})
setkey({...key,d:1})
id = setTimeout(() => setisModal(false),800)
}}>
<View style={styles.item1}>
<FontAwesome name="male" size={24} color={theme === 'dark' ? Colors.dark.icon :Colors.light.icon} />
</View>
<View style={styles.item2}>
<Text style={[styles.textM500,{fontSize:20,color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText}]}>{lingual.Male[lang]}</Text>
</View>
<View style={styles.item3}>
<FontAwesome6 name={isSwitch.male ? "circle-dot" : "circle"} size={22} color={theme === 'dark' ? Colors.dark.icon :Colors.light.icon} />
</View>
</TouchableOpacity>

<TouchableOpacity style={[styles.modalBoxb,{borderBottomColor:theme === 'dark' ? Colors.dark.modalBorder : Colors.light.modalBorder}]} 
onPress={() => {
setisSwitch({male:false,female:true})
setUser({...user,gender:'Female'})
setkey({...key,d:1})
id = setTimeout(() => setisModal(false),1000)

}}>
<View style={styles.item1}>
<FontAwesome name="female" size={24} color={theme === 'dark' ? Colors.dark.icon :Colors.light.icon} />
</View>
<View style={styles.item2}>
<Text style={[styles.textM500,{fontSize:20,color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText}]}>{lingual.Female[lang]}</Text>
</View>
<View style={styles.item3}>
<FontAwesome6 name={isSwitch.female ? "circle-dot" : "circle"} size={22} color={theme === 'dark' ? Colors.dark.icon :Colors.light.icon} />
</View>
</TouchableOpacity>
</View>

</View>
</Modal>

</View>
)
}

export default profile








const styles = StyleSheet.create({

container: {
justifyContent:'center',
alignItems:'center',
flex:1,
},

blocka:{
justifyContent:'center',
alignItems:'center',
height:'6.9%',
width:'88.1%',
position:'absolute',
top:'9%',
flexDirection:'column'
},

cola:{
justifyContent:'center',
alignItems:'center',
height:'50%',
width:'100%',
},

colb:{
justifyContent:'center',
alignItems:'center',
height:'50%',
width:'100%',
},

blockb:{
justifyContent:'center',
alignItems:'center',
height:'59.5%',
width:'88.1%',
position:'absolute',
top:'24%',
flexDirection:'column'
},

itema:{
justifyContent:'center',
alignItems:'center',
height:'24%',
width:'100%'
},

childma:{
justifyContent:'center',
alignItems:'center',
height:'82%',
width:'30.2%',
},


itemb:{
justifyContent:'space-between',
alignItems:'center',
height:'76%',
width:'100%',
flexDirection:'column'
},

childmb:{
justifyContent:'center',
alignItems:'center',
height:'20.3%',
width:'100%',
borderBottomWidth:1
},

fchildmb:{
justifyContent:'center',
alignItems:'center',
height:'20.3%',
width:'100%',
flexDirection:'row',
columnGap:25
},

fone:{
justifyContent:'center',
alignItems:'center',
height:'100%',
width:'45%',
flexDirection:'column'
},

parta:{
justifyContent:'center',
alignItems:'flex-start',
height:'45%',
width:'100%',
},

partb:{
justifyContent:'center',
alignItems:'center',
height:'55%',
width:'100%',
borderBottomWidth:1
},

partc:{
justifyContent:'center',
alignItems:'center',
height:'55%',
width:'100%',
flexDirection:'row'
},

diva:{
justifyContent:'center',
alignItems:'flex-start',
height:'100%',
width:'70%',
},

divb:{
justifyContent:'center',
alignItems:'flex-end',
height:'100%',
width:'30%',
},

divc:{
justifyContent:'center',
alignItems:'center',
height:'100%',
width:'85%',
flexDirection:'row',
},

divd:{
justifyContent:'center',
alignItems:'center',
height:'100%',
width:'15%',
},

boxci:{
justifyContent:'center',
alignItems:'flex-start',
height:'100%',
width:'13%',
},

boxcii:{
justifyContent:'center',
alignItems:'flex-start',
height:'100%',
width:'87%',
paddingLeft:8
},


ftwo:{
justifyContent:'center',
alignItems:'center',
height:'100%',
width:'45%',
flexDirection:'column'
},


blockc:{
justifyContent:'center',
alignItems:'flex-start',
height:'4.6%',
width:'88.1%',
position:'absolute',
top:'84.4%'
},


blockd:{
justifyContent:'center',
alignItems:'center',
height:'5.6%',
width:'88.1%',
position:'absolute',
top:'89.4%',
flexDirection:'row',
columnGap:10
},

centeredView: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},


modalView: {
position:'absolute',
width:'50%',
height:'11%',
top:'59.9%',
right:'20%',
borderRadius: 10,
alignItems: 'center',
shadowColor: '#000',
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4,
elevation: 5,
},


modalBoxa: {
justifyContent:'center',
alignItems:'center',
height:'45%',
width:'100%',
borderBottomWidth:1,
flexDirection:'row'
},



modalBoxb: {
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
height:'45%',
width:'100%',
borderBottomWidth:1,
},

item1:{
justifyContent:'center',
alignItems:'center',
height:'100%',
width:'20%',
},

item2:{
justifyContent:'center',
alignItems:'flex-start',
paddingLeft:7,
height:'100%',
width:'60%',
},

item3:{
justifyContent:'center',
alignItems:'center',
height:'100%',
width:'20%',
},


textM500: {
fontFamily:'CabinetGrotesk-Medium',
fontSize:28,
fontWeight:500,
},

textR400: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
fontSize:18,
},

input:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'100%',
padding:7,
fontSize:24,
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
},


footboxb: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'1.2%',
position:'absolute',
top:'17.8%'
},

})