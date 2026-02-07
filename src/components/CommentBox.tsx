


import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {Image} from 'expo-image' ;
import CountryFlag from "react-native-country-flag";
import { formatDistanceToNowStrict } from 'date-fns';
import { View, Text, StyleSheet,TouchableOpacity,FlatList,LayoutChangeEvent,ActivityIndicator} from 'react-native'
import React,{useCallback,useContext,useState,useEffect} from 'react'
import {Colors } from '../utils/color';
import AntDesign from '@expo/vector-icons/AntDesign';
import Replybox from './Replybox';
import { AuthContext } from '../utils/authContext';
import { lingual } from "@/src/utils/dataset";
import { typo,length } from '../utils/typo';



type height = {
id:number,
cH:number,
time:number
}


type lry = {
userId: string,
createdAt: string,
image: string,
}



type comiv = {
id:string
userId: string,
image:string
createdAt:Date,
text:string,
region:string,
handleReply: (id:string) => void,
commentId:string,
parentId:string,
likes:lry[],
setparentId:(value: React.SetStateAction<string>) => void,
replies:comm[],
index:number,
setIndex:(value: React.SetStateAction<number>) => void,
setcomHeights:(value: React.SetStateAction<height[]>) => void,
setisReply: (value: React.SetStateAction<boolean>) => void


}


type comm = {
userId: string,
image:string,
createdAt:Date,
text:string,
region:string,
_id:string,
commentId:string,
parentId:string,
likes:lry[],
replies:comm[]
}


type obq = {
item: comm
}

type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";



const CommentBox = React.memo(({text,userId,region,createdAt,image,handleReply,likes,commentId,setparentId,replies,id,index, setIndex,setcomHeights,setisReply}:comiv) => {


const [lang, setlang] = useState<langt>('en')
const {theme,bot,appLang,getlang,socket,myClient,roomKey} = useContext(AuthContext)
const [UpdatedReply, setUpdatedReply] = useState<comm[]>([])
const [isvisible, setisvisible] = useState(false)
const [isfinish, setisfinish] = useState(false)
const [updatelike, setupdatelike] = useState(false)
const [ismore, setismore] = useState(false)
const [comHeight, setcomHeight] = useState<number>(0)
const [isexact, setisexact] = useState(false)
const [transtext,settranstext] = useState('')
const [isactive, setisactive] = useState(false)
const [isStarting, setisStarting] = useState(false)
const [isplural, setisplural] = useState(false)
const [page, setpage] = useState(1)
const [replyperpage, setreplyperpage] = useState(1)
const code = region.toLowerCase()
const result = formatDistanceToNowStrict(createdAt)


const renderItem = useCallback(({item}:obq) => <Replybox setIndex={setIndex} index={index} setisReply={setisReply} id={id} commentId={item.commentId} likes={item.likes} handleReply={handleReply} userId={item.userId} text={item.text} createdAt={item.createdAt} image={item.image} region={item.region} setparentId={setparentId} parentId={item.parentId}/>,[])



const handleContentLayout = (e:LayoutChangeEvent) => {

const number = Math.ceil(e.nativeEvent.layout.height)
setcomHeight(number)

return comHeight
}



const pushService = (id:number,comHeight:number, setcomHeights:React.Dispatch<React.SetStateAction<height[]>>) => {


const time = new Date().getTime()
const newObj = {id:id,cH:comHeight,time:time}


setcomHeights(prev => [...prev,newObj])

}






const controlPanel = () => {

setisexact(false)

if (replies.length > 1 && replies.length < 36) {
setreplyperpage(5)
setpage(page + 1)


} else if (replies.length > 35 && replies.length < 56) {
setreplyperpage(10)
setpage(page + 1)

} else if (replies.length > 55 && replies.length < 76) {
setreplyperpage(15)
setpage(page + 1)

} else if (replies.length > 75 && replies.length < 101) {
setreplyperpage(20)
setpage(page + 1)

} else if (replies.length > 100) {
setreplyperpage(100)
setpage(page + 1)

}




}




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



if (replies !== undefined) {

if (replies.length === 0) {
setisvisible(false)
setismore(false)

} else if (replies.length === 1) {
setisvisible(true)
setismore(false)
setUpdatedReply(replies)

} else if (replies.length > 1 && !isexact) {
setisvisible(true)
setismore(true)

const newReply = replies.slice(0,replyperpage * page)
setUpdatedReply(newReply)


if (newReply.length === replies.length){
setisfinish(true)
} else if (newReply.length < replies.length){
setisfinish(false)}


if (replies.length === 2) {
setisplural(false)
} else if (replies.length > 2) {
setisplural(true)
}


} else if (replies.length > 1 && isexact) {
setisvisible(false)
setUpdatedReply([])
setismore(true)
setpage(1)
setreplyperpage(1)
}



}

},[replies,page])




