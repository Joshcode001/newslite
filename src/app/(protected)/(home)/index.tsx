

import { View, Text, StyleSheet,TouchableOpacity,Modal,TextInput,FlatList} from 'react-native'
import React from 'react'
import { useContext,useState,useEffect,useRef} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { Colors } from '@/src/utils/color'
import { Image } from 'expo-image';
import CountryFlag from "react-native-country-flag";
import Feather from '@expo/vector-icons/Feather';
import { data,lingual,category } from '@/src/utils/dataset' 
import Animated, {useAnimatedRef,useAnimatedScrollHandler,useAnimatedStyle,withTiming} from 'react-native-reanimated'
import CustomNav from '@/src/components/CustomNav'
import CusNewsBox from '@/src/components/CusNewsBox'
import Cusloader from '@/src/components/Cusloader'
import { typo,length } from '@/src/utils/typo'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router'



type ctag = {
name:string,
abbr:string,
icon:string
}


type userlike = {
userId:string,
createdAt: string,
image: string,
}


type like = {
heart:userlike[],
laugh:userlike[],
sad:userlike[],
angry:userlike[],
thumb:userlike[]
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
likes:userlike[],
replies:comm[]
}



type commlist = {
article_id:string,
title:string,
description:string,
content:string,
keywords:string,
country:string,
category:string,
pubDate:string,
image_url:string,
source_url:string,
source_name:string,
source_icon:string,
ai_summary:string,
comments:{array:comm[],count:number},
likes:like
}




type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";






const index = () => {

const router = useRouter()
const lastOffset = useRef(0)
const lastpubDate = useRef('')
const {theme,WIDTH,HEIGHT,setSelectedC,selectedC,postArray,shouldntDisplay,socket,roomKey,isloading,setisloading,isClick,appLang,getlang,coldId,liveInbox} = useContext(AuthContext)
const [lang, setlang] = useState<langt>('en')
const [modalVisible, setModalVisible] = useState(false);
const [earlierText,setearlierText] = useState('')
const [elyCount,setelyCount] = useState(2)
const [searchtext, setsearchtext] = useState('');
const [sentence, setsentence] = useState({first:'',second:''});
const animatedRef = useAnimatedRef<FlatList>()


const placeholderA = theme === 'dark' ? require('../../../../assets/images/activelogo-dark.png') :
require('../../../../assets/images/activelogo-light.png')


const placeholderB = theme === 'dark' ? require('../../../../assets/images/notificationdark.png') :
require('../../../../assets/images/notificationlight.png')

const hasUnRead = liveInbox.some(li => li.isRead === false)


const formatTime = () => {

const earlier = lingual.Earlier[lang]
const currCount = `${elyCount}h`
const ago = lingual.ago[lang].replace("{time}",currCount)

const text = `${earlier} ${ago}`
setearlierText(text)

}



const getMessage = () => {

let result = ''

if (isClick === 'All') {

result = lingual.emptyCountry[lang].replace("{label}",selectedC.name)

}else if (isClick !== 'All') {

const obj = category.find(data => data.item.en === isClick)

if ( !obj ) return

result = lingual.emptyCategory[lang].replace("{label}",obj.item[lang]).replace("{country}",selectedC.name)
}

return result
}




const headerStyle = useAnimatedStyle(() => {
return {
transform: [
{
translateY: withTiming(
shouldntDisplay.value ? -('63%'): 0,
{ duration: 250 }
),
},
],
opacity: withTiming(shouldntDisplay.value ? 0 : 1,{ duration: 200 }),
};
})



const listStyle = useAnimatedStyle(() => {
return {
height: withTiming(shouldntDisplay.value ? "100%": "82.3%",{ duration: 200 })
}
})



const scrollHandler = useAnimatedScrollHandler({
onScroll: (event) => {
const currentOffset = event.contentOffset.y

if (currentOffset - lastOffset.current > 30) {
shouldntDisplay.value = true
} else if (lastOffset.current - currentOffset > 30) {
shouldntDisplay.value = false
}

lastOffset.current = currentOffset;
},
});



const getCountryTop = (abbr:string,icon:string,name:string) => {

if (isloading) return

if (!isloading) {
setisloading(true)
}

setSelectedC({name,icon,abbr})
setsearchtext('')
setelyCount(2)
socket.emit('indexArticles',{country:name.toLowerCase(),rkey:roomKey,category:'top'})
setModalVisible(false)

}



const getEarlier = () => {

let category = ''

if (isloading) return
shouldntDisplay.value = false

if (!isloading) {
setisloading(true)
}


if (isClick === 'All') {
category = 'top'
}else if (isClick !== 'All') {
category = isClick.toLowerCase()
}


if (lastpubDate.current !== '' && category !== '') {
setelyCount(prev => prev + 1)
socket.emit('earlierArticles',{country:selectedC.name.toLowerCase(),rkey:roomKey,category,lastId:lastpubDate.current})
}

}



const CountryTag = ({name,abbr,icon}:ctag) => (
<TouchableOpacity style={[styles.ctag,{height:length.l2 / 3,backgroundColor:selectedC.icon === icon ? (theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary ) : 'transparent'}]} onPress={() => getCountryTop(abbr,icon,name)} >
<View style={styles.cboxa}>
<CountryFlag isoCode={icon} size={typo.h3} />
</View>
<View style={styles.cboxb}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary,fontSize:typo.h4}]}>{name}</Text>
</View>
</TouchableOpacity>
)


