

import { View, Text,StyleSheet,TextInput,TouchableOpacity,FlatList,Keyboard,NativeSyntheticEvent,
LayoutChangeEvent,NativeScrollEvent,ScrollView,KeyboardAvoidingView, ActivityIndicator} from 'react-native'
import React,{useContext,useEffect,useState,useRef} from 'react'
import { useLocalSearchParams,useRouter} from 'expo-router'
import { AuthContext } from '@/src/utils/authContext'
import { Colors } from '@/src/utils/color'
import {KeyboardStickyView} from 'react-native-keyboard-controller'
import Animated, { useSharedValue, withTiming,useAnimatedStyle } from 'react-native-reanimated';
import { Image } from 'expo-image';
import Cusloader from '@/src/components/Cusloader'
import { typo,length } from '@/src/utils/typo'
import CommentBox from '@/src/components/CommentBox'
import CusPlayer from '@/src/components/CusPlayer'
import AppIcon from '@/src/components/AppIcons'
import { lingual } from '@/src/utils/dataset'



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
count:number,
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




type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";






const pagexz = () => {


const scrollRef = useRef<ScrollView>(null)
const inputRef = useRef<TextInput>(null);
const [result, setresult] = useState<res>({content:'',title: '',source_icon: '',source_url:'',ai_summary:'',pubDate:'',
image_url: '',description: '',article_id: '',comments:{array:[],count:0}, likes:{heart:[],thumb:[],sad:[],angry:[],laugh:[]}})

const [lang, setlang] = useState<langt>('en')
const [transtext, settranstext] = useState({title:'',desc: '',content:'',summary:''})
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
const [isPageLoading,setisPageLoading] = useState(false)
const [isAudioLoading,setisAudioLoading] = useState(false)
const [isPlaying,setisPlaying] = useState(false)
const [emojiData,setemojData] = useState<emoji[]>([])
const { pagez,id } = useLocalSearchParams()
const { theme,WIDTH,HEIGHT,socket,roomKey,myClient,locationP,bot,langset,platform,appLang,liveSaved,shouldntDisplay,shareArticle,isloading,getlang,isflag,showToast,liveSubCode} = useContext(AuthContext)
const shouldDisplay = useSharedValue<boolean>(true)
const router = useRouter()
const fulltext = `${result.title}.${result.description}.${result.content}.${result.ai_summary}`
const fulltxt = `${transtext.title}.${transtext.desc}.${transtext.content}.${transtext.summary}`


const activeImage = theme === 'dark' ? 'actsavedark' : 'actsavelight'
const inactiveImage = theme === 'dark' ? 'defsavedark' : 'defsavelight'
const placeholderH = theme === 'dark' ? 'heartoutlinedark' : 'heartoutlinelight'
const placeholderT = theme === 'dark' ? (istransActive ? 'translateactdark' : 'deftranslatedark') : 
(istransActive ? 'translateactlight' : 'deftranslatelight')

const placeholderU = theme === 'dark' ? 'profiledark' : 'profilelight'
const placeholderV = theme === 'dark' ? 'voicedark' : 'voicelight'
const placeholderA = theme === 'dark' ? 'arrowleftdark' : 'arrowleftlight'
const placeholderS = theme === 'dark' ? 'sortdark' : 'sortlight'
const placeholderSH = theme === 'dark' ? 'sharedark' : 'sharelight'
const placeholderSD = theme === 'dark' ? 'senddark' : 'sendlight'



let page:string = ''
let commentId:string = ''


if (typeof pagez === 'string') {
page = pagez
}

if (typeof id === 'string') {
commentId = id
}




const emojis: { [key: string]: any } = {
heart:'❤️',
laugh:'😂',
sad: '😢',
angry:'😡',
thumb:'👍',
};



const EmojiTag = ({name,count}:emoji) => (
<View style={[styles.smallEmoji,{width:typo.h1_5 * 2 ,height:length.l1 / 3,}]}>
<View style={styles.payOne}>
<Text style={{ fontSize:platform === 'ios' ? typo.h3 : typo.h5}}>{emojis[name]}</Text>
</View>
<View style={styles.payTwo}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h5,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>{count}</Text>
</View>
</View>
)






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








const handleReply = (id:string) => {

setcomment(`@${id}   `)

if (inputRef.current) {
inputRef.current.focus();
}

}

const CusSpin = () => (

<View style={[styles.spinbox,{width:typo.h300,marginRight:typo.h3}]}>
<View style={styles.boxOne}>

<Text style={[styles.textM500,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.border :Colors.dark.primary }]}>{lingual.translatingContent[lang].replace('{label}',langset.lang)}</Text>

<ActivityIndicator color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} size={typo.h1_5} />
</View>
</View>
)


