

import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useContext,useState} from 'react'
import { AuthContext } from '../utils/authContext'
import { Image } from 'expo-image'
import { typo,length } from '../utils/typo'
import { Colors } from '../utils/color'
import { useRouter } from 'expo-router';


type save = {
pubDate:string,
articleImage:string,
articleId:string,
title:string

}







const SavedTag = ({pubDate,articleId,articleImage,title}:save) => {

const router = useRouter()
const [isSave, setisSave] = useState(true)
const {theme,socket,myClient,appLang} = useContext(AuthContext)



const activeImage = theme === 'dark' ? require('../../assets/images/Actsavedark.png') : 
require('../../assets/images/Actsavelight.png')

const inactiveImage = theme === 'dark' ? require('../../assets/images/defsavedark.png') : 
require('../../assets/images/defsavelight.png')




const handleSave = () => {

const query = { userId:myClient.uname,articleId,articleImage,title,pubDate}

socket.emit('saved', query )

setisSave(false)
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




return (
<TouchableOpacity onPress={() => router.push({ pathname:'/(protected)/(profile)/[pagexy]',params:{ pagexy:articleId,id:"null" }})} style={[styles.container,{height:length.l2,backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary}]}>
<View style={styles.cupA}>
<Image source={articleImage} style={{width:'100%',height:'100%',borderTopRightRadius:typo.h4,borderTopLeftRadius:typo.h4}} contentFit='cover'/>
</View>
<View style={[styles.cupB,{padding:5}]}>

<Text numberOfLines={3} ellipsizeMode='tail' allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h5,color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{title}</Text>


<View style={[styles.bottom]}>

<View style={styles.boxA}>
<Text allowFontScaling={false} style={[styles.textR700,{fontSize:typo.h5,color:theme === 'dark' ? Colors.dark.icon : Colors.light.icon}]}>{getTime(pubDate,appLang.lcode)}</Text>
</View>

<TouchableOpacity onPress={handleSave} style={styles.boxB}>
<Image  source={isSave ? activeImage : inactiveImage} style={{width:'85%',height:'80%'}} contentFit='contain'/>
</TouchableOpacity>

</View>

</View>
</TouchableOpacity>
)
}

export default SavedTag



const styles = StyleSheet.create({

container:{
width:'44%',
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
},

cupA:{
width:'100%',
height:'53%',
justifyContent:'center',
alignItems:'center',
},

cupB:{
width:'100%',
height:'47%',
justifyContent:'flex-start',
alignItems:'center',
},

bottom:{
flexDirection:'row',
width:'100%',
height:'25%',
justifyContent:'space-between',
alignItems:'center',
position:'absolute',
bottom:0,
},

boxA:{
width:'26%',
height:'100%',
justifyContent:'center',
alignItems:'center',
},

boxB:{
width:'30%',
height:'100%',
justifyContent:'center',
alignItems:'flex-end',
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