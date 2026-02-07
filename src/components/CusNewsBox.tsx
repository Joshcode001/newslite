

import { View, Text, StyleSheet,TouchableOpacity,FlatList} from 'react-native'
import { AuthContext } from '../utils/authContext'
import { useContext,useState ,useEffect} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
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
articleId:string
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





const CusNewsBox = ({image,title,description,likes,commentLength,articleId}:newsbox) => {

const {WIDTH,HEIGHT,theme,socket,myClient,shouldntDisplay} = useContext(AuthContext)
const [eitherClicked,seteitherClicked] = useState(false)
const [commLength,setcommlength] = useState(0)
const [isClicked,setisClicked] = useState<click>({'heart':false,'laugh':false,'sad':false,'angry':false,'thumb':false})
const [emojiData,setemojData] = useState<emoji[]>([])
const shouldDisplay = useSharedValue<boolean>(true)
const router = useRouter()







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
heart: require('../../assets/images/smallheartpng.png'),
laugh: require('../../assets/images/smalllaugh.png'),
sad: require('../../assets/images/smallsad.png'),
angry: require('../../assets/images/smallangry.png'),
thumb: require('../../assets/images/smallthumb.png'),
};





const EmojiTag = ({name,count}:emoji) => (
<View style={[styles.smallEmoji,{marginHorizontal:typo.h7,height:typo.h1_5,width:typo.h60,}]}>
<View style={styles.payOne}>
<Image source={emojis[name]} style={{width:'80%',height:'90%'}}/>
</View>
<View style={styles.payTwo}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary,fontSize:typo.h4}]}>{count}</Text>
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






useEffect(() => {

printList(likes)
setLikes(likes)
setcommlength(commentLength)
},[])



useEffect(() => {

const hasTrue = Object.values(isClicked).some(val => val === true)

if (hasTrue) {
seteitherClicked(true)
}else seteitherClicked(false)

},[isClicked])






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
<View style={[styles.container,{borderRadius:typo.h8,marginVertical:typo.h7,width:WIDTH - 10,height:HEIGHT / 2.4,backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary}]}>


<View style={[styles.boxOne,{paddingTop:typo.h4}]}>
<Image source={image} style={{width:'100%',height:'100%'}} contentFit='contain' />
</View>


<View style={styles.boxTwo}>
<TouchableOpacity style={[styles.itemA,{padding:typo.h8}]} 
onPress={() => {
shouldntDisplay.value = false;
router.push({pathname:'/(protected)/(home)/[pagexi]',params:{ pagexi:articleId }})

}}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h2,lineHeight:typo.h1_5}]}>{title}</Text>
</TouchableOpacity>


<View style={[styles.itemB,{padding:typo.h8}]}>
<Text allowFontScaling={false} numberOfLines={2} ellipsizeMode='tail' style={[styles.textR400,{lineHeight:typo.h3,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h3}]}>{description}</Text>
</View>
</View>




<View style={styles.boxThree}>

<TouchableOpacity style={[styles.pinA,{paddingBottom:typo.h8,paddingRight:typo.h7,}]} onPress={() => shouldDisplay.value = !shouldDisplay.value}>
{
eitherClicked ? (<Ionicons name="heart-sharp" size={typo.h2} color='red'/>) : (<Ionicons name="heart-outline" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon}/>)
}
</TouchableOpacity>


<View style={[styles.pinB,{paddingBottom:typo.h7}]}>

<FlatList showsHorizontalScrollIndicator={false} style={[styles.sstyle,{borderRadius:typo.h3,borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border,backgroundColor:theme === 'dark' ?  Colors.dark.base : Colors.light.tertiary}]} contentContainerStyle={styles.screen} horizontal={true} keyExtractor={item => item.name} data={emojiData} renderItem={({item}) => <EmojiTag name={item.name} count={item.count}/>}/>

</View>


