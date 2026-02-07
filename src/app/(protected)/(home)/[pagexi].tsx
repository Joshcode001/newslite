

import { View, Text,StyleSheet,TextInput,TouchableOpacity,FlatList,Keyboard,NativeSyntheticEvent,
LayoutChangeEvent,NativeScrollEvent,ScrollView,KeyboardAvoidingView, ActivityIndicator} from 'react-native'
import React,{useContext,useEffect,useState,useRef,useCallback} from 'react'
import { useLocalSearchParams,useRouter} from 'expo-router'
import { AuthContext } from '@/src/utils/authContext'
import { Colors } from '@/src/utils/color'
import {KeyboardStickyView,KeyboardEvents} from 'react-native-keyboard-controller'
import Animated, { useSharedValue, withTiming,useAnimatedStyle } from 'react-native-reanimated';
import { Image } from 'expo-image';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Cusloader from '@/src/components/Cusloader'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { typo,length } from '@/src/utils/typo'
import CommentBox from '@/src/components/CommentBox'
import CusPlayer from '@/src/components/CusPlayer'


type height = {
id:number,
cH:number,
time:number
}


type obq = {
item: comm,
index: number
}


type name = 'heart'|'laugh'|'sad'|'angry'|'thumb'


type lry = {
userId: string,
createdAt: string,
image: string,
}


type like = {
heart:lry[],
laugh:lry[],
sad:lry[],
angry:lry[],
thumb:lry[]
}

type comm = {
userId: string,
image:string,
createdAt:Date,
text:string,
region:string,
_id:string,
commentId:string,
parentId:string,
likes:lry[],
replies:comm[]
}


