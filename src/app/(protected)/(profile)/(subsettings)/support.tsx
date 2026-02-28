


import { View, Text,StyleSheet,TextInput,TouchableOpacity,ActivityIndicator,Keyboard,Modal,Pressable,FlatList} from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import {KeyboardStickyView} from 'react-native-keyboard-controller'
import { typo,length } from '@/src/utils/typo'
import { Colors } from '@/src/utils/color'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useRouter } from 'expo-router'
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'expo-image';
import * as ImageManipulator from "expo-image-manipulator";
import Entypo from '@expo/vector-icons/Entypo';
import { lingual,suggest } from '@/src/utils/dataset'
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';






type selet = {
uri:string
}


type istag = {
type:langobj,
more:langobj,
issue:string,
}




type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";



type langobj = {
en:string,
fr:string,
de:string,
ar:string,
es:string,
tr:string,
nl:string,
it:string,
ja:string,
zh:string,
ko:string,
hi:string,
pt:string,
ru:string,
sw:string,
pl:string,
id:string,
fa:string,
pa:string,
uk:string,
ro:string,
tl:string


}


type doc = {
uri:string,
blob:string 
}








const support = () => {

const [issue, setissue] = useState('')
const router = useRouter()
const { theme,WIDTH,HEIGHT,myClient,socket,isloading,setisloading,roomKey,showToast,appLang,platform,getlang} = useContext(AuthContext)
const [document, setdocument] = useState<doc[]>([])
const [description, setdescription] = useState('')
const [lang, setlang] = useState<langt>('en')
const [ismodal, setismodal] = useState(false)



const notPressB = theme === 'dark' ? Colors.dark.secondary : Colors.light.primary
const PressB = theme === 'dark' ? Colors.light.story : Colors.dark.story
const textPress = theme === 'dark' ? Colors.light.secondary : Colors.dark.primary


const getdefault = (id:string) => {


switch (id) {

case "en": 
setissue(lingual.selectIssue.en)
break;

case "fr":
setissue(lingual.selectIssue.fr)
break;

case "de": 
setissue(lingual.selectIssue.de)
break;

case "ar":
setissue(lingual.selectIssue.ar)
break;

case "es": 
setissue(lingual.selectIssue.es)
break;

case "tr":
setissue(lingual.selectIssue.tr)
break;

case "nl":
setissue(lingual.selectIssue.nl)
break;


case "it":
setissue(lingual.selectIssue.it)
break;

case "ja":
setissue(lingual.selectIssue.ja)
break;

case "zh":
setissue(lingual.selectIssue.zh)
break;

case "ko":
setissue(lingual.selectIssue.ko)
break;

case "hi":
setissue(lingual.selectIssue.hi)
break;

case "pt":
setissue(lingual.selectIssue.pt)
break;

case "ru":
setissue(lingual.selectIssue.ru)
break;

case "sw":
setissue(lingual.selectIssue.sw)
break;

case "pl":
setissue(lingual.selectIssue.pl)
break;


case "id":
setissue(lingual.selectIssue.id)
break;

case "fa":
setissue(lingual.selectIssue.fa)
break;

case "pa":
setissue(lingual.selectIssue.pa)
break;

case "uk":
setissue(lingual.selectIssue.uk)
break;

case "ro":
setissue(lingual.selectIssue.ro)
break;

case "tl":
setissue(lingual.selectIssue.tl)
break;


}
}



const deleteImg = (uri:string) => {

const newlist = document.filter( item => item.uri !== uri )
setdocument(newlist)
}



const pickImage = async () => {
let result = await ImagePicker.launchImageLibraryAsync({
mediaTypes: ['images', 'videos'],
allowsEditing: true,
aspect: [4, 3],
quality: 1,
});


if (!result.canceled) {

try {

const manipulatedImage = await ImageManipulator.manipulateAsync(
result.assets[0].uri,
[{ resize: { width: 500 } }],
{ compress: 0.7, format: ImageManipulator.SaveFormat.JPEG, base64:true }
);

if (manipulatedImage.base64) {

const newItem = {blob:manipulatedImage.base64,uri:result.assets[0].uri}
setdocument([...document,newItem])
}



} catch(err) {

console.log(err)
}


}
};



const Select = ({uri}:selet) => (
<View style={[styles.select,{borderRadius:typo.h8,height:'70%',width:typo.h90,}]}>
<View style={{position:'absolute',top:-10,borderRadius:"50%",right:-10,backgroundColor:'grey'}}>
<TouchableOpacity onPress={()=> deleteImg(uri)}>
<Feather name="minus-circle" size={typo.h2} color="azure" />
</TouchableOpacity>
</View>
<Image style={{width:"90%",height:"66%"}} source={uri} contentFit='contain'/>
</View>
)



const Issuestag = ({type,more}:istag) => (
<TouchableOpacity onPress={()=> {
setissue(type[lang])
setismodal(false)
}}>
<View style={[styles.maindiv,{borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border,
backgroundColor:issue === type[lang] ? PressB : notPressB,borderWidth:1,borderRadius:typo.h5,height:length.l2 / 3}]}>
<View style={styles.rowone}>
<View style={[styles.colone,{paddingLeft:typo.h7}]}>
<Text allowFontScaling={false} style={[styles.textM500,{color:issue === type[lang] ? Colors.light.primary : textPress,fontSize:typo.h4}]}>
{type[lang]}</Text>
</View>
<View style={[styles.coltwo,{paddingLeft:typo.h7}]}>
<Text allowFontScaling={false} style={[styles.textR400,{color:issue === type[lang] ? Colors.light.primary : textPress,fontSize:typo.h5}]}>
{more[lang]}</Text>
</View>
</View>
<View style={styles.rowtwo}>
{(issue === type[lang]) ? (<Feather name="check-circle" size={typo.h2} color="azure" />) : (<Feather name="circle" size={typo.h2} color="brown" />)}
</View>
</View>
</TouchableOpacity>

)




const sendEmail = async (array:doc[],desc:string,issue:string) => {

if (issue === lingual.selectIssue[lang]) return 

if (desc === ''|| isloading) return 

setisloading(true)

let newMail = { issue:'',desc:'',firstimg:'' ,secondimg:'',thirdimg:'' }

if (array.length === 1) {

newMail = { issue:issue,desc:desc,firstimg:array[0].blob,secondimg:"null",thirdimg:"null", }

} else if (array.length === 0) {

newMail = { issue:issue,desc:desc,firstimg:"null",secondimg:"null",thirdimg:"null" }

} else if (array.length === 2) {

newMail = { issue:issue,desc:desc,firstimg:array[0].blob,secondimg:array[1].blob,thirdimg:"null" }

} else if (array.length === 3) {

newMail = { issue:issue,desc:desc,firstimg:array[0].blob,secondimg:array[1].blob,thirdimg:array[2].blob  }

}

await socket.emit("support",{ ...newMail,rkey:roomKey,userId:myClient.uname,email:myClient.email })


}



useEffect(() => {

socket.on("clientCare",(data:any) => {

if (data.isSent){
setisloading(false)
setdocument([])
getdefault(appLang.value)
setdescription('')
const toast = {type:'success',name:myClient.fname,info:'Sent! check your Email',onHide:() => {}, visibilityTime:4000}
showToast(toast)
}

})

},[socket])



useEffect(() => {

getdefault(appLang.value)
getlang(appLang.value,setlang)
},[appLang])




return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>

<View style={styles.cupA}></View>

<View style={[styles.cupB,{rowGap:typo.h2}]}>

<View style={styles.colA}>
<TouchableOpacity onPress={() => router.back()} style={styles.rolA}>
<EvilIcons name="chevron-left" size={typo.h1_2} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</TouchableOpacity>

<View style={styles.rolB}>

<View style={styles.sideA}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h1_8,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>{lingual.Settings[lang]}</Text>
</View>

<View style={styles.sideB}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>{lingual.Support[lang]}</Text>
</View>

</View>

</View>

<View style={[styles.colB,{rowGap:typo.h1}]}>

<TouchableOpacity onPress={() => setismodal(true)}
style={[styles.firstdiv,{borderBottomWidth:2,borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>
<View style={styles.custom}>

<View style={styles.rowa}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h3}]}>{issue}</Text>
</View>

<View style={styles.rowb}>
<Entypo name="chevron-thin-down" size={20} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</View>

</View>
</TouchableOpacity>

<View style={[styles.secondiv,{borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border,
backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderWidth:1}]}>

<TextInput allowFontScaling={false} style={[styles.input,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h3,padding:typo.h6}]} placeholder={lingual.assistance[lang]}
placeholderTextColor={theme === 'dark' ? Colors.dark.placeholder : Colors.light.placeholder} multiline={true} textAlignVertical='top' numberOfLines={5} onChangeText={text => setdescription(text)} value={description} />
</View>