const ListEmpty = () => (
<View style={[styles.empty,{height:length.l5}]}>

<View style={styles.emptybox}>

<View style={styles.boxA}>
<View style={styles.cop}>
<Text allowFontScaling={false}  style={[styles.textB700,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary,fontSize:typo.h4}]}>{sentence.first}</Text>
</View>

<View style={styles.cop}>
<Text allowFontScaling={false}  style={[styles.textB700,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary,fontSize:typo.h4}]}>{sentence.second}</Text>
</View>

</View>

<View style={styles.boxB}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary,fontSize:typo.h4}]}>{lingual.checkBack[lang]}</Text>
</View>

</View>

</View>
)




const ListFooter = () => (
<TouchableOpacity onPress={getEarlier} style={[styles.footer,{borderRadius:typo.h6,width:typo.h300,height:length.l1 / 2,backgroundColor:theme === 'dark' ? Colors.dark.inappbutn : Colors.light.inappbutn,display:postArray.length === 0 ? "none" : "flex"}]}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn,fontSize:typo.h3}]}>{earlierText}</Text>
</TouchableOpacity>
)




const newData = data.filter((item) => item.name.toLowerCase().includes(searchtext.toLowerCase()))



useEffect(() => {

if (coldId.a !== 'null'){

router.push({ pathname:'/(protected)/(home)/[pagexi]',params:{ pagexi:coldId.a ,id:coldId.b }})
}

},[])



useEffect(() => {

if (postArray.length !== 0) {

lastpubDate.current = postArray[postArray.length - 1].pubDate
}

},[postArray])



useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])



useEffect(() => {

formatTime()
},[elyCount])



useEffect(() => {

if (!isloading && postArray.length === 0 ) {

const result = getMessage()
const words = result?.split(" ")

if (!words) return

setsentence({
first:words.slice(0, 4).join(" "),
second:words.slice(4).join(" ")
})

}

},[postArray,lang])




return (
<View style={[styles.container,{backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base, width:WIDTH,height:HEIGHT}]}>

<View style={styles.cupone}>
<Animated.View style={[styles.header,headerStyle]}>
<View style={styles.headone}>
<View style={styles.itema}>
<Image source={placeholderA} style={{width:'42%', height:'57%'}}/>
</View>

<TouchableOpacity onPress={() => router.push({pathname:'/(protected)/(home)/inbox'})} style={styles.itemb}>
<Image source={placeholderB} style={{width:'30%', height:'50%'}}/>
{
hasUnRead && <View style={[styles.bing,{backgroundColor:Colors.light.notify}]}></View>
}
</TouchableOpacity>
</View>


<View style={styles.headtwo}>
<View style={styles.diva}>
<TouchableOpacity onPress={() => setModalVisible(true)} style={[styles.tag,{borderRadius:typo.h5,backgroundColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary}]}>
<View style={styles.sidea}>
<CountryFlag isoCode={selectedC.icon} size={typo.h3} />
</View>
<View style={styles.sideb}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary,fontSize:typo.h4}]}>{selectedC.abbr}</Text>
</View>
</TouchableOpacity>
</View>
<View style={styles.divb}>
<CustomNav animatedRef={animatedRef} setelyCount={setelyCount} />
</View>
</View>
</Animated.View>
</View>


<Animated.View style={[styles.cuptwo,listStyle]}>
{
isloading ? (<View style={styles.loaderView}><Cusloader top={length.l3} /></View>) : (<Animated.FlatList initialNumToRender={21} ItemSeparatorComponent={() => <View style={{width:'100%',height:33}}></View>}  ListEmptyComponent={() => <ListEmpty/>} getItemLayout={(data,index) => ({length:(HEIGHT / 2.4) + 5,offset:(HEIGHT / 2.4) + 5 * index,index})} ListFooterComponent={() => <ListFooter />} ListFooterComponentStyle={[styles.listfooter,{marginBottom:typo.h120,paddingTop:typo.h1_5}]}  
style={styles.flatlist} contentContainerStyle={styles.ccsOne}  onScroll={scrollHandler}  showsVerticalScrollIndicator={false}  
data={postArray} keyExtractor={item => item.article_id} renderItem={({item}) => <CusNewsBox articleId={item.article_id} commentLength={item.comments.count} pubDate={item.pubDate}
image={item.image_url} title={item.title} description={item.description} likes={item.likes} type='index'/>}/>)
}
</Animated.View>






