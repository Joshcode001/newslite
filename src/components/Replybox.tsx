

import {Image} from 'expo-image' ;
import CountryFlag from "react-native-country-flag";
import { formatDistanceToNowStrict } from 'date-fns';
import { View, Text, StyleSheet,TouchableOpacity,ActivityIndicator} from 'react-native'
import React,{useState, useContext,useEffect} from 'react'
import { ActiveColors } from '../utils/color';
import AntDesign from '@expo/vector-icons/AntDesign';
import { AuthContext } from '../utils/authContext';
import { multilingual } from "@/src/utils/dataset";



type comiv = {
id:string
userid: string,
image:string,
createdAt:Date,
text:string,
region:string,
handleReply: (id:string) => void,
parentId:string,
setparentId:(value: React.SetStateAction<string>) => void,
likes:lry[],
commentId:string,
index:number,
setIndex:(value: React.SetStateAction<number>) => void,
setisReply: (value: React.SetStateAction<boolean>) => void
}



type lry = {
userid: string,
}


type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id";




const Replybox = React.memo(({text,userid,region,createdAt,image,handleReply,parentId,setparentId,likes,commentId,id,setIndex,setisReply,index}:comiv) => {


const [transtext,settranstext] = useState('')
const [isactive, setisactive] = useState(false)
const [isStarting, setisStarting] = useState(false)
const [updatelike, setupdatelike] = useState(false)
const {api,theme,bot,appLang,getlang} = useContext(AuthContext)
const [lang, setlang] = useState<langt>('en')

const code = region.toLowerCase()
const result = formatDistanceToNowStrict(createdAt)


const newText = text.split(" ")
const [usern,...rest]= newText
const newrest = rest.join(" ")




const userLikes = async (userid:string,postid:string,commentId:string) => {

if (!updatelike) {
setupdatelike(true)

}else if (updatelike) {
setupdatelike(false)
}

const resp = await api.post('/data/userlikes', {userid,postid,commentId})

}





const translate = async (text: string, langcode: string) => {

setisStarting(true)

try {

const resp = await api.post('/data/translate', {text: text, langcode: langcode})
const data = await resp.data.text

settranstext(data)
setisactive(true)
setisStarting(false)

} catch (err) {
console.log(err)
}
}






useEffect(()=> {

const iliked = likes.filter(user => user.userid.toString() === userid)

if (iliked.length !== 0) {
setupdatelike(true)

}else if (iliked.length === 0) {
setupdatelike(false)
}

},[])


useEffect(() => {

getlang(appLang,setlang)

},[appLang])



return (
<View style={styles.prntbox}>
<View style={styles.firstrow}>
<Image source={image} style={{width:22, height:22, borderRadius:'50%'}}/>
</View>
<View style={styles.sndrow}>
<View style={styles.firstcol}>
<Text style={[{ fontSize:13},{color:theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.mgreen }]} >{userid}</Text>
<CountryFlag isoCode={code} size={8} />
<Text style={[{ fontSize:10, fontWeight:'thin'},{color:theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.mgreen }]} >{result}</Text>
</View>
<View style={styles.sndcol}>
<Text style={[{ fontSize:15 },{ color:theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.mgreen }]}>
<Text style={{color:'#1adba8'}}>{usern} </Text>
{isactive ? transtext : newrest}
</Text>
</View>
<View style={styles.thirdcol}>
<View style={styles.rola}>
<TouchableOpacity onPress={() => {
setisReply(true)
setIndex(index)
setparentId(parentId)
handleReply(userid)
}}>
<Text style={{color:'#a6a6a6'}}>{multilingual.Reply[lang]}</Text></TouchableOpacity>
</View>
{
isStarting ? (<ActivityIndicator size={14} color='white'/>) : (<View style={styles.rolb}>
{
isactive ? (<TouchableOpacity onPress={() => setisactive(false)}><Text style={{color:'#a6a6a6'}}>{multilingual.Original[lang]}</Text></TouchableOpacity>) : 
(<TouchableOpacity onPress={() => translate(newrest,bot.codei)}><Text style={{color:'#a6a6a6'}}>{multilingual.Translate[lang]}</Text></TouchableOpacity>)
}
</View>)
}
</View>
</View>
<View style={styles.thirdrow}>
<View style={[styles.cola,{height:26}]}></View>
<View style={styles.cola}>
<TouchableOpacity onPress={() => userLikes(userid,id,commentId)}>
{
updatelike ? (<AntDesign name="heart" size={16} color="red" />) : (<AntDesign name="hearto" size={16} color="azure" />)
}
</TouchableOpacity>
</View>
{
(likes.length !== 0) && (<View style={styles.colb}>
<Text style={{color:'azure',fontSize:16,fontWeight:'light'}}>{likes.length}</Text>
</View>)
}
</View>
</View>
)
})

export default Replybox













const styles = StyleSheet.create({

prntbox:{
marginTop:10,
justifyContent: "flex-start",
alignContent: "center",
width:'100%',
minHeight:'auto',
maxHeight:'auto',
flexDirection:'row',
marginBottom:10,

},

firstrow:{
width:'10%',
height:'100%',
justifyContent:'flex-start',
alignItems:'center',
paddingTop:7
},

sndrow:{
width:'78%',
height:'100%',
justifyContent:'flex-start',
alignSelf:'center',
paddingRight:13
},

firstcol:{
width:'100%',
height:25,
justifyContent:'flex-start',
alignItems:'center',
flexDirection:'row',
columnGap:7,
},

sndcol:{
width:'100%',
minHeight:'auto',
maxHeight:'auto',
justifyContent:'flex-start',
alignItems:'flex-start',
paddingLeft:5
},

roli:{
width:'85%',
height:'100%',
justifyContent:'flex-start',
alignItems:'flex-start',
paddingRight:10
},

rolii:{
flexDirection:'column',
width:'15%',
height:'100%',
justifyContent:'flex-start',
alignItems:'center',

},

cola:{
width:'100%',
height:20,
justifyContent:'center',
alignItems:'center',

},

colb:{
width:'100%',
height:20,
justifyContent:'center',
alignItems:'center',
},

thirdcol:{
width:'100%',
height:25,
justifyContent:'flex-start',
alignItems:'center',
flexDirection:'row',
},

rola: {
width:'20%',
height:'100%',
justifyContent:'center',
alignItems:'flex-start',
},

rolb: {
width:'80%',
height:'100%',
justifyContent:'center',
alignItems:'flex-start',
},

thirdrow:{
width:'12%',
height:'100%',
justifyContent:'flex-start',
alignItems:'center',
flexDirection:'column',
},


})