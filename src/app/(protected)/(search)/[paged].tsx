import { View, Text,StyleSheet,TouchableOpacity, ScrollView ,FlatList, ActivityIndicator,Pressable, ViewToken} from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomBsheet from '@/src/components/CustomBsheet';
import React, {useRef, useState, useEffect, useContext, useCallback}  from 'react'
import { useLocalSearchParams } from 'expo-router'
import { SearchBar } from './second'
import { useRouter } from 'expo-router';
import { Stab } from './second';
import { AuthContext } from '@/src/utils/authContext';
import { ActiveColors } from "@/src/utils/color";
import Animated, { useSharedValue,SharedValue, useAnimatedRef} from 'react-native-reanimated';
import CNewsItem from '@/src/components/CNewsItem';
import { multilingual } from '@/src/utils/dataset';
import RNPickerSelect from 'react-native-picker-select';
import Entypo from '@expo/vector-icons/Entypo';
import { data, Days, Months, Years , category} from '@/src/utils/dataset';
import { get_default } from './second';










type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id";




type lry = {
userid: string,
}


type comm = {
userid: string,
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
Views: SharedValue<ViewToken<res>[]>
comments: comm[],
likes: like
}


type obt = {
item:res
}

type saved = {
country:cdata[],
state:cdata[],
city:cdata[],
}

type cdata = {
label:string,
value: string
}

type opt = {
country:string,
category:string
}

type date = {
year:string,
month:string,
day:string
}

type  opt2 = {
label:string,
value:null
}

type idata = {
name:string,
isoCode:string,
countryCode:string,
latitude:string,
longitude:string,
}

type api2 = {
id:string,
name:string,
latitude:string,
longitude:string
}







