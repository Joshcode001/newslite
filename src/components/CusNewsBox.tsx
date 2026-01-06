

import { View, Text, StyleSheet,TouchableOpacity,FlatList} from 'react-native'
import { AuthContext } from '../utils/authContext'
import { useContext,useState ,useEffect} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../utils/color';
import { Image } from 'expo-image';
import Animated, {  useSharedValue, SharedValue, useAnimatedRef,useAnimatedScrollHandler,useAnimatedStyle,withTiming} from 'react-native-reanimated'
import { useRouter } from 'expo-router';




type user = {
userid:string
}


type like = {
heart:user[],
laugh:user[],
sad:user[],
angry:user[],
thumb:user[]
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
name:string,
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
const [upComment,setupComment] = useState(0)
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






const emojis: { [key: string]: any } = {
heart: require('../../assets/images/smallheartpng.png'),
laugh: require('../../assets/images/smalllaugh.png'),
sad: require('../../assets/images/smallsad.png'),
angry: require('../../assets/images/smallangry.png'),
thumb: require('../../assets/images/smallthumb.png'),
};





const EmojiTag = ({name,count}:emoji) => (
<View style={styles.smallEmoji}>
<View style={styles.payOne}>
<Image source={emojis[name]} style={{width:'80%',height:'90%'}}/>
</View>
<View style={styles.payTwo}>
<Text style={[styles.textM500,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>{count}</Text>
</View>
</View>
)






const printList = (likes:like) => {

const list = Object.entries(likes).filter((item) => item[0] !== '_id').map(([key, value]) => {


return { name: key, count: value.length };
});

const sorted = list.sort((a,b) => b.count - a.count)

setemojData(sorted)


}



const sendLikes = (name:name) => {

setisClicked({...isClicked,[name]:!isClicked[name]})

socket.emit('updatedLikes',{postId:articleId,userId:myClient.uname,action:name})
shouldDisplay.value = true
}




const setLikes = (likes:like) => {

const likedheart = likes.heart.filter((user)=> user.userid.toString() === myClient.uname)
const likedlaugh = likes.laugh.filter((user)=> user.userid.toString() === myClient.uname)
const likedsad = likes.sad.filter((user)=> user.userid.toString() === myClient.uname)
const likedangry = likes.angry.filter((user)=> user.userid.toString() === myClient.uname)
const likedthumb = likes.thumb.filter((user)=> user.userid.toString() === myClient.uname)



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
setupComment(commentLength)
},[])



useEffect(() => {

const hasTrue = Object.values(isClicked).some(val => val === true)

if (hasTrue) {
seteitherClicked(true)
}else seteitherClicked(false)

},[isClicked])






useEffect(() => {

socket.on("updatedLikes", (likesObject:any) => {

if (likesObject.articleId === articleId) {
printList(likesObject.updated)
}
})

},[socket])



return (
<View style={[styles.container,{width:WIDTH - 10,height:HEIGHT / 2.4,backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary

}]}>


<View style={styles.boxOne}>
<Image source={image} style={{width:'100%',height:'100%'}} contentFit='contain' />
</View>


<View style={styles.boxTwo}>
<TouchableOpacity style={styles.itemA} 
onPress={() => {
shouldntDisplay.value = false;
router.push({pathname:'/(protected)/(home)/[pagexi]',params:{pagexi:articleId}})

}}>
<Text style={[styles.textM500,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:24,lineHeight:32}]}>{title}</Text>
</TouchableOpacity>


<View style={styles.itemB}>
<Text numberOfLines={2} ellipsizeMode='tail' style={[styles.textR400,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{description}</Text>
</View>
</View>




<View style={styles.boxThree}>

<TouchableOpacity style={styles.pinA} onPress={() => shouldDisplay.value = !shouldDisplay.value}>
{
eitherClicked ? (<Ionicons name="heart-sharp" size={26} color='red'/>) : (<Ionicons name="heart-outline" size={26} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon}/>)
}
</TouchableOpacity>


<View style={styles.pinB}>

<FlatList showsHorizontalScrollIndicator={false} style={[styles.sstyle,{borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border,backgroundColor:theme === 'dark' ?  Colors.dark.base : Colors.light.tertiary}]} contentContainerStyle={styles.screen} horizontal={true} keyExtractor={item => item.name} data={emojiData} renderItem={({item}) => <EmojiTag name={item.name} count={item.count}/>}/>

</View>


<View style={styles.pinC}>
<View style={styles.simOne}>
{
theme === 'dark' ? (<Image source={require('../../assets/images/chatdark.png')} style={{width:'63%',height:'55%'}}/>) : 
(<Image source={require('../../assets/images/chatlight.png')} style={{width:'63%',height:'55%'}}/>)
}
</View>
<View style={styles.simTwo}>
<Text style={[styles.textM500,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>{upComment}</Text>
</View>
</View>


<TouchableOpacity style={styles.pinD}>
{
theme === 'dark' ? (<Image source={require('../../assets/images/Defsavedark.png')} style={{width:'47%',height:'57%'}}/>) :
(<Image source={require('../../assets/images/Defsavelight.png')} style={{width:'47%',height:'57%'}}/>)
}
</TouchableOpacity>

</View>




<Animated.View style={[styles.bigScreen,{backgroundColor:theme == 'dark' ? Colors.dark.placeholder : Colors.light.tertiary},screenStyle]}>
<TouchableOpacity style={[styles.bigEmojBox,{borderBottomWidth:isClicked.heart ? 3 : 0}]} onPress={() => sendLikes('heart')}>
<Image source={require('../../assets/images/bigheart.png')} style={{width:'57%',height:'60%'}}/>
</TouchableOpacity>
<TouchableOpacity style={[styles.bigEmojBox,{borderBottomWidth:isClicked.laugh ? 3 : 0}]} onPress={() => sendLikes('laugh')}>
<Image source={require('../../assets/images/biglaugh.png')} style={{width:'57%',height:'60%'}}/>
</TouchableOpacity>
<TouchableOpacity style={[styles.bigEmojBox,{borderBottomWidth:isClicked.sad ? 3 : 0}]} onPress={() => sendLikes('sad')}>
<Image source={require('../../assets/images/bigsad.png')} style={{width:'57%',height:'60%'}}/>
</TouchableOpacity>
<TouchableOpacity style={[styles.bigEmojBox,{borderBottomWidth:isClicked.angry ? 3 : 0}]} onPress={() => sendLikes('angry')}>
<Image source={require('../../assets/images/bigangry.png')} style={{width:'57%',height:'60%'}}/>
</TouchableOpacity>
<TouchableOpacity style={[styles.bigEmojBox,{borderBottomWidth:isClicked.thumb ? 3 : 0}]} onPress={() => sendLikes('thumb')}>
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
borderRadius:20,
marginVertical:8
},

boxOne:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'54%',
paddingTop:15
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
padding:5,
},

itemB:{
justifyContent:'flex-start',
alignItems:'center',
width:'95%',
height:'30%',
padding:5,
},



pinA:{
justifyContent:'center',
alignItems:'flex-end',
width:'12%',
height:'100%',
paddingRight:8,
paddingBottom:4

},



pinB:{
justifyContent:'center',
alignItems:'center',
width:'59%',
height:'100%',
paddingBottom:7
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
borderRadius:20,
},


pinC:{
justifyContent:'center',
alignItems:'center',
width:'16%',
height:'100%',
flexDirection:'row',
marginBottom:8,
paddingLeft:7
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
paddingTop:3

},


pinD:{
justifyContent:'center',
alignItems:'flex-start',
width:'13%',
height:'100%',
paddingLeft:7,
paddingBottom:4
},


textM500: {
fontFamily:'CabinetGrotesk-Medium',
fontSize:15,
fontWeight:500,
},


textR400: {
fontFamily:'CabinetGrotesk-Regular',
fontSize:18,
fontWeight:400,
lineHeight:18
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
borderRadius:30,
flexDirection:'row'
},


bigEmojBox:{
justifyContent: 'center',
alignItems:'center',
width:'18%',
borderBottomColor:'brown',
borderRadius:28,
},


smallEmoji:{
justifyContent: 'center',
alignItems:'center',
width:60,
height:28,
flexDirection:'row',
marginHorizontal:6,
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