import { View, Text, StyleSheet, Pressable, ActivityIndicator, TouchableOpacity, FlatList, ViewToken} from 'react-native'
import React, { useEffect, useState, useContext, useCallback} from 'react'
import { useLocalSearchParams , useRouter} from 'expo-router'
import { Image } from 'expo-image'
import AntDesign from '@expo/vector-icons/AntDesign';
import { AuthContext} from '@/src/utils/authContext';
import { ActiveColors } from "@/src/utils/color";
import Animated, { SharedValue, useSharedValue, useAnimatedRef} from 'react-native-reanimated';
import CNewsItem from '@/src/components/CNewsItem';




type lry = {
userid: string,
}




type comm = {
userid:string,
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




const name = () => {


const animatedRef = useAnimatedRef<FlatList>()
const Views = useSharedValue<ViewToken<res>[]>([])
const router = useRouter()
const id = 7
const {name, category, image} = useLocalSearchParams()
const [isLoading, setIsLoading] = useState(false)
const [nextPage, setnextPage] = useState('')
const [post, setpost] = useState<res[]>([])
const {theme, WIDTH, api} = useContext(AuthContext)

let names:string = ''
let cate:string = ''
let img:string = ''

if (typeof name === 'string' ) {
names = name
}
if (typeof category === 'string' ) {
cate =category
}
if (typeof image === 'string' ) {
img = image
}









const getPdata = async (prop: string) => {
setIsLoading(true)
try {
const resp = await api.post('/data/search', {prop:prop})
const json = resp.data.json
setnextPage(json.nextPage)

setIsLoading(false)
} catch (err) {
console.log(err)
}
}



const getCdata = async (prop: string) => {
setIsLoading(true)
try {
const resp = await api.post('/data/crypto', {prop:prop})
const json = resp.data.json
setnextPage(json.nextPage)

setIsLoading(false)
} catch (err) {
console.log(err)
}
}




const getDdata = async (prop: string) => {

setIsLoading(true)
try {
const resp = await api.post('/data/domain', {prop:prop})
const json = resp.data.json
setnextPage(json.nextPage)

setIsLoading(false)
} catch (err) {
console.log(err)
}
}





useEffect(() => {
if (category === 'Popular People!') {
getPdata(names)
} else if (category === 'Popular Sources!') {
getDdata(names)
} else if (category === 'Popular CryptoCoins!') {
getCdata(names)
}

console.log(names)

},[])



const renderItem = useCallback(({item}:obt) => (
<CNewsItem Views={Views}  item={item} _id={id}/>),[])







return (
<View style={[styles.container,{width:WIDTH}]}>
<View style={[styles.head, {backgroundColor:theme === 'dark' ? ActiveColors.dark.wblue: ActiveColors.light.wblue }]}>
<Pressable onPress={()=> router.back()}>
<View style={styles.backbox}><AntDesign name="left" size={22} color="azure" /></View>
</Pressable>
<View style={styles.scle}>
<Image  source={img} style={{width:80, height:80, borderRadius: 50}} contentFit='cover'/>
</View>
</View>

<View style={[styles.content, {backgroundColor:theme === 'dark' ? ActiveColors.dark.base : ActiveColors.light.base},{width:WIDTH}]}>
{(isLoading) ? (<ActivityIndicator />) : 
<Animated.FlatList onViewableItemsChanged={({viewableItems}) => {Views.value = viewableItems}}  ref={animatedRef} data={post}  renderItem={renderItem} keyExtractor={item => item.article_id}
ListFooterComponent={()=> (
<View style={[styles.foot,{backgroundColor:theme === 'dark' ? ActiveColors.dark.accent : ActiveColors.light.tertiary}, {width:WIDTH}]}>
<TouchableOpacity disabled={nextPage === null} onPress={()=> {
router.push({
pathname: '../delay/[pagef]',
params: {
name:name,
category: cate,
pagef:nextPage,
image: img
}

})
}}>
<Text style={[{color: theme === 'dark' ? ActiveColors.light.primary: ActiveColors.dark.base },styles.loadtxt]}>Load More...</Text>
</TouchableOpacity>
</View>)}
/>}
</View>
<View style={[styles.emptyv, {backgroundColor:theme === 'dark' ? ActiveColors.dark.base :ActiveColors.light.base}]}></View>
</View>
)
}















export default name











const styles = StyleSheet.create({

container: {
flex: 1,
justifyContent: "center",
alignItems: "center",
backgroundColor:'#EDEDED'
},

head: {
flexDirection:'row',
flex:1.7,
justifyContent: "space-between",
alignItems: "flex-end",
width:'100%'
},

content: {
flex:8.3,
justifyContent: "center",
alignItems: "center",
maxHeight:2000,
alignContent:'center'
},

scle:{
width: 80,
height: 80,
borderRadius:'50%',
backgroundColor:'white',
margin:10,
},

backbox: {
width:100,
height:30,
alignSelf:'center',
marginBottom:33,
marginLeft: 15
},

foot: {
height:50,
justifyContent: 'center',
alignItems:'center',
marginBottom:5
},


emptyv: {
height:50,
width:'100%'
},



loadtxt:{
width:"100%",
justifyContent:'center',
alignItems:'center'
}
})