type res = {
title: string,
source_icon: string,
pubDate: string,
image_url: string,
description: string,
article_id: string,
comments:{array:comm[],count:number},
content:string,
source_url:string,
ai_summary:string,
likes: like
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

type comnt = {
region:string | null ,
text:string,
userId:string,
article_id:string,
image:string}


const AnimatedSticky = Animated.createAnimatedComponent(KeyboardStickyView)



const pagexi = () => {


const scrollRef = useRef<ScrollView>(null)
const inputRef = useRef<TextInput>(null);
const [result, setresult] = useState<res>({content:'',title: '',source_icon: '',source_url:'',ai_summary:'',pubDate:'',
image_url: '',description: '',article_id: '',comments:{array:[],count:0}, likes:{heart:[],thumb:[],sad:[],angry:[],laugh:[]}})


const [transtext, settranstext] = useState({title:'',desc: ''})
const [Y, setY] = useState(0)
const [selectedHeight, setselectedHeight] = useState<number>(0)
const [itemTotal, setitemTotal] = useState<number>(0)
const [totalCLength, settotalCLength] = useState<number[]>([])
const [contentSize, setcontentSize] = useState<number>(0)
const [scViewHeight, setscViewHeight] = useState<number>(0)
const [parentId, setparentId] = useState('null')
const [comHeights, setcomHeights] = useState<height[]>([])
const [Index, setIndex] = useState<number>(0)
const [commLength, setcommLength] = useState<number>(0)
const [isReply, setisReply] = useState(false)
const [shouldShow, setshouldShow] = useState(false)
const [istransActive, setistransActive] = useState(false)
const [shouldSave, setshouldSave] = useState(false)
const [istransLoading, setistransLoading] = useState(false)
const [liveComment, setliveComment] = useState<comm[]>([]);
const [comment, setcomment] = useState('')
const [isClicked,setisClicked] = useState<click>({'heart':false,'laugh':false,'sad':false,'angry':false,'thumb':false})
const [isloading,setisloading] = useState(false)
const [isLoading,setisLoading] = useState(false)
const [isPlaying,setisPlaying] = useState(false)
const [emojiData,setemojData] = useState<emoji[]>([])
const { pagexi } = useLocalSearchParams()
const { theme,WIDTH,HEIGHT,socket,roomKey,myClient,locationP,postArray,bot,isflag } = useContext(AuthContext)
const isShowing = useSharedValue(0)
const shouldDisplay = useSharedValue<boolean>(true)
const router = useRouter()
const fulltext = `${result.title}.${result.description}`
const fulltxt = `${transtext.title}.${transtext.desc}`

const activeImage = theme === 'dark' ? require('../../../../assets/images/Actsavedark.png') : 
require('../../../../assets/images/Actsavelight.png')
const inactiveImage = theme === 'dark' ? require('../../../../assets/images/Defsavedark.png') : 
require('../../../../assets/images/Defsavelight.png')




let page: string= ''

if (typeof pagexi === 'string') {
page = pagexi
}




const CalcLength = (comHeights: height[]) => {

const latestHeights = comHeights.reduce((acc: Record<number, height>, current) => {
const existing = acc[current.id];


if (!existing || current.time > existing.time) {
acc[current.id] = current;
}

return acc;
}, {});


const finalArray = Object.values(latestHeights).map(item => item.cH);

settotalCLength(finalArray);
};



const pushScroll = (index:number) => {


if (totalCLength.length === 1) {

setitemTotal(totalCLength[0])
setselectedHeight(totalCLength[0])


} else if (totalCLength.length > 1) {

const selected = totalCLength.slice(0,index + 1)

const iTotal = totalCLength.reduce((acc:number,value:number) => {
return acc + value
},0)

setitemTotal(iTotal)


const sTotal = selected.reduce((acc:number,value:number) => {
return acc + value
},0)

setselectedHeight(sTotal)
}


return { itemTotal, selectedHeight }

}




const handleScrollEvent = (e:NativeSyntheticEvent<NativeScrollEvent>) => {
setcontentSize(e.nativeEvent.contentSize.height)
}


const handleContentLayout = (e:LayoutChangeEvent) => {
setscViewHeight(e.nativeEvent.layout.height)
}





const animatedStyle = useAnimatedStyle(() => {
return {
justifyContent:isShowing.value === 1 ? 'flex-end': 'flex-start'
}
})



const screenStyle = useAnimatedStyle(() => {
return {
transform: [
{
translateY: withTiming(
shouldDisplay.value === true ? -('85%'): 0,
{ duration: 250}
),
},
],
opacity: withTiming(shouldDisplay.value === true ? 0 : 1, { duration: 200 }),
};
})





const emojis: { [key: string]: any } = {
heart: require('../../../../assets/images/smallheartpng.png'),
laugh: require('../../../../assets/images/smalllaugh.png'),
sad: require('../../../../assets/images/smallsad.png'),
angry: require('../../../../assets/images/smallangry.png'),
thumb: require('../../../../assets/images/smallthumb.png'),
};


const handleReply = (id:string) => {

setcomment(`@${id}   `)

if (inputRef.current) {
inputRef.current.focus();
}

}

const CusSpin = () => (

<View style={[styles.spinbox,{width:typo.h300,marginRight:typo.h3}]}>
<View style={styles.boxOne}>
<ActivityIndicator color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} size={typo.h1_5} />
</View>
</View>
)


const renderItem = useCallback(({item,index}:obq) => <CommentBox setisReply={setisReply} setcomHeights={setcomHeights} setIndex={setIndex} id={page} index={index} replies={item.replies} parentId={item.parentId} commentId={item.commentId} likes={item.likes} setparentId={setparentId} handleReply={handleReply} userId={item.userId} text={item.text} createdAt={item.createdAt} image={item.image} region={item.region}/>,[])



const requestAudio = () => {

if (isPlaying || isLoading) return

setisLoading(true)
setshouldShow(true)

if (istransActive) {
socket.emit("ttsAudio",{text:fulltxt,langcode:bot.lcodex,name:bot.lnamei,rkey:roomKey,postId:page})

}else if (!istransActive) {
socket.emit("ttsAudio",{text:fulltext,langcode:bot.codex,name:bot.name,rkey:roomKey,postId:page})

}

}


const getTranslate = () => {

if (istransLoading) return

if (istransActive) {
setistransActive(false)

}else if (!istransActive) {

setistransLoading(true)
setshouldShow(true)

socket.emit("translate",{text:fulltext,langcode:bot.codei,rkey:roomKey,postId:page})
}

}



const EmojiTag = ({name,count}:emoji) => (
<View style={[styles.smallEmoji,{width:typo.h1_5 * 2 ,height:length.l1 / 3,}]}>
<View style={styles.payOne}>
<Image source={emojis[name]} style={{width:'80%',height:'90%'}}/>
</View>
<View style={styles.payTwo}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h4,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>{count}</Text>
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

socket.emit('updatedLikes',{postId:page,userId:myClient.uname,action:name,image:myClient.image})
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



const sendComment = (comment:comnt) => {



if (comment.text !== '') {

socket.emit("newComment",{region:comment.region,text:comment.text, userId:comment.userId,article_id:comment.article_id,parentId,image:myClient.image})

setcomment('')
setparentId('null')
Keyboard.dismiss()

}
}



const handleSave = () => {


setshouldSave(!shouldSave)

const query = { userId:myClient.uname,articleId:page,articleImage:result.image_url,
title:result.title,pubDate:result.pubDate }

socket.emit('saved', query )
}







useEffect(() => {

if (page !== '') {
setisloading(true)
socket.emit("Post",{ rkey:roomKey,postId:page })

}

},[])






useEffect(() => {

const show = KeyboardEvents.addListener('keyboardWillShow',(e) => {
isShowing.value = withTiming(1,{duration:60})
})

const notShow = KeyboardEvents.addListener('keyboardWillHide',(e)=> {
isShowing.value = withTiming(0,{duration:60})
})


return () => {
show.remove()
notShow.remove()
}

},[])





useEffect(() => {

socket.on("livePost",(live:any) => {

if (live.articleId === page) {

const comments = live.data.comments
const post = postArray.find(p => p.article_id === page)

if (!post) return

setresult({
content:post.content,
title: post.title,
source_icon:post.source_icon,
source_url:post.source_url,
ai_summary:post.ai_summary,
pubDate:post.pubDate,
image_url:post.image_url,
description:post.description,
article_id:post.article_id,
comments:{ array:post.comments.array,count:post.comments.count }, 
likes:post.likes
})


setliveComment(comments.array)
setcommLength(comments.count)
printList(live.data.likes)
setLikes(live.data.likes)
setisloading(false)
}

})


socket.on("likes", (likesObj:any) => {

if (likesObj.articleId === page) {
printList(likesObj.updated)
setLikes(likesObj.updated)
}
})


socket.on("comments", (commentsObj:any) => {

if (commentsObj.articleId === page) {

setliveComment(commentsObj.updated)
setcommLength(commentsObj.commentLength)
}
})


socket.on("translated", (data:any) => {

if (data.postId === page) {

const result = data.text

const ndata = result.split('.')

const [x, ...rest] = ndata

settranstext({title: x, desc: rest})
setistransActive(true)
setshouldShow(false)
setistransLoading(false)
}

})


},[socket])



useEffect(() => {

if (scViewHeight > 500) {

setparentId('null')
setcomment('')
setitemTotal(0)
setselectedHeight(0)
setY(0)

} if (scViewHeight < 500 && isReply)  {

pushScroll(Index)


} else if (scViewHeight < 500 && !isReply) {

scrollRef.current?.scrollTo({x:0, y:0})
}

},[scViewHeight])






useEffect(() => {

if (comHeights.length !== 0) {

CalcLength(comHeights)
}
},[comHeights])



useEffect(() => {

if ((itemTotal !== 0 && contentSize !== 0) && selectedHeight !== 0  ) {


const customScroll = ((contentSize - itemTotal) - 702) + selectedHeight + 265

setY(customScroll)


}

},[itemTotal,selectedHeight])


useEffect(() => {

if (Y !== 0 && isReply) {
scrollRef.current?.scrollTo({x:0, y:Y})

} else if (Y === 0 && !isReply) {
scrollRef.current?.scrollTo({x:0, y:0})

}


},[Y])


useEffect(() => {

const alreadyIn = myClient.saved.filter(user => user.articleId === page)

if (alreadyIn.length > 0){
setshouldSave(true)

}else if (alreadyIn.length === 0){
setshouldSave(false)
}


},[myClient.saved])



return (
<View style={[styles.container,{backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base, width:WIDTH,height:HEIGHT}]}>


<View style={styles.cupOne}>
<View style={styles.header}>
<View style={styles.rowA}>
<TouchableOpacity style={styles.rowBbox} onPress={() => router.back()}>
<Ionicons name="chevron-back" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</TouchableOpacity>
</View>
<View style={styles.rowB}>

<TouchableOpacity style={styles.rowBboxi} onPress={handleSave}>
<Image source={shouldSave ? activeImage : inactiveImage} style={{width:'52%',height:'60%'}}/>
</TouchableOpacity>

{
isflag ? (<TouchableOpacity style={styles.rowBbox}>
<MaterialCommunityIcons name="account-voice-off" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</TouchableOpacity>) : (<TouchableOpacity style={styles.rowBbox} onPress={requestAudio} >
<MaterialCommunityIcons name="account-voice" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</TouchableOpacity>)
}

<TouchableOpacity style={styles.rowBboxii} onPress={getTranslate}>
{
theme === 'dark' ? (istransActive ? <Image source={require('../../../../assets/images/actTranslatedark.png')} style={{width:'47%',height:'57%'}}/> : <Image source={require('../../../../assets/images/translatedark.png')} style={{width:'47%',height:'57%'}}/>) :
(istransActive ? <Image source={require('../../../../assets/images/actTranslatelight.png')} style={{width:'52%',height:'60%'}}/> : <Image source={require('../../../../assets/images/translatelight.png')} style={{width:'52%',height:'60%'}}/>)
}
</TouchableOpacity>
</View>
</View>
</View>



<KeyboardAvoidingView keyboardVerticalOffset={(length.l1 / 2) + 10} behavior={'padding'}  style={styles.cupTwo}>

{
isloading ? (<Cusloader top={length.l3_5} />):(<ScrollView stickyHeaderIndices={[0]}  nestedScrollEnabled={true} onLayout={(e) => handleContentLayout(e)} onScroll={(e) => handleScrollEvent(e) } scrollEventThrottle={16} ref={scrollRef} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>


<View style={[styles.sticky,{display:shouldShow ? 'flex':'none',height:length.l1 - 20,
width:WIDTH - typo.h6,marginBottom:typo.h1_5}]}>

{
istransLoading ? (<CusSpin />) : (<CusPlayer isLoading={isLoading} setisLoading={setisLoading} setshouldShow={setshouldShow} setisPlaying={setisPlaying} />)
}

</View>



<View style={[styles.headerBox,{marginVertical:typo.h4,width:WIDTH - typo.h2,minHeight:length.l1}]}>
<Text allowFontScaling={false} style={[styles.textM500,{lineHeight:typo.h1_2,fontSize:typo.h1_5,color:theme === 'dark' ? Colors.light.border :Colors.dark.primary }]}>{istransActive ? transtext.title : result.title}</Text>
</View>

<View style={[styles.imageBox,{marginVertical:typo.h6,width:WIDTH,height:length.l3}]}>
<Image source={result.image_url} style={{width:'100%',height:'100%'}} contentFit='contain' />
</View>

<View style={[styles.descBox,{width:WIDTH - typo.h2,minHeight:length.l1}]}>
<Text allowFontScaling={false} style={[styles.textR400,{lineHeight:typo.h2,fontSize:typo.h3,color:theme === 'dark' ? Colors.light.border :Colors.dark.primary }]}>{istransActive ? transtext.desc : result.description}</Text>
</View>


<View style={[styles.sourceBox,{marginVertical:typo.h2,width:WIDTH - typo.h2,height:length.l2}]}>

<View style={styles.colOne}>
<View style={[styles.box]}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary,fontSize:typo.h3}]}>Source</Text>
</View>
</View>


<View style={styles.colTwo}>

<View style={styles.boxTwoi}>
<View style={[styles.circle,{width:"80%",borderWidth:1,borderColor:theme === 'dark' ? Colors.light.icon :Colors.dark.icon}]}>
<Image source={result.source_icon} style={styles.image} contentFit='contain' />
</View>
</View>

<View style={styles.boxTwoii}>
<View style={[styles.box,{paddingLeft:typo.h8}]}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.border :Colors.dark.primary,fontSize:typo.h4 }]}>{result.source_url}</Text>
</View>
</View>

