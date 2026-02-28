

import { View, Text, StyleSheet,TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
import { useContext,useState,useEffect ,useRef} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { Colors } from '@/src/utils/color'
import Feather from '@expo/vector-icons/Feather';
import { Image } from 'expo-image'
import { typo,length } from '@/src/utils/typo'
import Ionicons from '@expo/vector-icons/Ionicons';
import Animated, { useSharedValue,useAnimatedStyle,useAnimatedReaction,runOnJS} from 'react-native-reanimated';
import PagerView from 'react-native-pager-view'
import CommentTag from '@/src/components/CommentTag'
import ReactionTag from '@/src/components/ReactionTag'
import SavedTag from '@/src/components/SavedTag'
import { useRouter } from 'expo-router';
import { lingual } from '@/src/utils/dataset'
import CusAvatar from '@/src/components/CusAvatar'

type userlike = {
userId:string,
createdAt: string,
image: string,
}



type usave = {
articleId:string,
articleImage: string,
title: string,
pubDate: string,
}



type ucomment = {
articleId:string,
commentId: string,
title: string,
likes: userlike[],
articleImage: string,
text: string,
}

type ureaction = {
id: string,
title: string,
tag: string,
emoji: 'heart'|'laugh'|'sad'|'angry'|'thumb',
createdAt: string,
}


type empty = {
id:string
}

type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";




const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);




const profilepage = () => {

const router = useRouter()
const current = useSharedValue(0)
const {theme,WIDTH,HEIGHT,myClient,locationP,socket,setmyClient,shouldntDisplay,getlang,appLang} = useContext(AuthContext)
const [activeIndex, setactiveIndex] = useState(0)
const [liveComments, setliveComments] = useState<ucomment[]>([])
const [liveReactions, setliveReactions] = useState<ureaction[]>([])
const [liveSaved, setliveSaved] = useState<usave[]>([])
const [lang, setlang] = useState<langt>('en')
const offset = useSharedValue(0);
const position = useSharedValue(0);
const pagerRef = useRef<PagerView>(null);
const tabWidth = WIDTH / 3;


const activeTextColor = theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn
const inactiveTextColor = theme === 'dark' ? Colors.light.primary : Colors.dark.base

const activeImage = theme === 'dark' ? require('../../../../assets/images/Actsavedark.png') : 
require('../../../../assets/images/Actsavelight.png')

const inactiveImage = theme === 'dark' ? require('../../../../assets/images/Defsavedark.png') : 
require('../../../../assets/images/Defsavelight.png')

const activeImageY = theme === 'dark' ? require('../../../../assets/images/reactionactive.png') :
require('../../../../assets/images/reactionactivelight.png')

const inactiveImageY = theme === 'dark' ? require('../../../../assets/images/reactiondark.png') : 
require('../../../../assets/images/reactionlight.png')

const activeImageZ = theme === 'dark' ? require('../../../../assets/images/commentactive.png') :
require('../../../../assets/images/commentactivelight.png')

const inactiveImageZ = theme === 'dark' ? require('../../../../assets/images/commentdark.png') : 
require('../../../../assets/images/commentlight.png')






const animatedIndicatorStyle = useAnimatedStyle(() => {
return {
width: tabWidth,
transform: [
{ translateX: (position.value + offset.value) * tabWidth }
],
};
});


const EmptyTag = ({id}:empty) => (

<View style={[styles.empty,{width:typo.h300 ,height:length.l3_5,}]}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h4}]}>{id}</Text>
</View>
)





useAnimatedReaction(

() => Math.round(position.value + offset.value),
(result, previous) => {


if (result !== previous) {
runOnJS(setactiveIndex)(result);
}
},
[position]
);


useEffect(() => {

setliveComments(myClient.comments)
setliveReactions(myClient.reactions)
setliveSaved(myClient.saved)

},[])






useEffect(() => {


socket.on('uComments', (obj:any) => {
setliveComments(obj.data)

})

socket.on('uReactions', (obj:any) => {
setliveReactions(obj.data)

})

socket.on('uSaved', (obj:any) => {
setliveSaved(obj.data)
setmyClient({...myClient,saved:obj.data})
})

},[socket])