const paged = () => {



const [lang, setlang] = useState<langt>('en')
const animatedRef = useAnimatedRef<FlatList>()
const Views = useSharedValue<ViewToken<res>[]>([])
const authstate = useContext(AuthContext)
const router = useRouter()
const id = 6
const [isLoading, setisLoading] = useState(false)
const [nextPage, setnextPage] = useState('')
const [post, setpost] = useState<res[]>([])
const [search, setsearch] = useState('')
const {paged, props} = useLocalSearchParams()
const Ref = useRef<any>(null)
const {theme, WIDTH, api, appLang,getlang} = authstate
const [saveData, setsaveData] = useState<saved>({country:[], state:[], city:[]})
const [fromDate, setfromDate] = useState<date>({ year:'2020', month:'01', day:'01' })
const [toDate, settoDate] = useState<date>({ year:'2020', month:'01', day:'01'})
const [options, setoptions] = useState<opt>({country:'', category:''})
const [isactive, setisactive] = useState(false)
const [key, setkey] = useState({ a:0, b:0 })
const [isReset, setisReset] = useState(false)
const [cdata, setcdata] = useState([{ label:'', value: ''}])
const [pholder, setpholder] = useState<opt2>({label: 'select country', value: null})
const [selectedItem, setselectedItem] = useState({ country:'', state:'', city:'' })
const [finalItem, setfinalItem] = useState({ country:'', state:'', city:'' })
const [action, setaction] = useState('countryin')


let prop = ''
let page = ''

if ( typeof props === "string") {
prop = props
}
if ( typeof paged === "string") {
page = paged
}


const newData_cntry:cdata[] = data.map(data => {
return {
label:data.name,
value:data.icon
}
})


const newData_ctegry:cdata[] = category.map( c => {
return {
label:c.item[lang],
value:c.item[lang]
}
})









const getNdata = async (prop:string, pn: string) => {
setisLoading(true)
try{
const resp = await api.post('/data/search', {prop:prop , pn:pn})
const json = resp.data.json
setnextPage(json.nextPage)
setpost(json.results)
setisLoading(false)

} catch(err) {
console.log(err)
}
}










const getSdata = async (prop: string) => {
setisLoading(true)
try {
const resp = await api.post('/data/search', {prop:prop})
const json = resp.data.json
setnextPage(json.nextPage)

setisLoading(false)
} catch (err) {
console.log(err)
}
}




const renderItem = useCallback(({item}:obt) => (
<CNewsItem item={item} Views={Views} _id={id}/>),[])




const ResetSearch = () => {
setselectedItem({ country:'', state:'', city:'' })
setpholder({ label:'Select country', value: null})
setcdata(newData_cntry);
setaction('countryin')
setisLoading(false)
setisactive(false)
setTimeout(() => setisReset(false),2000)

}





const getStates = async (id:string, st:string, cty:string) => {

setisLoading(true)


if ( st === '' &&  cty === '') {

try {
const response = await api.get(`/data/city-states?id=${id}&ste=${st}&cty=${cty}`)
const data = response.data.json


if (data.length === 0) {
ResetSearch()
return
}


const result:idata[] = await response.data.json; 
const newData:cdata[] = result.map(data => {
return {
label:data.name,
value:data.isoCode.toLowerCase()
}
})
setsaveData({...saveData,state:newData})
setpholder({label: multilingual.selectState[lang], value: null})
setcdata(newData);
setaction('statesin')
setisLoading(false)



} catch (error) {
console.error(error);

}


} else if (st !== '' && cty ==='') {

try {
const response = await api.get(`/data/city-states?id=${id}&ste=${st}&cty=${cty}`)
const data = response.data.json

if (data.length === 0) {

ResetSearch()
return
}


const result:api2[] = await response.data.json; 
const newData:cdata[] = result.map(data => {
return {
label:data.name,
value:data.name
}
})
setsaveData({...saveData,city:newData})
setpholder({label:multilingual.selectCity[lang], value: null})
setcdata(newData);
setaction('cityin')
setisLoading(false)

} catch (error) {
console.error(error);

}
}

if ( cty !== "" && st !== "" ) {

try {
const response = await api.get(`/data/city-states?id=${finalItem.country}&ste=${finalItem.state}&cty=${finalItem.city}`)
const data2 = response.data.json


if (data2.length === 0) {

ResetSearch()
return
}

const data = await data2

} catch(err) {

console.log(`status: ${err}`)

}

}

}






const setValues = (action:string, value:string) => {

switch (action) {

case 'countryin':
setselectedItem({...selectedItem, country:value})

const data = saveData.country.find((d) => d.value === value)

if (data) {

setfinalItem({...finalItem,country:data.label.toLowerCase()})
}


break;


case 'statesin':
setselectedItem({...selectedItem, state:value})

const data2 = saveData.state.find((d) => d.value === value)

if (data2) {

setfinalItem({...finalItem, state:data2.label.toLowerCase()})
}

break;




case 'cityin':
setselectedItem({...selectedItem, city:value})

const data3 = saveData.city.find((d) => d.value === value)

if (data3) {

setfinalItem({...finalItem, city:data3.label.toLowerCase()})
}
break;

}}




const getHistory = async (fd:date, td:date, opt:opt) => {

const response = await api.post('/data/historynews', {fromDate:fd,toDate:td, options:opt})

const data = await response.data
}





useEffect(() => {
setsearch(prop)
getNdata(prop, page)
},[])




useEffect(() => {

getlang(appLang,setlang)

get_default(appLang,setpholder)

},[appLang])






return (
<GestureHandlerRootView>
<View style={[styles.container, {width: WIDTH}]}>
<View style={[styles.head, {backgroundColor:theme === 'dark' ? ActiveColors.dark.wblue: ActiveColors.light.wblue }]}>
<SearchBar WIDTH={WIDTH} search={search} setsearch={setsearch} getSdata={getSdata} setisLoading={setisLoading} theme={theme} lang={lang} />
</View>
<View style={[styles.content, {backgroundColor:theme === 'dark' ? ActiveColors.dark.base : ActiveColors.light.base}, {width: WIDTH}]}>
{ isLoading ?  (<ActivityIndicator />) :
(post?.length === 0 || post === undefined) ? (<Text style={{color:theme === 'dark' ?  ActiveColors.light.primary  : ActiveColors.dark.base }}>{search} {multilingual.notTrending[lang]}</Text>) :
<Animated.FlatList onViewableItemsChanged={({viewableItems}) => {Views.value = viewableItems}}  ref={animatedRef} data={post}  renderItem={renderItem} keyExtractor={item => item.article_id}
ListFooterComponent={()=> (
<View style={[styles.foot,{backgroundColor:theme === 'dark' ? ActiveColors.dark.accent :ActiveColors.light.tertiary},{width: WIDTH}]}>
<TouchableOpacity disabled={nextPage === null} onPress={()=> {
router.push({
pathname: './[paged]',
params: {
props:search,
paged:nextPage
}
})
}}>
<Text style={{color: theme === 'dark' ? ActiveColors.light.primary: ActiveColors.dark.base }}>{multilingual.Loadmore[lang]}...</Text>
</TouchableOpacity>
</View>)}
/>}
</View>
<View style={[styles.emptyv, {backgroundColor:theme === 'dark' ? ActiveColors.dark.base :ActiveColors.light.base}]}></View>
</View>
<CustomBsheet  ref={Ref} title={multilingual.globalSearch[lang]} >
<View style={[styles.child, {backgroundColor:theme === 'dark' ?  ActiveColors.dark.cgrey : ActiveColors.light.secondary}]}>
<View style={styles.advbox}>
<ScrollView horizontal={true} contentContainerStyle={{width:850}}>
<View style={styles.quebox}>

<View style={styles.inbox}>
{

(isLoading || isReset) ? (<Text style={styles.text}>{isReset ? multilingual.refreshingSystem[lang]: multilingual.searchingDatabase[lang]}....</Text>) : (<RNPickerSelect key={lang} items={cdata} style={{inputIOSContainer:{backgroundColor: 'grey', width:220, height:35, alignSelf:'center'}, iconContainer:{paddingTop:10, paddingRight:6}, inputIOS:{fontSize:19, borderRadius:7, color:'azure', padding:6}}} Icon={() => {return <Entypo name="triangle-down" size={16} color="black" />}} placeholder={pholder} 
onValueChange={(value) => {
setValues(action,value)
if (value !== null){ setisactive(true)} else if (value === null) {setisactive(false)}
}}/>
)
}



<View style={styles.refbox}>
{
(isactive) && (<Pressable style={styles.btn} onPress={() => getStates(selectedItem.country, selectedItem.state, selectedItem.city)}>
{isLoading ? (<ActivityIndicator />) : (<Text style={styles.text}>{multilingual.search[lang]}</Text>)}
</Pressable>)
}

{(action === 'statesin' || action === 'cityin') && (<Pressable style={[styles.btn,{backgroundColor:'red'}]}
onPress={() => {
setisReset(true)
ResetSearch()
}}>
<Text style={styles.text}>{multilingual.refresh[lang]}</Text>
</Pressable>) }
</View>



</View>
</View>


<View style={styles.quebox}>

<View style={styles.prntbox}>

<View style={styles.fstcol}>

<View style={[styles.fstrow,{backgroundColor:'#471f2a'}]}></View>
<View style={[styles.sndrow,{backgroundColor:'#6b5f12'}]}>
<Text style={styles.txt}>{multilingual.day[lang]}</Text>
</View>
<View style={[styles.trdrow,{backgroundColor:'teal'}]}>
<Text style={styles.txt}>{multilingual.month[lang]}</Text>
</View>
<View style={[styles.fotrow,{backgroundColor:'purple'}]}>
<Text style={styles.txt}>{multilingual.year[lang]}</Text>
</View>
</View>



<View style={styles.sndcol}>

<View style={[styles.fstrow,{backgroundColor:'#6e0a0a'}]}>
<Text style={styles.txt}>{multilingual.from[lang]} :</Text>
</View>
<View style={[styles.sndrow,{backgroundColor:'teal'}]}>
<RNPickerSelect onValueChange={(value) => setfromDate({...fromDate, day:value})} items={Days} style={{inputIOSContainer:{ width:'90%', height:'90%', alignSelf:'center'}, iconContainer:{paddingTop:13, paddingRight:13}, inputIOS:{fontSize:17,color:'azure',padding:3}}} Icon={() => {return <Entypo name="triangle-down" size={12} color='teal' />}} placeholder={{label:Days[0].label, value:Days[0].value}}/ >

</View>
<View style={[styles.trdrow,{backgroundColor:'purple'}]}>
<RNPickerSelect onValueChange={(value) => setfromDate({...fromDate, month:value})} items={Months} style={{inputIOSContainer:{ width:'90%', height:'90%', alignSelf:'center'}, iconContainer:{paddingTop:13, paddingRight:13}, inputIOS:{fontSize:17,color:'azure',padding:3}}} Icon={() => {return <Entypo name="triangle-down" size={12} color='purple'/>}} placeholder={{label:Months[0].label, value:Months[0].value}}/ >
</View>
<View style={[styles.fotrow,{backgroundColor:'#6b5f12'}]}>
<RNPickerSelect onValueChange={(value) => setfromDate({...fromDate, year:value})} items={Years} style={{inputIOSContainer:{ width:'90%', height:'90%', alignSelf:'center'}, iconContainer:{paddingTop:13, paddingRight:13}, inputIOS:{fontSize:17,color:'azure',padding:3}}} Icon={() => {return <Entypo name="triangle-down" size={12} color='#6b5f12' />}} placeholder={{label:Years[0].label, value:Years[0].value}}/ >
</View>
</View>




<View style={styles.trdcol}>

<View style={[styles.fstrow,{backgroundColor:'#6e0a0a'}]}>
<Text style={styles.txt}>{multilingual.to[lang]} :</Text>
</View>
<View style={[styles.sndrow,{backgroundColor:'purple'}]}>
<RNPickerSelect onValueChange={(value) => settoDate({...fromDate, day:value})} items={Days} style={{inputIOSContainer:{ width:'90%', height:'90%', alignSelf:'center'}, iconContainer:{paddingTop:13, paddingRight:13}, inputIOS:{fontSize:17,color:'azure',padding:3}}} Icon={() => {return <Entypo name="triangle-down" size={12} color='purple'/>}} placeholder={{label:Days[0].label, value:Days[0].value}}/ >
</View>
<View style={[styles.trdrow,{backgroundColor:'#6b5f12'}]}>
<RNPickerSelect onValueChange={(value) => settoDate({...fromDate, month:value})} items={Months} style={{inputIOSContainer:{ width:'90%', height:'90%', alignSelf:'center'}, iconContainer:{paddingTop:13, paddingRight:13}, inputIOS:{fontSize:17,color:'azure',padding:3}}} Icon={() => {return <Entypo name="triangle-down" size={12} color='#6b5f12' />}} placeholder={{label:Months[0].label, value:Months[0].value}}/ >
</View>
<View style={[styles.fotrow,{backgroundColor:'teal'}]}>
<RNPickerSelect onValueChange={(value) => settoDate({...fromDate, year:value})} items={Years} style={{inputIOSContainer:{ width:'90%', height:'90%', alignSelf:'center'}, iconContainer:{paddingTop:13, paddingRight:13}, inputIOS:{fontSize:17,color:'azure',padding:3}}} Icon={() => {return <Entypo name="triangle-down" size={12} color='teal' />}} placeholder={{label:Years[0].label, value:Years[0].value}}/ >
</View>
</View>
</View>











<RNPickerSelect key={lang + 1} items={newData_cntry} style={{inputIOSContainer:{backgroundColor: 'grey', width:220, height:35, alignSelf:'center'}, iconContainer:{paddingTop:10, paddingRight:6}, inputIOS:{fontSize:19, borderRadius:7, color:'azure', padding:6}}} Icon={() => {return <Entypo name="triangle-down" size={16} color="black" />}} placeholder={{label: multilingual.selectCountry[lang], value: null}}
onValueChange={(value) => {
setoptions({...options,country:value})
if (value !== null){setkey({...key, a:1})} else if (value === null){setkey({...key, a:0})}
}}/>


<RNPickerSelect key={lang +2} items={newData_ctegry} style={{inputIOSContainer:{backgroundColor: 'grey', width:220, height:35, alignSelf:'center'}, iconContainer:{paddingTop:10, paddingRight:6}, inputIOS:{fontSize:19, borderRadius:7, color:'azure', padding:6}}} Icon={() => {return <Entypo name="triangle-down" size={16} color="black" />}} placeholder={{label: multilingual.selectCategory[lang], value: null}} 
onValueChange={(value) => {
setoptions({...options,category:value})
if (value !== null){setkey({...key, b:1})} else if (value === null){setkey({...key, b:0})}
}}/>



<View style={styles.refbox}>
{
(key.a + key.b === 2) && (<Pressable style={styles.btn} onPress={() => getHistory(fromDate, toDate, options)}>
{isLoading ? (<ActivityIndicator />) : (<Text style={styles.text}>{multilingual.search[lang]}</Text>)}
</Pressable>
)
}

</View>
</View>
</ScrollView>
</View>
</View>
</CustomBsheet>
</GestureHandlerRootView>
)
}

