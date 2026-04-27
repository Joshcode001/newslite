

import { View, Text, StyleSheet,TouchableOpacity,FlatList} from 'react-native'
import { AuthContext } from '../utils/authContext'
import { useContext,useState ,useEffect} from 'react'
import { Colors, } from '../utils/color';
import { Image } from 'expo-image';
import Animated, { useSharedValue,useAnimatedStyle,withTiming} from 'react-native-reanimated'
import { useRouter } from 'expo-router';
import { typo } from '../utils/typo';
import AppIcon from './AppIcons';
import { lingual } from '../utils/dataset';



type user = {
userId:string,
createdAt: string,
image: string,
}


type like = {
heart:user[],
laugh:user[],
sad:user[],
angry:user[],
thumb:user[]
}

type emojiData = {
heart:string,
laugh:string,
sad:string,
angry:string,
thumb:string
}



type newsbox = {
image:string,
title:string,
description:string,
likes:like,
commentLength:number,
articleId:string,
pubDate:string,
type:string
}


type emoji = {
name:'heart'|'laugh'|'sad'|'angry'|'thumb'
count:number
}

type click = {
heart: boolean;
laugh: boolean;
sad: boolean;
angry: boolean;
thumb: boolean;
}



type name = 'heart'|'laugh'|'sad'|'angry'|'thumb'

type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";



const CusNewsBox = ({image,title,description,likes,commentLength,articleId,pubDate,type}:newsbox) => {

const {WIDTH,HEIGHT,theme,socket,myClient,shouldntDisplay,liveSaved,appLang,platform,showToast} = useContext(AuthContext)
const [commLength,setcommlength] = useState(0)
const [shouldSave, setshouldSave] = useState(false)
const [lang, setlang] = useState<langt>('en')
const [isClicked,setisClicked] = useState<click>({'heart':false,'laugh':false,'sad':false,'angry':false,'thumb':false})
const [emojiData,setemojData] = useState<emoji[]>([])
const shouldDisplay = useSharedValue<boolean>(true)
const router = useRouter()




const activeImage = theme === 'dark' ? 'actsavedark' : 'actsavelight'
const inactiveImage = theme === 'dark' ? 'defsavedark' : 'defsavelight'
const placeholderH = theme === 'dark' ? 'heartoutlinedark' : 'heartoutlinelight'
const placeholderO = theme === 'dark' ? 'ovaldark' : 'ovallight'



const screenStyle = useAnimatedStyle(() => {
return {
transform: [
{
translateY: withTiming(
shouldDisplay.value === true ? -('16%'): 0,
{ duration: 250}
),
},
],
opacity: withTiming(shouldDisplay.value === true ? 0 : 1, { duration: 200 }),
};
})


const emojis:emojiData = {
heart:'❤️',
laugh:'😂',
sad: '😢',
angry:'😡',
thumb:'👍',
};


const EmojiTag = ({name,count}:emoji) => (
<View style={[styles.smallEmoji,{height:typo.h1_5,width:typo.h60,paddingLeft:4}]}>
<View style={styles.payOne}>
<Text allowFontScaling={false} style={{ fontSize:platform === 'ios' ? typo.h4 : typo.h5}}>{emojis[name]}</Text>
</View>
<View style={styles.payTwo}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary,fontSize:typo.h5}]}>{formatNumber(count)}</Text>
</View>
</View>
)


const printList = (likes:like) => {

const list = Object.entries(likes).filter((item) => item[0] !== '_id').map(([key, value]) => {


return { name: key, count: value.length };
});

const sorted = list.sort((a,b) => b.count - a.count) as emoji[]

setemojData(sorted)


}


const showGuest = () => {

const toast = {type:'customError',name:lingual.guest[lang],info:lingual.createUseFeature[lang],onHide:() => {}, visibilityTime:3000}
showToast(toast)

}



const sendLikes = (name:name) => {

switch (true) {

case (type === 'guest'):
showGuest()
break;

case (type !== 'guest'):

setisClicked({...isClicked,[name]:!isClicked[name]})

socket.emit('updatedLikes',{postId:articleId,userId:myClient.uname,action:name,image:myClient.image})
shouldDisplay.value = true

}

}



const setLikes = (likes:like) => {

if (type !== 'guest'){

const likedheart = likes.heart.filter((user)=> user.userId.toString() === myClient.uname)
const likedlaugh = likes.laugh.filter((user)=> user.userId.toString() === myClient.uname)
const likedsad = likes.sad.filter((user)=> user.userId.toString() === myClient.uname)
const likedangry = likes.angry.filter((user)=> user.userId.toString() === myClient.uname)
const likedthumb = likes.thumb.filter((user)=> user.userId.toString() === myClient.uname)



setisClicked({
heart:likedheart.length !== 0 ? true : false,
sad:likedsad.length !== 0 ? true: false,
laugh:likedlaugh.length !== 0 ? true: false,
thumb:likedthumb.length !== 0 ? true: false,
angry:likedangry.length !== 0 ? true: false,
})
}

}