useEffect(() => {

if (shouldntDisplay.value === true) {
shouldntDisplay.value = false
}

},[shouldntDisplay])



useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])



return (
<View style={[styles.container,{backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base,width:WIDTH,height:HEIGHT}]}>

<View style={styles.cupOne}>

<View style={styles.headerBox}>
<View style={styles.header}>
<TouchableOpacity style={styles.box} onPress={() => router.push({ pathname:'/(protected)/(profile)/settings' })}>
<Feather name="settings" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</TouchableOpacity>
</View>
</View>


<View style={styles.imageBox}>

<CusAvatar />
</View>


<View style={styles.detailsBox}>

<View style={[styles.info]}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h2}]}>{myClient.fname}{' '}{myClient.lname}</Text>
</View>

<View style={[styles.info]}>
<Text allowFontScaling={false} style={[styles.textR700,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h3}]}>{`@${myClient.uname}`}</Text>
</View>

<View style={[styles.info]}>
<View style={[styles.infoBox,{columnGap:typo.h6}]}>
<Text numberOfLines={2} allowFontScaling={false} style={[styles.textM700,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h4}]}><Ionicons name="location-outline" size={typo.h4} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />{" "}{`${locationP.city} , ${locationP.region} , ${locationP.country}`}</Text>
</View>
</View>

</View>


</View>



<View style={styles.cupTwo}>

<View style={styles.control}>

<View style={styles.tag}>

<TouchableOpacity style={styles.tag1} onPress={() => pagerRef.current?.setPage(0)}>
<View style={styles.tag1a}>
<Image source={activeIndex === 0 ? activeImageY : inactiveImageY} contentFit='contain' style={styles.controlImage}/>
</View>

<View style={styles.tag1b}>
<Text allowFontScaling={false} style={[styles.textB700,{color:activeIndex === 0 ? activeTextColor : inactiveTextColor,fontSize:typo.h5}]}>{lingual.Reactions[lang]}</Text>
</View>
</TouchableOpacity>


<TouchableOpacity style={[styles.tag1]} onPress={() => pagerRef.current?.setPage(1)}>
<View style={styles.tag1a}>
<Image source={activeIndex === 1 ? activeImage : inactiveImage} contentFit='contain' style={styles.controlImage}/>
</View>

<View style={styles.tag1b}>
<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h5,color:activeIndex === 1 ? activeTextColor : inactiveTextColor}]}>{lingual.Saved[lang]}</Text>
</View>
</TouchableOpacity>




<TouchableOpacity style={styles.tag1} onPress={() => pagerRef.current?.setPage(2)}>
<View style={styles.tag1a}>
<Image source={activeIndex === 2 ? activeImageZ : inactiveImageZ} contentFit='contain' style={styles.controlImage}/>
</View>

<View style={styles.tag1b}>
<Text allowFontScaling={false} style={[styles.textB700,{color:activeIndex === 2 ? activeTextColor : inactiveTextColor,fontSize:typo.h5}]}>{lingual.Comments[lang]}</Text>
</View>
</TouchableOpacity>




</View>

<View style={[styles.indicator,{backgroundColor:theme === 'dark' ?  Colors.dark.border : Colors.light.border}]}>
<Animated.View style={[{backgroundColor:theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn,height:'100%'},animatedIndicatorStyle]}></Animated.View>
</View>

</View>


<View style={styles.content}>
<AnimatedPagerView orientation='horizontal' ref={pagerRef}  style={styles.pagerView} initialPage={0} 
onPageSelected={(e) => {
'worklet';
current.value = e.nativeEvent.position;}} 


onPageScroll={(e) => {
'worklet';

offset.value = e.nativeEvent.offset;
position.value = e.nativeEvent.position;
}}>



<View key='1' style={[styles.page]}>
<FlatList ListEmptyComponent={() => <EmptyTag id={lingual.noReactionY[lang]}/>} data={liveReactions} keyExtractor={item => item.createdAt} ItemSeparatorComponent={() => <View style={{ height: length.l1 / 6 }} />}  showsVerticalScrollIndicator={false} contentContainerStyle={styles.flatView}  renderItem={({item}) => <ReactionTag tag={item.tag} emoji={item.emoji} createdAt={item.createdAt} id={item.id} title={item.title} />} />
</View>




