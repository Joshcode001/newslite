

import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useContext} from 'react'
import { Image } from 'expo-image'
import { AuthContext } from '../utils/authContext'
import { typo,length } from '../utils/typo'
import { Colors } from '../utils/color'
import { useRouter } from 'expo-router'
import AppIcon from './AppIcons'
import { iconName } from './AppIcons'



type emojiData = {
heart:iconName,
laugh:iconName,
sad:iconName,
angry:iconName,
thumb:iconName
}


type reaction = {
tag:string,
id:string,
createdAt:string,
title:string,
emoji:'heart'|'laugh'|'sad'|'angry'|'thumb',
commentId:string,
articleId:string
}






const ReactionTag = ({emoji,tag,id,createdAt,title,commentId,articleId}:reaction) => {

const {theme,appLang} = useContext(AuthContext)
const router = useRouter()



const emojis:emojiData = {
heart: 'Heart',
laugh: 'laugh',
sad: 'sad',
angry: 'angry',
thumb: 'thumb',
};




const formatDisplayDate = (dateString:string, locale:string) => {

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









return (
<TouchableOpacity onPress={() => router.push({pathname:'/(protected)/(profile)/[pagexy]',params:{ pagexy:articleId,id:commentId}})} 
style={[style.container,{height:length.l1 + 10,borderRadius:typo.h5,backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary}]}>

<View style={style.cupA}>
<View style={[style.itemA,{columnGap:typo.h6,padding:typo.h9}]}>

<View style={[style.tag,{borderRadius:typo.h1_5,backgroundColor:tag === 'News' ? Colors.light.transpurple : Colors.light.transorange }]}>
<Text allowFontScaling={false} style={[style.textB700,{fontSize:typo.h6,color:tag === 'News' ? Colors.light.purple: Colors.light.orange}]}>{tag}</Text>
</View>

<View style={style.user}>
<Text allowFontScaling={false} style={[style.textR700,{fontSize:typo.h5,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>{tag === 'Comment' && `@${id.slice(0,id.indexOf('_'))}`}</Text>
</View>

</View>

<View style={style.itemB}>
<View style={style.date}>
<Text allowFontScaling={false} style={[style.textB700,{fontSize:typo.h5_2,color:theme === 'dark' ? Colors.dark.icon : Colors.light.icon}]}>{formatDisplayDate(createdAt,appLang.lcode)}</Text>
</View>
</View>

</View>


<View style={style.cupB}>

<View style={[style.itemA,{padding:typo.h8}]}>
<Text numberOfLines={2} ellipsizeMode='tail' allowFontScaling={false} style={[style.textB700,{fontSize:typo.h5,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{title}</Text>
</View>


<View style={style.itemB}>
<View style={style.emoji}>
<AppIcon  name={emojis[emoji]} size={25}/>
</View>

</View>
</View>

</TouchableOpacity>
)
}

export default ReactionTag






const style = StyleSheet.create({

container:{
width:'98%',
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
borderWidth:1
},

cupA:{
width:'98%',
height:'45%',
justifyContent:'center',
alignItems:'center',
flexDirection:'row',

},

itemA:{
width:'67%',
height:'100%',
justifyContent:'flex-start',
alignItems:'center',
flexDirection:'row',
},

itemB:{
width:'33%',
height:'100%',
justifyContent:'center',
alignItems:'flex-start',
},


cupB:{
width:'98%',
height:'55%',
justifyContent:'flex-start',
alignItems:'center',
flexDirection:'row',
},


tag:{
width:'30%',
height:'50%',
backgroundColor:'yellow',
justifyContent:'center',
alignItems:'center',
},


user:{
width:'60%',
height:'95%',
justifyContent:'center',
alignItems:'flex-start',
},


date:{
width:'95%',
height:'85%',
justifyContent:'center',
alignItems:'flex-end',
},

emoji:{
width:'50%',
height:'100%',
justifyContent:'center',
alignItems:'center',
alignSelf:'flex-end'
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