<View style={[styles.thirdiv,{borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border,
backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderWidth:1}]}>

<View style={[styles.firstcol,{columnGap:typo.h6}]}>

<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4,paddingLeft:5}]}>
{lingual.supporting[lang]}</Text>

<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.dark.placeholder : Colors.light.placeholder,fontSize:typo.h5}]}>
({lingual.optional[lang]})</Text>

</View>
<View style={[styles.secondcol,{paddingLeft:typo.h4,columnGap:typo.h4,}]}>
{
document.map((item)=> (
<View key={item.uri}>
<Select uri={item.uri}/>
</View>
))
}
{(document.length !== 3) && (<View style={[styles.picker,{borderColor:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,borderRadius:5,width:typo.h90,height:'70%'}]}>
<TouchableOpacity onPress={pickImage}>
<Feather name="plus" size={typo.h1_8} color={theme === 'dark' ? Colors.light.secondary  : Colors.dark.primary} />
</TouchableOpacity>
</View>)}
<View style={[styles.invisiblebox,{height:'92%',width:typo.h1_2}]}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.secondary  : Colors.dark.primary,fontSize:typo.h5}]}>
{document.length}/3</Text>
</View>
</View>


</View>




<TouchableOpacity onPress={() => sendEmail(document,description,issue)}
style={[styles.fourthdiv,{borderRadius:typo.h4,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn}]}>

