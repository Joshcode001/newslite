import { View, Text , StyleSheet, Pressable, ScrollView, TouchableOpacity,ActivityIndicator} from 'react-native'
import React, {useContext, useState, useEffect} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { useLocalSearchParams, Stack , router} from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import { ActiveColors } from '@/src/utils/color';
import {Image} from 'expo-image' ;
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';






type lry = {
userid: string,
}



type comm = {
userid:string,
image:string,
createdAt:Date,
text:string,
region:string
}

type like = {
great:lry[],
sad:lry[],
thumbup:lry[],
thumbdown:lry[]
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











const page = () => {


const [transtext, settranstext] = useState({title:'',desc: ''})
const [isactive, setisactive] = useState(false)
const [isloading, setisloading] = useState(false)
const [isSound, setisSound] = useState(false)
const { pagex , id} = useLocalSearchParams()

const { WIDTH,HEIGHT, theme, isflag, bot, api} = useContext(AuthContext)
const [result, setresult] = useState<res>({
title: '',
source_icon: '',
pubDate:'',
image_url: '',
description: '',
article_id: '',
comments:[],
likes:{great:[],thumbdown:[],sad:[],thumbup:[]}
})





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


const audioSource2 = `https://fb6e51a506d3.ngrok-free.app/data/tts?${params2.toString()}`
const audioSource = `https://fb6e51a506d3.ngrok-free.app/data/tts?${params.toString()}`

const player2 = useAudioPlayer(audioSource2)
const player = useAudioPlayer(audioSource)
const {playing, didJustFinish} = useAudioPlayerStatus(player)
const {playing:playing2, didJustFinish:didJustFinish2} = useAudioPlayerStatus(player2)









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




















let page: string= ''
let _id: string = ''

if (typeof pagex === 'string') {
page = pagex
}
if (typeof id === 'string') {
_id = id
}















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















return (
<View style={[styles.container, {width: WIDTH}, {backgroundColor:theme === 'dark' ? ActiveColors.dark.base :ActiveColors.light.base}]}>
<Stack.Screen options={{
title:'',
headerRight:() => <View style={styles.box}>

<TouchableOpacity onPress={() => Translswitch()}>
<MaterialIcons name="translate" size={30} color={isactive ? 'yellow': 'azure'} />
</TouchableOpacity>

<TouchableOpacity onPress={() => controlPlay()} disabled={isflag && isactive}>
<AntDesign name="sound" size={30} color= {(isflag && isactive) ? ('grey'):(isSound ? 'yellow':"azure") }/>
</TouchableOpacity>
</View>,
headerLeft: () => <Pressable onPress={()=> router.back()}>
<View style={styles.backbox}><AntDesign name="left" size={20} color="black" /></View>
</Pressable>
}}/>

<ScrollView>
<View style={[styles.content, {width: WIDTH, maxHeight: HEIGHT * 2}]}>

<View style={[styles.tbox, {backgroundColor:theme === 'dark' ? ActiveColors.dark.accent :ActiveColors.light.tertiary}]}>
<Text style={[styles.title, {color:theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.mgreen }, ]}>{result.title}</Text>
</View>

<Image source={result.image_url} style={[styles.image]} />

<View style={[styles.descbox,{backgroundColor:theme === 'dark' ? ActiveColors.dark.accent :ActiveColors.light.tertiary}]}>
<Text style={[styles.desc, {color:theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.mgreen },]}>{result.description}</Text>
</View>

<View style={[styles.linkcon]}>
<View style={[styles.linkbox,{backgroundColor:theme === 'dark' ? ActiveColors.dark.accent :ActiveColors.light.tertiary}, ]}>
<Image source={result.source_icon} style={styles.image2} contentFit="contain"/>
<Text style={[styles.datecmp,{color:theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.primary}]}>{result.pubDate}</Text>

</View>
</View>

</View>
</ScrollView>

</View>
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

flex: 1,
justifyContent: "center",
alignContent: "center",
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
height: 500
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

}




})