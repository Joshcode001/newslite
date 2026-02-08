

import { View, Text,StyleSheet } from 'react-native'
import React,{useContext} from 'react'
import { Image } from 'expo-image'
import { AuthContext } from '../utils/authContext'
import { typo,length } from '../utils/typo'
import { Colors } from '../utils/color'




type emojiData = {
heart:string,
laugh:string,
sad:string,
angry:string,
thumb:string
}


type reaction = {
tag:string,
id:string,
createdAt:string,
title:string,
emoji:'heart'|'laugh'|'sad'|'angry'|'thumb'
}






const ReactionTag = ({emoji,tag,id,createdAt,title}:reaction) => {

const {theme,appLang} = useContext(AuthContext)




const emojis:emojiData = {
heart: require('../../assets/images/bigheart.png'),
laugh: require('../../assets/images/biglaugh.png'),
sad: require('../../assets/images/bigsad.png'),
angry: require('../../assets/images/bigangry.png'),
thumb: require('../../assets/images/bigthumb.png'),
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
<View style={[style.container,{height:length.l2_5 / 3,borderRadius:typo.h5,rowGap:typo.h8,backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary}]}>

<View style={style.cupA}>
<View style={[style.itemA,{columnGap:typo.h6}]}>

<View style={[style.tag,{borderRadius:typo.h1_5,backgroundColor:tag === 'News' ? Colors.light.transpurple : Colors.light.transorange }]}>
<Text allowFontScaling={false} style={[style.textB700,{fontSize:typo.h6,color:tag === 'News' ? Colors.light.purple: Colors.light.orange}]}>{tag}</Text>
</View>

<View style={style.user}>
<Text allowFontScaling={false} style={[style.textB700,{fontSize:typo.h5,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>{tag === 'Comment' && `@${id.slice(0,id.indexOf('_'))}`}</Text>
</View>

</View>

<View style={style.itemB}>
<View style={style.date}>
<Text allowFontScaling={false} style={[style.textB700,{fontSize:typo.h6,color:theme === 'dark' ? Colors.dark.icon : Colors.light.icon}]}>{formatDisplayDate(createdAt,appLang.lcode)}</Text>
</View>
</View>

</View>


<View style={style.cupB}>

<View style={[style.itemA]}>
<Text numberOfLines={4} ellipsizeMode='tail' allowFontScaling={false} style={[style.textB700,{fontSize:typo.h5,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{title}</Text>
</View>


<View style={style.itemB}>
<View style={style.emoji}>
<Image  source={emojis[emoji]} style={{width:'80%',height:'80%'}} contentFit='contain'/>
</View>

</View>
</View>

</View>
)
}

export default ReactionTag






const style = StyleSheet.create({

container:{
width:'95%',
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
borderWidth:3
},

cupA:{
width:'98%',
height:'34%',
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
padding:5
},

itemB:{
width:'33%',
height:'100%',
justifyContent:'center',
alignItems:'flex-start',
},


cupB:{
width:'98%',
height:'56%',
justifyContent:'center',
alignItems:'center',
flexDirection:'row',
},


tag:{
width:'30%',
height:'95%',
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