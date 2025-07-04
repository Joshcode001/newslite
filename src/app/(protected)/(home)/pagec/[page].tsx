import { View, Text, StyleSheet, FlatList ,Pressable,TouchableOpacity,ActivityIndicator} from 'react-native'
import React,{useState, useRef, useEffect, useContext} from 'react'
import { useLocalSearchParams, Stack,useRouter } from 'expo-router'
import { Newsitem } from '..'
import AntDesign from '@expo/vector-icons/AntDesign';
import { CountryTagg } from '../[category]' 
import { AuthContext } from "@/src/utils/authContext";
import CustomNav from '@/src/components/CustomNav';
import  { useSharedValue,withTiming, useAnimatedRef,scrollTo,useDerivedValue} from 'react-native-reanimated'
import { SCREEN_WIDTH } from '..';



type res = {
title: string,
sourcen: string,
source_icon: string,
pubDate: string,
image_url: string,
description: string,
link: string,
article_id: string
}









const page = () => {
const animatedRef = useAnimatedRef<FlatList>()
const authState = useContext(AuthContext)
const [isLoading, setisLoading] = useState(false)
const [nextPage, setnextPage] = useState('')
const [Post, setPost] = useState<res[]>([])
const ref = useRef(null)
const router = useRouter()
const {country,category,page,icon} = useLocalSearchParams()
const theme = authState.theme

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
const resp = await fetch(`https://newsdata.io/api/1/latest?country=${nm}&category=${cte}&image=1&page=${pn}`, {
method: 'GET',
headers: {
'X-ACCESS-KEY': 'pub_69410d56c49515d9f48a36495db4edf051d57',
'User-Agent': 'Joshapp/1.0'
}
})
const json = await resp.json()
setisLoading(false)
setnextPage(json.nextPage)
setPost(json.results)

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








return (
<View style={styles.container}>
<Stack.Screen options={{
title:'',
headerRight:() => <CountryTagg  sname={con} icon={econ}/>,
headerLeft: () => <Pressable onPress={()=> router.back()}>
<View style={styles.backbox}><AntDesign name="left" size={20} color="azure" /></View>
</Pressable>,
animation:'none',

}}/>
<View style={[styles.navbar,{backgroundColor:theme === 'dark' ? '#636262' :'#dedcdc'}]}>
<CustomNav animatedRef={animatedRef}   router={router}  Ref={ref} icon={econ} selectedC={con}  isC={cgory} isActive={false} data={authState.category}/>
</View>

<View style={[styles.content, {backgroundColor:theme === 'dark' ? '#1b1c1c' :'#dedcdc'}]}>
{isLoading ? (<ActivityIndicator animating={true} color='#15389A' size={20} />) : (
<FlatList data={Post} renderItem={
({item}) => <Newsitem title={item.title} theme={authState.theme}
source_icon={item.source_icon}
image_url={item.image_url} description={item.description} 
pubDate={item.pubDate} article_id={item.article_id}/>
} keyExtractor={item => item.article_id} ListFooterComponent={()=> <View style={[styles.foot,{backgroundColor:theme === 'dark' ? '#383838' :'white'}]}>
<TouchableOpacity disabled={nextPage === null}
onPress={() => {
router.push({
pathname: './pagec/[page]',
params:{
country:con,
category: cgory,
page:nextPage,
icon:econ,
}

})
}}>
<Text style={{color: theme === 'dark' ?'azure':'#1b1c1c' }}>Load More...</Text>

</TouchableOpacity>
</View> }/>
)}
</View>
<View style={styles.emptyvw}>
</View>
</View>
)
}








const styles = StyleSheet.create({
container:{
flex: 1,
justifyContent: "center",
alignItems: "center",
width:SCREEN_WIDTH
},

countryn: {
color:'azure'
},


navbar: {
flex: 0.8,
width:SCREEN_WIDTH,
justifyContent: 'center',
alignItems:'center',
},

content: {
flex: 9.2,
width:SCREEN_WIDTH,
maxHeight:2000,
justifyContent: 'center',
alignItems:'center',
alignContent:'center'
},


foot: {
width:SCREEN_WIDTH,
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


emptyvw: {
width:SCREEN_WIDTH,
padding:40,
height:50
},


loadtxt:{
width:SCREEN_WIDTH,
justifyContent:'center',
alignItems:'center'
}

})















export default page