const requestAudio = () => {

switch (true) {

case (liveSubCode === 'null'):

const toast = {type:'customError',name:myClient.fname,info:lingual.getPremium[lang],onHide:() => {}, visibilityTime:4000}
showToast(toast)
break;


case (liveSubCode !== 'null'):

if (isPlaying || isAudioLoading) return

setisAudioLoading(true)
setshouldShow(true)

switch (true) {

case (isflag === false):

if (istransActive) {
socket.emit("ttsAudio",{text:fulltxt,langcode:bot.lcodex,name:bot.lnamei,rkey:roomKey,postId:page})

}else if (!istransActive) {
socket.emit("ttsAudio",{text:fulltext,langcode:bot.codex,name:bot.name,rkey:roomKey,postId:page})

}
break;


case (isflag !== false):

if (istransActive) {
socket.emit("ttsAudio",{text:fulltxt,langcode:'en-US',name:'en-US-Chirp3-HD-Aoede',rkey:roomKey,postId:page})

}else if (!istransActive) {
socket.emit("ttsAudio",{text:fulltext,langcode:bot.codex,name:bot.name,rkey:roomKey,postId:page})

}
break;


}

break;

}
}



const getTranslate = () => {

switch(true){

case (liveSubCode === 'null'):

const toast = {type:'customError',name:myClient.fname,info:lingual.getPremium[lang],onHide:() => {}, visibilityTime:4000}
showToast(toast)
break;


case (liveSubCode !== 'null'):

if (istransLoading) return

if (istransActive) {
setistransActive(false)

}else if (!istransActive) {

setistransLoading(true)
setshouldShow(true)

socket.emit("translateIV",{texta:result.title,textb:result.description,textc:result.content,textd:result.ai_summary,
langcode:bot.codei,rkey:roomKey,postId:page})
}

}

}



const printList = (likes:like) => {

const list = Object.entries(likes).filter((item) => item[0] !== '_id').map(([key, value]) => {


return { name: key, count: value.length };
});

const sorted = list.sort((a,b) => b.count - a.count) as emoji[]

setemojData(sorted)


}


const handleBack = () => {

shouldntDisplay.value = true
router.back()
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

switch (true) {

case (liveSubCode === 'null'):

const toast = {type:'customError',name:myClient.fname,info:lingual.getPremium[lang],onHide:() => {}, visibilityTime:4000}
showToast(toast)

setcomment('')
Keyboard.dismiss()
break;


case (liveSubCode !== 'null'):

if (comment.text !== '') {

socket.emit("newComment",{region:comment.region,text:comment.text, userId:comment.userId,article_id:comment.article_id,parentId,image:myClient.image})

setcomment('')
setparentId('null')
Keyboard.dismiss()

}

}

}



const handleSave = () => {


setshouldSave(!shouldSave)

const query = { userId:myClient.uname,articleId:page,articleImage:result.image_url,
title:result.title,pubDate:result.pubDate }

socket.emit('saved', query )
}


const formatDisplayDate = (dateString:string, locale:string) => {

if (dateString === '') return

const date = new Date(dateString);

const dFormatter = new Intl.DateTimeFormat(locale, {
day: '2-digit',
month: 'short',
year: 'numeric',
});

const tFormatter = new Intl.DateTimeFormat(locale, {
hour: '2-digit',
minute: '2-digit',
hour12: false,
});

const datePart = dFormatter.format(date); 
const timePart = tFormatter.format(date);


return `${datePart} : ${timePart}`;
};


const handleShare = () => {
if(isloading)return

const data = { id:result.article_id,image:result.image_url,title:result.title }
shareArticle(data)

}




useEffect(() => {

if (page !== '') {
setisPageLoading(true)
socket.emit("fullPost",{ rkey:roomKey,postId:page })

}

},[page])