<View key='2' style={[styles.page]}>
<FlatList ListEmptyComponent={() => <EmptyTag id={lingual.noSavedY[lang]}/>} data={liveSaved} horizontal={false} numColumns={2} ItemSeparatorComponent={() => <View style={{ height: length.l1 / 6}} />} columnWrapperStyle={{columnGap:typo.h1_5,marginLeft:typo.h4}} showsVerticalScrollIndicator={false}  keyExtractor={item => item.articleId} renderItem={({item}) => <SavedTag articleId={item.articleId} articleImage={item.articleImage} pubDate={item.pubDate} title={item.title} /> } />
</View>




<View key='3' style={[styles.page]}>
<FlatList ListEmptyComponent={() => <EmptyTag id={lingual.noCommentY[lang]}/>} data={liveComments} keyExtractor={item => item.commentId} ItemSeparatorComponent={() => <View style={{ height: length.l1 / 6 }} />}  showsVerticalScrollIndicator={false} contentContainerStyle={styles.flatView} renderItem={({item}) => <CommentTag articleId={item.articleId} articleImage={item.articleImage}commentId={item.commentId} text={item.text} likes={item.likes} title={item.title}/> } />
</View>



</AnimatedPagerView>
</View>


<View style={[styles.bottom,{backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base,borderTopColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}></View>
</View>



</View>
)
}

export default profilepage






const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center',
flexDirection:'column'
},

cupOne:{
width:'100%',
height:'47%',
justifyContent:'flex-start',
alignItems:'center'
},

headerBox:{
width:'100%',
height:'25%',
justifyContent:'flex-end',
alignItems:'center'
},

header:{
width:'100%',
height:'35%',
justifyContent:'center',
alignItems:'flex-end'
},

box:{
width:'17%',
height:'100%',
justifyContent:'center',
alignItems:'center',
},


imageBox:{
width:'100%',
height:'42%',
justifyContent:'flex-end',
alignItems:'center',
},


image:{
width:'100%',
aspectRatio:1,
borderRadius:9999,
overflow:'hidden',
},

detailsBox:{
width:'100%',
height:'33%',
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
},

infoBox:{
width:'80%',
height:'100%',
justifyContent:'center',
alignItems:'center',
flexDirection:'row',
},

info:{
width:'100%',
height:'25%',
justifyContent:'center',
alignItems:'center',
},


cupTwo:{
width:'100%',
height:'53%',
justifyContent:'flex-start',
alignItems:'center'
},

bottom:{
width:'100%',
height:'23%',
justifyContent:'center',
alignItems:'center',
position:'absolute',
bottom:0,
borderTopWidth:2
},

control:{
width:'100%',
height:'10%',
justifyContent:'center',
alignItems:'center',
flexDirection:'column'
},


tag:{
width:'100%',
height:'95%',
justifyContent:'center',
alignItems:'center',
flexDirection:'row',
},

tagOne:{
width:'33.3%',
height:'100%',
justifyContent:'center',
alignItems:'center',
},


tag1:{
width:'33.3%',
height:'100%',
justifyContent:'center',
alignItems:'center',
flexDirection:'row',
},

tag1a:{
width:'35%',
height:'100%',
justifyContent:'center',
alignItems:'center',
},


tag1b:{
width:'65%',
height:'100%',
justifyContent:'center',
alignItems:'flex-start',
},


controlImage:{
width:'40%',
height:'60%'
},


indicator:{
width:'100%',
height:'5%',
justifyContent:'flex-start',
alignItems:'flex-start',
},


pagerView:{
flex:1,
width:'100%',
height:'100%'
},

page:{
width:'100%',
height:'100%',
justifyContent:'center',
alignItems:'center'
},


content:{
width:'100%',
height:'67%',
justifyContent:'flex-start',
alignItems:'center'
},

flatView:{
width:'100%',
height:'auto',
justifyContent:'flex-start',
alignItems:'center'
},

empty:{
justifyContent:'center',
alignItems:'center',
},


textM700: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:700,
},


textR700: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:700,
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