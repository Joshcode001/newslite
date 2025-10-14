


import { View, Text , StyleSheet, Pressable, ScrollView, TouchableOpacity,ActivityIndicator, KeyboardAvoidingView,TextInput, FlatList, Keyboard} from 'react-native'
import React, {useContext, useState, useEffect, useCallback,useRef} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { useLocalSearchParams, Stack , router} from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import { ActiveColors } from '@/src/utils/color';
import {Image} from 'expo-image' ;
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { multilingual } from '@/src/utils/dataset';
import CommentBox from '@/src/components/CommentBox';







type lry = {
userid: string,
}



type res = {
title: string,
source_icon: string,
pubDate: string,
image_url: string,
description: string,
article_id: string,
comments: comm[],
likes: like
}


type comm = {
userid: string,
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




type like = {
great:lry[],
sad:lry[],
thumbup:lry[],
thumbdown:lry[]
}


type obq = {
item: comm
}


type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id";



















const page = () => {


const inputRef = useRef<TextInput>(null);
const { WIDTH,theme, api,bot,isflag, platform, myClient,locationP,socket,appLang,getlang} = useContext(AuthContext)
const [result, setresult] = useState<res>({title: '',source_icon: '',pubDate:'',
image_url: '',description: '',article_id: '',comments:[], likes:{great:[],thumbdown:[],sad:[],thumbup:[]}})
const [transtext, settranstext] = useState({title:'',desc: ''})
const { pagex } = useLocalSearchParams()
const [isactive, setisactive] = useState(false)
const [isloading, setisloading] = useState(false)
const[isfetching, setisfetching]= useState(false)
const [isSound, setisSound] = useState(false)
const [comment, setcomment] = useState('')
const [updatedComment, setupdatedComment] = useState<comm[]>([]);
const [lang, setlang] = useState<langt>('en')
const [parentId, setparentId] = useState('null')

const fulltext = `${result.title}.${result.description}`
const fulltxt = `${transtext.title}.${transtext.desc}`



const params = new URLSearchParams({
text:fulltext,
langcode: bot.codex,
name: bot.name
}) 


const params2 = new URLSearchParams({
text:fulltxt,
langcode: bot.lcodex,
name: bot.lnamei
}) 



const audioSource2 = `https://c9ac8f12012d.ngrok-free.app/data/tts?${params2.toString()}`
const audioSource = `https://c9ac8f12012d.ngrok-free.app/data/tts?${params.toString()}`

const player2 = useAudioPlayer(audioSource2)
const player = useAudioPlayer(audioSource)
const {playing, didJustFinish} = useAudioPlayerStatus(player)
const {playing:playing2, didJustFinish:didJustFinish2} = useAudioPlayerStatus(player2)





let page: string= ''

if (typeof pagex === 'string') {
page = pagex
}



const handleReply = (id:string) => {
setcomment(`@${id}   `)
if (inputRef.current) {
inputRef.current.focus();
}
}




const renderItem = useCallback(({item}:obq) => <CommentBox id={page} replies={item.replies} parentId={item.parentId} commentId={item.commentId} likes={item.likes} setparentId={setparentId} handleReply={handleReply} userid={item.userid} text={item.text} createdAt={item.createdAt} image={myClient.image} region={item.region}/>,[])


const getArticle = async (id:string) => {
setisfetching(true)
const resp = await api.post('/data/articles', { article_id: id })

const data = await resp.data

if (data.isOK) {
setresult(data.json)
setupdatedComment(data.json.comments)
setisfetching(false)
return result

} else if (!data.isOK){
return null
}

}







const Translate = async (text: string, langcode: string) => {

const resp = await api.post('/data/translate', {text: text, langcode: langcode})

const data = await resp.data.text


const ndata = data.split('.')

const [x, ...rest] = ndata

settranstext({title: x, desc: rest})

setisactive(true)
setisloading(false)
}





const Translswitch = () => {

if (isactive) {

setisactive(false)

return
} else if (!isactive)

setisloading(true)

Translate(fulltext,bot.codei)
return
}





const getAudio = async () => {
if (playing || isloading) {
return;

} else if (!playing || !isloading) {

setisloading(true)
player.play()
}

}




const getAudio2 = async () => {

if (playing2 || isloading) {
return;

} else if (!playing2 || !isloading) {

setisloading(true)
player2.play()
}

}




const controlPlay = () => {

if (!isactive) {

getAudio();

} else if (isactive) {

getAudio2();
}

}





const sendComment = async (region:string | null ,text:string,userid:string, article_id:string) => {

const resp = await api.post('/data/comments', {region,text, userid, article_id,parentId})
Keyboard.dismiss()
setparentId('null')
}




useEffect(() => {
getArticle(page)
},[])




useEffect(()=> {
socket.on('comments', (comObj:any) => {


if (comObj.post_id === page) {
setupdatedComment(comObj.data)}
})
},[socket])



useEffect(() => {
if (playing) {

setisloading(false)
setisSound(true)

} else if (didJustFinish) {

player.seekTo(0)
setisSound(false)
}

}, [playing])




useEffect(() => {
if (playing2) {

setisloading(false)
setisSound(true)

} else if (didJustFinish2) {

player2.seekTo(0)
setisSound(false)
}

}, [playing2])




useEffect(() => {

getlang(appLang,setlang)

},[appLang])





return (
<KeyboardAvoidingView keyboardVerticalOffset={100} behavior={ platform === 'ios' ? 'padding' : 'height'} style={[styles.container, {width: WIDTH, minHeight:'auto', maxHeight:'auto'}, {backgroundColor:theme === 'dark' ? ActiveColors.dark.base :ActiveColors.light.base}]}>

<Stack.Screen options={{
title:'',
headerRight:() => (
<View style={styles.box}>

<TouchableOpacity onPress={() => Translswitch()}>
<MaterialIcons name="translate" size={30} color={isactive ? 'yellow': 'azure'} />
</TouchableOpacity>

<TouchableOpacity onPress={() => controlPlay()} disabled={isflag && isactive}>
<AntDesign name="sound" size={30} color= {(isflag && isactive) ? ('grey'):(isSound ? 'yellow':"azure") }/>
</TouchableOpacity>
</View>),
headerLeft: () => <Pressable onPress={()=> router.back()}>
<View style={styles.backbox}><AntDesign name="left" size={20} color="azure" /></View>
</Pressable>
}}/>

<View style={styles.content}>
{
(isfetching) ? (<ActivityIndicator size={20} />) : (<ScrollView nestedScrollEnabled={true}>
{isloading && <View style={styles.load}><ActivityIndicator /></View>}
<View style={[styles.content]}>

<View style={[styles.tbox, {backgroundColor:theme === 'dark' ? ActiveColors.dark.accent :ActiveColors.light.tertiary}]}>
<Text style={[styles.title, {color:theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.mgreen }, ]}>{isactive ? transtext.title : result.title}</Text>
</View>

<Image source={result.image_url} style={[styles.image]} contentFit='contain' />

<View style={[styles.descbox,{backgroundColor:theme === 'dark' ? ActiveColors.dark.accent :ActiveColors.light.tertiary}]}>
<Text style={[styles.desc, {color:theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.mgreen },]}>{isactive ? transtext.desc :result.description}</Text>
</View>


<View style={[styles.linkcon]}>
<View style={[styles.linkbox,{backgroundColor:theme === 'dark' ? ActiveColors.dark.accent :ActiveColors.light.tertiary}, ]}>
<Image source={result.source_icon} style={styles.image2} contentFit="contain"/>
<Text style={[styles.datecmp,{color:theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.primary}]}>{result.pubDate}</Text>

</View>
</View>
</View>





<View  style={[styles.combox, {backgroundColor:theme === 'dark' ? ActiveColors.dark.accent :ActiveColors.light.tertiary}]}>
<View style={styles.heading}>
<Text style={[{fontSize:33},{color:theme === 'dark' ? ActiveColors.light.ablue: ActiveColors.dark.ablue }]}>{multilingual.Comments[lang]}</Text>
</View>


<View>
<FlatList data={updatedComment} renderItem={renderItem} scrollEnabled={false} keyExtractor={item => item._id} />
</View>
</View>




</ScrollView>)
}
</View>

<View style={styles.cnt}>

<View style={styles.usernt}>
<Image source={ myClient.image} style={{width:50, height:50, borderRadius:'50%'}}/>

</View>


<TextInput multiline={true} value={comment} placeholder={multilingual.thoughts[lang]} placeholderTextColor='azure' style={[styles.input]} onChangeText={text => setcomment(text)}/>



<View style={styles.butn}>
<Pressable onPress={()=> {
sendComment(locationP.isocode,comment,myClient.uname,result.article_id)
setcomment('')
}}>
<FontAwesome name="send-o" size={26} color="azure"/>
</Pressable>
</View>



</View>
</KeyboardAvoidingView>
)
}



export default page








const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
alignContent: "center",
},

