

import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { AuthContext } from '../utils/authContext'
import { Colors } from '../utils/color'
import { typo } from '../utils/typo'
import { lingual,category } from '../utils/dataset'
import { useRouter } from 'expo-router'
import AppIcon from './AppIcons'
import { iconName } from './AppIcons'





type tag = {
type: "news"|"update"|"reaction"|"reply" ,
liveCategory:string,
pubDate:string,
articleId:string,
commentId:string,
title:string,
userId:string,
_id:string
}



type obq = {
news:iconName,
reaction:iconName,
reply:iconName,
update:iconName
}





type prop = {
title:string,
category:string
}






type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";




const NotifyBox = ({type,liveCategory,pubDate,articleId,commentId,userId,title,_id}:tag) => {

const router = useRouter()
const { theme,WIDTH,HEIGHT,appLang,getlang,socket,myClient } = useContext(AuthContext)
const [details,setdetails] = useState<prop>({ title:'',category:'' })
const [lang, setlang] = useState<langt>('en')



const surfaceColor = liveCategory === "comment" ? Colors.light.transpurple : Colors.light.transorange
const textColor = liveCategory === "comment" ? Colors.light.purple : Colors.light.orange


const imageFolder:obq = {
news:'news',
reaction:'like',
reply:'reply',
update:'update'
}



const dynamicDetails = () => {

switch (true){

case (type === "news"):

const dataM = category.find(c => c.item.en.toLowerCase() === liveCategory)

if (!dataM){

setdetails({ title:lingual.newsUpdate[lang],category:lingual.global[lang] })

}else if (dataM)

setdetails({ title:lingual.newsUpdate[lang],category:dataM.item[lang] })
break;


case (type === "reaction" ):

const textN = lingual.likeComment[lang].replace('{label}',userId)
setdetails({ title:textN,category:"null" })
break;

case (type === 'reply'):

const textP = lingual.replyComment[lang].replace('{label}',userId)
setdetails({ title:textP,category:"null" })
break;

case (type === 'update'):

setdetails({ title:lingual.liveNow[lang],category:lingual.update[lang] })
break;


}
}



function getTime(isoString: string,lang:string): string {
const now = new Date();
const past = new Date(isoString);
const diffInMs = Math.max(0, now.getTime() - past.getTime()); // Prevent negative time

// Calculation constants
const min = 1000 * 60;
const hour = min * 60;
const day = hour * 24;
const year = day * 365.25; // Accounting for leap years

const diffInMinutes = Math.floor(diffInMs / min);
const diffInHours = Math.floor(diffInMs / hour);
const diffInDays = Math.floor(diffInMs / day);
const diffInYears = Math.floor(diffInMs / year);

// 1. Full Year Check (365.25 days)
if (diffInYears >= 1) {
return `${diffInYears}y`;
}

// 2. Over 7 Days (Current Year)
if (diffInDays > 7) {
return new Intl.DateTimeFormat(lang, {
month: 'short',
day: 'numeric'
}).format(past);
}

// 3. Relative time logic
if (diffInMinutes < 1) return 'now';
if (diffInMinutes < 60) return `${diffInMinutes}m`;
if (diffInHours < 24) return `${diffInHours}h`;

return `${diffInDays}d`;
}


const handleNavigate = () => {

if (articleId === "null") return

const data = { _id,userId:myClient.uname }

socket.emit('markRead',data)

router.push({pathname:'/(protected)/(home)/[pagexi]',params:{ pagexi:articleId,id:commentId }})
}



useEffect(() => {

dynamicDetails()
},[lang])


useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])


return (
<TouchableOpacity onPress={handleNavigate}
style={[styles.container,{width:WIDTH - 25,height:HEIGHT / 9,borderColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary,backgroundColor:theme === 'dark' ? Colors.dark.secondary: Colors.light.primary}]}>

<View style={styles.cupA}>
<AppIcon name={imageFolder[type]} size={typo.h1_8} />
</View>

<View style={styles.cupB}>

<View style={styles.cola}>

<View style={styles.boxAi}>
<Text numberOfLines={3} allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h5}]}>{details.title}</Text>
</View>


<View style={[styles.boxAii,{paddingRight:typo.h8}]}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.icon : Colors.dark.icon,fontSize:typo.h5}]}>{getTime(pubDate,appLang.lcode)}</Text>
</View>


</View>


{
(details.category !== 'null') && (<View style={styles.colb}>

<View style={[styles.tag,{backgroundColor:surfaceColor}]}>
<Text allowFontScaling={false} style={[styles.textB700,{color:textColor,fontSize:typo.h6}]}>{details.category}</Text>
</View>

</View>)
}


<View style={styles.colc}>
<Text ellipsizeMode='tail' numberOfLines={2}  allowFontScaling={false} style={[styles.textMR200,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary,fontSize:typo.h5}]}>{title}</Text>
</View>


</View>

</TouchableOpacity>
)
}

export default NotifyBox




const styles = StyleSheet.create({
container:{
justifyContent:'center',
alignItems:'center',
flexDirection:'row',
borderWidth:2,
borderRadius:10,
paddingTop:5
},

cupA:{
justifyContent:'flex-start',
alignItems:'center',
width:'10%',
height:'100%',
},


cupB:{
justifyContent:'center',
alignItems:'center',
width:'90%',
height:'100%',
flexDirection:'column'
},

cola:{
justifyContent:'flex-start',
alignItems:'center',
width:'100%',
height:'30%',
flexDirection:'row'
},

colb:{
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'22%',
},

colc:{
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'48%',
},


boxAi:{
justifyContent:'flex-start',
alignItems:'flex-start',
width:'83%',
height:'100%',
},


boxAii:{
justifyContent:'flex-start',
alignItems:'flex-end',
width:'17%',
height:'100%',
},


boxBi:{
justifyContent:'center',
alignItems:'center',
width:'27%',
height:'100%',
},


boxBii:{
justifyContent:'center',
alignItems:'center',
width:'73%',
height:'100%',
},

tag:{
justifyContent:'center',
alignItems:'center',
width:'40%',
height:'100%',
borderRadius:12
},


textMR200: {
fontFamily:'Manrope-Regular',
fontWeight:200,
},




textM500: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
},

textR400: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
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