</View>


<View style={styles.colThree}>

<View style={styles.threeA}>

<Animated.View style={[styles.bigScreen,{borderRadius:typo.h1_5,backgroundColor:theme == 'dark' ? Colors.dark.placeholder : Colors.light.tertiary},screenStyle]}>
<TouchableOpacity style={[styles.bigEmojBox,{borderRadius:typo.h2,borderBottomWidth:isClicked.heart ? 1 : 0}]} onPress={() => sendLikes('heart')}>
<Image source={require('../../../../assets/images/bigheart.png')} style={{width:'57%',height:'60%'}}/>
</TouchableOpacity>
<TouchableOpacity style={[styles.bigEmojBox,{borderRadius:typo.h2,borderBottomWidth:isClicked.laugh ? 1 : 0}]} onPress={() => sendLikes('laugh')}>
<Image source={require('../../../../assets/images/biglaugh.png')} style={{width:'57%',height:'60%'}}/>
</TouchableOpacity>
<TouchableOpacity style={[styles.bigEmojBox,{borderRadius:typo.h2,borderBottomWidth:isClicked.sad ? 1 : 0}]} onPress={() => sendLikes('sad')}>
<Image source={require('../../../../assets/images/bigsad.png')} style={{width:'57%',height:'60%'}}/>
</TouchableOpacity>
<TouchableOpacity style={[styles.bigEmojBox,{borderRadius:typo.h2,borderBottomWidth:isClicked.angry ? 1 : 0}]} onPress={() => sendLikes('angry')}>
<Image source={require('../../../../assets/images/bigangry.png')} style={{width:'57%',height:'60%'}}/>
</TouchableOpacity>
<TouchableOpacity style={[styles.bigEmojBox,{borderRadius:typo.h2,borderBottomWidth:isClicked.thumb ? 1 : 0}]} onPress={() => sendLikes('thumb')}>
<Image source={require('../../../../assets/images/bigthumb.png')} style={{width:'57%',height:'60%'}}/>
</TouchableOpacity>
</Animated.View>

