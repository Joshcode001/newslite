

import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { Image } from 'expo-image';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import { Colors } from '@/src/utils/color';
import { lingual } from '@/src/utils/dataset';
import { typo } from '@/src/utils/typo';
import { moderateVerticalScale,vh } from '@/src/utils/scale';


type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";





const onboardii = () => {

const router = useRouter()
const {WIDTH,HEIGHT,theme,getlang,appLang} = useContext(AuthContext)
const [lang, setlang] = useState<langt>('en')



useEffect(() => {

getlang(appLang,setlang)

},[appLang])






return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:Colors.light.base}]}>
<View style={styles.itemi}>
{
WIDTH > 600 ? (<Image source={require('../../../assets/images/onboardiiBig.png')} style={{width:'100%', height:'100%'}} contentFit='contain'/>) : (<Image source={require('../../../assets/images/contentii.png')} style={{width:'100%', height:'100%'}} contentFit='contain'/>)
}
<View style={styles.onboard}>
<Text allowFontScaling={false} style={[styles.textp,{lineHeight:typo.h1,color:Colors.dark.base,fontSize:typo.h1}]}>{lingual.yourNews[lang]}{'\n'}{lingual.yourLang[lang]}{'\n'}{lingual.yourWorld[lang]}</Text>
</View>
</View>
<View style={[styles.itemii,{backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>
<View style={[styles.boxa,{paddingTop:typo.h8}]}>
<Text allowFontScaling={false} style={[styles.textc,{lineHeight:typo.h3,color:theme === 'dark' ? Colors.light.base : Colors.dark.base,fontSize:typo.h3}]}>{lingual.onboardiib[lang]}</Text> 
</View>

<View style={styles.boxb}>
<Image source={require('../../../assets/images/second.png')} style={{width:'10%',height:'40%'}} />
</View>


<View style={styles.footbox}>
<TouchableOpacity style={[styles.nesti,{columnGap:typo.h4}]} onPress={() => router.back()}>
<FontAwesome name="angle-left" size={typo.h2} color={theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn} />
<Text allowFontScaling={false} style={[styles.textii,{color:theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn,fontSize:typo.h3}]}>{lingual.previous[lang]}</Text>
</TouchableOpacity>

<View style={styles.nestii}>
<TouchableOpacity style={[styles.btn,{borderRadius:typo.h6,columnGap:typo.h4,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn}]} onPress={() => router.push({pathname:'/next'})}>
<Text allowFontScaling={false} style={[styles.textii,{color:Colors.light.primary,fontSize:typo.h3}]}>{lingual.signIn[lang]}</Text>
<FontAwesome name="angle-right" size={typo.h2} color={Colors.light.primary} />
</TouchableOpacity>
</View>
</View>
</View>
</View>
)
}

export default onboardii








const styles = StyleSheet.create({

container: {
justifyContent:'center',
alignItems:'center',
flex:1,
flexDirection:'column'
},


itemi: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'76.1%',
},


itemii: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'23.9%',
},


textp: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
letterSpacing:2
},


onboard: {
justifyContent:'center',
alignItems:'flex-start',
width:'88.1%',
height:'21.7%',
position:'absolute',
top:'75.9%',
},


textc: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
},


boxa: {
justifyContent:'flex-start',
alignItems:'flex-start',
width:'88.1%',
height:'34.4%',
position:'absolute',
top:0,
},

boxb: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'4.8%',
position:'absolute',
bottom:'53.6%'
},


footbox: {
justifyContent:'space-between',
alignItems:'center',
width:'88.1%',
height:'19.1%',
position:'absolute',
bottom:'21.5%',
flexDirection:'row',
},

nesti: {
justifyContent:'center',
alignItems:'center',
width:'31.6%',
height:'100%',
flexDirection:'row',
},

nestii: {
justifyContent:'center',
alignItems:'center',
width:'29.7%',
height:'100%',
},

btn:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'95%',
flexDirection:'row',
},


textii: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
},



})