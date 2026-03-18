
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { Image } from 'expo-image'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AuthContext } from '../utils/authContext';
import { typo,length } from '../utils/typo';
import { Colors } from '../utils/color';
import { useRouter } from 'expo-router';


type userlike = {
userId:string,
createdAt: string,
image: string,
}


type ucomment = {
articleId:string,
commentId:string,
title:string,
articleImage:string,
text:string,
likes:userlike[]
}





const CommentTag = ({articleId,articleImage,text,title,likes,commentId}:ucomment) => {

const { myClient,theme } = useContext(AuthContext)
const [isReply, setisReply] = useState(false)
const router = useRouter()



const value = isReply ? `@${myClient.uname} replyTo `: `@${myClient.uname}`



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


useEffect(() => {

if (text.startsWith('@')) {

setisReply(true)
}

},[])




return (

<TouchableOpacity onPress={() => router.push({pathname:'/(protected)/(profile)/[pagexy]',params:{ pagexy:articleId,id:'null'}})} style={[styles.container,{borderRadius:typo.h6,height:length.l1 + length.l1 / 5,rowGap:typo.h8,backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary}]}>

<View style={[styles.cupOne]}>

<View style={styles.item1}>
<Image source={articleImage} style={{width:'90%', height:'95%',borderRadius:10}} contentFit='fill' />
</View>

<View style={[styles.item2]}>
<Text allowFontScaling={false} numberOfLines={4} ellipsizeMode='tail' style={[styles.textB700,{fontSize:typo.h5,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{title}</Text>
</View>

</View>


<View style={styles.cupTwo}>

<View style={styles.item3}>
<Text numberOfLines={3} ellipsizeMode='tail' allowFontScaling={false} style={[styles.textR700,{fontSize:typo.h5,color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText}]}><Text style={[styles.textB700,{fontSize:typo.h5,color:Colors.dark.Activebtn}]}>{value}{" "}</Text>{text}</Text>
</View>

<View style={styles.item4}>
<View style={styles.box1}>
<Ionicons name="heart-outline" size={typo.h3} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</View>
<View style={styles.box2}>
<Text allowFontScaling={false} style={[styles.textR700,{fontSize:typo.h5,color:theme === 'dark' ? Colors.dark.icon : Colors.light.icon}]}>{formatNumber(likes.length)}</Text>
</View>
</View>
</View>

</TouchableOpacity>
)
}

export default CommentTag




const styles = StyleSheet.create({

container:{
width:'98%',
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
borderWidth:1,
},


cupOne:{
width:'98%',
height:'48%',
justifyContent:'center',
alignItems:'center',
flexDirection:'row',
},



item1:{
width:'30%',
height:'100%',
justifyContent:'center',
alignItems:'center',
},

item2:{
width:'70%',
height:'100%',
justifyContent:'center',
alignItems:'flex-start',
padding:2
},


cupTwo:{
width:'98%',
height:'46%',
justifyContent:'center',
alignItems:'center',
flexDirection:'row',

},

item3:{
width:'91%',
height:'100%',
justifyContent:'flex-start',
alignItems:'flex-start',
padding:5
},

item4:{
width:'9%',
height:'100%',
justifyContent:'center',
alignItems:'center',

},

box1:{
width:'100%',
height:'50%',
justifyContent:'center',
alignItems:'center',
},

box2:{
width:'100%',
height:'50%',
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