export default paged










const styles = StyleSheet.create({

container: {
flex: 1,
justifyContent: "center",
alignItems: "center",
backgroundColor:'#EDEDED'
},

head: {
flex:1.7,
justifyContent: "center",
alignItems: "center",
width:'100%'
},

content: {
flex:8.3,
justifyContent: "center",
alignItems: "center",
maxHeight:2000,
alignContent:'center'
},

searchbox: {
flexDirection:'row',
justifyContent: "center",
alignItems: "flex-end",
height:150,
columnGap:10,
paddingBottom:20
},

input: {
justifyContent: "center",
alignItems: "center",
height:50,
borderRadius:50,
textAlign:'center',
color:'azure',
fontSize:22,
marginRight:8
},


button: {
justifyContent: "center",
alignItems: "center",
},

buttonbox: {
justifyContent: "center",
alignItems: "center",
padding:10,
marginBottom:2
},

child: {
flex:1,
height:700,
minWidth:'auto',
maxWidth:'auto',
justifyContent:'flex-start',
alignItems:'center',
position:'fixed',
},


scard:{
width: '100%',
height: 200,
justifyContent:'center',
alignItems:'center',
}, 

scle:{
width: 80,
height: 80,
borderRadius:'50%',
backgroundColor:'white',
margin:10,
},

stab: {
marginRight:8,
height: 300,
justifyContent:'flex-end',
alignItems:'center',
flexDirection:'column',
rowGap:20,
marginTop:10,
borderRadius:25,
marginBottom:20,
shadowColor: '#000',
shadowOffset: {
width: 8,
height: 6,
},
shadowOpacity: 0.50,
shadowRadius: 4,
elevation: 10
},

stabtext: {
fontSize: 26,
color: 'azure',
alignSelf:'flex-start',
paddingLeft:6
},

sbox:{
width: 100,
flexDirection:'column',
justifyContent:'center',
alignItems:'center',
},

boxtext: {
fontSize:10,
color:'azure', 
},


foot: {
height:50,
justifyContent: 'center',
alignItems:'center',
marginBottom:5
},



loadtxt:{
width:"100%",
justifyContent:'center',
alignItems:'center'
},

emptyv: {
height:50,
width:'100%'
},

advbox: {
justifyContent:'flex-start',
alignItems:'center',
minWidth:'auto',
maxWidth:'auto', 
height:'100%',
backgroundColor:'#808080'
},


quebox: {
justifyContent:'flex-start',
alignItems:'center',
width:300, 
height:'70%',
flexDirection:'column',
backgroundColor:'#471f2a',
marginRight:60,
marginLeft:60,
rowGap:30,
marginTop:40,
paddingTop:50
},

btn:{
justifyContent:'center',
alignItems:'center',
backgroundColor:'green',
padding:5,
width:80,
height:30
},

text:{
fontSize:14,
color:'white'
},

refbox:{
justifyContent:'center',
alignItems:'center',
width:'100%',
flexDirection:'row',
columnGap:5
},

inbox:{
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
rowGap:30,
width:'100%',
marginTop:100
},

prntbox:{
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
rowGap:10,
marginBottom:10,
width:220, 
height:120
},

fstcol:{
flexDirection:'row',
columnGap:10,
justifyContent:'center',
alignItems:'center',
width:'100%', 
height:'27%',
},


sndcol:{
flexDirection:'row',
columnGap:10,
justifyContent:'center',
alignItems:'center',
width:'100%', 
height:'46.5%',
},

trdcol:{
flexDirection:'row',
columnGap:10,
justifyContent:'center',
alignItems:'center',
width:'100%', 
height:'46.5%',

},

fstrow:{
justifyContent:'center',
alignItems:'center',
width:'25%', 
height:'100%',

},

sndrow:{
justifyContent:'center',
alignItems:'center',
width:'25%', 
height:'100%',

},

trdrow:{
justifyContent:'center',
alignItems:'center',
width:'25%', 
height:'100%',
},

fotrow:{
justifyContent:'center',
alignItems:'center',
width:'25%', 
height:'100%',
},

txt:{
color:'azure',
fontSize:15
}






})