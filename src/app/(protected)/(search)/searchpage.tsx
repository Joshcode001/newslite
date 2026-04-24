

import { View, Text, StyleSheet,TouchableOpacity,Modal,FlatList,ActivityIndicator } from 'react-native'
import React from 'react'
import { useContext,useState,useEffect } from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { Colors } from '@/src/utils/color'
import { typo } from '@/src/utils/typo'
import { useRouter } from 'expo-router'
import SearchCity from '@/src/components/SearchCity'
import SearchName from '@/src/components/SearchName'
import SearchTime from '@/src/components/SearchTime'
import { data,category } from '@/src/utils/dataset'
import AppIcon from '@/src/components/AppIcons'
import { lingual } from '@/src/utils/dataset'





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
tl:string
}


type buts = {
item:langobj
}


type shoc = {
obj:bols
}


type box = {
label:string,
value:string
}


type cat = {
show:string,
send:string
}


type bols = {
show:string,
send:string,
type:string
}



type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl"




const searchpage = () => {

const router = useRouter()
const { theme,getlang,appLang,liveCount,shouldntDisplay,showToast,myClient,isloading,setisloading,roomKey,socket,WIDTH,HEIGHT,setsearchArray,checkNetwork,platform,liveSubCode } = useContext(AuthContext)
const [showModal,setshowModal] = useState(false)
const [showLoad,setshowLoad] = useState({ a:false,b:false })
const [action,setaction] = useState('null')
const [country,setcountry] = useState<cat>({ show:'null',send:'null' })
const [countryC,setcountryC] = useState<cat>({ show:'null',send:'null' })
const [livecategory,setlivecategory] = useState<cat>({ show:'null',send:'null' })
const [liveDynamic,setliveDynamic] = useState<bols>({ show:'null',send:'null',type:'null' })
const [goAuto, setgoAuto] = useState(false)
const [title,settitle] = useState('')
const [liveArray,setliveArray] = useState<bols[]>([])
const [isBack, setisBack] = useState(false)
const [lang, setlang] = useState<langt>('en')



const placeholderX = theme === 'dark' ? 'xmarkdark' : 'xmarklight'


const categoryList = category.filter(c => c.item.en !== 'All')


const fixTitle = (id:string) => {

switch (id) {

case "showCountry" : 
settitle('Select Country')
break;

case "showCategory":
settitle('Select Category')
break;


case "showCountryC" : 
settitle('Select Country')
break;


case "statesIn" : 
const text = `STATES IN ${countryC.show}`
settitle(text)
break;


case "citiesIn" : 
const textZ = `CITIES IN ${liveDynamic.show}`
settitle(textZ.toUpperCase())
break;


}

}



const handleNavigate = () => {

setshowLoad({a:false,b:false})
setisloading(false)
setisBack(false)
router.push({pathname:'/(protected)/(search)/second',params:{ name:'This Topic'}})

}


const pickCountry = (label:string,id:string) => {

switch (true) {

case (action === 'showCountry'):
setcountry({show:label,send:id})
setshowModal(false)
setaction('null')
break;

case (action === 'showCountryC'):
setcountryC({show:label,send:id})
setshowModal(false)
setaction('null')
break;


}

}


const pickCategory = (a:string,b:string) => {

setlivecategory({show:a,send:b})
setshowModal(false)
}



const pickDynamic = (obj:bols) => {
setliveDynamic({show:obj.show,send:obj.send,type:obj.type})
setshowModal(false)
}



const CountryTag = ({label,value}:box) => (
<TouchableOpacity  onPress={() => pickCountry(label,value)}
style={[styles.tag,{borderBottomColor:theme === 'dark' ? Colors.dark.modalBorder : Colors.light.modalBorder}]}> 
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h4,color:theme === 'dark' ? Colors.light.primary : 
Colors.dark.primary}]}>{label}</Text>
</TouchableOpacity>
)



const CategoryTag = ({item}:buts) => (
<TouchableOpacity onPress={() => pickCategory(item[lang],item.en)}
style={[styles.tag,{borderBottomColor:theme === 'dark' ? Colors.dark.modalBorder : Colors.light.modalBorder},
(livecategory.send === item.en) && {backgroundColor:theme === 'dark' ? Colors.dark.transparent :Colors.light.transparent}]}> 
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h4,color:theme === 'dark' ? Colors.light.primary : 
Colors.dark.primary}]}>{item[lang]}</Text>
</TouchableOpacity>
)



const DynamicTag = ({obj}:shoc) => (
<TouchableOpacity onPress={() => pickDynamic(obj) }
style={[styles.tag,{borderBottomColor:theme === 'dark' ? Colors.dark.modalBorder : Colors.light.modalBorder}]}> 
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h4,color:theme === 'dark' ? Colors.light.primary : 
Colors.dark.primary}]}>{obj.show}</Text>
</TouchableOpacity>
)