</View>

<View style={styles.threeB}>

<TouchableOpacity style={styles.boxTwoi} onLongPress={() => shouldDisplay.value = false} onPress={() => sendLikes('heart')}>
{
isClicked.heart ? (<Ionicons name="heart-sharp" size={typo.h2} color='red'/>) : (<Ionicons name="heart-outline" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon}/>)
}
</TouchableOpacity>

<View style={styles.boxTwoii}>
<View style={[styles.screen,{borderRadius:typo.h3,borderColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary,backgroundColor:theme === 'dark' ?  Colors.dark.base : Colors.light.tertiary}]}>
{emojiData.map((ed) => <EmojiTag name={ed.name} count={ed.count} key={ed.name}/>)}
</View>
</View>

</View>

</View>

</View>


<View style={[styles.commentBox,{marginVertical:typo.h3,width:WIDTH - typo.h6,height:length.l1 / 2}]}>

<View style={[styles.sightA,{paddingLeft:typo.h7}]}>
<Text allowFontScaling={false} style={[styles.textM500,{fontWeight:900,fontSize:typo.h3,color:theme === 'dark' ? Colors.light.border :Colors.dark.primary }]}>Comments</Text>
</View>

<View style={styles.sightB}>
<View style={[styles.numberB,{borderRadius:typo.h3,backgroundColor:theme === 'dark' ? Colors.dark.primary : Colors.light.primary,borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h4,color:theme === 'dark' ? Colors.light.border :Colors.dark.primary,textAlign:'center' }]}>{commLength}</Text>
</View>
</View>

