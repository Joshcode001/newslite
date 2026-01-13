

import { View, Text, StyleSheet,TouchableOpacity,Modal,TextInput,FlatList} from 'react-native'
import React from 'react'
import { useContext,useState,useEffect,useRef} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { Colors } from '@/src/utils/color'
import { Image } from 'expo-image';
import Ionicons from '@expo/vector-icons/Ionicons';
import CountryFlag from "react-native-country-flag";
import Feather from '@expo/vector-icons/Feather';
import { data,lingual } from '@/src/utils/dataset' 
import Animated, {  useSharedValue, SharedValue, useAnimatedRef,useAnimatedScrollHandler,useAnimatedStyle,withTiming} from 'react-native-reanimated'
import CustomNav from '@/src/components/CustomNav'
import CusNewsBox from '@/src/components/CusNewsBox'
import Cusloader from '@/src/components/Cusloader'






type ctag = {
name:string,
abbr:string,
icon:string
}




type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";






const index = () => {

const lastOffset = useRef(0)
const lastpubDate = useRef('')
const {theme,WIDTH,HEIGHT,setSelectedC,selectedC,postArray,shouldntDisplay,socket,roomKey,isloading,setisloading,isClick,appLang,getlang} = useContext(AuthContext)
const [lang, setlang] = useState<langt>('en')
const [modalVisible, setModalVisible] = useState(false);
const [earlierText,setearlierText] = useState('')
const [elyCount,setelyCount] = useState(2)
const [searchtext, setsearchtext] = useState('');
const animatedRef = useAnimatedRef<FlatList>()





const formatTime = () => {

const earlier = lingual.Earlier[lang]
const currCount = `${elyCount}h`
const ago = lingual.ago[lang].replace("{time}",currCount)

const text = `${earlier} ${ago}`
setearlierText(text)

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

if (currentOffset - lastOffset.current > 10) {
shouldntDisplay.value = true
} else if (lastOffset.current - currentOffset > 10) {
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
<TouchableOpacity style={[styles.ctag,{backgroundColor:selectedC.icon === icon ? (theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary ) : 'transparent'}]} onPress={() => getCountryTop(abbr,icon,name)} >
<View style={styles.cboxa}>
<CountryFlag isoCode={icon} size={18} />
</View>
<View style={styles.cboxb}>
<Text style={[styles.textB700,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary,fontFamily:'CabinetGrotesk-Regular'}]}>{name}</Text>
</View>
</TouchableOpacity>
)


const ListEmpty = () => (
<View style={styles.empty}>
<Text>Try again..</Text>
</View>
)




const ListFooter = () => (
<TouchableOpacity onPress={getEarlier} style={[styles.footer,{width:300,height:50,backgroundColor:theme === 'dark' ? Colors.dark.inappbutn : Colors.light.inappbutn,display:postArray.length === 0 ? "none" : "flex"}]}>
<Text style={[styles.textB700,{color:theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn}]}>{earlierText}</Text>
</TouchableOpacity>
)




const newData = data.filter((item) => item.name.toLowerCase().includes(searchtext.toLowerCase()))




useEffect(() => {

if (postArray.length !== 0) {

lastpubDate.current = postArray[postArray.length - 1].pubDate
}

},[postArray])



useEffect(() => {

getlang(appLang,setlang)

},[appLang])



useEffect(() => {

formatTime()
},[elyCount])




return (
<View style={[styles.container,{backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base, width:WIDTH,height:HEIGHT}]}>

<View style={styles.cupone}>
<Animated.View style={[styles.header,headerStyle]}>
<View style={styles.headone}>
<View style={styles.itema}>
{
theme === 'dark' ? (<Image source={require('../../../../assets/images/activelogo-dark.png')} style={{width:'42%', height:'57%'}}/>) : (<Image source={require('../../../../assets/images/activelogo-light.png')} style={{width:'42%', height:'57%'}}/>)
}
</View>

<TouchableOpacity style={styles.itemb}>
<Ionicons name="notifications-outline" size={24} color={theme === 'dark' ? Colors.light.primary : Colors.dark.primary} />
</TouchableOpacity>
</View>


<View style={styles.headtwo}>
<View style={styles.diva}>
<TouchableOpacity onPress={() => setModalVisible(true)} style={[styles.tag,{backgroundColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary}]}>
<View style={styles.sidea}>
<CountryFlag isoCode={selectedC.icon} size={18} />
</View>
<View style={styles.sideb}>
<Text style={[styles.textB700,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>{selectedC.abbr}</Text>
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
isloading ? (<View style={styles.loaderView}><Cusloader top={300} /></View>) : (<Animated.FlatList  ListEmptyComponent={() => <ListEmpty/>} getItemLayout={(data,index) => ({length:(HEIGHT / 2.4) + 5,offset:(HEIGHT / 2.4) + 5 * index,index})} ListFooterComponent={() => <ListFooter />} ListFooterComponentStyle={{width:'100%',height:"20%",justifyContent:'flex-start', alignItems:'center',marginBottom:120}}  style={{width:'100%',maxHeight:'auto',flex:1}} contentContainerStyle={styles.ccsOne}  onScroll={scrollHandler}  showsVerticalScrollIndicator={false}  data={postArray} keyExtractor={item => item.article_id} renderItem={({item}) => <CusNewsBox articleId={item.article_id} commentLength={item.comments.length} image={item.image_url} title={item.title} description={item.description} likes={item.likes}/>}/>)
}
</Animated.View>






<Modal animationType='fade' transparent visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
<View style={styles.centeredView} >
<View style={[styles.modalView,{backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary}]}>
<View style={[styles.taba,{borderBottomColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary}]}>
<View style={styles.rowa}>
<Feather name="search" size={25} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</View>
<View style={styles.rowb}>
<TextInput value={searchtext} onChangeText={(text) => setsearchtext(text)} placeholder='Search Country...' placeholderTextColor={theme === 'dark' ? Colors.dark.placeholder : Colors.light.placeholder}style={[styles.input,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}/>
</View>
</View>


<View  style={[styles.tabb,{borderColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>
<FlatList getItemLayout={(data,index) => ({length:65,offset:65 * index,index})} keyboardShouldPersistTaps ='handled' data={newData} keyExtractor={item => item.icon} renderItem={({item}) => <CountryTag abbr={item.abbr}  name={item.name} icon={item.icon} />} />
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



textB700: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:700,
fontSize:18,
},



tag:{
justifyContent:'space-around',
alignItems:'center',
width:'90%',
height:'75%',
borderRadius:12,
flexDirection:'row',
},

sidea:{
justifyContent:'center',
alignItems:'center',
width:'42%',
height:'100%',
},

sideb:{
justifyContent:'center',
alignItems:'flex-start',
width:'58%',
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
rowGap:13,
justifyContent:'center',
position:'absolute',
top:'19%',
right:'5%',
height:'43%',
borderRadius: 20,
alignItems: 'center',
shadowColor: '#000',
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4,
elevation: 5,
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
width:'88%',
height:'100%',

},


tabb:{
justifyContent:'flex-start',
alignItems:'center',
width:'92%',
height:'80%',
borderRadius:10,
borderWidth:1

},

input:{
width:'100%',
height:'100%',
padding:5,
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
fontSize:24,
},


ctag:{
width:'100%',
height:60,
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
borderRadius:9
},

ccsOne:{
width:'100%',
height:'auto',
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
height:600
}


})