const handleSave = () => {

switch (true) {

case (type !== 'guest'):
setshouldSave(!shouldSave)

const query = { userId:myClient.uname,articleId,articleImage:image,
title,pubDate }

socket.emit('saved', query )
break;


case (type === 'guest'):
showGuest()
break;

}

}



function getTime(isoString: string,lang:string): string {
const now = new Date();
const past = new Date(isoString);
const diffInMs = Math.max(0, now.getTime() - past.getTime()); // Prevent negative time

// Calculation constants
const min = 1000 * 60;
const hour = min * 60;
const day = hour * 24;
const year = day * 365.25; // Accounting for leap years

const diffInMinutes = Math.floor(diffInMs / min);
const diffInHours = Math.floor(diffInMs / hour);
const diffInDays = Math.floor(diffInMs / day);
const diffInYears = Math.floor(diffInMs / year);

// 1. Full Year Check (365.25 days)
if (diffInYears >= 1) {
return `${diffInYears}y`;
}

// 2. Over 7 Days (Current Year)
if (diffInDays > 7) {
return new Intl.DateTimeFormat(lang, {
month: 'short',
day: 'numeric'
}).format(past);
}

// 3. Relative time logic
if (diffInMinutes < 1) return 'now';
if (diffInMinutes < 60) return `${diffInMinutes}m`;
if (diffInHours < 24) return `${diffInHours}h`;

return `${diffInDays}d`;
}

function formatNumber(num:number) {
if (num >= 1000000) {
const val = num / 1000000;

return (Number.isInteger(val) ? val : val.toFixed(1)) + 'M';
}

if (num >= 1000) {
const val = num / 1000;
return (Number.isInteger(val) ? val : val.toFixed(1)) + 'K';
}

return num.toString();
}


const handleNavigate = () => {

switch(true) {

case (type === 'index'):
shouldntDisplay.value = false;
router.push({pathname:'/(protected)/(home)/[pagexi]',params:{ pagexi:articleId,id:"null" }})
break;


case (type === 'search'):
shouldntDisplay.value = false;
router.push({pathname:'/(protected)/(search)/[pagez]',params:{ pagez:articleId,id:"null" }})
break;


case (type === 'guest'):
shouldntDisplay.value = false;
router.push({pathname:'/(guest)/[pagexx]',params:{ pagexx:articleId }})
break;


}

}


useEffect(() => {

printList(likes)
setLikes(likes)
setcommlength(commentLength)
},[])



useEffect(() => {

const alreadyIn = liveSaved.filter(user => user.articleId === articleId)

if (alreadyIn.length > 0){
setshouldSave(true)

}else if (alreadyIn.length === 0){
setshouldSave(false)
}


},[liveSaved])




useEffect(() => {

const likesHandler = (likesObj:any) => {

if (likesObj.articleId === articleId) {

printList(likesObj.updated)
setLikes(likesObj.updated)
}
}

const commentsHandler = (commentsObj:any) => {

if (commentsObj.articleId === articleId) {

setcommlength(commentsObj.commentLength)

}
}



socket.on("likes", likesHandler)

socket.on("comments", commentsHandler)




return () => {

socket.off('likes',likesHandler)
socket.off('comments',commentsHandler)
}


},[socket])



return (
<View 
style={[styles.container,{width:WIDTH - 15,height:HEIGHT / 2,backgroundColor:theme === 'dark' ? 
Colors.dark.secondary : Colors.light.primary}]}>


<TouchableOpacity onPress={handleNavigate} style={[styles.boxOne]}>

<View style={[styles.time,{backgroundColor:theme === 'dark' ? Colors.dark.transparent : Colors.light.transparent}]}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h4}]}>{getTime(pubDate,appLang.lcode)}</Text>
</View>


<Image source={image} 
style={{width:'100%',height:'100%',borderTopRightRadius:30,borderTopLeftRadius:30}} contentFit='cover' />

</TouchableOpacity>


<View style={[styles.boxFour,{borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>

<View style={styles.boxTwo}>
<TouchableOpacity onPress={handleNavigate} style={[styles.itemA]}>
<Text numberOfLines={3} ellipsizeMode='tail' allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:WIDTH > 500 ? typo.h4 : typo.h3,lineHeight:WIDTH > 500 ? typo.h3 : typo.h2}]}>{title}</Text>
</TouchableOpacity>


<View style={[styles.itemB]}>
<Text allowFontScaling={false} numberOfLines={2} ellipsizeMode='tail' style={[styles.textMR200,{lineHeight:typo.h3,
color:theme === 'dark' ? Colors.light.border : Colors.dark.primary,fontSize:WIDTH > 500 ? typo.h5 : typo.h4}]}>{description}</Text>
</View>
</View>

<View style={styles.boxThree}>

<TouchableOpacity onPress={() => sendLikes('heart')} style={[styles.pinA]} 
onLongPress={() => shouldDisplay.value = !shouldDisplay.value}>

{
isClicked.heart ? (<AppIcon name='heartact' size={typo.h2}/>) : (<AppIcon name={placeholderH} size={typo.h2}/>)
}

</TouchableOpacity>


<View style={[styles.pinB]}>

