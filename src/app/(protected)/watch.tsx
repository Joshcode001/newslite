import { View, Text, StyleSheet,TouchableOpacity, ActivityIndicator, FlatList,Alert} from 'react-native'
import React, { useEffect, useState, useCallback, useContext} from 'react'
import YoutubePlayer from "react-native-youtube-iframe";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { AuthContext } from '@/src/utils/authContext';
import {lingual } from '@/src/utils/dataset';
import { Colors } from '@/src/utils/color';








type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";



type tv = {
id: string,
}

type seltor ={
item: bnit
}


type data = {
etag: string,
id: string,
kind: string,
snippet:{
channelId:string,
channelTitle:string,
description: string,
playlistId:string,
position: number,
publishedAt:string,
resourceId:{
kind:string,
videoId:string,
},
thumbnails:{
default:[Object],
high:[Object],
maxres:[Object],
medium:[Object],
standard:[Object]
},
title:string,
videoOwnerChannelId:string,
videoOwnerChannelTitle:string
}
}



type init = [
{
videoId:string,
title: string
}
]


type bnit = {
videoId:string,
title: string
}







const Head = () => (
<View style={styles.head}>
<Text style={styles.text}>JoshTV<MaterialCommunityIcons name="television-classic" size={24} color="#FF7D29" /> {'   '} 
<FontAwesome5 name="sync-alt" size={16} color="#FFAAAA" />{'    '}
<MaterialCommunityIcons name="youtube-tv" size={25} color="#B22222" />  
YouTube
</Text>
</View>
)








const watch = () => {

const [lang, setlang] = useState<langt>('en')
const {HEIGHT,WIDTH,api,appLang,getlang,theme} = useContext(AuthContext)
const [playing, setPlaying] = useState(false);
const [isloading, setisloading] = useState(false)
const [isBead, setisBead] = useState('a')
const [isReadi, setisReadi] = useState('a')
const [vidId, setvidId] = useState('uPz9AbfufTQ')
let dataa:data[] = []
let reducedata:bnit[] = []
let newdata:bnit[]= [{videoId:'',title: ''}]
const [datta, setdatta]= useState([{videoId:'',title: ''}])
const plyid ={
a:'one',
b:'two'
}



const Navbar = () => (
<View style={styles.navbar}>
<TouchableOpacity style={(isReadi === 'b') ? styles.buttonb : styles.button}
onPress={() => {
setisReadi('b')
getNews(plyid.a)}}>
<Text style={{marginLeft:140,fontSize:15,color:(isReadi === 'b') ? 'azure': 'black',paddingHorizontal:10}}>{lingual.livenews[lang]}</Text>
</TouchableOpacity>

<TouchableOpacity style={(isReadi === 'c') ? styles.buttonb : styles.button}
onPress={() => {
setisReadi('c')
getNews(plyid.b)}}>
<Text style={{marginRight:170,fontSize:15, color:(isReadi === 'c') ? 'azure': 'black', paddingHorizontal:10}}>{lingual.sportsEve[lang]}</Text>
</TouchableOpacity>
</View>
)






const getid = async () => {
if (dataa.length !== 0) {
const initial:init = [{videoId:'',title: ''}]
const newArray = (acc:init, value:data) => {
acc.push({
videoId: value.snippet.resourceId.videoId,
title: value.snippet.title
})
return acc
} 
reducedata =  dataa.reduce(newArray,initial)
newdata =  reducedata.slice(1)
setdatta(newdata)
}
}



const Selector = ({item}:seltor) => (
<View style={styles.seltor}>
<TouchableOpacity onPress={()=>{
setisBead(item.videoId)
setvidId(item.videoId)
Play()
} }
style={[styles.selt,{shadowColor: (isBead === item.videoId) ? '#0118D8': '#000'}]}>
<Text style={styles.seltxt} >{item.title  }</Text>
</TouchableOpacity>
</View>
)


const onStateChange = useCallback((state:any) => {
if (state === "ended") {
setPlaying(false);
Alert.alert("video has finished playing!");
}
}, []);




const Play = useCallback(() => {
setPlaying(true);
}, []);




const Jtv = useCallback(({id}:tv) => {
return (
<View style={styles.vid}>
<YoutubePlayer
height={300}
videoId={id}
play={playing}
onChangeState={onStateChange}

/>
</View>
)
},[vidId]) 









const getNews = async (id:string) => {
setisloading(true)

try {
const resp = await api.post('/data/youtube', {prop:id})
const data = resp.data.data
dataa =  data.items
await getid()


setisloading(false)



} catch(err){
console.log(err)
}


}






useEffect(() => {

setisReadi('b')
getNews(plyid.a)
}, [])






useEffect(() => {

getlang(appLang,setlang)

},[appLang])



return (
<View style={[styles.container, {width: WIDTH, height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>
<View style={styles.header}>
<Head />
</View>
<View style={[styles.nav, {width: WIDTH}]}>
<Navbar />
</View>
<View style={[styles.content,{width: WIDTH}]}>
<Jtv id={vidId} />
</View>
<View style={[styles.contnt, {width: WIDTH}]}>
{
isloading ? <ActivityIndicator /> : 
<FlatList showsVerticalScrollIndicator={false}  data={datta} renderItem={({item}) => <Selector item={item} />}/>

}


</View>
<View style={styles.desc}>
</View>
</View>
)

}

export default watch







const styles = StyleSheet.create({
container: {
flex:1,
justifyContent:'center',
alignItems: 'center',
},

vid: {
width: '100%',
},

header: {
flex:1,
backgroundColor:'#143D60',
justifyContent:'flex-end',
alignItems:'center',
width:'100%'
},

head: {
justifyContent:'center',
alignItems:'center',
width: '50%',
backgroundColor: '#18230F',
paddingVertical:6

},

content: {
flex:4.0,
justifyContent:'center',
alignItems:'center',
backgroundColor:'#18230F',
width:'100%',
height:'100%',
flexDirection:'column'
}, 

text: {
color:'azure',
fontSize:17
}, 

navbar: {
justifyContent:'center',
alignItems:'center',
flexDirection: 'row',
width:'100%',
height: '100%',
columnGap:2
}, 

button: {
justifyContent:'center',
alignItems:'center',
width:'100%',
backgroundColor:'#F2F2F2',
paddingVertical:10,
}, 

buttonb: {
justifyContent:'center',
alignItems:'center',
width:'100%',
backgroundColor:'#670D2F',
borderColor:'red',
paddingVertical:10,
color:'azure'
}, 

nav: {
flex:0.5,
backgroundColor:'#18230F',
justifyContent:'center',
alignItems:'center',
},

contnt: {
flex:4.5,
justifyContent:'center',
alignItems:'center',
backgroundColor:'#C1C1C1',
height:'100%',
flexDirection:'column'
}, 

seltor: {
justifyContent:'center',
alignItems:'flex-start',
paddingTop:30
},

selt: {
justifyContent:'center',
alignItems:'center',
backgroundColor:'#F3A26D',
marginBottom:12,
paddingVertical:10,
maxWidth:370,
borderRadius:10,
shadowColor: '#000',
shadowOffset: {
width: 7,
height: 6,
},
shadowOpacity: 0.50,
shadowRadius: 4,
elevation: 10,
},
seltxt:{
fontWeight:'condensedBold',
fontSize:18,
padding:15,
color:'azure'
},

desc: {
width:'100%',
height:100,
backgroundColor:'#C1C1C1'
}
})