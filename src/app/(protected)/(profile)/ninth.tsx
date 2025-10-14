

import { View, Text, StyleSheet,TextInput,Keyboard,Modal,Pressable,FlatList,TouchableOpacity,KeyboardAvoidingView,ActivityIndicator} from 'react-native'
import React,{useState, useContext,useEffect} from 'react'
import { suggest } from '@/src/utils/dataset'
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { AuthContext } from '@/src/utils/authContext';
import * as ImageManipulator from "expo-image-manipulator";
import { multilingual } from '@/src/utils/dataset';
import * as ImagePicker from 'expo-image-picker';
import {Image} from 'expo-image' ;
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';






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
id:string

}



type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id";



type istag = {
type:langobj,
more:langobj,
issue:string,
}


type doc = {
uri:string,
blob:string 
}


type selet = {
uri:string
}







const support = () => {

const [document, setdocument] = useState<doc[]>([])
const [keyboardHeight, setKeyboardHeight] = useState(0);
const [ismodal, setismodal] = useState('a')
const [isback, setisback] = useState(false)
const [description, setdescription] = useState('')
const [lang, setlang] = useState<langt>('en')
const [issue, setissue] = useState('')
const {platform,api,myClient,getlang,appLang} = useContext(AuthContext)






const getdefault = (id:string) => {


switch (id) {

case "en": 
setissue(multilingual.selectIssue.en)
break;

case "fr":
setissue(multilingual.selectIssue.fr)
break;

case "de": 
setissue(multilingual.selectIssue.de)
break;

case "ar":
setissue(multilingual.selectIssue.ar)
break;

case "es": 
setissue(multilingual.selectIssue.es)
break;

case "tr":
setissue(multilingual.selectIssue.tr)
break;

case "nl":
setissue(multilingual.selectIssue.nl)
break;


case "it":
setissue(multilingual.selectIssue.it)
break;

case "ja":
setissue(multilingual.selectIssue.ja)
break;

case "zh":
setissue(multilingual.selectIssue.zh)
break;

case "ko":
setissue(multilingual.selectIssue.ko)
break;

case "hi":
setissue(multilingual.selectIssue.hi)
break;

case "pt":
setissue(multilingual.selectIssue.pt)
break;

case "ru":
setissue(multilingual.selectIssue.ru)
break;

case "sw":
setissue(multilingual.selectIssue.sw)
break;

case "pl":
setissue(multilingual.selectIssue.pl)
break;


}
}



const sendEmail = async (array:doc[],desc:string,issue:string) => {

if (issue === multilingual.selectIssue[lang]) { return }

if (desc === '') { return }

setismodal('c')



let newMail = {
issue:'',
desc:'',
firstimg:'' ,
secondimg:'',
thirdimg:'' 
}

if (array.length === 1) {

newMail = {
issue:issue,
desc:desc,
firstimg:array[0].blob,
secondimg:"null",
thirdimg:"null",
}

} else if (array.length === 0) {

newMail = {
issue:issue,
desc:desc,
firstimg:"null",
secondimg:"null",
thirdimg:"null"
}
} else if (array.length === 2) {

newMail = {
issue:issue,
desc:desc,
firstimg:array[0].blob,
secondimg:array[1].blob,
thirdimg:"null" 
}
} else if (array.length === 3) {

newMail = {
issue:issue,
desc:desc,
firstimg:array[0].blob,
secondimg:array[1].blob,
thirdimg:array[2].blob 
}
}


const resp = await api.post('/admin/support',{issue:newMail.issue,desc:newMail.desc,firstimg:newMail.firstimg,secondimg:newMail.secondimg,thirdimg:newMail.thirdimg,userid:myClient.uname,email:myClient.email})


if (resp.data.isOk === true) {
setTimeout(()=>{setisback(true)},3000)

} else if (resp.data.isOk === false) {
setismodal('a')
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
<View style={styles.select}>
<View style={{position:'absolute',top:-10,borderRadius:"50%",right:-10,backgroundColor:'grey'}}>
<TouchableOpacity onPress={()=> deleteImg(uri)}>
<Feather name="minus-circle" size={24} color="azure" />
</TouchableOpacity>
</View>
<Image style={{width:60,height:60}} source={uri} contentFit='contain'/>
</View>
)



const Issuestag = ({type,more}:istag) => (
<Pressable onPress={()=> {
setissue(type[lang])
setismodal('a')
}}>
<View style={[styles.maindiv,{backgroundColor:(issue === type[lang]) ? "green": "white"}]}>
<View style={styles.rowone}>
<View style={styles.colone}>
<Text style={{fontSize:20,color:(issue === type[lang]) ? "white": "black"}}>{type[lang]}</Text>
</View>
<View style={styles.coltwo}>
<Text style={{fontSize:17,color:(issue === type[lang]) ? "white": "black",fontWeight:"light"}}>{more[lang]}</Text>
</View>
</View>
<View style={styles.rowtwo}>
{(issue === type[lang]) ? (<Feather name="check-circle" size={24} color="azure" />) : (<Feather name="circle" size={24} color="brown" />)}
</View>
</View>
</Pressable>

)




useEffect(() => {
const showEvent = platform === "ios" ? "keyboardWillShow" : "keyboardDidShow";
const hideEvent = platform === "ios" ? "keyboardWillHide" : "keyboardDidHide";

const showSub = Keyboard.addListener(showEvent, e => {
setKeyboardHeight(e.endCoordinates.height);
});

const hideSub = Keyboard.addListener(hideEvent, () => {
setKeyboardHeight(0);
});

return () => {
showSub.remove();
hideSub.remove();
};
}, []);



useEffect(() => {

getlang(appLang,setlang)

getdefault(appLang)

},[appLang])




return (
<KeyboardAvoidingView  behavior={ platform === 'ios' ? 'padding' : 'height'} style={styles.container}>
<View style={styles.firstdiv}>
<TouchableOpacity onPress={() => setismodal('b')}>
<View style={styles.custom}>
<View style={styles.rowa}><Text style={{fontSize:20,color:'black'}}>{issue}</Text></View>
<View style={styles.rowb}><Entypo name="chevron-thin-down" size={20} color="black" /></View>
</View>
</TouchableOpacity>
</View>

<View style={styles.secondiv}>
<TextInput style={{width:"100%",height:"100%",padding:10,backgroundColor:"#f0f0f0",fontSize:18}} placeholder={multilingual.assistance[lang]} placeholderTextColor="grey" multiline={true} textAlignVertical='top' numberOfLines={5} onChangeText={text => setdescription(text)} value={description} />
</View>


<View style={styles.thirdiv}>
<View style={styles.firstcol}>
<Text style={{fontSize:18,color:"black",textAlign:'center',paddingLeft:5}}>{multilingual.Supporting[lang]}</Text>
<Text style={{fontSize:15,color:"grey"}}>({multilingual.Optional[lang]})</Text>
</View>
<View style={styles.secondcol}>
{
document.map((item)=> (
<View key={item.uri}>
<Select uri={item.uri}/>
</View>
))
}
{(document.length !== 3) && (<View style={styles.picker}>
<TouchableOpacity onPress={pickImage}><Feather name="plus" size={24} color="black" /></TouchableOpacity>
</View>)}
<View style={styles.invisiblebox}>
<Text style={{fontSize:17,color:'black',fontWeight:900}}>{document.length}/3</Text>
</View>
</View>


</View>


<View style={styles.fourthdiv}>
<TouchableOpacity onPress={()=> sendEmail(document,description,issue) }>
<Text style={{fontSize:20,color:"white",fontWeight:900}}>{multilingual.Submit[lang]}</Text>
</TouchableOpacity>
</View>




{keyboardHeight > 0 && (
<View style={[styles.customView, {bottom: keyboardHeight - 83}]}>
<TouchableOpacity onPress={Keyboard.dismiss}><Text style={{ color: "white", fontSize:20, paddingRight:18 }}>{multilingual.Done[lang]}</Text></TouchableOpacity>
</View>
)}




<Modal transparent={true} animationType='slide' visible={ismodal === 'b'} onRequestClose={()=> setismodal('a')}>
<View style={styles.centeredView}>
<Pressable onPress={()=> setismodal('a')} style={{alignSelf:'flex-end', paddingRight:18}}> 
<MaterialIcons name="cancel" size={32} color="azure" />
</Pressable>
<View style={styles.modalView}>
<FlatList data={suggest} renderItem={({item})=> <Issuestag type={item.type} more={item.more}  issue={issue}/> } keyExtractor={item => item.more.en} />
</View>
</View>
</Modal>

<Modal transparent={true} animationType='fade' visible={ismodal === 'c'} onRequestClose={()=> setismodal('a')}>
<View style={styles.centeredViewc}>
{
(isback) ? 

(<View style={styles.modalViewc}>

<View style={styles.cola}>
<Pressable onPress={()=> 
{
setdescription('')
setisback(false)
setissue(multilingual.selectIssue[lang])
setdocument([])
setismodal('a')
}}> 
<MaterialIcons name="cancel" size={32} color="brown" />
</Pressable>
</View>

<View style={styles.colb}>
<MaterialCommunityIcons name="email-check" size={95} color="#305237" />
</View>
<View style={[styles.colc,{backgroundColor:'#e8e8e8'}]}>
<Text style={{color:'green',fontSize:18}}>{multilingual.Delivered[lang]} @ {myClient.email} {multilingual.Feedback[lang]} </Text>
</View>
</View>) : 

(<View style={styles.modalViewc}><ActivityIndicator size='large' /></View>)

}


</View>
</Modal>
</KeyboardAvoidingView>
)
}

export default support











const styles = StyleSheet.create({

container: {
flex:1,
width:"100%",
minHeight:"auto",
maxHeight:"auto",
justifyContent:"center",
alignItems:"center",
backgroundColor:"white",
flexDirection:"column",
rowGap:50,
},

firstdiv: {
marginTop:15,
flex:1,
justifyContent:"center",
alignItems:"center",
width:"70%",
borderBottomWidth:2,
borderColor:'rgba(0, 0, 0, 0.51)'
},

secondiv: {
flex:5.3,
justifyContent:"center",
alignItems:"center",
width:"88%",
},

thirdiv: {
flex:2.7,
justifyContent:"center",
alignItems:"center",
width:"88%",
backgroundColor:"#f0f0f0"
},

fourthdiv: {
flex:1,
justifyContent:"center",
alignItems:"center",
width:"40%",
backgroundColor:"green",
marginBottom:30
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
margin: 20,
backgroundColor: 'grey',
borderRadius: 20,
padding: 30,
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

maindiv: {
justifyContent:"center",
alignItems:"center",
flexDirection:'row',
width:"100%",
height:80,
marginBottom:5
},

rowone:{
justifyContent:"center",
alignItems:"center",
flexDirection:'column',
width:"70%",
height:"100%"
},

rowtwo: {
justifyContent:"center",
alignItems:"center",
width:"30%",
height:"100%"
},

colone: {
justifyContent:'flex-end',
alignItems:"center",
width:"100%",
height:"50%"
},

coltwo: {
justifyContent:"center",
alignItems:"center",
width:"100%",
height:"50%",
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

customView: {
position: 'absolute',
left: 0,
right: 0,
height: 50,
backgroundColor: "#4d4b4bff",
alignItems: "flex-end",
justifyContent: "center",
},

firstcol: {
justifyContent:"flex-start",
alignItems:'center',
width:"100%",
height:"20%",
flexDirection:'row',
columnGap:5

},

secondcol: {
justifyContent:'flex-start',
alignItems:'center',
width:"100%",
height:"80%",
flexDirection:'row',
columnGap:20,
paddingLeft:28,
paddingBottom:20
},

invisiblebox: {
justifyContent:'flex-end',
alignItems:'flex-start',
width:85,
height:115,
},

picker: {
justifyContent:"center",
alignItems:"center",
width:85,
height:85,
borderRadius:5,
borderWidth:2,
borderStyle:"dotted",
},

select: {
justifyContent:'center',
alignItems:'center',
width:85,
height:85,
borderRadius:5,
borderWidth:2,
borderStyle:"solid",
borderColor:"grey",
},

modalViewc: {
flexDirection:'column',
width:'80%',
height:"30%",
backgroundColor: 'white',
borderRadius: 20,
padding: 15,
justifyContent:'center',
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

centeredViewc: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor:'rgba(0, 0, 0, 0.86)'
},

cola: {
width:'100%',
height:'12%',
justifyContent: 'center',
alignItems: 'flex-end',
},

colb: {
width:'100%',
height:'50%',
justifyContent: 'center',
alignItems: 'center',
},

colc: {
width:'100%',
height:'38%',
justifyContent: 'flex-start',
alignItems: 'center',
padding:10
}












})