useEffect(() => {

if (comHeight !== 0) {
pushService(index,comHeight,setcomHeights)
}
},[comHeight])



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
<View onLayout={(e) => handleContentLayout(e)} style={[styles.container,{marginBottom:typo.h7,backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderColor:Colors.dark.primary,borderRadius:typo.h8}]}>

<View style={styles.columa}>
<View style={[styles.firstrow,{paddingTop:typo.h7}]}>
{
(image === 'null') ? (theme === 'dark' ? (<Image source={require('../../assets/images/usericondark.png')} style={styles.image}/>) : (<Image source={require('../../assets/images/usericonlight.png')} style={styles.image}/>)) : (<Image source={image} style={styles.image}/>)
}
</View>

<View style={[styles.sndrow,{paddingRight:typo.h6}]}>
<View style={[styles.firstcol,{columnGap:typo.h7,height:length.l1 / 4}]}>
<Text allowFontScaling={false} style={[styles.textM900,{fontSize:typo.h5},{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base }]} >{userId}</Text>
<CountryFlag isoCode={code} size={typo.h6} />
<Text allowFontScaling={false} style={[styles.textT700,{fontSize:typo.h6},{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base }]} >{result}</Text>
</View>
<View style={[styles.sndcol,{paddingLeft:typo.h8}]}>
<Text allowFontScaling={false} style={[styles.textR400,{fontSize:typo.h4},{ color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText }]}>
{isactive ? transtext : text}</Text>
</View>
<View style={[styles.thirdcol,{columnGap:typo.h3,height:length.l1 / 4}]}>
<View style={styles.rola}>
<TouchableOpacity onPress={() => {
setisReply(true)
setIndex(index)
setparentId(commentId)
handleReply(userId)
}}>
<Text allowFontScaling={false} style={[styles.textT700,{fontSize:typo.h5,color:theme === 'dark' ? Colors.dark.icon : Colors.light.icon}]}>{lingual.Reply[lang]}</Text>
</TouchableOpacity>
</View>
{
isStarting ? (<View style={styles.rolb}><ActivityIndicator size={typo.h5} color={theme === 'dark' ? Colors.dark.icon :
Colors.light.icon}/></View>) : (<View style={styles.rolb}>
{
isactive ? (<TouchableOpacity onPress={() => setisactive(false)}><Text allowFontScaling={false} style={[styles.textT700,{fontSize:typo.h5,color:theme === 'dark' ? Colors.dark.icon : Colors.light.icon}]}>{lingual.Original[lang]}</Text></TouchableOpacity>) : 
(<TouchableOpacity onPress={() => translate(text,bot.codei,commentId)}><Text allowFontScaling={false} style={[styles.textT700,{fontSize:typo.h5,color:theme === 'dark' ? Colors.dark.icon : Colors.light.icon}]}>{lingual.Translate[lang]}</Text></TouchableOpacity>)
}
</View>)
}
</View>
</View>

<View style={[styles.thirdrow,{paddingRight:typo.h5}]}>
<View style={[styles.cola,{height:(length.l1 / 4) - 3}]}></View>
<View style={[styles.cola,{height:(length.l1 / 4) - 5}]}>
<TouchableOpacity onPress={() => userLikes(myClient.uname,id,commentId)}>
{
updatelike ? (<AntDesign name="heart" size={typo.h4} color="red" />) : (<AntDesign name="hearto" size={typo.h4} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />)
}
</TouchableOpacity>
</View>
{
(likes.length !== 0) && (<View style={[styles.colb,{height:(length.l1 / 4) - 5}]}>
<Text allowFontScaling={false} style={[styles.textT700,{fontSize:typo.h4},{color:theme === 'dark' ? Colors.dark.icon : Colors.light.icon }]}>{likes.length}</Text>
</View>)
}
</View>



</View>


