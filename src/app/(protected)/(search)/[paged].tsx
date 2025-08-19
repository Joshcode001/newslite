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










const paged = () => {

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
const title = `Today's Global Searches`
const {theme, WIDTH, api} = authstate


let prop = ''
let page = ''

if ( typeof props === "string") {
prop = props
}
if ( typeof paged === "string") {
page = paged
}









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




useEffect(() => {
setsearch(prop)
getNdata(prop, page)
},[])






return (
<GestureHandlerRootView>
<View style={[styles.container, {width: WIDTH}]}>
<View style={[styles.head, {backgroundColor:theme === 'dark' ? ActiveColors.dark.wblue: ActiveColors.light.wblue }]}>
<SearchBar WIDTH={WIDTH} search={search} setsearch={setsearch} getSdata={getSdata} setisLoading={setisLoading} theme={theme} />
</View>
<View style={[styles.content, {backgroundColor:theme === 'dark' ? ActiveColors.dark.base : ActiveColors.light.base}, {width: WIDTH}]}>
{ isLoading ?  (<ActivityIndicator />) :
(post?.length === 0 || post === undefined) ? (<Text style={{color:theme === 'dark' ?  ActiveColors.light.primary  : ActiveColors.dark.base }}>{search} is not Trending at this Hour, Check Later</Text>) :
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
<Text style={{color: theme === 'dark' ? ActiveColors.light.primary: ActiveColors.dark.base }}>Load More...</Text>
</TouchableOpacity>
</View>)}
/>}
</View>
<View style={[styles.emptyv, {backgroundColor:theme === 'dark' ? ActiveColors.dark.base :ActiveColors.light.base}]}></View>
</View>
<CustomBsheet  ref={Ref} title={title} >
<View style={[styles.child, {backgroundColor:theme === 'dark' ?  ActiveColors.dark.cgrey : ActiveColors.light.secondary}]}>
<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow:1}}>
<Pressable onPress={(e) => e.stopPropagation()}>
<Stab theme={theme} data={authstate.listp} router={router} title='Popular People!' WIDTH={WIDTH} />
<Stab theme={theme} data={authstate.lists} router={router} title='Popular Sources!' WIDTH={WIDTH}/>
<Stab theme={theme} data={authstate.listc} router={router} title='Popular CryptoCoins!' WIDTH={WIDTH}/>
<Stab theme={theme} data={authstate.listt} router={router} title='Popular Teams!' WIDTH={WIDTH}/>
</Pressable>
</ScrollView>
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

foot: {
height:50,
justifyContent: 'center',
alignItems:'center',
marginBottom:5
},

child: {
width:'100%',
backgroundColor:'#E7E7E7',
justifyContent:'center',
alignItems:'center',
marginTop:30
},

emptyv: {
height:50,
width:'100%'
}



})