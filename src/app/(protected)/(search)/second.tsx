import { View, Text,StyleSheet,TextInput,TouchableOpacity, ScrollView ,FlatList, ActivityIndicator, Keyboard, Pressable, ViewToken} from 'react-native'
import React, {useRef, useState, useContext, useCallback, useEffect}  from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomBsheet from '@/src/components/CustomBsheet';
import { Image } from 'expo-image';
import { Router, useRouter } from 'expo-router';
import { AuthContext } from '@/src/utils/authContext';
import { ActiveColors } from "@/src/utils/color";
import Animated, { useSharedValue, SharedValue, useAnimatedRef } from 'react-native-reanimated';
import CNewsItem from '@/src/components/CNewsItem';
import RNPickerSelect from 'react-native-picker-select';
import Entypo from '@expo/vector-icons/Entypo';
import { data, Days, Months, Years , category} from '@/src/utils/dataset';





type opt = {
country:string,
category:string
}

type date = {
year:string,
month:string,
day:string
}





type saved = {
country:cdata[],
state:cdata[],
city:cdata[],
}


type api2 = {
id:string,
name:string,
latitude:string,
longitude:string
}


type idata = {
name:string,
isoCode:string,
countryCode:string,
latitude:string,
longitude:string,
}




type cdata = {
label:string,
value: string
}


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







type sbox = { 
image: string,
total: string,
name: string,
router: Router,
cate: string
}


type props  = 
{
_id: string,
fname: string,
category: string,
image: string,
total: string
}



type boxt = {
data: props[],
title: string,
router: Router,
theme: string,
WIDTH: number
}



