

import {Image} from 'expo-image' ;
import CountryFlag from "react-native-country-flag";
import { formatDistanceToNowStrict } from 'date-fns';
import { View, Text, StyleSheet,TouchableOpacity,ActivityIndicator} from 'react-native'
import React,{useState, useContext,useEffect} from 'react'
import {Colors } from '../utils/color';
import AntDesign from '@expo/vector-icons/AntDesign';
import { AuthContext } from '../utils/authContext';
import { lingual } from "@/src/utils/dataset";
import { typo,length } from '../utils/typo';




type comiv = {
id:string
userId: string,
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
userId: string,
createdAt: string,
image: string,
}


type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";




const Replybox = React.memo(({text,userId,region,createdAt,image,handleReply,parentId,setparentId,likes,commentId,id,setIndex,setisReply,index}:comiv) => {


const [transtext,settranstext] = useState('')
const [isactive, setisactive] = useState(false)
const [isStarting, setisStarting] = useState(false)
const [updatelike, setupdatelike] = useState(false)
const {theme,bot,appLang,getlang,socket,myClient,roomKey} = useContext(AuthContext)
const [lang, setlang] = useState<langt>('en')

const code = region.toLowerCase()
const result = formatDistanceToNowStrict(createdAt)


const newText = text.split(" ")
const [usern,...rest]= newText
const newrest = rest.join(" ")




const userLikes = async (userId:string,postId:string,commentId:string) => {

if (!updatelike) {
setupdatelike(true)

}else if (updatelike) {
setupdatelike(false)
}

await socket.emit('userLikes', {userId,postId,commentId,image:myClient.image})

}





const translate = async (text: string, langcode: string,postId:string) => {

setisStarting(true)

await socket.emit("translate",{text,langcode,postId,rkey:roomKey})
}






useEffect(()=> {

const iliked = likes.filter(user => user.userId.toString() === userId)

if (iliked.length !== 0) {
setupdatelike(true)

}else if (iliked.length === 0) {
setupdatelike(false)
}

},[])



useEffect(() => {

socket.on("translated",(data:any) => {

if (data.postId === commentId) {

settranstext(data.text)
setisactive(true)
setisStarting(false)

}

})


},[socket])



useEffect(() => {

getlang(appLang,setlang)

},[appLang])



return (
<View style={[styles.prntbox,{marginVertical:typo.h6,backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderColor:Colors.dark.primary,borderRadius:typo.h8}]}>
<View style={[styles.firstrow,{paddingTop:typo.h7}]}>
{
(image === 'null') ? (theme === 'dark' ? (<Image source={require('../../assets/images/usericondark.png')} style={styles.image}/>) : (<Image source={require('../../assets/images/usericonlight.png')} style={styles.image}/>)) : (<Image source={image} style={styles.image}/>)
}
</View>
<View style={[styles.sndrow,{paddingRight:typo.h6}]}>
<View style={[styles.firstcol,{columnGap:typo.h7,height:length.l1 / 4}]}>
<Text allowFontScaling={false} style={[styles.textM900,{fontSize:typo.h5},{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base }]} >{userId}</Text>
<CountryFlag isoCode={code} size={typo.h6} />
<Text allowFontScaling={false} style={[styles.textT800,{fontSize:typo.h6},{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base }]} >{result}</Text>
</View>
<View style={[styles.sndcol,{paddingLeft:typo.h8}]}>
<Text allowFontScaling={false} style={[styles.textR400,{fontSize:typo.h4},{ color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText }]}>
<Text allowFontScaling={false} style={[styles.textT800,{fontSize:typo.h5,color:theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn}]}>{usern} </Text>
{isactive ? transtext : newrest}
</Text>
</View>
<View style={[styles.thirdcol,{height:length.l1 / 4}]}>
<View style={styles.rola}>
<TouchableOpacity onPress={() => {
setisReply(true)
setIndex(index)
setparentId(parentId)
handleReply(userId)
}}>
<Text allowFontScaling={false} style={[styles.textT800,{fontSize:typo.h5,color:theme === 'dark' ? Colors.dark.icon : Colors.light.icon}]}>{lingual.Reply[lang]}</Text></TouchableOpacity>
</View>
{
isStarting ? (<ActivityIndicator size={typo.h4} color='white'/>) : (<View style={styles.rolb}>
{
isactive ? (<TouchableOpacity onPress={() => setisactive(false)}><Text allowFontScaling={false} style={[styles.textT800,{fontSize:typo.h5,color:theme === 'dark' ? Colors.dark.icon : Colors.light.icon}]}>{lingual.Original[lang]}</Text></TouchableOpacity>) : 
(<TouchableOpacity onPress={() => translate(newrest,bot.codei,commentId)}><Text allowFontScaling={false} style={[styles.textT800,{fontSize:typo.h5,color:theme === 'dark' ? Colors.dark.icon : Colors.light.icon}]}>{lingual.Translate[lang]}</Text></TouchableOpacity>)
}
</View>)
}
</View>
</View>
<View style={styles.thirdrow}>
<View style={[styles.cola,{height:(length.l1 / 4) + 1}]}></View>
<View style={[styles.cola,{height:(length.l1 / 4) - 5}]}>
<TouchableOpacity onPress={() => userLikes(myClient.uname,id,commentId)}>
{
updatelike ? (<AntDesign name="heart" size={typo.h4} color="red" />) : (<AntDesign name="hearto" size={typo.h4} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />)
}
</TouchableOpacity>
</View>
{
(likes.length !== 0) && (<View style={[styles.colb,{height:(length.l1 / 4) - 5}]}>
<Text allowFontScaling={false} style={[styles.textT800,{fontSize:typo.h4},{color:theme === 'dark' ? Colors.dark.icon : Colors.light.icon }]}>{likes.length}</Text>
</View>)
}
</View>
</View>
)
})

export default Replybox













const styles = StyleSheet.create({

prntbox:{
justifyContent: "flex-start",
alignContent: "center",
width:'99%',
minHeight:'auto',
maxHeight:'auto',
flexDirection:'row',
borderWidth:1,
},

firstrow:{
width:'10%',
height:'100%',
justifyContent:'flex-start',
alignItems:'center',
},

sndrow:{
width:'78%',
height:'100%',
justifyContent:'flex-start',
alignSelf:'center',
},

firstcol:{
width:'100%',
justifyContent:'flex-start',
alignItems:'center',
flexDirection:'row',
},

sndcol:{
width:'100%',
minHeight:'auto',
maxHeight:'auto',
justifyContent:'flex-start',
alignItems:'flex-start',
},


cola:{
width:'100%',
justifyContent:'center',
alignItems:'center',
},

colb:{
width:'100%',
justifyContent:'center',
alignItems:'center',
},

thirdcol:{
width:'100%',
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

image: {
width:'80%',
aspectRatio:1,
borderRadius:9999,
overflow:'hidden'
},



textM900: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:900,
},


textR400: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
},


textT800: {
fontFamily:'CabinetGrotesk-Thin',
fontWeight:800,
},

textB500: {
fontFamily:'CabinetGrotesk-Bold',
fontWeight:500,
},



})