<Modal animationType='fade' transparent visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
<View style={styles.centeredView} >
<View style={[styles.modalView,{rowGap:typo.h5,borderRadius:typo.h3,backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary}]}>
<View style={[styles.taba,{borderBottomColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary}]}>
<View style={styles.rowa}>
<Feather name="search" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</View>
<View style={styles.rowb}>
<TextInput allowFontScaling={false} value={searchtext} onChangeText={(text) => setsearchtext(text)} placeholder='Search Country...' placeholderTextColor={theme === 'dark' ? Colors.dark.placeholder : Colors.light.placeholder}style={[styles.input,{padding:typo.h8,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h3}]}/>
</View>
<TouchableOpacity onPress={() => setModalVisible(false)} style={styles.rowc}>
<MaterialIcons name="cancel" size={30} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</TouchableOpacity>
</View>


<View  style={[styles.tabb,{borderRadius:typo.h6,borderColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>
<FlatList getItemLayout={(data,index) => ({length:length.l2 / 3,offset:length.l2 / 3 * index,index})} keyboardShouldPersistTaps ='handled' data={newData} keyExtractor={item => item.icon} renderItem={({item}) => <CountryTag abbr={item.abbr}  name={item.name} icon={item.icon} />} />
</View>
</View>
</View>

</Modal>
</View>
)



}

export default index








const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center',
flexDirection:'column'
},

cupone:{
justifyContent:'flex-end',
alignItems:'center',
width:'100%',
height:'17.7%',
},


cuptwo:{
justifyContent:'flex-start',
alignItems:'center',
width:'100%',
},


header:{
display:'flex',
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'63%',
flexDirection:'column'
},


headone:{
justifyContent:'space-between',
alignItems:'center',
width:'100%',
height:'50%',
flexDirection:'row'
},

itema:{
justifyContent:'center',
alignItems:'center',
width:'20%',
height:'100%',
},


itemb:{
justifyContent:'center',
alignItems:'center',
width:'20%',
height:'100%',
},


bing:{
justifyContent:'center',
alignItems:'center',
width:'12%',
aspectRatio:1,
borderRadius:9999,
overflow:'hidden',
position:'absolute',
top:'29%',
right:'35%',
zIndex:10
},



headtwo:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'50%',
flexDirection:'row'
},

diva:{
justifyContent:'center',
alignItems:'center',
width:'32%',
height:'100%',

},


divb:{
justifyContent:'center',
alignItems:'center',
width:'68%',
height:'100%',
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


tag:{
justifyContent:'space-around',
alignItems:'center',
width:'85%',
height:'70%',
flexDirection:'row',
},

sidea:{
justifyContent:'center',
alignItems:'center',
width:'50%',
height:'100%',
},

sideb:{
justifyContent:'center',
alignItems:'flex-start',
width:'50%',
height:'100%',
},


centeredView: {
flex: 1,
justifyContent: 'center',
alignItems:'center'
},


modalView: {
width:'90%',
flexDirection:'column',
justifyContent:'center',
position:'absolute',
top:'19%',
right:'5%',
height:'43%',
alignItems: 'center',

},


taba:{
justifyContent:'center',
alignItems:'center',
width:'92%',
height:'10%',
borderBottomWidth:1,
flexDirection:'row'
},

rowa:{
justifyContent:'center',
alignItems:'center',
width:'12%',
height:'100%',
},

rowb:{
justifyContent:'center',
alignItems:'center',
width:'76%',
height:'100%',
},

rowc:{
justifyContent:'center',
alignItems:'center',
width:'12%',
height:'100%',
},


tabb:{
justifyContent:'flex-start',
alignItems:'center',
width:'92%',
height:'80%',
borderWidth:1
},

input:{
width:'100%',
height:'100%',
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
},


ctag:{
width:'100%',
flexDirection:'row',
justifyContent:'center',
alignItems:'center'
},

cboxa:{
justifyContent:'center',
alignItems:'center',
width:'17%',
height:'100%',
},

cboxb:{
justifyContent:'center',
alignItems:'flex-start',
width:'83%',
height:'100%',
},

footer:{
justifyContent:'center',
alignItems:'center',
},


ccsOne:{
justifyContent:'flex-start',
alignItems:'center'
},

loaderView:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'100%'
},

empty:{
justifyContent:'center',
alignItems:'center',
width:'100%',
},

emptybox:{
justifyContent:'center',
alignItems:'center',
width:'90%',
height:'17%',
flexDirection:'column',
},


boxA:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'70%',
flexDirection:'column'
},

cop:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'50%',
},


boxB:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'30%',
},

listfooter:{
width:'100%',
height:"20%",
justifyContent:'flex-start', 
alignItems:'center',
},

flatlist:{
width:'100%',
height:'100%',
flex:1
}


})