type sbar = {
setsearch : React.Dispatch<React.SetStateAction<string>>,
search: string,
getSdata: (prop: string) => Promise<void>,
setisLoading: React.Dispatch<React.SetStateAction<boolean>>,
theme: string,
WIDTH: number
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






export const SearchBar = ({setsearch, search, getSdata, setisLoading, theme, WIDTH}: sbar) => (
<View style={[styles.searchbox, {width:WIDTH / 2}]}>
<TextInput style={[styles.input,{backgroundColor:theme ==='dark' ? ActiveColors.dark.cgrey : ActiveColors.light.cgrey },{width:WIDTH / 2}]} placeholder="write here"  value={search} onChangeText={text => setsearch(text)} 
onFocus={() =>{ setsearch('')
setisLoading(true)
}} />
<TouchableOpacity style={[styles.buttonbox,{backgroundColor:theme === 'dark'?  ActiveColors.dark.cgreen : ActiveColors.light.cgreen}]} disabled={search === ''}
onPress={() => {
getSdata(search)
Keyboard.dismiss()
}}>
<FontAwesome5 name="search" size={24} color="azure" />
</TouchableOpacity>
</View>
)





const Sbox = ({image, total, name, router, cate}:sbox) => (
<TouchableOpacity onPress={() => {
router.push({
pathname:'./quick/[name]',
params:{
name:name,
category: cate,
image: image
}
})
}}>
<View style={styles.sbox}>
<View style={styles.scle}>
<Image  source={image} style={{width:80, height:80, borderRadius:50}} contentFit='cover'/>
</View>
<Text style={styles.boxtext}>{total} pages</Text>
</View>
</TouchableOpacity>

)









export const Stab = ({data, title, router, theme, WIDTH}:boxt) => (
<View style={[styles.stab, {backgroundColor: theme === 'dark' ? ActiveColors.dark.cbrown : ActiveColors.light.cbrown }, {width:WIDTH / 2.2}]}>
<Text style={styles.stabtext}>{title}</Text>
<View style={styles.scard}>
<FlatList data={data} renderItem={({item}) => <Sbox image={item.image} total={item.total} router={router} name={item.fname} cate={item.category} />} keyExtractor={item => item._id} horizontal={true} showsHorizontalScrollIndicator={false}/>
</View>
</View>
)








const second = () => {


const animatedRef = useAnimatedRef<FlatList>()
const Views = useSharedValue<ViewToken<res>[]>([])
const authState = useContext(AuthContext)
const router = useRouter()
const id = 5
const [isLoading, setisLoading] = useState(false)
const [isDom, setisDom] = useState(true)
const [nextPage, setnextPage] = useState('')
const [post, setpost] = useState<res[]>([])
const [search, setsearch] = useState('')
const [selectedItem, setselectedItem] = useState({ country:'', state:'', city:'' })
const [finalItem, setfinalItem] = useState({ country:'', state:'', city:'' })
const [cdata, setcdata] = useState([{ label:'', value: ''}])
const [pholder, setpholder] = useState({label:'Select Country', value: null})
const [action, setaction] = useState('countryin')
const [isReset, setisReset] = useState(false)
const Ref = useRef<any>(null)
const title = `Today's Global Searches`
const {theme, WIDTH, api} = authState
const [saveData, setsaveData] = useState<saved>({country:[], state:[], city:[]})
const [fromDate, setfromDate] = useState<date>({ year:'2020', month:'01', day:'01' })
const [toDate, settoDate] = useState<date>({ year:'2020', month:'01', day:'01'})
const [options, setoptions] = useState<opt>({country:'', category:''})
const [isactive, setisactive] = useState(false)
const [key, setkey] = useState({ a:0, b:0 })







const getSdata = async (prop: string) => {
setisDom(false)
setisLoading(true)
try {
const resp = await api.post('/data/search', {prop:prop, pn: undefined})
const json = resp.data.json
setnextPage(json.nextPage)
setpost(json.results)

setisLoading(false)
} catch (err) {
console.log(err)
}
}


const renderItem = useCallback(({item}:obt) => (
<CNewsItem item={item} Views={Views} _id={id}/>),[])



const newData_cntry:cdata[] = data.map(data => {
return {
label:data.name,
value:data.icon
}
})


const newData_ctegry:cdata[] = category.map( c => {
return {
label:c.item,
value:c.item
}
})




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
setpholder({label:'Select States', value: null})
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
setpholder({label:'Select City', value: null})
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




const ResetSearch = () => {
setselectedItem({ country:'', state:'', city:'' })
setpholder({ label:'Select country', value: null})
setcdata(newData_cntry);
setaction('countryin')
setisLoading(false)
setisactive(false)
setTimeout(() => setisReset(false),2000)

}




const getHistory = async (fd:date, td:date, opt:opt) => {

const response = await api.post('/data/historynews', {fromDate:fd,toDate:td, options:opt})

const data = await response.data
}




useEffect(() => {

setcdata(newData_cntry)
setsaveData({...saveData,country:newData_cntry})

},[])







return (
<GestureHandlerRootView style={{flex: 1}}>

<View style={[styles.head, {backgroundColor:theme === 'dark' ? ActiveColors.dark.wblue: ActiveColors.light.wblue }]}>
<SearchBar WIDTH={WIDTH} search={search} setsearch={setsearch} getSdata={getSdata} setisLoading={setisLoading} theme={theme} />


<View style={[styles.content, {backgroundColor:theme === 'dark' ? ActiveColors.dark.base : ActiveColors.light.base}, {width: WIDTH}]}>

{
(isDom) ? (<Text style={{color:theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.secondary}}>Joshua's Search Engine</Text>) :
(isLoading) ? (<ActivityIndicator />) : 
((post?.length === 0 || post === undefined) ? (<Text style={{color:theme === 'dark' ?  ActiveColors.light.primary  : ActiveColors.dark.base }}>{search} is not Trending at this Hour, Check Later</Text>) :
(<Animated.FlatList onViewableItemsChanged={({viewableItems}) => {Views.value = viewableItems}}  ref={animatedRef} data={post}  renderItem={renderItem} keyExtractor={item => item.article_id}
ListFooterComponent={()=> (
<View style={[styles.foot,{backgroundColor:theme === 'dark' ? ActiveColors.dark.accent : ActiveColors.light.tertiary}, {width: WIDTH}]}>
<TouchableOpacity disabled={nextPage === null} onPress={()=> {
router.push({
pathname: './[paged]',
params: {
props:search,
paged:nextPage

}
})
}}>
<Text style={[{color: theme === 'dark' ?  ActiveColors.light.primary: ActiveColors.dark.base },styles.loadtxt]}>Load More...</Text>
</TouchableOpacity>
</View>)}
/>)

)}
</View>
<View style={[styles.emptyv, {backgroundColor:theme === 'dark' ? ActiveColors.dark.base :ActiveColors.light.base}]}></View>

</View>
<CustomBsheet  ref={Ref} title={title} >
<View style={[styles.child, {backgroundColor:theme === 'dark' ?  ActiveColors.dark.cgrey : ActiveColors.light.secondary}]}>
<View style={styles.advbox}>
<ScrollView horizontal={true} contentContainerStyle={{width:850}}>
<View style={styles.quebox}>

<View style={styles.inbox}>
{

(isLoading || isReset) ? (<Text style={styles.text}>{isReset ? 'Refreshing system...': 'Searching Database...'}</Text>) : (<RNPickerSelect items={cdata} style={{inputIOSContainer:{backgroundColor: 'grey', width:220, height:35, alignSelf:'center'}, iconContainer:{paddingTop:10, paddingRight:6}, inputIOS:{fontSize:19, borderRadius:7, color:'azure', padding:6}}} Icon={() => {return <Entypo name="triangle-down" size={16} color="black" />}} placeholder={pholder} 
onValueChange={(value) => {
setValues(action,value)
if (value !== null){ setisactive(true)} else if (value === null) {setisactive(false)}
}}/>
)
}



<View style={styles.refbox}>
{
(isactive) && (<Pressable style={styles.btn} onPress={() => getStates(selectedItem.country, selectedItem.state, selectedItem.city)}>
{isLoading ? (<ActivityIndicator />) : (<Text style={styles.text}>Search</Text>)}
</Pressable>)
}

{(action === 'statesin' || action === 'cityin') && (<Pressable style={[styles.btn,{backgroundColor:'red'}]}
onPress={() => {
setisReset(true)
ResetSearch()
}}>
<Text style={styles.text}>Refresh</Text>
</Pressable>) }
</View>



</View>
</View>


<View style={styles.quebox}>

<View style={styles.prntbox}>

<View style={styles.fstcol}>

<View style={[styles.fstrow,{backgroundColor:'#471f2a'}]}></View>
<View style={[styles.sndrow,{backgroundColor:'#6b5f12'}]}>
<Text style={styles.txt}>Day</Text>
</View>
<View style={[styles.trdrow,{backgroundColor:'teal'}]}>
<Text style={styles.txt}>Month</Text>
</View>
<View style={[styles.fotrow,{backgroundColor:'purple'}]}>
<Text style={styles.txt}>Year</Text>
</View>
</View>



<View style={styles.sndcol}>

<View style={[styles.fstrow,{backgroundColor:'#6e0a0a'}]}>
<Text style={styles.txt}>From :</Text>
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
<Text style={styles.txt}>To :</Text>
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











<RNPickerSelect items={newData_cntry} style={{inputIOSContainer:{backgroundColor: 'grey', width:220, height:35, alignSelf:'center'}, iconContainer:{paddingTop:10, paddingRight:6}, inputIOS:{fontSize:19, borderRadius:7, color:'azure', padding:6}}} Icon={() => {return <Entypo name="triangle-down" size={16} color="black" />}} placeholder={{label:'select Country' , value: null}}
onValueChange={(value) => {
setoptions({...options,country:value})
if (value !== null){setkey({...key, a:1})} else if (value === null){setkey({...key, a:0})}
}}/>


<RNPickerSelect items={newData_ctegry} style={{inputIOSContainer:{backgroundColor: 'grey', width:220, height:35, alignSelf:'center'}, iconContainer:{paddingTop:10, paddingRight:6}, inputIOS:{fontSize:19, borderRadius:7, color:'azure', padding:6}}} Icon={() => {return <Entypo name="triangle-down" size={16} color="black" />}} placeholder={{label:'select Category', value: null}} 
onValueChange={(value) => {
setoptions({...options,category:value})
if (value !== null){setkey({...key, b:1})} else if (value === null){setkey({...key, b:0})}
}}/>



<View style={styles.refbox}>
{
(key.a + key.b === 2) && (<Pressable style={styles.btn} onPress={() => getHistory(fromDate, toDate, options)}>
{isLoading ? (<ActivityIndicator />) : (<Text style={styles.text}>Search</Text>)}
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

export default second




{/* <ScrollView showsVerticalScrollIndicator={false} >

<Stab  theme={theme} data={authState.listp} router={router} title='Popular People!' WIDTH={WIDTH}/>
<Stab theme={theme} data={authState.lists} router={router} title='Popular Sources!' WIDTH={WIDTH}/>
<Stab theme={theme} data={authState.listc} router={router} title='Popular CryptoCoins!' WIDTH={WIDTH}/>
<Stab theme={theme} data={authState.listt} router={router} title='Popular Teams!' WIDTH={WIDTH}/>



</ScrollView> */}














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