backbox: {
width:100,
height:30,
justifyContent:'center',
alignItems:'flex-start',
},

content:{
flex:1,
justifyContent: "center",
alignContent: "center",
width:'100%',
height:'100%'
},

title: {
justifyContent:'center',
alignItems:'center',
textAlign:'center',
fontSize: 40,
fontWeight:'900',
padding:20,
width: '100%'
},


tbox:{
justifyContent:'center',
alignItems:'center',
width: '100%'
},

image: {
height: 300,
width:'100%'

},

image2: {
width: 60,
height: 60,
},

descbox: {
justifyContent:'center',
alignItems: 'center',
width: '100%'
},

desc: {
padding:40,
fontSize:20,
letterSpacing:1,
color:'black',
width: '100%'
},

linkbox: {
justifyContent:'space-evenly',
alignItems:'center',
flexDirection:'row',
width: '100%'
},

linkcon: {
justifyContent:'center',
alignItems:'center',
width: '100%',
flexDirection:'column',
rowGap:30
},

datecmp:{
fontSize:16
},

box:{
flexDirection:'row',
columnGap:18,
width: 100,
height:30,
justifyContent:'space-between',
alignItems:'center',
},

load:{
justifyContent:'center',
alignItems:'center',
flex:1,
backgroundColor: 'rgba(0, 0, 0, 0.94)',
width:'100%',
},