useEffect(() => {

const fullPostHandler = (live:any) => {

if (live.articleId === page) {
const comments = live.data.comments
const post = live.data

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
setisPageLoading(false)
}
}

const likesHandler = (likesObj:any) => {

if (likesObj.articleId === page) {
printList(likesObj.updated)
setLikes(likesObj.updated)
}
}

const commentsHandler = (commentsObj:any) => {

if (commentsObj.articleId === page) {
setliveComment(commentsObj.updated)
setcommLength(commentsObj.commentLength)
}
}

const translatedHandler = (data:any) => {

if (data.postId === page) {
const result = data.text


settranstext({title:result.lineA, desc:result.lineB,content:result.lineC,summary:result.lineD})
setistransActive(true)
setshouldShow(false)
setistransLoading(false)
}
}

socket.on("fullxPost", fullPostHandler)
socket.on("likes", likesHandler)
socket.on("comments", commentsHandler)
socket.on("translatedIV", translatedHandler)


return () => {
socket.off("fullxPost", fullPostHandler)
socket.off("likes", likesHandler)
socket.off("comments", commentsHandler)
socket.off("translatedIV", translatedHandler)
}

}, [socket, page])



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


const customScroll = ((contentSize - itemTotal) - 702) + selectedHeight + 275

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

if (!isPageLoading && commentId !== 'null'){
scrollRef.current?.scrollToEnd()
}

},[isPageLoading,commentId])




useEffect(() => {

const alreadyIn = liveSaved.filter(user => user.articleId === page)

if (alreadyIn.length > 0){
setshouldSave(true)

}else if (alreadyIn.length === 0){
setshouldSave(false)
}


},[liveSaved])



useEffect(() => {
shouldntDisplay.value = false

},[shouldntDisplay])


useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])


return (
<View style={[styles.container,
{backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base, width:WIDTH,height:HEIGHT}]}>


<View style={styles.cupOne}>
<View style={styles.header}>
<View style={styles.rowA}>
<TouchableOpacity style={styles.rowBbox} onPress={handleBack}>
<AppIcon name={placeholderA} size={typo.h1_8}/>
</TouchableOpacity>
</View>
<View style={styles.rowB}>

<TouchableOpacity style={styles.rowBboxi} onPress={handleSave}>
<AppIcon name={shouldSave ? activeImage : inactiveImage} size={typo.h1_8}/>
</TouchableOpacity>

<TouchableOpacity style={styles.rowBbox} onPress={requestAudio} >
<AppIcon name={placeholderV} size={typo.h1_8}/>
</TouchableOpacity>

<TouchableOpacity style={styles.rowBboxii} onPress={getTranslate}>
<AppIcon name={placeholderT} size={typo.h1_8}/> 
</TouchableOpacity>
</View>
</View>
</View>



<KeyboardAvoidingView keyboardVerticalOffset={58} behavior={'padding'}  style={styles.cupTwo}>

{
isPageLoading ? (<Cusloader top={length.l3} />):(<ScrollView stickyHeaderIndices={[0]}  nestedScrollEnabled={true} onLayout={(e) => handleContentLayout(e)} onScroll={(e) => handleScrollEvent(e) } scrollEventThrottle={16} ref={scrollRef} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>


<View style={[styles.sticky,{display:shouldShow ? 'flex':'none',height:length.l1 - 20,
width:WIDTH - typo.h6,marginBottom:typo.h1_5}]}>

{
istransLoading ? (<CusSpin />) : (<CusPlayer isLoading={isAudioLoading} setisLoading={setisAudioLoading} setshouldShow={setshouldShow} setisPlaying={setisPlaying} />)
}

</View>



<View style={[styles.headerBox,{marginVertical:typo.h4,width:WIDTH - typo.h2,minHeight:length.l1}]}>
<Text allowFontScaling={false} style={[styles.textM500,{lineHeight:typo.h1_2,fontSize:typo.h1_5,color:theme === 'dark' ? Colors.light.border :Colors.dark.primary }]}>{istransActive ? transtext.title : result.title}</Text>
</View>

<View style={[styles.imageBox,{marginBottom:typo.h6,width:WIDTH,height:WIDTH > 500 ? length.l7 : length.l3_5}]}>
<Image source={result.image_url} style={{width:'100%',height:'100%'}} contentFit='contain' />
</View>

<View style={[styles.descBox,{width:WIDTH - typo.h2}]}>
<Text allowFontScaling={false} style={[styles.textMR200,{lineHeight:typo.h2,fontSize:typo.h3,color:theme === 'dark' ? Colors.light.border :Colors.dark.primary }]}>{istransActive ? transtext.desc : result.description}</Text>
</View>


<View style={[styles.contentBox,{width:WIDTH - typo.h2}]}>
<Text allowFontScaling={false} style={[styles.textMR200,{lineHeight:typo.h2,fontSize:typo.h3,color:theme === 'dark' ? Colors.light.border :Colors.dark.primary }]}>{istransActive ? transtext.content : result.content}</Text>
</View>


<View style={[styles.summaryTag,{marginTop:typo.h6,width:WIDTH - typo.h2,height:length.l1/2}]}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary,fontSize:typo.h3}]}>AI Summary</Text>
</View>


