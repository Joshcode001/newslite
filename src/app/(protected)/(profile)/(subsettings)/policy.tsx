

import { View,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { Colors } from '@/src/utils/color'
import { useRouter } from 'expo-router'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { typo } from '@/src/utils/typo'
import { english_speak,french_speak,german_speak,arabic_speak,spanish_speak,swedish_speak,dutch_speak,italian_speak,japanese_speak,chinese_speak,portuguese_speak,russian_speak,myPrivacyPolicy,EU } from '@/src/utils/dataset'
import RNPickerSelect from 'react-native-picker-select';
import Entypo from '@expo/vector-icons/Entypo';
import { lingual } from '@/src/utils/dataset'





type police = {
languages:label[],
region:string,
title: lang
dataCollect:lang,
dataUsage: lang,
dataSharing:lang,
userRights:lang,
cookies:lang,
dataRetent: lang,
children:lang,
contact:lang,
security:lang,
change:lang
}


type lang = {
en: string;
fr?: string;
de?: string;
es?: string;
it?: string;
nl?: string;
sv?: string;
ar?: string;
ru?: string;
ja?: string;
zh?: string;
pt?: string;
ha?: string;
yo?: string;
ig?: string;
}

type label ={
label:string,
value: string
}

type langi = "en"|"fr"|"de"|"ar"|"es"|"sv"|"nl"|"it"|"ja"|"zh"|"yo"|"ha"|"pt"|"ru"|'ig';

type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";








const policy = () => {


const router = useRouter()
const { theme,WIDTH,HEIGHT,locationP,platform,appLang,getlang} = useContext(AuthContext)
const [ policy, setpolicy ] = useState<police>()
const [lang, setlang] = useState<langi>('en')
const [langt, setlangt] = useState<langt>('en')
const [options, setoptions] = useState([{label:'', value:''}])





const getPolicy = () => {

if (locationP.country) {

const name = locationP.country.toLowerCase()
const data = EU.includes(name)



if (!data) {


if (locationP.region === 'california') {

const datat = myPrivacyPolicy.find(p => p.region === 'california')
setpolicy(datat)
return
}



if (name === 'brazil') {

const datat = myPrivacyPolicy.find(p => p.region === 'brazil')
setpolicy(datat)
return
}


if (name === 'nigeria') {

const datat = myPrivacyPolicy.find(p => p.region === 'nigeria')
setpolicy(datat)

return
}


if ((name !== 'nigeria' && name !== 'brazil') && locationP.region !== 'california') {

const datat = myPrivacyPolicy.find(p => p.region === 'others')

setpolicy(datat)

return

}



} else if (data) {

const datat = myPrivacyPolicy.find(p => p.region === 'eu')
setpolicy(datat)

}



}

}



const setDefaultLang = (id:string) => {

const data = russian_speak.includes(id)

if (data) {
setlang('ru')
return
} else if (!data) {

const data2 = portuguese_speak.includes(id)

if (data2) {
setlang('pt')
return
} else if (!data2) {

const data3 = chinese_speak.includes(id)

if (data3) {
setlang("zh")
return
} else if (!data3) {

const data4 = japanese_speak.includes(id)

if (data4) {
setlang("ja")
return
} else if (!data4) {

const data5 = italian_speak.includes(id)

if (data5) {
setlang("it")
return
}else if (!data5) {

const data6 = dutch_speak.includes(id)

if (data6) {
setlang("nl")
return
} else if (!data6) {

const data7 = swedish_speak.includes(id)


if (data7) {
setlang("sv")
return
} else if (!data7) {


const data8 = spanish_speak.includes(id)

if (data8) {
setlang("es")
return
} else if (!data8) {


const data9 = arabic_speak.includes(id)

if (data9) {
setlang("ar")
return
} else if (!data9) {


const data10 = german_speak.includes(id)

if (data10) {
setlang("de")
return
} else if (!data10) {


const data11 = french_speak.includes(id)

if (data11) {
setlang("fr")
return
} else if (!data11) {


const data12 = english_speak.includes(id)

if (data12) {
setlang("en")
return
} else if (!data12) {


setlang("en")
return
}


}


}


}


}


}


}


}


}


}


}


}








}







useEffect(() => {

getPolicy()

},[])


useEffect(() => {
if (policy?.languages) {
const data = policy.languages.slice()
setoptions(data)
}

},[policy])



useEffect(() => {

if (locationP.isocode) {
setDefaultLang(locationP.isocode)
}

},[locationP])


useEffect(() => {

getlang(appLang.value,setlangt)

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
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h1_8,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>{lingual.Settings[langt]}</Text>
</View>

<View style={styles.sideB}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>{lingual.PrivacyData[langt]} {' > '} {lingual.PrivacyPoly[langt]}</Text>
</View>

</View>
</View>



<View style={styles.colB}>

<View style={styles.bcoli}>

<View style={styles.box}>
{
platform === 'android' && (<RNPickerSelect useNativeAndroidPickerStyle={false} items={options} onValueChange={(value) => setlang(value)} placeholder={{label:'language', value:'en'}} style={{inputAndroidContainer:{padding:5},iconContainer:{paddingTop:8},inputAndroid:{fontSize:19,fontFamily:'CabinetGrotesk-Medium',fontWeight:500, color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}}}  Icon={() => {return <Entypo name="triangle-down" size={35} 
color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} /> }} />)
}

{
platform === 'ios' && (<RNPickerSelect  items={options} onValueChange={(value) => setlang(value)} placeholder={{label:'language', value:'en'}} style={{inputIOSContainer:{padding:8},inputIOS:{fontSize:19,fontFamily:'CabinetGrotesk-Medium',fontWeight:500, color:theme === 'dark' ? 
Colors.light.border : Colors.dark.primary},viewContainer:{width:'100%', height:'100%'}}} Icon={() => {return <Entypo name="triangle-down" size={35} 
color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />}}/>)
}
</View>

</View>

<View style={styles.bcolii}>

<ScrollView showsVerticalScrollIndicator={false}>

<View style={[styles.section,{marginVertical:typo.h6,padding:typo.h8}]}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}> {policy?.title[lang]}</Text>
</View>

<View style={[styles.section,{marginVertical:typo.h6,padding:typo.h8}]}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>* {policy?.dataCollect[lang]}</Text>
</View>


<View style={[styles.section,{marginVertical:typo.h6,padding:typo.h8}]}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>* {policy?.dataUsage[lang]}</Text>
</View>

<View style={[styles.section,{marginVertical:typo.h6,padding:typo.h8}]}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>* {policy?.dataSharing[lang]}</Text>
</View>

<View style={[styles.section,{marginVertical:typo.h6,padding:typo.h8}]}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>* {policy?.userRights[lang]}</Text>
</View>

<View style={[styles.section,{marginVertical:typo.h6,padding:typo.h8}]}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>* {policy?.cookies[lang]}</Text>
</View>

<View style={[styles.section,{marginVertical:typo.h6,padding:typo.h8}]}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>* {policy?.dataRetent[lang]}</Text>
</View>

<View style={[styles.section,{marginVertical:typo.h6,padding:typo.h8}]}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>* {policy?.security[lang]}</Text>
</View>

<View style={[styles.section,{marginVertical:typo.h6,padding:typo.h8}]}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>* {policy?.change[lang]}</Text>
</View>

<View style={[styles.section,{marginVertical:typo.h6,padding:typo.h8}]}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>* {policy?.children[lang]}</Text>
</View>

<View style={[styles.section,{marginVertical:typo.h6,padding:typo.h8}]}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>* {policy?.contact[lang]}</Text>
</View>

</ScrollView>
</View>

</View>

</View>

</View>
)
}

export default policy







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

bcoli:{
justifyContent:'center',
alignItems:'flex-end',
width:'92%',
height:'7%',
},

bcolii:{
justifyContent:'center',
alignItems:'center',
width:'95%',
height:'93%',
},

box:{
justifyContent:'space-between',
width:'36%',
height:'100%',
},


section:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'auto',
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