<View style={styles.sightC}>
<View style={[styles.line,{borderBottomWidth:2,paddingTop:2,borderBottomColor:theme === 'dark' ? Colors.dark.border :Colors.light.border}]}></View>
</View>

<View style={styles.sightD}>
<MaterialIcons name="filter-list" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</View>

</View>



<FlatList data={liveComment} contentContainerStyle={styles.ccsOne} renderItem={renderItem} scrollEnabled={false} 
keyExtractor={item => item._id} />


</ScrollView>)
}

</KeyboardAvoidingView>



<AnimatedSticky key={result.article_id} style={[styles.cupThree,animatedStyle]} offset={{closed:0,opened:-7}} pointerEvents='box-none'> 
<View style={[styles.footer,{borderRadius:typo.h4,backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.secondary,borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>

<View style={styles.footBox1}>
<View style={styles.circle}>
{
(myClient.image === 'null') ? (theme === 'dark' ? (<Image source={require('../../../../assets/images/usericondark.png')} style={[styles.image,{width:'85%'}]} contentFit='contain' />) : (<Image source={require('../../../../assets/images/usericonlight.png')} style={[styles.image,{width:'85%'}]} contentFit='contain' />)) : (<Image source={myClient.image} style={[styles.image,{width:'85%'}]} contentFit='contain' />)
}
</View>
</View>


<View style={styles.footBox2}>
<TextInput ref={inputRef} onChangeText={(text) => setcomment(text)} style={[styles.input,{paddingTop:typo.h6,color:theme === 'dark' ? Colors.light.primary :Colors.dark.base,fontSize:typo.h3}]} placeholder='Enter Comment...' placeholderTextColor={theme === 'dark' ? Colors.dark.placeholder :Colors.light.placeholder} allowFontScaling={false} multiline={true} value={comment} />
</View>



<TouchableOpacity style={[styles.footBox3,{paddingTop:typo.h8}]} 
onPress={() => {
const commentObj:comnt = {region:locationP.isocode,userId:myClient.uname,article_id:result.article_id,image:myClient.image,text:comment}

sendComment(commentObj)
}}>

{
theme === 'dark' ? (<Image source={require('../../../../assets/images/senddark.png')} style={{width:'50%',height:'80%'}} />) : (<Image source={require('../../../../assets/images/sendlight.png')} style={{width:'50%',height:'80%'}} />)
}
</TouchableOpacity>

</View>
</AnimatedSticky>




</View>
)
}

export default pagexi









const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center',
flexDirection:'column'
},

