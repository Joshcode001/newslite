
import { View, Text,StyleSheet,TouchableOpacity,FlatList ,SectionList,ActivityIndicator} from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { typo,length } from '@/src/utils/typo'
import { AuthContext } from '@/src/utils/authContext'
import { Colors } from '@/src/utils/color'
import { useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { lingual,filterList } from '@/src/utils/dataset'
import NotifyBox from '@/src/components/NotifyBox'


type head = {
title:string
}



type filter = {
label:langobj,
value:string
}



type inbox = {
type:"news"|"update"|"reaction"|"reply",
category: string,
userId: string,
title: string,
pubDate: string,
articleId:string,
commentId:string,
isRead:boolean,
_id:string
}


type section = {
title:string,
data:inbox[]
}


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
tl:string,
}





type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";



const inbox = () => {


const router = useRouter()
const { theme,WIDTH,HEIGHT,getlang,appLang,shouldntDisplay,liveInbox,isloading,setisloading,socket,myClient } = useContext(AuthContext)
const [lang, setlang] = useState<langt>('en')
const [data,setdata] = useState<section[]>([])
const [count,setcount] = useState(0)
const [filterBy,setfilterBy] = useState('all')
const [emptyText,setemptyText] = useState('')




const FilterBox = ({label,value}:filter) => (
<TouchableOpacity onPress={() => setfilterBy(value)} style={[styles.filterBox,{width:120,height:35,borderRadius:17,
borderColor:theme === 'dark' ?(filterBy === value ? Colors.dark.extra : Colors.dark.border) : 
(filterBy === value ? Colors.light.Activebtn : Colors.light.border),
backgroundColor:theme === 'dark' ?(filterBy === value ? Colors.dark.surface : Colors.dark.primary) :
(filterBy === value ? Colors.light.surface : Colors.light.primary)}]}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h5,color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary}]}>{label[lang]}</Text>
</TouchableOpacity>
)



const EmptyBox = () => (
<View style={[styles.empty,{width:WIDTH - 20,height:HEIGHT - 100}]}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary}]}>{emptyText}</Text>
</View>
)






const getCount = () => {

let unreadCount = 0;
for (const item of liveInbox) {
if (!item.isRead) unreadCount++;
}
setcount(unreadCount)
}




const markAsRead = () => {

if (isloading || count === 0) return
setisloading(true)

const data = { _id:"null",userId:myClient.uname }

socket.emit('markRead',data)
}



const Header = ({title}:head) => (
<View style={[styles.header,{width:WIDTH - 20, height:40}]}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary}]}>{title}</Text>
</View>
)




const transformData = (initialArray: inbox[],lang:string) => {
// 1. Sort by date (descending) so the newest items are first
const sortedArray = [...initialArray].sort((a, b) => 
new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
);

// 2. Group the sorted data
const grouped = sortedArray.reduce((acc, obj) => {
const date = new Date(obj.pubDate);

const title = new Intl.DateTimeFormat(lang, {
month: 'short',
day: 'numeric'
}).format(date);

if (!acc[title]) {
acc[title] = { title, data: [] };
}

acc[title].data.push(obj);

return acc;
}, {} as Record<string, { title: string, data: any[] }>);

// 3. Convert the map back into an array
return Object.values(grouped);
};




const handleBack = () => {

shouldntDisplay.value = false
router.back()
}



const filterEngine = (filter:string,list:inbox[]) => {

switch (filter) {

case "all":
if (liveInbox.length === 0){
setemptyText(lingual.noNotify[lang])
setdata([])

}else if (liveInbox.length > 0){
const resultA = transformData(liveInbox,appLang.lcode)
setdata(resultA)
}
break;



case "reaction":
const dataB = liveInbox.filter(l => l.type === 'reaction')

if (dataB.length === 0){

const text = filterList.find(f => f.value === 'reaction')
if(!text)return
const translate = lingual.noYet[lang].replace('{label}',text.label[lang])
setemptyText(translate)
setdata([])

}else if (dataB.length > 0){
const resultB = transformData(dataB,appLang.lcode)
setdata(resultB)
}
break;



case "news":
const dataC = liveInbox.filter(l => l.type === 'news')
if (dataC.length === 0){

const text = filterList.find(f => f.value === 'news')
if(!text)return
const translate = lingual.noYet[lang].replace('{label}',text.label[lang])
setemptyText(translate)
setdata([])

}else if (dataC.length > 0){
const resultC = transformData(dataC,appLang.lcode)
setdata(resultC)
}
break;



case "reply":
const dataD = liveInbox.filter(l => l.type === 'reply')
if (dataD.length === 0){

const text = filterList.find(f => f.value === 'reply')
if(!text)return
const translate = lingual.noYet[lang].replace('{label}',text.label[lang])
setemptyText(translate)
setdata([])
}else if (dataD.length > 0){
const resultD = transformData(dataD,appLang.lcode)
setdata(resultD)
}
break;



case "update":
const dataE = liveInbox.filter(l => l.type === 'update')
if (dataE.length === 0){

const text = filterList.find(f => f.value === 'update')
if(!text)return
const translate = lingual.noYet[lang].replace('{label}',text.label[lang])
setemptyText(translate)
setdata([])
}else if (dataE.length > 0){
const resultE = transformData(dataE,appLang.lcode)
setdata(resultE)
}
break;

}

}