cnt:{

justifyContent:'center',
alignItems:'center',
width:'100%',
backgroundColor:'rgba(25, 88, 78, 0.39)',
height:50,
flexDirection:'row',
alignSelf:'baseline'
},

usernt: {
justifyContent:'center',
alignItems:'center',
width:'15%',
height:'100%',
},

input:{
justifyContent:'flex-end',
width:'70%',
height:'100%',
backgroundColor:'#35131395',
color:'white',
padding:10,
fontSize:17,

},


butn:{
justifyContent:'center',
alignItems:'center',
width:'15%',
height:'100%',
paddingRight:10

},


img:{
width:'60%',
height:'80%',
borderRadius:'50%',
backgroundColor:'white'
},

combox:{
justifyContent:'flex-start',
alignItems:'center',
width:'100%',
height:'100%',
flexDirection:'column',
paddingTop:60,
},


heading:{
paddingLeft:15,
paddingTop:55,
justifyContent:'flex-start',
alignSelf:'flex-start',
height:100,
marginBottom:10
}, 


prntbox:{
marginTop:4,
justifyContent: "flex-start",
alignContent: "center",
width:'100%',
minHeight:'auto',
maxHeight:'auto',
flexDirection:'row',
paddingLeft:7,
marginBottom:13

},

firstrow:{
width:'12%',
height:'100%',
justifyContent:'flex-start',
alignItems:'center',
paddingTop:7
},

sndrow:{
width:'87%',
height:'100%',
justifyContent:'flex-start',
alignSelf:'center',

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
width:'90%',
height:'auto',
justifyContent:'flex-start',


}



})