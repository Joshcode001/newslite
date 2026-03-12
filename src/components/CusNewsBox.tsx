

import { View, Text, StyleSheet,TouchableOpacity,FlatList} from 'react-native'
import { AuthContext } from '../utils/authContext'
import { useContext,useState ,useEffect} from 'react'
import { Colors, } from '../utils/color';
import { Image } from 'expo-image';
import Animated, { useSharedValue,useAnimatedStyle,withTiming} from 'react-native-reanimated'
import { useRouter } from 'expo-router';
import { typo } from '../utils/typo';



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





const CusNewsBox = ({image,title,description,likes,commentLength,articleId,pubDate,type}:newsbox) => {

const {WIDTH,HEIGHT,theme,socket,myClient,shouldntDisplay,liveSaved} = useContext(AuthContext)
const [commLength,setcommlength] = useState(0)
const [shouldSave, setshouldSave] = useState(false)
const [isClicked,setisClicked] = useState<click>({'heart':false,'laugh':false,'sad':false,'angry':false,'thumb':false})
const [emojiData,setemojData] = useState<emoji[]>([])
const shouldDisplay = useSharedValue<boolean>(true)
const router = useRouter()



const placeholderH = theme === 'dark' ? require('../../assets/images/heartdark.png') : 
require('../../assets/images/heartlight.png')


const placeholderC = theme === 'dark' ? require('../../assets/images/chatdark.png') : 
require('../../assets/images/chatlight.png')


const activeImage = theme === 'dark' ? require('../../assets/images/Actsavedark.png') : 
require('../../assets/images/Actsavelight.png')

const inactiveImage = theme === 'dark' ? require('../../assets/images/Defsavedark.png') : 
require('../../assets/images/Defsavelight.png')



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
heart: require('../../assets/images/smallheart.png'),
laugh: require('../../assets/images/smalllaugh.png'),
sad: require('../../assets/images/smallsad.png'),
angry: require('../../assets/images/smallangry.png'),
thumb: require('../../assets/images/smallthumb.png'),
};


const EmojiTag = ({name,count}:emoji) => (
<View style={[styles.smallEmoji,{height:typo.h1_5,width:typo.h60,}]}>
<View style={styles.payOne}>
<Image source={emojis[name]} style={{width:'65%',height:'70%'}}/>
</View>
<View style={styles.payTwo}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary,fontSize:typo.h6}]}>{formatNumber(count)}</Text>
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



const sendLikes = (name:name) => {

setisClicked({...isClicked,[name]:!isClicked[name]})

socket.emit('updatedLikes',{postId:articleId,userId:myClient.uname,action:name,image:myClient.image})
shouldDisplay.value = true
}



const setLikes = (likes:like) => {

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



const handleSave = () => {

setshouldSave(!shouldSave)

const query = { userId:myClient.uname,articleId,articleImage:image,
title,pubDate }

socket.emit('saved', query )
}



function getTime(isoString:string) {
const now = new Date();
const past = new Date(isoString);
const diffInMs = now.getTime() - past.getTime()

const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

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
router.push({pathname:'/(protected)/(home)/[pagexi]',params:{ pagexi:articleId }})
break;


case (type === 'search'):
shouldntDisplay.value = false;
router.push({pathname:'/(protected)/(search)/[pagez]',params:{ pagez:articleId }})

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

socket.on("likes", (likesObj:any) => {

if (likesObj.articleId === articleId) {

printList(likesObj.updated)
setLikes(likesObj.updated)
}
})

socket.on("comments", (commentsObj:any) => {

if (commentsObj.articleId === articleId) {

setcommlength(commentsObj.commentLength)

}
})


},[socket])



return (
<View 
style={[styles.container,{width:WIDTH - 10,height:HEIGHT / 2.4,backgroundColor:theme === 'dark' ? 
Colors.dark.secondary : Colors.light.primary}]}>


<TouchableOpacity onPress={handleNavigate}
style={[styles.boxOne]}>

<View style={[styles.time,{backgroundColor:theme === 'dark' ? Colors.dark.transparent : Colors.light.transparent}]}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h4}]}>{getTime(pubDate)}</Text>
</View>


<Image source={image} 
style={{width:'100%',height:'100%',borderTopRightRadius:30,borderTopLeftRadius:30}} contentFit='contain' />

</TouchableOpacity>


<View style={[styles.boxFour,{borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>

<View style={styles.boxTwo}>
<View style={[styles.itemA]}>
<Text numberOfLines={3} ellipsizeMode='tail' allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h3,lineHeight:typo.h1_8}]}>{title}</Text>
</View>


