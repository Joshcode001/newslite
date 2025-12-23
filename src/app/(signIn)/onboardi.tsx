

import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React,{useContext,useEffect,useState} from 'react'
import { useRouter } from 'expo-router';
import { AuthContext } from '@/src/utils/authContext'
import { Image } from 'expo-image';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Colors } from '@/src/utils/color';
import { lingual } from '@/src/utils/dataset';





type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";




const onboardi = () => {

const router = useRouter()
const {WIDTH,HEIGHT,theme,getlang,appLang} = useContext(AuthContext)
const [lang, setlang] = useState<langt>('en')




useEffect(() => {

getlang(appLang,setlang)

},[appLang])





return (
<View style={[styles.container,{width:WIDTH, height:HEIGHT}]}>
<View style={styles.content}>
{
theme === 'dark' ? (<Image source={require('../../../assets/images/content-dark.png')} style={{width:'100%',height:'100%'}}/>) : (<Image source={require('../../../assets/images/content-light.png')} style={{width:'100%',height:'100%'}}/>)
}
<View style={styles.onboard}>
<Text style={[styles.textp,{color:theme === 'dark' ? Colors.light.base : Colors.dark.primary}]}>{lingual.onboardia[lang]}<Text style={[styles.textp,{color:theme === 'dark' ? Colors.dark.story : Colors.light.story}]}> {lingual.oneStory[lang]}{'\n'}</Text>{lingual.atATime[lang]}</Text>
</View>
</View>
<View style={[styles.footer,{backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>
<View style={styles.footboxa}>
<Text style={[styles.textc,{color: theme === 'dark' ? Colors.light.base : Colors.dark.primary}]}>{lingual.onboardib[lang]}</Text>
</View>


<View style={[styles.footboxb]}>
<Image source={require('../../../assets/images/first.png')} style={{width:'10%',height:'40%'}} />
</View>

<View style={styles.footbox}>
<TouchableOpacity style={styles.itemi} onPress={() => router.push({pathname:'/next'})}>
<Text style={[styles.textii,{color:theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn}]}>{lingual.skip[lang]}</Text>
<FontAwesome name="angle-double-right" size={27} color={theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn} />
</TouchableOpacity>

<View style={styles.itemii}>
<TouchableOpacity style={[styles.button,{backgroundColor:theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn}]} onPress={() => router.push({pathname:'/onboardii'})}>
<Text style={[styles.textii,{color:Colors.light.primary}]}>{lingual.next[lang]}</Text>
<FontAwesome name="angle-right" size={27} color={Colors.light.primary} />
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
fontSize:48,
lineHeight:48,
letterSpacing:2
},

textc: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
fontSize:20,
lineHeight:20,
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
width:'25%',
height:'100%',
flexDirection:'row',
columnGap:15
},

itemii: {
justifyContent:'center',
alignItems:'center',
width:'25%',
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
borderRadius:10,
flexDirection:'row',
columnGap:15
},


textii: {
fontFamily:'CabinetGrotesk-Medium',
fontSize:18,
fontWeight:500,
},



})