useEffect(() => {

if (count === 0){
setisloading(false)
}

},[count])




useEffect(() => {

getCount()
filterEngine(filterBy,liveInbox)

},[filterBy,liveInbox])



useEffect(() => {

shouldntDisplay.value = true
},[shouldntDisplay])


useEffect(() => {

getlang(appLang.value,setlang)
},[appLang])



return (
<View style={[styles.container,
{backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base, width:WIDTH,height:HEIGHT,rowGap:10}]}>

<View style={styles.cupA}>
<View style={styles.frame}>

<View style={styles.framei}>

<TouchableOpacity style={styles.rola} onPress={handleBack}>
<Ionicons name="chevron-back" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</TouchableOpacity>

<View style={styles.rolb}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h2,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>{lingual.Activity[lang]}</Text>
</View>


<View style={styles.rolc}>
<View style={[styles.circle,{backgroundColor:theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn,}]}>
<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h5,color:Colors.light.primary}]}>{count}</Text>
</View>
</View>

<TouchableOpacity onPress={markAsRead} style={[styles.rold,{paddingRight:20}]}>

{
isloading ? (<ActivityIndicator size={typo.h4} color={theme === 'dark' ? Colors.dark.Activebtn :
Colors.light.Activebtn} /> ) : (<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h4,color:theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn}]}>{lingual.ReadAll[lang]}</Text>)
}

</TouchableOpacity>


</View>

<View style={styles.frameii}>
<FlatList data={filterList} horizontal={true} ItemSeparatorComponent={() => <View style={styles.space}></View>}
keyExtractor={item => item.value} style={styles.flist} contentContainerStyle={styles.ccstyle}
showsHorizontalScrollIndicator={false} renderItem={({item}) => <FilterBox label={item.label} value={item.value}/>} />
</View>


</View>

</View>

<View style={styles.cupB}>
<SectionList ListEmptyComponent={() => <EmptyBox />} 
showsVerticalScrollIndicator={false} sections={data} 
ItemSeparatorComponent={() => <View style={styles.spaceY}></View>}
keyExtractor={(item) => item._id} style={styles.flist} contentContainerStyle={{justifyContent:'flex-start',alignItems:'center'}}
renderItem={({item}) => <NotifyBox _id={item._id} type={item.type} articleId={item.articleId} liveCategory={item.category} 
commentId={item.commentId} pubDate={item.pubDate} title={item.title} userId={item.userId}/>}
renderSectionHeader={({section:{title}}) => <Header title={title} /> }/>
</View>


<View style={styles.cupC}></View>

</View>
)
}

export default inbox





const styles = StyleSheet.create({
container:{
justifyContent:'center',
alignItems:'center',
flex:1,
flexDirection:'column',
},


cupA:{
width:'100%',
height:'17%',
justifyContent:'flex-end',
alignItems:'center',
},


cupB:{
width:'100%',
height:'79%',
justifyContent:'center',
alignItems:'center',
},


cupC:{
width:'100%',
height:'4%',
justifyContent:'center',
alignItems:'center',
},



frame:{
width:'100%',
height:'58%',
justifyContent:'center',
alignItems:'center',
flexDirection:'column'
},


framei:{
width:'100%',
height:'43%',
justifyContent:'center',
alignItems:'center',
flexDirection:'row'
},

frameii:{
width:'100%',
height:'57%',
justifyContent:'center',
alignItems:'center',
},


rola:{
width:'12%',
height:'100%',
justifyContent:'center',
alignItems:'center',
},


rolb:{
width:'28%',
height:'100%',
justifyContent:'center',
alignItems:'flex-start',

},


rolc:{
width:'11%',
height:'100%',
justifyContent:'center',
alignItems:'flex-start',

},


rold:{
width:'49%',
height:'100%',
justifyContent:'center',
alignItems:'flex-end',
},


circle:{
width:'60%',
aspectRatio:1,
borderRadius:9999,
overflow:'hidden',
justifyContent:'center',
alignItems:'center',
},


flist:{
width:'100%',
height:'100%'
},


ccstyle:{
justifyContent:'center',
alignItems:'center'
},


space:{
width:20,
height:'100%'
},


spaceY:{
width:'100%',
height:10
},

header:{
justifyContent:'center',
alignItems:'flex-start',
},


empty:{
justifyContent:'center',
alignItems:'center',
},



filterBox:{
borderWidth:1,
justifyContent:'center',
alignItems:'center',
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