{
isloading ? (<ActivityIndicator size={typo.h4} color={Colors.light.primary}  />) : (<Text allowFontScaling={false} style={[styles.textB700,{color: Colors.light.primary ,fontSize:typo.h3}]}>
{lingual.submit[lang]}</Text>)
}
</TouchableOpacity>



<View>

</View>




</View>


</View>


<Modal transparent={true} animationType='slide' visible={ismodal} onRequestClose={()=> setismodal(false)}>
<View style={styles.centeredView}>
<Pressable onPress={()=> setismodal(false)} style={styles.cancel}> 
<MaterialIcons name="cancel" size={typo.h1_5} color={Colors.light.primary} />
</Pressable>
<View style={[styles.modalView,{backgroundColor:theme === 'dark' ? Colors.dark.base : 
Colors.light.base,paddingTop:typo.h6,borderRadius:typo.h2}]}>
<FlatList showsVerticalScrollIndicator={false} style={{width:'100%',height:'auto'}} 
contentContainerStyle={{justifyContent:'flex-start',alignItems:'center'}}
ItemSeparatorComponent={() => <View style={{height:typo.h5,width:'100%'}}></View>} data={suggest} 
renderItem={({item})=> <Issuestag type={item.type} more={item.more}  issue={issue}/> } 
keyExtractor={item => item.more.en} />
</View>
</View>
</Modal>

<KeyboardStickyView style={[styles.customView,{backgroundColor:theme === 'dark' ? Colors.dark.primary : Colors.light.primary}]}
offset={platform === 'ios' ? {closed:100,opened:0}:{closed:100,opened:42}}>

<TouchableOpacity style={{width:'20%',height:'100%',justifyContent:'center',alignItems:'center'}} onPress={Keyboard.dismiss}>