const getMarket = () => {

switch (true) {

case (liveSubCode === 'null'):

const toast = {type:'customError',name:myClient.fname,info:lingual.getPremium[lang],onHide:() => {}, visibilityTime:4000}
showToast(toast)
break;


case (liveCount === 0):

const toastB = {type:'customError',name:myClient.fname,info:lingual.limitReach[lang],onHide:() => {}, visibilityTime:4000}
showToast(toastB)
break;


case (liveSubCode !== 'null' && liveCount > 0):

if (isloading || showLoad.a) return

const result = checkNetwork()
if (!result)return

setisloading(true)
setshowLoad({a:true,b:false})

const data = { rkey:roomKey,userId:myClient.uname }
socket.emit('SearchMarket',data)
break;

}

}


const getCrypto = () => {

switch (true) {

case (liveSubCode === 'null'):

const toast = {type:'customError',name:myClient.fname,info:lingual.getPremium[lang],onHide:() => {}, visibilityTime:4000}
showToast(toast)
break;


case (liveCount === 0):

const toastB = {type:'customError',name:myClient.fname,info:lingual.limitReach[lang],onHide:() => {}, visibilityTime:4000}
showToast(toastB)
break;


case (liveSubCode !== 'null' && liveCount > 0):

if (isloading || showLoad.b) return

const result = checkNetwork()
if (!result)return

setisloading(true)
setshowLoad({a:false,b:true})

const data = { rkey:roomKey,userId:myClient.uname }
socket.emit('SearchCrypto',data)
break;

}

}



useEffect(() => {

if (isBack && isloading) {
handleNavigate()
}

},[isBack])


useEffect(() => {

if (action !== 'null'){
fixTitle(action)
}


},[action])


useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])



useEffect(() => {

if (shouldntDisplay.value === true) {
shouldntDisplay.value = false
}

},[shouldntDisplay])



useEffect(() => {

const handleRes = (obj:any) => {
setsearchArray(obj.data)
setisBack(true)
}

socket.on("resultMarket", handleRes)
socket.on("resultCrypto", handleRes)

return () => {

socket.off("resultMarket", handleRes)
socket.off("resultCrypto", handleRes)
}

},[socket])



return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>

<View style={styles.cupA}></View>

<View style={styles.cupB}>

<View style={styles.framei}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h1_8,color:theme === 'dark' ? Colors.light.primary : 
Colors.dark.base}]}>
Global Search</Text>

<View style={styles.badgeBox}>

<View style={[styles.badge,{backgroundColor:theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn,paddingBottom:platform === 'ios' ? 0 : 4}]}>
<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h3,color:Colors.light.primary}]}>{liveCount}</Text>
</View>

</View>

</View>

<View style={styles.frameii}></View>

<View style={styles.frameiii}>

<View style={[styles.boxa,{borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border,
backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderRadius:typo.h5}]}>

<SearchName />

</View>

<View style={[styles.boxb,{borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border,
backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderRadius:typo.h5}]}>

<SearchTime  setshowModal={setshowModal} setaction={setaction} country={country} livecategory={livecategory} />

</View>

<View style={[styles.boxc,{borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border,
backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderRadius:typo.h5}]}>

<SearchCity liveDynamic={liveDynamic} setaction={setaction} setgoAuto={setgoAuto} setliveArray={setliveArray} 
setshowModal={setshowModal} country={countryC}/>

</View>

<View style={[styles.boxd,{borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border,
backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderRadius:typo.h5}]}>

<TouchableOpacity onPress={getMarket} style={styles.tap}>
{
showLoad.a ? (<ActivityIndicator size={typo.h4} color={theme === 'dark' ? Colors.dark.Activebtn :
Colors.light.Activebtn} /> ) :
(<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h4,color:theme === 'dark' ? Colors.dark.Activebtn :
Colors.light.Activebtn}]}>Market News</Text>)
}
</TouchableOpacity>

<TouchableOpacity onPress={getCrypto} style={styles.tap}>
{
showLoad.b ? (<ActivityIndicator size={typo.h4} color={theme === 'dark' ? Colors.dark.Activebtn :
Colors.light.Activebtn} /> ) :
(<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h4,color:theme === 'dark' ? Colors.dark.Activebtn :
Colors.light.Activebtn}]}>Crypto News</Text>)
}
</TouchableOpacity>

</View>

</View>

</View>



<Modal transparent={true} animationType='slide' visible={showModal} onRequestClose={() => setshowModal(false)}>
<View style={styles.centeredView}></View>
<View style={[styles.modalView,{backgroundColor:theme === 'dark' ? Colors.dark.placeholder : Colors.light.tertiary}]}>

<View style={styles.pick}></View>

{
goAuto ?  (<View style={styles.pickQ}><Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.primary : 
Colors.dark.base}]}>{title}</Text></View>) : (<View style={styles.pickA}>

<View style={styles.heada}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.primary : 
Colors.dark.base}]}>{title}</Text>
</View>

<TouchableOpacity style={styles.headb}  onPress={() => setshowModal(false)}>
<AppIcon name={placeholderX} size={typo.h1_8} />
</TouchableOpacity>

</View>)
}



<View style={styles.pick}></View>

