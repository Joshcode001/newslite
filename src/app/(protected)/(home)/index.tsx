

import { Text, View ,StyleSheet,Pressable,TouchableOpacity, Modal,FlatList,TextInput,ActivityIndicator, RefreshControl, ViewToken} from "react-native";
import { Stack,useRouter} from "expo-router";
import React, {useState, useEffect,useRef,  useContext, useCallback} from "react";
import Octicons from '@expo/vector-icons/Octicons';
import CountryFlag from "react-native-country-flag";
import { AuthContext } from "@/src/utils/authContext";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {  useSharedValue, SharedValue, useAnimatedRef} from 'react-native-reanimated'
import CustomNav from "@/src/components/CustomNav";
import { ActiveColors } from "@/src/utils/color";
import CNewsItem from "@/src/components/CNewsItem";
import { multilingual } from "@/src/utils/dataset";









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
great:lry[]
sad:lry[]
thumbup:lry[]
thumbdown:lry[]
}



type ctag = {
onPressc : () => void,
cicon: string,
cname: string
}

type ntag = {
onPressb : () => void
}

type ctag2 = {
cname: string,
icon: string,
onPressc: () => void,
theme: string

}
type stag = {
setSearch: (text: string) => void,
search: string,
theme: string,
lang:langt
}



type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id";




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
item: res
}













export const Notifybar = ({onPressb}: ntag) => (
<View style={styles.notify}>
<Pressable onPress={onPressb}>
<Octicons name="bell" size={20} color="azure" />
</Pressable>
</View>
)





export const Countrybar = ({onPressc, cname, cicon}: ctag) => (
<View style={styles.countrybar}>
<Pressable onPress={onPressc}>
<CountryFlag isoCode={cicon} size={18} />
</Pressable>
<Pressable onPress={onPressc}>
<Text style={styles.text}>{cname}</Text>
</Pressable>
</View>
)





export const CountryTag = ({cname, icon,onPressc, theme}: ctag2) => (
<TouchableOpacity style={styles.ctag} onPress={onPressc}>
<CountryFlag isoCode={icon} size={20} />
<Text style={[styles.cntag, {color:theme === 'dark' ? ActiveColors.dark.secondary: ActiveColors.light.secondary}]}>{cname}</Text>
</TouchableOpacity>
)





export const Searchbar = ({setSearch, search, theme,lang}: stag) => (
<View style={[styles.sbox, {backgroundColor: theme === 'dark' ? ActiveColors.dark.violet : ActiveColors.light.violet}]}>
<TextInput placeholderTextColor="#804646" placeholder={multilingual.searchbyname[lang]} onChangeText={text => setSearch(text)} value={search}
style={[styles.input, {backgroundColor: theme === 'dark' ? ActiveColors.dark.violet : ActiveColors.light.violet}]} />
</View>
)












export default function Index() {



const Views = useSharedValue<ViewToken<res>[]>([])
const animatedRef2 = useAnimatedRef<FlatList>()
const animatedRef = useAnimatedRef<FlatList>()
const {data, theme, category,HEIGHT,WIDTH, api,setItems, voice, langset, selectedC, setSelectedC,appLang,getlang} = useContext(AuthContext)
const Ref = useRef('')
const id = 1
const router = useRouter()
const [refreshing, setrefreshing] = useState(false)
const [nextPage, setnextPage] = useState('')
const [isLoading, setisLoading] = useState(false)
const [Search, setSearch] = useState('')
const [IsModal, setIsModal] = useState('a')
const [post, setpost] = useState<res[]>([])
const [lang, setlang] = useState<langt>('en')





const cpick = () => {
setIsModal('b')
}
const notifymod = () => {
setIsModal('c')
}

const closeModal = () => {
setIsModal('a')
}



const newData = data.filter((item) => ((item.name).toLowerCase().includes(Search.toLowerCase())))







const getNews = async (id:string) => {
try {
setrefreshing(true)
setisLoading(true)
const resp = await api.get(`/data/home?id=${id}`)

const data = resp.data;

if (data.isVerify === true) {

const json = data.json
setisLoading(false)
setrefreshing(false)
setnextPage(json.nextPage)
setpost(json.results)
} 


} catch(err){
console.log(err)
}

}




const renderItem = useCallback(({item}:obt) => <CNewsItem item={item}Views={Views} _id={id}/>,[])





useEffect(() => {
getNews(selectedC.icon);

}, [])






useEffect(() => {

getlang(appLang,setlang)

},[appLang])








return (
<GestureHandlerRootView style={{flex: 1}}>
<View style={[styles.container, {width: WIDTH}]}>
<Stack.Screen options={{
title: '',
headerRight: ()=> <Notifybar  onPressb={notifymod}/>,
headerLeft: () => <Countrybar onPressc={cpick} cicon={selectedC.icon} cname={selectedC.name}/>
}}/>
<View style={[styles.navbar,{backgroundColor:theme === 'dark' ? ActiveColors.dark.tertiary : ActiveColors.light.base}, {width: WIDTH}]}>
<CustomNav animatedRef={animatedRef} router={router}  data={category} 
selectedC={selectedC.name} Ref={Ref}    icon={selectedC.icon}/>
</View>
<View style={[styles.content, {backgroundColor:theme === 'dark' ? ActiveColors.dark.base :ActiveColors.light.base},{width: WIDTH}]}>
{isLoading ? (<ActivityIndicator animating={true} color='#15389A' size={40}/>) : 
<Animated.FlatList onViewableItemsChanged={({viewableItems}) => {Views.value = viewableItems}}  ref={animatedRef2} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => getNews(selectedC.icon)}/>} data={post} renderItem={renderItem} keyExtractor={item =>item.article_id}
ListFooterComponent={()=> <View style={[styles.foot,{backgroundColor:theme === 'dark' ? ActiveColors.dark.accent : ActiveColors.light.tertiary},{width: WIDTH}]}>
<TouchableOpacity disabled={nextPage === null}
onPress={() => {
router.push({
pathname: './page/[page]',
params:{
country:selectedC.icon,
category: 'top',
page:nextPage,
}
})
}}>

<Text style={[{color: theme === 'dark' ? ActiveColors.light.primary: ActiveColors.dark.base }, styles.loadtxt]}>{multilingual.Loadmore[lang]}...</Text>
</TouchableOpacity>
</View> }/>
}
</View>