<Text allowFontScaling={false} 
style={[styles.textB700,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h3}]}>
{lingual.Done[lang]}</Text>

</TouchableOpacity>
</KeyboardStickyView>

</View>
)
}

export default support









const styles = StyleSheet.create({
container:{
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
},

cupA:{
justifyContent:'center',
alignItems:'center',
width:'95%',
height:'8%',
},

cupB:{
justifyContent:'flex-start',
alignItems:'center',
width:'95%',
height:'85%',
},



colA:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'8%',
flexDirection:'row'
},

colB:{
justifyContent:'flex-start',
alignItems:'center',
width:'100%',
height:'92%',
flexDirection:"column",
},


rolA:{
justifyContent:'flex-start',
alignItems:'center',
width:'14%',
height:'100%'
},

rolB:{
justifyContent:'center',
alignItems:'center',
width:'86%',
height:'100%',
flexDirection:'column'
},

sideA:{
justifyContent:'flex-start',
alignItems:'flex-start',
width:'100%',
height:'50%'
},

sideB:{
justifyContent:'flex-start',
alignItems:'flex-start',
width:'100%',
height:'50%'
},

custom: {
justifyContent:"center",
alignItems:"center",
width:"100%",
height:"100%",
flexDirection:'row',
},

rowa: {
justifyContent:"center",
alignItems:"center",
width:"70%",
height:"100%",
},

rowb: {
justifyContent:"center",
alignItems:"center",
width:"30%",
height:"100%",
},


firstdiv: {
justifyContent:"center",
alignItems:"center",
width:"70%",
height:'8%'
},

secondiv: {
justifyContent:"center",
alignItems:"center",
width:"93%",
height:'30%',
},


thirdiv: {
height:'22%',
justifyContent:"center",
alignItems:"center",
width:"93%",
flexDirection:'column',
},

fourthdiv: {
justifyContent:"center",
alignItems:"center",
width:"72%",
height:'7%',
},


firstcol: {
justifyContent:"flex-start",
alignItems:'center',
width:"100%",
height:"20%",
flexDirection:'row',
},

secondcol: {
justifyContent:'flex-start',
alignItems:'center',
width:"100%",
height:"80%",
flexDirection:'row',
},

invisiblebox: {
justifyContent:'flex-end',
alignItems:'flex-start',
},

picker: {
justifyContent:"center",
alignItems:"center",
borderWidth:2,
borderStyle:"dotted",
},


input:{
width:"100%",
height:"100%",
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
},


customView: {
width:'100%',
height: '7%',
alignItems: "flex-end",
justifyContent: "center",
},


select: {
justifyContent:'center',
alignItems:'center',
borderWidth:2,
borderStyle:"solid",
borderColor:"grey",
},

centeredView: {
flex: 1,
justifyContent: 'flex-end',
alignItems: 'center',
backgroundColor:'rgba(0, 0, 0, 0.73)'
},

modalView: {
width:'100%',
height:'55%',
justifyContent:'flex-start',
alignItems: 'center',
},

maindiv: {
justifyContent:"center",
alignItems:"center",
flexDirection:'row',
width:"99%",
},

rowone:{
justifyContent:"center",
alignItems:"center",
flexDirection:'column',
width:"90%",
height:"100%"
},

rowtwo: {
justifyContent:"center",
alignItems:"center",
width:"10%",
height:"100%"
},

colone: {
justifyContent:'flex-end',
alignItems:'flex-start',
width:"100%",
height:"50%",
},

coltwo: {
justifyContent:"center",
alignItems:'flex-start',
width:"100%",
height:"50%",
},

cancel:{
alignSelf:'flex-end', 
justifyContent:'center',
width:'10%',
height:'5%'
},

textM500: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
},


textR400: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
},


textT700: {
fontFamily:'CabinetGrotesk-Thin',
fontWeight:700,
},

textB700: {
fontFamily:'CabinetGrotesk-Bold',
fontWeight:700,
},




})