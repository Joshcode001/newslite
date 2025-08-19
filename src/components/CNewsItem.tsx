import { View, Text , StyleSheet,ViewToken, Pressable} from 'react-native'
import React, {useContext, useState, useEffect} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Animated, { useAnimatedStyle,SharedValue, withTiming} from 'react-native-reanimated'
import {Image} from 'expo-image' ;
import { AuthContext } from "@/src/utils/authContext";
import { ActiveColors } from '../utils/color';
import { formatRFC7231} from "date-fns"
import { useRouter } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';




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






type ttag = {
date: string,
theme: string
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



type item = {
item:res,
Views: SharedValue<ViewToken<res>[]>,
_id: number
}


const TimeAgo = ({date, theme}: ttag) => {
const newdate = formatRFC7231(date)
return (
<View>
<Text style={[styles.datecmp,{color:theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.primary}]}>{newdate}</Text>
</View>
)
}








const CNewsItem = React.memo(({item, Views, _id,}: item) => {

const router = useRouter()
const {theme, WIDTH, myClient, api,socket,} = useContext(AuthContext)
const { title, article_id, pubDate,source_icon, image_url, description,likes, comments,} = item
const [updatedlikes, setupdatedLikes] = useState({ great:0, sad:0, thumbup:0, thumbdown:0})
const [updatedcount, setupdatedcount] = useState({ great:false, sad:false, thumbup:false, thumbdown:false})
const [updateComment, setupdateComment] = useState(0)






const rstyle = useAnimatedStyle(() => {
const isVisible = Boolean(
Views.value.filter((item) => item.isViewable).find((vitem)  => vitem.item.article_id === article_id)
)

return {
opacity: withTiming(isVisible ? 1 : 0.5),
transform: [{scale: withTiming(isVisible ? 1 : 0.2)}] 
}
})



const setId = (id: number) => {
switch (id) {
case 1 :
router.push({
pathname:'../disktwo/[pageii]',
params:{
pageii:article_id,
}
}) 
break;


case 2 :
router.push({
pathname:'../disktwo/[pageii]',
params:{
pageii:article_id,
}
})
break;

case 3 :
router.push({
pathname:'../disktwo/[pageii]',
params:{
pageii:article_id,
}
})
break;

case 4 :
router.push({
pathname:'../disktwo/[pageii]',
params:{
pageii:article_id,
}
})
break;

case 5 :
router.push({
pathname:'../petailx/[pagex]',
params:{
pagex:article_id,
}
})
break;

case 6 :
router.push({
pathname:'../petailx/[pagex]',
params:{
pagex:article_id,
}
})
break;

case 7 :
router.push({
pathname:'../petailx/[pagex]',
params:{
pagex:article_id,
}
})
break;

case 8 :
router.push({
pathname:'../petailx/[pagex]',
params:{
pagex:article_id,
}
})
break;

}




}




const getlikes = async (userid:string ,postid:string, voice:string) => {


if (voice === 'great') {

if (updatedcount.great === true) {
setupdatedcount({...updatedcount, great:false})
} else if (updatedcount.great === false) {
setupdatedcount({...updatedcount,great:true})
}
} else if (voice === 'sad') {

if (updatedcount.sad === true) {
setupdatedcount({...updatedcount, sad:false})
} else if (updatedcount.sad === false) {
setupdatedcount({...updatedcount,sad:true})
}
} else if (voice === 'thumbup') {

if (updatedcount.thumbup === true) {
setupdatedcount({...updatedcount, thumbup:false})
} else if (updatedcount.thumbup === false) {
setupdatedcount({...updatedcount,thumbup:true})
}
} else if (voice === 'thumbdown') {


if (updatedcount.thumbdown === true) {
setupdatedcount({...updatedcount, thumbdown:false})
} else if (updatedcount.thumbdown === false) {
setupdatedcount({...updatedcount,thumbdown:true})
}

}


const resp = await api.post('/data/likes', {userid,postid, action:voice})
console.log(resp.data)

}




const setElikes =  (likes:like) => {


const likedgreat = likes.great.filter((user)=> user.userid.toString() === myClient.uname)
const likedsad = likes.sad.filter((user)=> user.userid.toString() === myClient.uname)
const likedthumbup = likes.thumbup.filter((user)=> user.userid.toString() === myClient.uname)
const likedthumbdown= likes.thumbdown.filter((user)=> user.userid.toString() === myClient.uname)



setupdatedcount({
great:likedgreat.length !== 0 ? true: false,
sad:likedsad.length !== 0 ? true: false,
thumbup:likedthumbup.length !== 0 ? true: false,
thumbdown:likedthumbdown.length !== 0 ? true: false,
})

}







useEffect(() => {

setElikes(likes)

setupdatedLikes({
great: likes.great.length,
sad: likes.sad.length,
thumbup:likes.thumbup.length,
thumbdown:likes.thumbdown.length,
})


setupdateComment(comments.length)

}, [])




useEffect(() => {

socket.on('likesUpdated', (likesObj:any ) => {

if (likesObj.article_id === article_id) {
setupdatedLikes({great:likesObj.great, sad:likesObj.sad, thumbup:likesObj.thumbup, thumbdown:likesObj.thumbdown})
}
});


socket.on('comments', (comObj:any) => {

if (comObj.post_id === article_id)
setupdateComment(comObj.data.length)
})


},[socket])





return (

<Animated.View style={[styles.temtop, rstyle]}>
<Pressable onPress={() => setId(_id)}>
<View style={[styles.newsbox, {width:WIDTH < 650 ? WIDTH - 20 : WIDTH - 70}, {borderColor: theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.primary}]}>
<View style={[styles.tbox, {backgroundColor:theme === 'dark' ? ActiveColors.dark.accent :ActiveColors.light.tertiary}]}>
<Text style={[styles.title, {color:theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.mgreen }, ]}>{title}</Text>
</View>
<Image source={image_url} style={[styles.image]} contentFit='contain' />
<View style={[styles.descbox,{backgroundColor:theme === 'dark' ? ActiveColors.dark.accent :ActiveColors.light.tertiary}]}>
<Text numberOfLines={3} style={[styles.desc, {color:theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.mgreen },]}>{description}</Text>
</View>
<View style={[styles.linkcon]}>
<View style={[styles.linkbox,{backgroundColor:theme === 'dark' ? ActiveColors.dark.accent :ActiveColors.light.tertiary}, ]}>
<Image source={source_icon} style={styles.image2} contentFit="contain"/>
<TimeAgo date={pubDate} theme ={theme}/>
</View>
</View>
</View>
</Pressable>


<View style={styles.likes}>

<Pressable onPress={() => getlikes(myClient.uname, article_id, 'great')}>
<View style={styles.leach} >
<Entypo name="emoji-happy" size={24} color={ updatedcount.great ? '#ffeb08' : 'grey'} />
<View><Text style={styles.ltxt}>{updatedlikes.great}</Text></View>
</View>
</Pressable>


<Pressable onPress={() => getlikes(myClient.uname, article_id, 'sad')}>
<View style={styles.leach}>
<Entypo name="emoji-sad" size={24} color={ updatedcount.sad ? '#ffeb08' : 'grey'}/>
<View><Text style={styles.ltxt}>{updatedlikes.sad}</Text></View>
</View>
</Pressable>


<Pressable onPress={() => getlikes(myClient.uname, article_id, 'thumbup')}>
<View style={styles.leach}>
<Entypo name="thumbs-up" size={24} color={ updatedcount.thumbup ? '#ffeb08' : 'grey'}/>
<View><Text style={styles.ltxt}>{updatedlikes.thumbup}</Text></View>
</View>
</Pressable>


<Pressable onPress={() => getlikes(myClient.uname, article_id, 'thumbdown')}>
<View style={styles.leach}>
<Entypo name="thumbs-down" size={24} color={ updatedcount.thumbdown ? '#ffeb08' : 'grey'}/>
<View><Text style={styles.ltxt}>{updatedlikes.thumbdown}</Text></View>
</View>
</Pressable>


<View style={styles.leach}>
<Ionicons name="chatbox-ellipses-outline" size={22} color="brown" />
<View><Text style={styles.ltxt}>{updateComment}</Text></View>
</View>

</View>

</Animated.View>
)
}
)
export default CNewsItem








const styles = StyleSheet.create({

temtop:{
flex: 1,
justifyContent: "center",
alignContent: "center",
marginBottom: 60,
marginTop:50,
alignSelf:'center',
},


newsbox: {
justifyContent: "center",
alignContent: "center",
borderWidth: 5,
alignSelf:'center',
borderRadius:13,
},

tbox:{
justifyContent:'center',
alignItems:'center',
width: '100%'
},

descbox: {
justifyContent:'center',
alignItems: 'center',
width: '100%'
},

title: {
justifyContent:'center',
alignItems:'center',
textAlign:'center',
fontSize: 26,
fontWeight:900,
padding:20,
width: '100%'
},

linkbox: {
justifyContent:'space-evenly',
alignItems:'center',
flexDirection:'row',
width: '100%'
},

image: {
height: 220,

},

image2: {
width: 60,
height: 60,
},

linkcon: {
justifyContent:'center',
alignItems:'center',
width: '100%',
flexDirection:'column',
rowGap:30
},

desc: {
padding:15,
fontSize:18,
letterSpacing:1,
color:'black',
width: '100%'
},


datecmp:{
fontSize:13
},

likes: {
justifyContent:'center',
alignItems:'center',
flexDirection: 'row',
columnGap:20,
backgroundColor:'transparent',
padding:10

},

leach: {
justifyContent:'center',
alignItems:'center',
flexDirection: 'row',
columnGap:5,
width:60
},

ltxt:{
color:'grey',
fontSize:14
}





})