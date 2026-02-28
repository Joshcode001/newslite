

import { View,Text,StyleSheet,Switch,TouchableOpacity} from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { Colors } from '@/src/utils/color'
import { useRouter } from 'expo-router'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { typo } from '@/src/utils/typo'
import { lingual } from '@/src/utils/dataset'





type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";



const notify = () => {

const router = useRouter()
const { theme,WIDTH,HEIGHT,appLang,getlang } = useContext(AuthContext)
const [ notify,setnotify ] = useState({ general:false,news:false,engage:false,app:false })
const [lang, setlang] = useState<langt>('en')




const on = theme === 'dark' ? Colors.dark.Activebtn : Colors.dark.primary
const off =  Colors.dark.icon



useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])



return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>

<View style={styles.cupA}></View>

<View style={[styles.cupB,{rowGap:typo.h1_5}]}>

<View style={styles.colA}>
<TouchableOpacity onPress={() => router.back()} style={styles.rolA}>
<EvilIcons name="chevron-left" size={typo.h1_2} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</TouchableOpacity>

<View style={styles.rolB}>

<View style={styles.sideA}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h1_8,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>{lingual.Settings[lang]}</Text>
</View>

<View style={styles.sideB}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>{lingual.NotifyPref[lang]}</Text>
</View>

</View>
</View>


<View style={[styles.colB,{rowGap:typo.h1_5}]}>


<View style={styles.boxmn}>

<View style={styles.colm}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h3}]}>{lingual.GeneralNotify[lang]}</Text>
</View>

<View style={[styles.coln,]}>

<View style={[styles.display,{borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border,
backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderWidth:1,borderRadius:typo.h5}]}>

<View style={[styles.rolla,{paddingLeft:typo.h6}]}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>{lingual.EnablePush[lang]}</Text>
</View>
<View style={styles.rollb}>

<Switch 
trackColor={{false:theme === 'dark' ? Colors.dark.secondary : Colors.light.secondary,
true:theme === 'dark' ? Colors.dark.icon : Colors.light.icon}}
value={notify.general} thumbColor={notify.general === true ? on : off } 
onValueChange={() => setnotify({ ...notify,general:!notify.general })}/>
</View>


</View>

</View>

</View>


<View style={styles.boxmn}>
<View style={styles.colm}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h3}]}>{lingual.NewsUpdate[lang]}</Text>
</View>
<View style={[styles.coln]}>

<View style={[styles.display,{borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border,
backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderWidth:1,borderRadius:typo.h5}]}>

<View style={[styles.rolla,{paddingLeft:typo.h6}]}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>{lingual.newsAlert[lang]}</Text>
</View>
<View style={styles.rollb}>
<Switch 
trackColor={{false:theme === 'dark' ? Colors.dark.secondary : Colors.light.secondary,
true:theme === 'dark' ? Colors.dark.icon : Colors.light.icon}}
value={notify.news} thumbColor={notify.news === true ? on : off } 
onValueChange={() => setnotify({ ...notify,news:!notify.news })}/>
</View>

</View>

</View>
</View>


<View style={styles.boxmn}>
<View style={styles.colm}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h3}]}>{lingual.Engage[lang]}</Text>
</View>
<View style={[styles.coln]}>

<View style={[styles.display,{borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border,
backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderWidth:1,borderRadius:typo.h5}]}>

<View style={[styles.rolla,{paddingLeft:typo.h6}]}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>{lingual.CommRepl[lang]}</Text>
</View>
<View style={styles.rollb}>
<Switch 
trackColor={{false:theme === 'dark' ? Colors.dark.secondary : Colors.light.secondary,
true:theme === 'dark' ? Colors.dark.icon : Colors.light.icon}}
value={notify.engage} thumbColor={notify.engage === true ? on : off } 
onValueChange={() => setnotify({ ...notify,engage:!notify.engage })}/>
</View>

</View>

</View>
</View>



<View style={styles.boxmn}>
<View style={styles.colm}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h3}]}>{lingual.appActivity[lang]}</Text>
</View>
<View style={[styles.coln]}>

<View style={[styles.display,{borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border,
backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderWidth:1,borderRadius:typo.h5}]}>

<View style={[styles.rolla,{paddingLeft:typo.h6}]}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>{lingual.subscribeAlert[lang]}</Text>
</View>
<View style={styles.rollb}>
<Switch 
trackColor={{false:theme === 'dark' ? Colors.dark.secondary : Colors.light.secondary,
true:theme === 'dark' ? Colors.dark.icon : Colors.light.icon}}
value={notify.app} thumbColor={notify.app === true ? on : off } 
onValueChange={() => setnotify({ ...notify,app:!notify.app })}/>
</View>

</View>

</View>
</View>


</View>



</View>

</View>
)
}

export default notify






const styles = StyleSheet.create({
container:{
justifyContent:'center',
alignItems:'center',
flexDirection:'column'
},

cupA:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'8%'
},

cupB:{
justifyContent:'flex-start',
alignItems:'center',
width:'100%',
height:'92%',
flexDirection:'column',
},


colA:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'8%',
flexDirection:'row',
},

colB:{
justifyContent:'flex-start',
alignItems:'center',
width:'100%',
height:'87%',
flexDirection:'column',
},

rolA:{
justifyContent:'flex-start',
alignItems:'center',
width:'14%',
height:'100%'
},

rolB:{
justifyContent:'center',
alignItems:'center',
width:'86%',
height:'100%',
flexDirection:'column'
},

sideA:{
justifyContent:'flex-start',
alignItems:'flex-start',
width:'100%',
height:'50%'
},

sideB:{
justifyContent:'flex-start',
alignItems:'flex-start',
width:'100%',
height:'50%'
},



boxmn:{
justifyContent:'center',
alignItems:'flex-start',
width:'94%',
height:'12%',
flexDirection:'column',
},

colm:{
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'36%',
},


coln:{
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'64%',
},

display:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'85%',
flexDirection:'row'
},


rolla:{
justifyContent:'center',
alignItems:'flex-start',
width:'80%',
height:'100%',
},


rollb:{
justifyContent:'center',
alignItems:'center',
width:'18%',
height:'100%',
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