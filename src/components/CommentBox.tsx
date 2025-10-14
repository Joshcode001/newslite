


import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {Image} from 'expo-image' ;
import CountryFlag from "react-native-country-flag";
import { formatDistanceToNowStrict } from 'date-fns';
import { View, Text, StyleSheet,TouchableOpacity,FlatList,LayoutChangeEvent} from 'react-native'
import React,{useCallback,useContext,useState,useEffect,useLayoutEffect,useRef} from 'react'
import { ActiveColors } from '../utils/color';
import AntDesign from '@expo/vector-icons/AntDesign';
import Replybox from './Replybox';
import { AuthContext } from '../utils/authContext';




type lry = {
userid: string,
}



type comiv = {
id:string
userid: string,
image:string,
createdAt:Date,
text:string,
region:string,
handleReply: (id:string) => void,
commentId:string,
parentId:string,
likes:lry[],
setparentId:(value: React.SetStateAction<string>) => void,
replies:comm[]
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


type obq = {
item: comm
}





const CommentBox = React.memo(({text,userid,region,createdAt,image,handleReply,likes,commentId,setparentId,replies,id}:comiv) => {


const targetRef = useRef<View>(null)
const {theme,api} = useContext(AuthContext)
const [UpdatedReply, setUpdatedReply] = useState<comm[]>([])
const [isvisible, setisvisible] = useState(false)
const [isfinish, setisfinish] = useState(false)
const [updatelike, setupdatelike] = useState(false)
const [isloading, setisloading] = useState(false)
const [ismore, setismore] = useState(false)
const [isexact, setisexact] = useState(false)
const [isplural, setisplural] = useState(false)
const [page, setpage] = useState(1)
const [replyperpage, setreplyperpage] = useState(1)
const code = region.toLowerCase()
const result = formatDistanceToNowStrict(createdAt)


const renderItem = useCallback(({item}:obq) => <Replybox id={id} commentId={item.commentId} likes={item.likes} handleReply={handleReply} userid={item.userid} text={item.text} createdAt={item.createdAt} image={item.image} region={item.region} setparentId={setparentId} parentId={item.parentId}/>,[])



// const handleContentLayout = (e:LayoutChangeEvent) => {

// console.log(e.nativeEvent)
// }







const controlPanel = () => {



setisexact(false)

setisloading(true)



if (replies.length > 1 && replies.length < 36) {
setreplyperpage(5)
setpage(page + 1)


} else if (replies.length > 35 && replies.length < 56) {
setreplyperpage(10)
setpage(page + 1)

} else if (replies.length > 55 && replies.length < 76) {
setreplyperpage(15)
setpage(page + 1)

} else if (replies.length > 75 && replies.length < 101) {
setreplyperpage(20)
setpage(page + 1)

} else if (replies.length > 100) {
setreplyperpage(100)
setpage(page + 1)

}




}






const userLikes = async (userid:string,postid:string,commentId:string) => {

if (!updatelike) {
setupdatelike(true)

}else if (updatelike) {
setupdatelike(false)
}

const resp = await api.post('/data/userlikes', {userid,postid,commentId})

}




useLayoutEffect(() => {
if (targetRef.current) {
targetRef.current.measure((x,y,width,height,pageX,pageY) => {
console.log({x:x,y:y,w:width,h:height,pagex:pageX,pagey:pageY})
})
}

})




useEffect(()=> {

const iliked = likes.filter(user => user.userid.toString() === userid)

if (iliked.length !== 0) {
setupdatelike(true)

}else if (iliked.length === 0) {
setupdatelike(false)
}

},[])




useEffect(() => {



if (replies !== undefined) {

if (replies.length === 0) {
setisvisible(false)
setismore(false)

} else if (replies.length === 1) {
setisvisible(true)
setismore(false)
setUpdatedReply(replies)

} else if (replies.length > 1 && !isexact) {
setisvisible(true)
setismore(true)

const newReply = replies.slice(0,replyperpage * page)
setUpdatedReply(newReply)


if (newReply.length === replies.length){
setisfinish(true)
} else if (newReply.length < replies.length){
setisfinish(false)}


if (replies.length === 2) {
setisplural(false)
} else if (replies.length > 2) {
setisplural(true)
}


} else if (replies.length > 1 && isexact) {
setisvisible(false)
setUpdatedReply([])
setismore(true)
setpage(1)
setreplyperpage(1)
}



}

},[replies,page])




return (
<View style={styles.container}  ref={targetRef}>

<View style={styles.columa}>
<View style={styles.firstrow}>
<Image source={image} style={{width:35, height:35, borderRadius:'50%'}}/>
</View>

<View style={styles.sndrow}>
<View style={styles.firstcol}>
<Text style={[{ fontSize:13},{color:theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.mgreen }]} >{userid}</Text>
<CountryFlag isoCode={code} size={8} />
<Text style={[{ fontSize:10, fontWeight:'thin'},{color:theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.mgreen }]} >{result}</Text>
</View>
<View style={styles.sndcol}>
<Text style={[{ fontSize:15 },{ color:theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.mgreen }]}>{text}</Text>
</View>
<View style={styles.thirdcol}>
<View style={styles.rola}>
<TouchableOpacity onPress={() => {
setparentId(commentId)
handleReply(userid)
}}>
<Text style={{color:'#a6a6a6'}}>Reply</Text>
</TouchableOpacity>
</View>
<View style={styles.rolb}>
<TouchableOpacity><Text style={{color:'#a6a6a6'}}>Translate</Text></TouchableOpacity>
</View>
</View>
</View>

<View style={styles.thirdrow}>
<View style={[styles.cola,{height:22}]}></View>
<View style={styles.cola}>
<TouchableOpacity onPress={() => userLikes(userid,id,commentId)}>
{
updatelike ? (<AntDesign name="heart" size={16} color="red" />) : (<AntDesign name="hearto" size={16} color="azure" />)
}
</TouchableOpacity>
</View>
{
(likes.length !== 0) && (<View style={styles.colb}>
<Text style={{color:'azure',fontSize:16,fontWeight:'light'}}>{likes.length}</Text>
</View>)
}
</View>



</View>


<View style={styles.columb}>
<View style={styles.firstrow}></View>
<View style={styles.sndrowb}>

<View style={[styles.controlcol,{height:(UpdatedReply.length > 9 && isvisible )? 30 : 0 }]}>
<TouchableOpacity onPress={() => {
setpage(1)
setisfinish(false)
setisexact(true)
setisvisible(false)

}}>
<View style={styles.button}>
<MaterialIcons name="horizontal-rule" size={26} color="white" />
<Text style={{color:'white', fontSize:15, fontWeight:900}}>Hide replies</Text>
</View>
</TouchableOpacity>
</View>

{
isvisible && (<View style={[styles.fourthCol]}>
<FlatList data={UpdatedReply} renderItem={renderItem} scrollEnabled={false} keyExtractor={item => item._id} />
</View>)
}

<View style={[styles.controlcol,{height: (ismore && replies.length > 1) ? 30 : 0}]}>


{
isfinish ?  (<TouchableOpacity onPress={() => {
setpage(1)
setisfinish(false)
setisvisible(false)
setisexact(true)

}}>
<View style={styles.button}>
<MaterialIcons name="horizontal-rule" size={26} color="white" />
<Text style={{color:'white', fontSize:15,fontWeight:900}}>Hide replies</Text>
</View>
</TouchableOpacity>) : (<TouchableOpacity onPress={() => controlPanel()}>
<View style={styles.button}>
<MaterialIcons name="horizontal-rule" size={26} color="white" />
{
isplural ? (<Text style={{color:'white', fontSize:15,fontWeight:900}}>{isexact ? `View ${replies.length} replies`: `View ${replies.length - UpdatedReply.length} more replies`}</Text>) :
(<Text style={{color:'white', fontSize:15,fontWeight:900}}>{isexact ? `View ${replies.length} replies`:`View 1 more reply`}</Text>)
}
</View>
</TouchableOpacity>)
}
</View>



</View>
</View>




</View>

)
})

export default CommentBox













const styles = StyleSheet.create({

container: {
flexDirection:'column',
width:'100%',
minHeight:'auto',
maxHeight:'auto',
backgroundColor:'black',
justifyContent: 'center',
alignContent: "center",
marginBottom:10,
marginTop:10
},

columa: {
justifyContent:'center',
alignItems:'center',
width:'100%',
minHeight:'auto',
maxHeight:'auto',
flexDirection:'row',

},

columb: {
justifyContent:'center',
alignItems:'center',
width:'100%',
flexDirection:'row',
minHeight:'auto',
maxHeight:'auto',
},



firstrow:{
width:'12%',
height:'100%',
justifyContent:'flex-start',
alignItems:'center',
paddingTop:7,
},

sndrow:{
width:'78%',
height:'100%',
justifyContent:'flex-start',
alignSelf:'center',
paddingRight:13
},

sndrowb:{
width:'88%',
height:'100%',
justifyContent:'flex-start',
alignSelf:'center',
},

thirdrow:{
width:'10%',
height:'100%',
justifyContent:'flex-start',
alignItems:'center',
flexDirection:'column',
},

firstcol:{
width:'100%',
height:25,
justifyContent:'flex-start',
alignItems:'center',
flexDirection:'row',
columnGap:7,
},

sndcol:{
width:'100%',
minHeight:'auto',
maxHeight:'auto',
justifyContent:'flex-start',
alignItems:'flex-start',
paddingLeft:5
},




cola:{
width:'100%',
height:20,
justifyContent:'center',
alignItems:'center',

},

colb:{
width:'100%',
height:20,
justifyContent:'center',
alignItems:'center',
},

thirdcol:{
width:'100%',
height:25,
justifyContent:'flex-start',
alignItems:'center',
flexDirection:'row',
},

rola: {
width:'20%',
height:'100%',
justifyContent:'center',
alignItems:'flex-start',
},

rolb: {
width:'80%',
height:'100%',
justifyContent:'center',
alignItems:'flex-start',
},

fourthCol: {
width:'100%',
justifyContent:'center',
alignItems:'center',
},

controlcol: {
width:'100%',
justifyContent:'flex-end',
alignItems:'flex-start',
},

button:{
height:"80%",
width:'75%',
justifyContent:'flex-start',
alignItems:'flex-end',
flexDirection:'row',
columnGap:3
}


})