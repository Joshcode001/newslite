

import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React,{useContext,useEffect,useState} from 'react'
import { useRouter } from 'expo-router';
import { AuthContext } from '@/src/utils/authContext'
import { Image } from 'expo-image';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Colors } from '@/src/utils/color';
import { lingual } from '@/src/utils/dataset';
import { typo } from '@/src/utils/typo';




type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";




const onboardi = () => {

const router = useRouter()
const {WIDTH,HEIGHT,theme,getlang,appLang} = useContext(AuthContext)
const [lang, setlang] = useState<langt>('en')




useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])





return (
<View style={[styles.container,{width:WIDTH, height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>
<View style={styles.content}>
{
WIDTH > 600 ? (<Image source={require('../../../assets/images/onboardiBig.png')} style={{width:'100%',height:'100%'}} contentFit='contain' />) : (theme === 'dark' ? (<Image source={require('../../../assets/images/content-dark.png')} style={{width:'100%',height:'100%'}} contentFit='contain' />) : (<Image source={require('../../../assets/images/content-light.png')} style={{width:'100%',height:'100%'}} contentFit='contain' />))
}
<View style={styles.onboard}>
<Text allowFontScaling={false} style={[styles.textp,{lineHeight:typo.h1,color:theme === 'dark' ? Colors.light.base : Colors.dark.primary,fontSize:typo.h1}]}>{lingual.onboardia[lang]}<Text allowFontScaling={false} style={[styles.textp,{lineHeight:typo.h1,color:theme === 'dark' ? Colors.dark.story : Colors.light.story,fontSize:typo.h1}]}> {lingual.oneStory[lang]}{'\n'}</Text><Text allowFontScaling={false} style={[styles.textp,{lineHeight:typo.h1,color:theme === 'dark' ? Colors.light.base : Colors.dark.primary,fontSize:typo.h1}]}>{lingual.atATime[lang]}</Text></Text>
</View>
</View>
<View style={[styles.footer,{backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>
<View style={styles.footboxa}>
<Text allowFontScaling={false} style={[styles.textc,{lineHeight:typo.h3,color: theme === 'dark' ? Colors.light.base : Colors.dark.primary,fontSize:typo.h3}]}>{lingual.onboardib[lang]}</Text>
</View>


<View style={[styles.footboxb]}>
<Image source={require('../../../assets/images/first.png')} style={{width:'10%',height:'40%'}} />
</View>

<View style={styles.footbox}>
<TouchableOpacity style={[styles.itemi,{columnGap:typo.h4}]} onPress={() => router.push({pathname:'/next'})}>
<Text allowFontScaling={false} style={[styles.textii,{color:theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn,fontSize:typo.h3}]}>{lingual.skip[lang]}</Text>
<FontAwesome name="angle-double-right" size={typo.h2} color={theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn} />
</TouchableOpacity>

<View style={styles.itemii}>
<TouchableOpacity style={[styles.button,{borderRadius:typo.h6,columnGap:typo.h4,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn}]} onPress={() => router.push({pathname:'/onboardii'})}>
<Text allowFontScaling={false} style={[styles.textii,{color:Colors.light.primary,fontSize:typo.h3}]}>{lingual.next[lang]}</Text>
<FontAwesome name="angle-right" size={typo.h2} color={Colors.light.primary} />
</TouchableOpacity>
</View>
</View>
</View>
</View>
)
}

export default onboardi





const styles = StyleSheet.create({

container: {
justifyContent:'center',
alignItems:'center',
flex:1,
flexDirection:'column'
},


content: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'76.1%'
},


footer: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'23.9%',
},


onboard: {
justifyContent:'center',
alignItems:'center',
width:'88.1%',
height:'21.7%',
position:'absolute',
top:'75.9%',
left:'7%'
},


textp: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
letterSpacing:2
},


textc: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
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


itemi: {
justifyContent:'center',
alignItems:'center',
width:'30%',
height:'100%',
flexDirection:'row',
},


itemii: {
justifyContent:'center',
alignItems:'center',
width:'32%',
height:'100%',
},


footboxa: {
justifyContent:'flex-start',
alignItems:'flex-start',
width:'88.1%',
height:'29%',
position:'absolute',
top:0,
letterSpacing:2,
},


footboxb: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'4.8%',
position:'absolute',
bottom:'53.6%',
},


button: {
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