<Modal visible={IsModal === 'b'} animationType="slide"
onRequestClose={()=> {setIsModal('a')}} presentationStyle="pageSheet">
<View style={[styles.centeredView,{backgroundColor:theme === 'dark' ? ActiveColors.dark.accent : ActiveColors.light.accent}, {width: WIDTH}]}>
<Searchbar  search={Search} setSearch={setSearch} theme={theme} lang={lang}/>
<View style={[styles.modalView, {backgroundColor:theme === 'dark' ? ActiveColors.dark.dpink :  ActiveColors.light.dpink},{width:WIDTH < 650 ? WIDTH : WIDTH / 2.2},{height:HEIGHT -  200}]}>
<FlatList  data={newData}
 renderItem={({item})=>(
 <CountryTag theme={theme} cname={item.name} icon={item.icon}
onPressc={
() => {
setSelectedC({name: item.name,icon: item.icon});
closeModal();
setSearch('');
setItems(item,voice,langset)} }/>)} 

keyExtractor={item => item.icon}/>
</View>
</View>
</Modal>

<Modal visible={IsModal === 'c'} animationType="slide"
onRequestClose={()=> {setIsModal('a')}} presentationStyle="pageSheet">
<View style={[styles.centeredView,{backgroundColor:theme === 'dark' ? ActiveColors.dark.accent :ActiveColors.light.accent}, {width: WIDTH}]}>
<View style={[styles.modalView, {backgroundColor:theme === 'dark' ? ActiveColors.dark.dpink :  ActiveColors.light.dpink},{width:WIDTH < 650 ? WIDTH : WIDTH / 2.2}, {height:HEIGHT -  200}]}>
<Text>Hi there!</Text>
</View>
</View>
</Modal>
</View>
</GestureHandlerRootView>
);
}




const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
alignContent: "center",

},

countrybar: {
width:200,
height:30,
justifyContent: 'flex-start',
alignItems:'center',
flexDirection: 'row',
columnGap: 10

},

text: {
color:'azure',
fontSize:17

},

centeredView: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},

modalView: {
borderRadius: 30,
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

notify: {
width:100,
height:30,
justifyContent: 'center',
alignItems:'flex-end',
}, 

ctag: {
width: 350,
height: 80,
borderRadius: 10,
flexDirection:'row',
columnGap:30,
justifyContent: 'flex-start',
alignItems:'center',

},
cntag: {
fontSize:16,
},


sbox: {
marginBottom: 40,
width: 300,
height: 50,
borderRadius:50,
justifyContent:'center',
alignItems: 'center'
},

input: {
width:200,
height: 50,
color:'azure',
fontSize:20  
},

navbar: {
flex: 0.8,
justifyContent: 'center',
alignItems:'center',
alignContent:'center',
},

content: {
flex: 9.2,
maxHeight:2000,
justifyContent: 'center',

alignContent:'center',


},


foot: {
height:50,
justifyContent: 'center',
alignItems:'center',

},



loadtxt:{
width:"100%",
justifyContent:'center',
alignItems:'center'
},




})