<View style={styles.columb}>
<View style={[styles.firstrow,{paddingTop:typo.h7}]}></View>
<View style={styles.sndrowb}>

<View style={[styles.controlcol,{height:(UpdatedReply.length > 9 && isvisible )? (length.l1 / 4) + 5 : 0 }]}>
<TouchableOpacity onPress={() => {
setpage(1)
setisfinish(false)
setisexact(true)
setisvisible(false)
}}>
<View style={[styles.button,{columnGap:typo.h9}]}>
<MaterialIcons name="horizontal-rule" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
<Text allowFontScaling={false} style={[styles.textB800,{fontSize:typo.h4},{color:theme === 'dark' ? Colors.dark.icon : Colors.light.icon }]}>Hide replies</Text>
</View>
</TouchableOpacity>
</View>

{
isvisible && (<View style={[styles.fourthCol]}>
<FlatList contentContainerStyle={styles.ccsOne} data={UpdatedReply} renderItem={renderItem} scrollEnabled={false} keyExtractor={item => item._id} />
</View>)
}

<View style={[styles.controlcol,{height: (ismore && replies.length > 1) ? (length.l1 / 4) + 5 : 0,marginTop:typo.h8}]}>

{
isfinish ?  (<TouchableOpacity onPress={() => {
setpage(1)
setisfinish(false)
setisvisible(false)
setisexact(true)
}}>
<View style={[styles.button,{columnGap:typo.h9}]}>
<MaterialIcons name="horizontal-rule" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
<Text allowFontScaling={false} style={[styles.textB800,{fontSize:typo.h4},{color:theme === 'dark' ? Colors.dark.icon : Colors.light.icon }]}>Hide replies</Text>
</View>
</TouchableOpacity>) : (<TouchableOpacity onPress={() => controlPanel()}>
<View style={[styles.button,{columnGap:typo.h9}]}>
<MaterialIcons name="horizontal-rule" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon}/>
{
isplural ? (<Text allowFontScaling={false} style={[styles.textB800,{fontSize:typo.h4},{color:theme === 'dark' ? Colors.dark.icon : Colors.light.icon }]}>{isexact ? `View ${replies.length} replies`: `View ${replies.length - UpdatedReply.length} more replies`}</Text>) :
(<Text allowFontScaling={false} style={[styles.textB800,{fontSize:typo.h4},{color:theme === 'dark' ? Colors.dark.icon : Colors.light.icon }]}>{isexact ? `View ${replies.length} replies`:`View 1 more reply`}</Text>)
}
</View>
</TouchableOpacity>)
}
</View>



</View>
</View>




</View>

)
})

export default CommentBox













const styles = StyleSheet.create({

container: {
flexDirection:'column',
width:'97%',
minHeight:'auto',
maxHeight:'auto',
justifyContent: 'center',
alignContent: "center",
borderWidth:1,

},

columa: {
justifyContent:'center',
alignItems:'center',
width:'100%',
minHeight:'auto',
maxHeight:'auto',
flexDirection:'row',
},


columb: {
justifyContent:'center',
alignItems:'center',
width:'100%',
flexDirection:'row',
minHeight:'auto',
maxHeight:'auto',
},

firstrow:{
width:'12%',
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

sndrowb:{
width:'88%',
height:'100%',
justifyContent:'flex-start',
alignSelf:'center',
},

thirdrow:{
width:'10%',
height:'100%',
justifyContent:'flex-start',
alignItems:'center',
flexDirection:'column',
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
width:'25%',
height:'100%',
justifyContent:'flex-end',
alignItems:'flex-start',
},

rolb: {
width:'60%',
height:'100%',
justifyContent:'flex-end',
alignItems:'flex-start',
},

fourthCol: {
width:'100%',
justifyContent:'center',
alignItems:'center',
},

controlcol: {
width:'100%',
justifyContent:'flex-end',
alignItems:'flex-start',
},

button:{
height:"80%",
width:'75%',
justifyContent:'flex-start',
alignItems:'flex-end',
flexDirection:'row',
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


textT700: {
fontFamily:'CabinetGrotesk-Thin',
fontWeight:700,
},

textB800: {
fontFamily:'CabinetGrotesk-Bold',
fontWeight:800,
},

ccsOne:{
width:'100%',
height:'auto',
justifyContent:'flex-start',
alignItems:'center'
},

})