<View style={[styles.summaryBox,{marginVertical:typo.h2,width:WIDTH - typo.h2}]}>
<Text allowFontScaling={false} style={[styles.textMR200,{lineHeight:typo.h1_5,fontSize:typo.h3,color:theme === 'dark' ? Colors.light.border :Colors.dark.primary }]}>{istransActive ? transtext.summary : result.ai_summary}</Text>
</View>



<View style={[styles.sourceBox,{marginVertical:typo.h2,width:WIDTH - typo.h2,height:length.l2}]}>

<View style={styles.colOne}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary,fontSize:typo.h3}]}>Source</Text>
</View>


<View style={styles.colTwo}>

<View style={styles.boxTwoi}>
<View style={[styles.circle,{width:WIDTH > 500 ? "50%" : "80%",borderColor:theme === 'dark' ? Colors.light.icon :Colors.dark.icon,borderWidth:1}]}>
<Image source={result.source_icon} style={[styles.image,{width:'80%'}]} contentFit='contain' />
</View>
</View>

<View style={styles.boxTwoii}>
<View style={[styles.boxa]}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.border :Colors.dark.primary,fontSize:typo.h4 }]}>{result.source_url}</Text>
</View>

<View style={styles.boxb}>

<View style={styles.date}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.border :Colors.dark.primary,fontSize:typo.h4 }]}>{formatDisplayDate(result.pubDate,appLang.value)}</Text>
</View>

<TouchableOpacity onPress={handleShare} style={styles.share}>
{
isloading ? (<ActivityIndicator size={25} color={theme === 'dark' ? Colors.light.border :Colors.dark.primary} />) :
(<AppIcon name={placeholderSH} size={25}/>)
}
</TouchableOpacity>

</View>

</View> 

</View>


<View style={styles.colThree}>

<View style={styles.threeA}>

<Animated.View style={[styles.bigScreen,{borderRadius:typo.h1_5,backgroundColor:theme == 'dark' ? Colors.dark.placeholder : Colors.light.tertiary},screenStyle]}>
<TouchableOpacity style={[styles.bigEmojBox,{borderRadius:typo.h2,borderBottomWidth:isClicked.heart ? 1 : 0}]} onPress={() => sendLikes('heart')}>
<Text style={{ fontSize: 20 }}>❤️</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.bigEmojBox,{borderRadius:typo.h2,borderBottomWidth:isClicked.laugh ? 1 : 0}]} onPress={() => sendLikes('laugh')}>
<Text style={{ fontSize: 20 }}>😂</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.bigEmojBox,{borderRadius:typo.h2,borderBottomWidth:isClicked.sad ? 1 : 0}]} onPress={() => sendLikes('sad')}>
<Text style={{ fontSize: 20 }}>😢</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.bigEmojBox,{borderRadius:typo.h2,borderBottomWidth:isClicked.angry ? 1 : 0}]} onPress={() => sendLikes('angry')}>
<Text style={{ fontSize: 20 }}>😡</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.bigEmojBox,{borderRadius:typo.h2,borderBottomWidth:isClicked.thumb ? 1 : 0}]} onPress={() => sendLikes('thumb')}>
<Text style={{ fontSize: 20 }}>👍</Text>
</TouchableOpacity>
</Animated.View>

</View>

<View style={styles.threeB}>

<TouchableOpacity style={styles.boxTwoi} onLongPress={() => shouldDisplay.value = false} onPress={() => sendLikes('heart')}>
{
isClicked.heart ?  (<AppIcon name='heartact' size={25}/>) : (<AppIcon name={placeholderH} size={25}/>)
}
</TouchableOpacity>

<View style={styles.boxTwoiii}>
<View style={[styles.screen,{borderRadius:typo.h3,borderColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary,backgroundColor:theme === 'dark' ?  Colors.dark.base : Colors.light.tertiary,width:WIDTH > 500 ? '75%': '90%'}]}>

{emojiData.map((ed) => <EmojiTag name={ed.name} count={ed.count} key={ed.name} />)}
</View>
</View>

</View>

</View>

</View>


<View style={[styles.commentBox,{marginVertical:typo.h3,width:WIDTH - typo.h6,height:length.l1 / 2}]}>