cupOne:{
justifyContent:'flex-end',
alignItems:'center',
width:'100%',
height:'11%',

},

header:{
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'40%',

},

rowA:{
justifyContent:'center',
alignItems:'flex-start',
width:'55%',
height:'100%'
},

rowB:{
justifyContent:'space-between',
alignItems:'center',
width:'45%',
height:'100%',
flexDirection:'row',
},

rowBbox:{
justifyContent:'center',
alignItems:'center',
width:'23%',
height:'100%',
},

rowBboxi:{
justifyContent:'center',
alignItems:'flex-end',
width:'23%',
height:'100%',
},

rowBboxii:{
justifyContent:'center',
alignItems:'flex-start',
width:'23%',
height:'100%',
},


cupTwo:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'73%',
},

cupThree:{
alignItems:'center',
width:'100%',
height:'16%'
},


footer:{
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
width:'95%',
height:'34%',
borderWidth:1,
},

footBox1:{
justifyContent:'center',
alignItems:'center',
width:'15%',
height:'100%',
},

circle:{
justifyContent:'center',
alignItems:'center',
width:'75%',
aspectRatio:1,
borderRadius:9999,
overflow:'hidden'
},

image: {
width:'80%',
aspectRatio:1,
borderRadius:9999,
overflow:'hidden'
},


footBox2:{
justifyContent:'center',
alignItems:'center',
width:'70%',
height:'100%',
},

footBox3:{
justifyContent:'center',
alignItems:'center',
width:'15%',
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

input:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'100%',
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
},

contentContainer:{
justifyContent:'flex-start',
alignItems:'center',
width:'100%',
height:'auto'
},

headerBox:{
justifyContent:'flex-start',
alignItems:'center',
maxHeight:'auto',
},


imageBox:{
justifyContent:'center',
alignItems:'center',
},

descBox:{
justifyContent:'flex-start',
alignItems:'center',
maxHeight:'auto',
},

sourceBox:{
flexDirection:'column',
justifyContent:'center',
alignItems:'center',
},


colOne:{
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'15%'
},


box:{
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'70%',
},


colTwo:{
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'35%'
},

boxTwoi:{
justifyContent:'center',
alignItems:'center',
width:'17%',
height:'100%'
},

boxTwoii:{
justifyContent:'center',
alignItems:'flex-start',
width:'83%',
height:'100%'
},



colThree:{
flexDirection:'column',
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'50%',
},

threeA:{
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'55%',
},

threeB:{
flexDirection:'row',
justifyContent:'flex-end',
alignItems:'center',
width:'100%',
height:'45%',
},


screen:{
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
width:'90%',
height:'80%',
borderWidth:2
},



commentBox:{
justifyContent:'center',
alignItems:'center',
flexDirection:'row'
},


sightA:{
justifyContent:'center',
alignItems:'flex-start',
width:'30%',
maxWidth:'auto',
height:'100%',
},

sightB:{
justifyContent:'center',
alignItems:'flex-start',
width:'15%',
height:'100%',
},

sightC:{
justifyContent:'flex-start',
alignItems:'center',
width:'48%',
height:'100%'
},

line:{
width:'98%',
height:'50%',
},

sightD:{
justifyContent:'center',
alignItems:'flex-start',
width:'9%',
height:'100%'
},

numberB:{
justifyContent:'center',
alignItems:'center',
width:'90%',
height:'55%',
borderWidth:1,
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

bigScreen: {
justifyContent: 'space-around',
alignItems:'center',
width:'75%',
height:'85%',
flexDirection:'row'
},

bigEmojBox:{
justifyContent: 'center',
alignItems:'center',
width:'18%',
borderBottomColor:'brown',
},

ccsOne:{
width:'100%',
height:'auto',
justifyContent:'flex-start',
alignItems:'center'
},

sticky:{
justifyContent:'center',
alignItems:'center',
},

spinbox:{
justifyContent:'center',
alignItems:'center',
height:'100%'
},

boxOne:{
justifyContent:'center',
alignItems:'center',
width:'90%',
height:'90%'
},



})