{
((action === 'showCountry') && !goAuto) &&
<View style={styles.pickB}>
<FlatList ListFooterComponent={() =><View style={{width:'100%',height:20}}></View>} data={data} keyExtractor={item => item.icon} 
style={{width:'100%',height:'100%'}} contentContainerStyle={{justifyContent:'center',alignItems:'center'}}
showsVerticalScrollIndicator={false}
renderItem={({item}) => <CountryTag label={item.name} value={item.icon} />} />
</View>
}


{
((action === 'showCountryC') && !goAuto) &&
<View style={styles.pickB}>
<FlatList ListFooterComponent={() =><View style={{width:'100%',height:20}}></View>} data={data} keyExtractor={item => item.icon} 
style={{width:'100%',height:'100%'}} contentContainerStyle={{justifyContent:'center',alignItems:'center'}}
showsVerticalScrollIndicator={false}
renderItem={({item}) => <CountryTag label={item.name} value={item.icon} />} />
</View>
}



{
(action === 'showCategory'&& !goAuto) &&
<View style={styles.pickB}>
<FlatList ListFooterComponent={() =><View style={{width:'100%',height:20}}></View>} 
style={{width:'100%',height:'100%'}} 
showsVerticalScrollIndicator={false}
contentContainerStyle={{justifyContent:'center',alignItems:'center'}}
data={categoryList} keyExtractor={item => item.id}
renderItem={({item}) => <CategoryTag item={item.item} />} />
</View>
}


{
((action === 'statesIn') && goAuto) &&
<View style={styles.pickB}>
<FlatList ListFooterComponent={() =><View style={{width:'100%',height:20}}></View>} 
style={{width:'100%',height:'100%'}} 
showsVerticalScrollIndicator={false}
contentContainerStyle={{justifyContent:'center',alignItems:'center'}}
data={liveArray} keyExtractor={item => item.send}
renderItem={({item}) => <DynamicTag obj={item} /> } />
</View>
}

{
((action ===  'citiesIn') && goAuto) &&
<View style={styles.pickB}>
<FlatList ListFooterComponent={() =><View style={{width:'100%',height:20}}></View>} 
style={{width:'100%',height:'100%'}} 
showsVerticalScrollIndicator={false}
contentContainerStyle={{justifyContent:'center',alignItems:'center'}}
data={liveArray} keyExtractor={item => item.send}
renderItem={({item}) => <DynamicTag obj={item} /> } />
</View>
}

</View>
</Modal>

</View>
)
}

export default searchpage






const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center'
},

cupA:{
width:'100%',
height:'7%',
justifyContent:'center',
alignItems:'center',
},


cupB:{
width:'100%',
height:'93%',
justifyContent:'flex-start',
alignItems:'center',
flexDirection:'column'
},


framei:{
width:'100%',
height:'5%',
justifyContent:'center',
alignItems:'center',
},

frameii:{
width:'100%',
height:'1.7%',
justifyContent:'center',
alignItems:'center',
},

frameiii:{
width:'100%',
height:'92%',
justifyContent:'flex-start',
alignItems:'center',
flexDirection:'column',
rowGap:10
},


badgeBox:{
width:'20%',
height:'100%',
justifyContent:'center',
alignItems:'center',
position:'absolute',
top:0,
right:0
},


badge:{
width:'35%',
aspectRatio:1,
borderRadius:9999,
overflow:'hidden',
justifyContent:'center',
alignItems:'center'
},


boxa:{
width:'95%',
height:'16%',
justifyContent:'flex-end',
alignItems:'center',
flexDirection:'column',
borderWidth:1
},




boxb:{
width:'95%',
height:'43%',
justifyContent:'flex-start',
alignItems:'center',
borderWidth:1,
flexDirection:'column'
},


boxc:{
width:'95%',
height:'20%',
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
borderWidth:1
},


boxd:{
width:'95%',
height:'4.6%',
justifyContent:'space-between',
alignItems:'center',
flexDirection:'row',
borderWidth:1
},



tap:{
width:'30%',
height:'90%',
justifyContent:'center',
alignItems:'center',
},




centeredView: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},


modalView: {
width:'100%',
height:'55%',
alignItems: 'center', 
justifyContent:'flex-start',
borderTopLeftRadius:25,
borderTopRightRadius:25,
flexDirection:'column',
},

pick:{
width:'90%',
height:'3%',
justifyContent:'center',
alignItems:'flex-end'
},


pickA:{
width:'92%',
height:'7%',
justifyContent:'center',
alignItems:'center',
flexDirection:'row'
},

pickB:{
width:'100%',
height:'87%',
justifyContent:'flex-start',
alignItems:'center',
},


pickQ:{
width:'92%',
height:'7%',
justifyContent:'center',
alignItems:'center',
},

heada:{
width:'85%',
height:'100%',
justifyContent:'center',
alignItems:'flex-start',
},

headb:{
width:'15%',
height:'100%',
justifyContent:'center',
alignItems:'flex-end',
},

tag:{
width:380,
height:50,
justifyContent:'center',
alignItems:'flex-start',
borderBottomWidth:1,
paddingLeft:20
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