<FlatList showsHorizontalScrollIndicator={false} style={[styles.sstyle,{borderRadius:typo.h3,borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border,backgroundColor:theme === 'dark' ?  Colors.dark.base : Colors.light.tertiary}]} contentContainerStyle={styles.screen} horizontal={true} keyExtractor={item => item.name} data={emojiData} renderItem={({item}) => <EmojiTag name={item.name} count={item.count}/>}/>

</View>


<View style={[styles.pinC]}>
<View style={styles.simOne}>
<AppIcon name={placeholderO} size={typo.h1_8}/>
</View>
<View style={[styles.simTwo,{paddingTop:typo.h9}]}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary,fontSize:typo.h5}]}>{formatNumber(commLength)}</Text>
</View>
</View>


<TouchableOpacity style={[styles.pinD]} onPress={handleSave}>
<AppIcon name={shouldSave ? activeImage :inactiveImage} size={typo.h1_8}/>
</TouchableOpacity>

</View>

</View>




<Animated.View style={[styles.bigScreen,{borderRadius:typo.h1_5,backgroundColor:theme == 'dark' ? Colors.dark.placeholder : Colors.light.tertiary},screenStyle]}>
<TouchableOpacity style={[styles.bigEmojBox,{borderRadius:typo.h2,borderBottomWidth:isClicked.heart ? 1 : 0}]} onPress={() => sendLikes('heart')}>
<Text style={{ fontSize:typo.h3 }}>❤️</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.bigEmojBox,{borderRadius:typo.h2,borderBottomWidth:isClicked.laugh ? 1 : 0}]} onPress={() => sendLikes('laugh')}>
<Text style={{ fontSize:typo.h3 }}>😂</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.bigEmojBox,{borderRadius:typo.h2,borderBottomWidth:isClicked.sad ? 1 : 0}]} onPress={() => sendLikes('sad')}>
<Text style={{ fontSize:typo.h3 }}>😢</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.bigEmojBox,{borderRadius:typo.h2,borderBottomWidth:isClicked.angry ? 1 : 0}]} onPress={() => sendLikes('angry')}>
<Text style={{ fontSize:typo.h3 }}>😡</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.bigEmojBox,{borderRadius:typo.h2,borderBottomWidth:isClicked.thumb ? 1 : 0}]} onPress={() => sendLikes('thumb')}>
<Text style={{ fontSize:typo.h3 }}>👍</Text>
</TouchableOpacity>
</Animated.View>


</View>
)
}

export default CusNewsBox





const styles = StyleSheet.create({
container:{
flexDirection:'column',
justifyContent:'center',
alignItems:'center',
},

boxOne:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'60%',
position:'relative',
zIndex:1
},


boxTwo:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'70%',
flexDirection:'column',
},

boxThree:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'30%',
flexDirection:'row',
},

boxFour:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'40%',
flexDirection:'column',
borderWidth:1,
borderBottomLeftRadius:30,
borderBottomRightRadius:30,
borderTopWidth:0
},



itemA:{
justifyContent:'center',
alignItems:'flex-start',
width:'95%',
height:'60%',
},

itemB:{
justifyContent:'center',
alignItems:'center',
width:'95%',
height:'40%',
},



pinA:{
justifyContent:'center',
alignItems:'center',
width:'14%',
height:'100%',
},



pinB:{
justifyContent:'center',
alignItems:'center',
width:'57%',
height:'80%',
},

screen:{
justifyContent:'space-between',
alignItems:'center',
width:'auto',
height:'100%',

},

sstyle:{
maxWidth:'auto',
height:'100%',
borderWidth:1,
},


pinC:{
justifyContent:'center',
alignItems:'center',
width:'16%',
height:'100%',
flexDirection:'row',
},

simOne:{
justifyContent:'center',
alignItems:'flex-end',
width:'60%',
height:'100%',
},

simTwo:{
justifyContent:'center',
alignItems:'center',
width:'40%',
height:'100%',
},


pinD:{
justifyContent:'center',
alignItems:'center',
width:'13%',
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


textMR200: {
fontFamily:'Manrope-Regular',
fontWeight:200,
},


textB700: {
fontFamily:'CabinetGrotesk-Bold',
fontWeight:700,
},



bigScreen: {
justifyContent: 'space-around',
alignItems:'center',
width:'64%',
height:'13%',
position:'absolute',
bottom:'11%',
right:'26%',
zIndex:10,
flexDirection:'row'
},


bigEmojBox:{
justifyContent: 'center',
alignItems:'center',
width:'18%',
borderBottomColor:'brown',
},


smallEmoji:{
justifyContent: 'center',
alignItems:'center',
flexDirection:'row',
},

payOne:{
justifyContent:'center',
alignItems:'flex-end',
width:'55%',
height:'100%',
},


payTwo:{
justifyContent:'center',
alignItems:'center',
width:'45%',
height:'100%',
},


time:{
zIndex:10,
position:'absolute',
top:14,
right:14,
borderRadius:25,
height:'10%',
width:'13%',
justifyContent:'center',
alignItems:'center'

}







})