<View style={[styles.sightA,{paddingLeft:typo.h7}]}>
<Text allowFontScaling={false} style={[styles.textM900,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.border :Colors.dark.primary }]}>Comments</Text>
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
<AppIcon name={placeholderS} size={20}/>
</View>

</View>



<FlatList ItemSeparatorComponent={() => <View style={{width:'100%',height:5}}></View>}  data={liveComment} contentContainerStyle={styles.ccsOne} renderItem={({item,index}:obq) => <CommentBox  setisReply={setisReply} setcomHeights={setcomHeights} setIndex={setIndex} id={page} index={index} replies={item.replies} parentId={item.parentId} commentId={item.commentId} likes={item.likes} setparentId={setparentId} handleReply={handleReply} userId={item.userId} text={item.text} createdAt={item.createdAt} image={item.image} region={item.region}/>} scrollEnabled={false} 
keyExtractor={item => item._id} />


</ScrollView>)
}

</KeyboardAvoidingView>



<View style={styles.cupThree}></View>



<View style={styles.cupFour} >
<KeyboardStickyView  offset={platform === 'ios' ? {closed:-103,opened:0}:{closed:-96,opened:0}} style={[styles.footer,{borderRadius:typo.h4,backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.secondary,borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>

<View style={styles.footBox1}>
<View style={[styles.circle,{width:WIDTH > 500 ? "40%": "60%"}]}>
{
myClient.image === 'null' ? 
(<AppIcon name={placeholderU} size={typo.h1_5}/>) :
(<Image source={myClient.image} style={[styles.image,{width:'90%'}]}  />)
}
</View>
</View>


<View style={styles.footBox2}>
<TextInput ref={inputRef} onChangeText={(text) => setcomment(text)} style={[styles.input,{color:theme === 'dark' ? Colors.light.primary :Colors.dark.base,fontSize:typo.h4}]} placeholder='Enter Comment...' placeholderTextColor={theme === 'dark' ? Colors.dark.placeholder :Colors.light.placeholder} allowFontScaling={false} multiline={true} value={comment} />
</View>



<TouchableOpacity style={[styles.footBox3,{paddingTop:typo.h8}]} 
onPress={() => {
const commentObj:comnt = {region:locationP.isocode,userId:myClient.uname,article_id:result.article_id,image:myClient.image,text:comment}

sendComment(commentObj)
}}>

<AppIcon name={placeholderSD} size={theme === 'dark' ? typo.h1_2 : typo.h1_8}/>

</TouchableOpacity>

</KeyboardStickyView>
</View>



</View>
)
}

export default pagexz

















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
height:'45%',

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
justifyContent:'flex-start',
alignItems:'center',
width:'100%',
height:'73%',
},

cupThree:{
alignItems:'center',
width:'100%',
height:'11%',
},

cupFour:{
alignItems:'center',
width:'100%',
height:'6%',
},


footer:{
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
width:'95%',
height:'90%',
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
aspectRatio:1,
borderRadius:9999,
overflow:'hidden',
},

image: {
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


textMR200: {
fontFamily:'Manrope-Regular',
fontWeight:200,
},


textM500: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
},

textM900: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:900,
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
minHeight:'auto',
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


boxa:{
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'50%',
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
height:'100%',
flexDirection:'column'
},


boxTwoiii:{
justifyContent:'center',
alignItems:'flex-start',
width:'83%',
height:'100%',
},


colThree:{
flexDirection:'column',
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'40%',
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
height:'85%',
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
width:'60%',
height:'100%',
},


payTwo:{
justifyContent:'center',
alignItems:'flex-start',
width:'40%',
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

boxb:{
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'50%',
},



date:{
justifyContent:'center',
alignItems:'flex-start',
width:'73%',
height:'100%',
},

share:{
justifyContent:'center',
alignItems:'center',
width:'27%',
height:'100%',
},


ccsOne:{
justifyContent:'center',
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
justifyContent:'space-between',
alignItems:'center',
width:'90%',
height:'90%',
flexDirection:'row'
},

stickyB:{
justifyContent:'flex-end',
alignItems:'center',
width:'100%',
height:'100%'
},


contentBox:{
justifyContent:'flex-start',
alignItems:'center',
maxHeight:'auto',
minHeight:'auto'
},

summaryTag:{
justifyContent:'flex-end',
alignItems:'flex-start',
},


summaryBox:{
justifyContent:'flex-start',
alignItems:'flex-start',
maxHeight:'auto',
minHeight:'auto',
},

colA:{
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'17%'
},


colB:{
justifyContent:'flex-start',
alignItems:'flex-start',
width:'100%',
height:'83%'
},





})