<View style={[styles.pinC,{paddingLeft:typo.h7,marginBottom:typo.h7}]}>
<View style={styles.simOne}>
{
theme === 'dark' ? (<Image source={require('../../assets/images/chatdark.png')} style={{width:'63%',height:'55%'}}/>) : 
(<Image source={require('../../assets/images/chatlight.png')} style={{width:'63%',height:'55%'}}/>)
}
</View>
<View style={[styles.simTwo,{paddingTop:typo.h9}]}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary,fontSize:typo.h4}]}>{commLength}</Text>
</View>
</View>


<TouchableOpacity style={[styles.pinD,{paddingBottom:typo.h8,paddingLeft:typo.h7}]}>
{
theme === 'dark' ? (<Image source={require('../../assets/images/Defsavedark.png')} style={{width:'47%',height:'57%'}}/>) :
(<Image source={require('../../assets/images/Defsavelight.png')} style={{width:'47%',height:'57%'}}/>)
}
</TouchableOpacity>

</View>




<Animated.View style={[styles.bigScreen,{borderRadius:typo.h1_5,backgroundColor:theme == 'dark' ? Colors.dark.placeholder : Colors.light.tertiary},screenStyle]}>
<TouchableOpacity style={[styles.bigEmojBox,{borderRadius:typo.h2,borderBottomWidth:isClicked.heart ? 3 : 0}]} onPress={() => sendLikes('heart')}>
<Image source={require('../../assets/images/bigheart.png')} style={{width:'57%',height:'60%'}}/>
</TouchableOpacity>
<TouchableOpacity style={[styles.bigEmojBox,{borderRadius:typo.h2,borderBottomWidth:isClicked.laugh ? 3 : 0}]} onPress={() => sendLikes('laugh')}>
<Image source={require('../../assets/images/biglaugh.png')} style={{width:'57%',height:'60%'}}/>
</TouchableOpacity>
<TouchableOpacity style={[styles.bigEmojBox,{borderRadius:typo.h2,borderBottomWidth:isClicked.sad ? 3 : 0}]} onPress={() => sendLikes('sad')}>
<Image source={require('../../assets/images/bigsad.png')} style={{width:'57%',height:'60%'}}/>
</TouchableOpacity>
<TouchableOpacity style={[styles.bigEmojBox,{borderRadius:typo.h2,borderBottomWidth:isClicked.angry ? 3 : 0}]} onPress={() => sendLikes('angry')}>
<Image source={require('../../assets/images/bigangry.png')} style={{width:'57%',height:'60%'}}/>
</TouchableOpacity>
<TouchableOpacity style={[styles.bigEmojBox,{borderRadius:typo.h2,borderBottomWidth:isClicked.thumb ? 3 : 0}]} onPress={() => sendLikes('thumb')}>
<Image source={require('../../assets/images/bigthumb.png')} style={{width:'57%',height:'60%'}}/>
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
borderWidth:1,
},

boxOne:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'54%',
},


boxTwo:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'35%',
flexDirection:'column'
},

boxThree:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'11%',
flexDirection:'row'
},

itemA:{
justifyContent:'flex-start',
alignItems:'center',
width:'95%',
height:'70%',
},

itemB:{
justifyContent:'flex-start',
alignItems:'center',
width:'95%',
height:'30%',
},



pinA:{
justifyContent:'center',
alignItems:'flex-end',
width:'12%',
height:'100%',
},



pinB:{
justifyContent:'center',
alignItems:'center',
width:'59%',
height:'100%',
},

screen:{
justifyContent:'space-between',
alignItems:'center',
width:'auto',
height:'100%',

},

sstyle:{
maxWidth:'auto',
height:'86%',
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
width:'50%',
height:'100%',
},

simTwo:{
justifyContent:'center',
alignItems:'flex-start',
width:'50%',
height:'100%',
},


pinD:{
justifyContent:'center',
alignItems:'flex-start',
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



bigScreen: {
justifyContent: 'space-around',
alignItems:'center',
width:'64%',
height:'16%',
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
width:'50%',
height:'100%',
},


payTwo:{
justifyContent:'center',
alignItems:'flex-start',
width:'50%',
height:'100%',

},







})