<View style={[styles.itemB]}>
<Text allowFontScaling={false} numberOfLines={3} ellipsizeMode='tail' style={[styles.textR400,{lineHeight:typo.h4,
color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h4}]}>{description}</Text>
</View>
</View>

<View style={styles.boxThree}>

<TouchableOpacity onPress={() => sendLikes('heart')} style={[styles.pinA]} 
onLongPress={() => shouldDisplay.value = !shouldDisplay.value}>

{
isClicked.heart ? (<Image source={require('../../assets/images/bigheart.png')} style={{width:'75%',height:'60%'}} contentFit='contain' />) : (<Image source={placeholderH} style={{width:'45%',height:'40%'}} contentFit='contain' />)
}

</TouchableOpacity>


<View style={[styles.pinB]}>

<FlatList showsHorizontalScrollIndicator={false} style={[styles.sstyle,{borderRadius:typo.h3,borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border,backgroundColor:theme === 'dark' ?  Colors.dark.base : Colors.light.tertiary}]} contentContainerStyle={styles.screen} horizontal={true} keyExtractor={item => item.name} data={emojiData} renderItem={({item}) => <EmojiTag name={item.name} count={item.count}/>}/>

</View>


<View style={[styles.pinC]}>
<View style={styles.simOne}>
<Image source={placeholderC} style={{width:'49%',height:'40%'}}/>
</View>
<View style={[styles.simTwo,{paddingTop:typo.h9}]}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary,fontSize:typo.h5}]}>{formatNumber(commLength)}</Text>
</View>
</View>


<TouchableOpacity style={[styles.pinD]} onPress={handleSave}>
<Image source={shouldSave ? activeImage :inactiveImage} style={{width:'43%',height:'45%'}}/>
</TouchableOpacity>

</View>

</View>




<Animated.View style={[styles.bigScreen,{borderRadius:typo.h1_5,backgroundColor:theme == 'dark' ? Colors.dark.placeholder : Colors.light.tertiary},screenStyle]}>
<TouchableOpacity style={[styles.bigEmojBox,{borderRadius:typo.h2,borderBottomWidth:isClicked.heart ? 1 : 0}]} onPress={() => sendLikes('heart')}>
<Image source={require('../../assets/images/bigheart.png')} style={{width:'50%',height:'50%'}}/>
</TouchableOpacity>
<TouchableOpacity style={[styles.bigEmojBox,{borderRadius:typo.h2,borderBottomWidth:isClicked.laugh ? 1 : 0}]} onPress={() => sendLikes('laugh')}>
<Image source={require('../../assets/images/biglaugh.png')} style={{width:'50%',height:'50%'}}/>
</TouchableOpacity>
<TouchableOpacity style={[styles.bigEmojBox,{borderRadius:typo.h2,borderBottomWidth:isClicked.sad ? 1 : 0}]} onPress={() => sendLikes('sad')}>
<Image source={require('../../assets/images/bigsad.png')} style={{width:'50%',height:'50%'}}/>
</TouchableOpacity>
<TouchableOpacity style={[styles.bigEmojBox,{borderRadius:typo.h2,borderBottomWidth:isClicked.angry ? 1 : 0}]} onPress={() => sendLikes('angry')}>
<Image source={require('../../assets/images/bigangry.png')} style={{width:'50%',height:'50%'}}/>
</TouchableOpacity>
<TouchableOpacity style={[styles.bigEmojBox,{borderRadius:typo.h2,borderBottomWidth:isClicked.thumb ? 1 : 0}]} onPress={() => sendLikes('thumb')}>
<Image source={require('../../assets/images/bigthumb.png')} style={{width:'50%',height:'50%'}}/>
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
height:'55%',
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
height:'45%',
flexDirection:'column',
borderWidth:1,
borderBottomLeftRadius:30,
borderBottomRightRadius:30,
borderTopWidth:0
},



itemA:{
justifyContent:'flex-start',
alignItems:'center',
width:'95%',
height:'50%',
},

itemB:{
justifyContent:'flex-start',
alignItems:'center',
width:'95%',
height:'50%',
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
height:'60%',
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
alignItems:'center',
width:'60%',
height:'100%',
},

simTwo:{
justifyContent:'center',
alignItems:'flex-start',
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
alignItems:'center',
width:'40%',
height:'100%',
},


payTwo:{
justifyContent:'center',
alignItems:'flex-start',
width:'60%',
height:'100%',
},


time:{
zIndex:10,
position:'absolute',
top:14,
right:14,
borderRadius:25,
height:'12%',
width:'13%',
justifyContent:'center',
alignItems:'center'

}







})