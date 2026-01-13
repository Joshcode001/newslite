

import { View, Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import React,{useContext,useEffect,useState,useRef} from 'react'
import { useLocalSearchParams,useRouter} from 'expo-router'
import { AuthContext } from '@/src/utils/authContext'
import { Colors } from '@/src/utils/color'
import {KeyboardStickyView,KeyboardEvents,KeyboardAwareScrollView} from 'react-native-keyboard-controller'
import Animated, { useSharedValue, withTiming,useAnimatedStyle } from 'react-native-reanimated';
import { Image } from 'expo-image';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Cusloader from '@/src/components/Cusloader'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



type lry = {
userid: string,
}


type like = {
heart:lry[],
laugh:lry[],
sad:lry[],
angry:lry[]
thumb:lry[]
}

type comm = {
userid: string,
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
comments: comm[],
content:string,
source_url:string,
ai_summary:string,
likes: like
}


type emoji = {
name:'heart'|'laugh'|'sad'|'angry'|'thumb'
count:number
}




const pagexi = () => {


const [result, setresult] = useState<res>({content:'',title: '',source_icon: '',source_url:'',ai_summary:'',pubDate:'',
image_url: '',description: '',article_id: '',comments:[], likes:{heart:[],thumb:[],sad:[],angry:[],laugh:[]}})

const [isloading,setisloading] = useState(false)
const [emojiData,setemojData] = useState<emoji[]>([])
const {pagexi} = useLocalSearchParams()
const {theme,WIDTH,HEIGHT,socket,roomKey} = useContext(AuthContext)
const AnimatedSticky = Animated.createAnimatedComponent(KeyboardStickyView)
const isShowing = useSharedValue(0)
const router = useRouter()


let page: string= ''

if (typeof pagexi === 'string') {
page = pagexi
}


const animatedStyle = useAnimatedStyle(() => {
return {
justifyContent:isShowing.value === 1 ? 'flex-end': 'flex-start'
}
})


const emojis: { [key: string]: any } = {
heart: require('../../../../assets/images/smallheartpng.png'),
laugh: require('../../../../assets/images/smalllaugh.png'),
sad: require('../../../../assets/images/smallsad.png'),
angry: require('../../../../assets/images/smallangry.png'),
thumb: require('../../../../assets/images/smallthumb.png'),
};




const EmojiTag = ({name,count}:emoji) => (
<View style={styles.smallEmoji}>
<View style={styles.payOne}>
<Image source={emojis[name]} style={{width:'80%',height:'90%'}}/>
</View>
<View style={styles.payTwo}>
<Text style={[styles.textM500,{fontSize:15,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>{count}</Text>
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






useEffect(() => {

if (page !== '') {
setisloading(true)
socket.emit("Post",{rkey:roomKey,postId:page})
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

socket.on("livePost",(data:any) => {

if (data.articleId === page) {
setresult({
title: data.result.title,
source_icon: data.result.source_icon,
pubDate: data.result.pubDate,
image_url: data.result.image_url,
description: data.result.description,
article_id:data.result.article_id,
comments: data.result.comments,
content:data.result.content,
source_url:data.result.source_url,
ai_summary:data.result.ai_summary,
likes: data.result.likes,
})
printList(data.result.likes)
setisloading(false)
}

})


socket.on("updatedLikes", (likesObject:any) => {

if (likesObject.articleId === page) {
printList(likesObject.updated)
}
})



},[socket])







return (
<View style={[styles.container,{backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base, width:WIDTH,height:HEIGHT}]}>


<View style={styles.cupOne}>
<View style={styles.header}>
<View style={styles.rowA}>
<TouchableOpacity style={styles.rowBbox} onPress={() => router.back()}>
<Ionicons name="chevron-back" size={24} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</TouchableOpacity>
</View>
<View style={styles.rowB}>
<TouchableOpacity style={styles.rowBboxi}>
{
theme === 'dark' ? (<Image source={require('../../../../assets/images/Defsavedark.png')} style={{width:'47%',height:'57%'}}/>) :
(<Image source={require('../../../../assets/images/Defsavelight.png')} style={{width:'52%',height:'60%'}}/>)
}
</TouchableOpacity>
<TouchableOpacity style={styles.rowBbox}>
<MaterialCommunityIcons name="account-voice" size={24} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</TouchableOpacity>
<TouchableOpacity style={styles.rowBboxii}>
{
theme === 'dark' ? (<Image source={require('../../../../assets/images/translatedark.png')} style={{width:'47%',height:'57%'}}/>) :
(<Image source={require('../../../../assets/images/translatelight.png')} style={{width:'52%',height:'60%'}}/>)
}
</TouchableOpacity>
</View>
</View>
</View>

<View style={styles.cupTwo}>

{
isloading ? (<Cusloader top={350} />):(<KeyboardAwareScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>

<View style={[styles.headerBox,{width:400,minHeight:50}]}>
<Text style={[styles.textM500,{fontSize:30,color:theme === 'dark' ? Colors.light.border :Colors.dark.primary }]}>{result.title}</Text>
</View>

<View style={[styles.imageBox,{width:400,height:300}]}>
<Image source={result.image_url} style={{width:'100%',height:'100%'}} contentFit='contain' />
</View>

<View style={[styles.descBox,{width:400,minHeight:100}]}>
<Text style={[styles.textR400,{fontSize:20,color:theme === 'dark' ? Colors.light.border :Colors.dark.primary }]}>{result.description}</Text>
</View>


<View style={[styles.sourceBox,{width:400,height:170}]}>

<View style={styles.colOne}>
<View style={styles.box}>
<Text style={[styles.textR400,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary }]}>Source</Text>
</View>
</View>


<View style={styles.colTwo}>

<View style={styles.boxTwoi}>
<View style={[styles.circle,{width:"70%"}]}>
<Image source={result.source_icon} style={{width:'70%',height:'50%'}} contentFit='contain' />
</View>
</View>

<View style={styles.boxTwoii}>
<View style={styles.box}>
<Text style={[styles.textB700,{color:theme === 'dark' ? Colors.light.border :Colors.dark.primary }]}>{result.source_url}</Text>
</View>
</View>

</View>


<View style={styles.colThree}>

<TouchableOpacity style={styles.boxTwoi}>
<Ionicons name="heart-outline" size={28} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon}/>
</TouchableOpacity>

<View style={styles.boxTwoii}>
<View style={[styles.screen,{borderColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary,backgroundColor:theme === 'dark' ?  Colors.dark.base : Colors.light.tertiary}]}>
{emojiData.map((ed) => <EmojiTag name={ed.name} count={ed.count} key={ed.name}/>)}
</View>
</View>

</View>

</View>


<View style={[styles.commentBox,{width:400,height:40}]}>

<View style={styles.sightA}>
<Text style={[styles.textM500,{fontSize:25,color:theme === 'dark' ? Colors.light.border :Colors.dark.primary }]}>Comments</Text>
</View>

<View style={styles.sightB}>
<View style={[styles.numberB,{backgroundColor:theme === 'dark' ? Colors.dark.primary : Colors.light.primary,borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>
<Text style={[styles.textM500,{fontSize:16,color:theme === 'dark' ? Colors.light.border :Colors.dark.primary,textAlign:'center' }]}>{result.comments.length}</Text>
</View>
</View>

<View style={styles.sightC}>
<View style={[styles.line,{borderBottomColor:theme === 'dark' ? Colors.dark.border :Colors.light.border}]}></View>
</View>

<View style={styles.sightD}>
<MaterialIcons name="filter-list" size={25} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</View>

</View>


</KeyboardAwareScrollView>)
}

</View>



<AnimatedSticky style={[styles.cupThree,animatedStyle]} offset={{closed:0,opened:-7}} pointerEvents='box-none'> 
<View style={[styles.footer,{backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.secondary,borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>

<View style={styles.footBox1}>
<View style={styles.circle}></View>
</View>


<View style={styles.footBox2}>
<TextInput multiline={true} placeholder='Enter Comment...' placeholderTextColor={theme === 'dark' ? Colors.dark.placeholder :Colors.light.placeholder} style={[styles.input,{color:theme === 'dark' ? Colors.light.primary :Colors.dark.base}]}/>
</View>



<TouchableOpacity style={styles.footBox3}>
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
height:'16%',
},


footer:{
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
width:'95%',
height:'34%',
borderRadius:15,
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
width:'65%',
aspectRatio:1,
borderRadius:9999,
backgroundColor:'brown',
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
paddingTop:4,
},


textM500: {
fontFamily:'CabinetGrotesk-Medium',
fontSize:24,
lineHeight:32,
fontWeight:500,
},

textR400: {
fontFamily:'CabinetGrotesk-Regular',
fontSize:18,
fontWeight:400,
lineHeight:24
},

textB700: {
fontFamily:'CabinetGrotesk-Bold',
fontSize:18,
fontWeight:700,
lineHeight:24
},

input:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'100%',
paddingTop:15,
fontSize:22,
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
lineHeight:40,
marginVertical:15
},


imageBox:{
justifyContent:'center',
alignItems:'center',
marginVertical:10,

},

descBox:{
justifyContent:'flex-start',
alignItems:'center',
maxHeight:'auto',
lineHeight:24
},

sourceBox:{
flexDirection:'column',
justifyContent:'center',
alignItems:'center',
marginVertical:15,
},


colOne:{
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'20%'
},


box:{
justifyContent:'center',
alignItems:'flex-start',
width:'60%',
height:'70%',
paddingLeft:5
},


colTwo:{
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'40%'
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
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'40%'
},


screen:{
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
width:'95%',
height:'50%',
borderRadius:16,
borderWidth:2
},



commentBox:{
justifyContent:'center',
alignItems:'center',
marginVertical:15,
flexDirection:'row'
},


sightA:{
justifyContent:'center',
alignItems:'flex-start',
width:'30%',
maxWidth:'auto',
height:'100%',
paddingLeft:6
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
borderBottomWidth:2,
width:'100%',
height:'50%',
paddingTop:2
},

sightD:{
justifyContent:'center',
alignItems:'center',
width:'9%',
height:'100%'
},

numberB:{
justifyContent:'center',
alignItems:'center',
width:'90%',
height:'63%',
borderRadius:8,
borderWidth:1,
},

smallEmoji:{
justifyContent: 'center',
alignItems:'center',
width:60,
height:28,
flexDirection:'row',
marginHorizontal:3,
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