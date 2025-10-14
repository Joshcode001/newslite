import { View, Text, StyleSheet, FlatList ,Pressable,TouchableOpacity,ActivityIndicator, ViewToken} from 'react-native'
import React,{useState, useRef, useEffect, useContext, useCallback} from 'react'
import { useLocalSearchParams, Stack,useRouter } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import { CountryTagg } from '../[category]' 
import { AuthContext } from "@/src/utils/authContext";
import CustomNav from '@/src/components/CustomNav';
import Animated ,{ useSharedValue,withTiming, useAnimatedRef,scrollTo,useDerivedValue, SharedValue} from 'react-native-reanimated'
import { ActiveColors } from "@/src/utils/color";
import CNewsItem from "@/src/components/CNewsItem";
import { multilingual } from '@/src/utils/dataset';







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
item: res
}




const page = () => {

const [lang, setlang] = useState<langt>("en")
const Views = useSharedValue<ViewToken<res>[]>([])
const animatedRef2 = useAnimatedRef<FlatList>()
const animatedRef = useAnimatedRef<FlatList>()
const authState = useContext(AuthContext)
const [isLoading, setisLoading] = useState(false)
const [nextPage, setnextPage] = useState('')
const [post, setpost] = useState<res[]>([])
const ref = useRef(null)
const id = 4
const router = useRouter()
const {country,category,page,icon} = useLocalSearchParams()
const theme = authState.theme
const api = authState.api
const appLang = authState.appLang
const getlang = authState.getlang



let con:string = '';
let cgory:string = '';
let pag:string = ''
let econ:string = ''
if (typeof country === 'string') {
con = country
}
if (typeof category === 'string') {
cgory = category;
}
if (typeof page === 'string') {
pag = page;
}
if (typeof icon === 'string') {
econ = icon;
}









const getNNews = async (nm:string,cte:string,pn:string) => {
try {
setisLoading(true)
const resp = await api.post('/data/more' , {cty:nm, cte:cte , pn:pn})
const json = resp.data.json
setisLoading(false)
setnextPage(json.nextPage)
setpost(json.results)

} catch(err){
console.log(err)
}

}

const scroll = useSharedValue(0)

useDerivedValue(() => {
scrollTo(
animatedRef,
scroll.value,
0,
true
);
});




const renderItem= useCallback(({item}:obt) => <CNewsItem item={item} Views={Views} _id={id}/>,[])




useEffect(() => {
getNNews(econ,cgory,pag);
switch(cgory) {
case 'business':
scroll.value = withTiming(0)
break;
case 'crime':
scroll.value = withTiming(0)
break;
case 'domestic':
scroll.value = withTiming(0)
break;
case 'education':
scroll.value = withTiming(420)
break;
case 'entertainment':
scroll.value = withTiming(420)
break;
case 'environment':
scroll.value = withTiming(420)
break;
case 'food':
scroll.value = withTiming(840)
break;
case 'health':
scroll.value = withTiming(840)
break;
case 'lifestyle':
scroll.value = withTiming(840)
break;
case 'politics':
scroll.value = withTiming(1260)
break;
case 'science':
scroll.value = withTiming(1260)
break;
case 'sports':
scroll.value = withTiming(1260)
break;
case 'technology':
scroll.value = withTiming(1680)
break;
case 'tourism':
scroll.value = withTiming(1680)
break;
}
}, [])



useEffect(() => {

getlang(appLang,setlang)

},[appLang])





return (
<View style={[styles.container, {width: authState.WIDTH}]}>
<Stack.Screen options={{
title:'',
headerRight:() => <CountryTagg  sname={con} icon={econ}/>,
headerLeft: () => <Pressable onPress={()=> router.back()}>
<View style={styles.backbox}><AntDesign name="left" size={20} color="azure" /></View>
</Pressable>,
animation:'none',

}}/>
<View style={[styles.navbar,{backgroundColor:theme === 'dark' ? ActiveColors.dark.tertiary : ActiveColors.light.base},{width: authState.WIDTH}]}>
<CustomNav animatedRef={animatedRef}   router={router}  Ref={ref} icon={econ} selectedC={con}  isC={cgory} 
 data={authState.category}/>
</View>

<View style={[styles.content, {backgroundColor:theme === 'dark' ? ActiveColors.dark.base :ActiveColors.light.base},{width: authState.WIDTH}]}>
{isLoading ? (<ActivityIndicator animating={true} color='#15389A' size={20} />) : (
<Animated.FlatList onViewableItemsChanged={({viewableItems}) => {Views.value = viewableItems}}  ref={animatedRef2} data={post} renderItem={renderItem} keyExtractor={item => item.article_id} ListFooterComponent={()=> <View style={[styles.foot,{backgroundColor:theme === 'dark' ? ActiveColors.dark.accent : ActiveColors.light.tertiary}, {width: authState.WIDTH}]}>
<TouchableOpacity disabled={nextPage === null}
onPress={() => {
router.push({
pathname: './[page]',
params:{
country:con,
category: cgory,
page:nextPage,
icon:econ,
}

})
}}>
<Text style={[{color: theme === 'dark' ? ActiveColors.light.primary: ActiveColors.dark.base }, styles.loadtxt]}>{multilingual.Loadmore[lang]}...</Text>

</TouchableOpacity>
</View> }/>
)}
</View>
</View>
)
}








const styles = StyleSheet.create({
container:{
flex: 1,
justifyContent: "center",
alignItems: "center",
},

countryn: {
color:'azure'
},


navbar: {
flex: 0.8,
justifyContent: 'center',
alignItems:'center',
},

content: {
flex: 9.2,
maxHeight:2000,
justifyContent: 'center',
alignItems:'center',
alignContent:'center'
},


foot: {
height:50,
justifyContent: 'center',
alignItems:'center'
},

backbox: {
width:100,
height:30,
justifyContent:'center',
alignItems:'flex-start',
},


loadtxt:{
width:"100%",
justifyContent:'center',
alignItems:'center'
}

})















export default page