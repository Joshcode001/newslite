


import { View, Text, StyleSheet, ScrollView} from 'react-native'
import React , {useContext, useState, useEffect} from 'react'
import { myPrivacyPolicy , EU} from '@/src/utils/dataset'
import { AuthContext } from '@/src/utils/authContext'
import RNPickerSelect from 'react-native-picker-select';
import Drawer from 'expo-router/drawer';
import Entypo from '@expo/vector-icons/Entypo';
import { english_speak,french_speak,german_speak,arabic_speak,spanish_speak,swedish_speak,dutch_speak,italian_speak,japanese_speak,chinese_speak,portuguese_speak,russian_speak } from '@/src/utils/dataset';





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


type lang ={
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








const Privacy = () => {


const {locationP,platform} = useContext(AuthContext)
const [ policy, setpolicy] = useState<police>()
const [lang, setlang] = useState<langi>('en')
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




return (
<View style={styles.container}>

{
platform === 'android' && <Drawer.Screen options={{
headerRight: () => <RNPickerSelect useNativeAndroidPickerStyle={false} items={options} onValueChange={(value) => setlang(value)} placeholder={{label:'language', value:'en'}} style={{inputAndroidContainer:{width:185, height:45, marginRight:8, paddingTop:4, borderRadius:7,alignItems:'center'},iconContainer:{paddingTop:9, paddingRight:10,paddingLeft:10},inputAndroid:{fontSize:19, padding:7, color:'azure'}} } Icon={() => {return <Entypo name="triangle-down" size={29} color="azure" />}}/> }} />
}

{
platform === 'ios' && <Drawer.Screen options={{
headerRight: () => <RNPickerSelect items={options} onValueChange={(value) => setlang(value)} placeholder={{label:'language', value:'en'}} style={{inputIOSContainer:{width:185, height:35, marginRight:8, paddingTop:4, borderRadius:7,alignItems:'center'},iconContainer:{paddingTop:6, paddingRight:6},inputIOS:{fontSize:19, padding:8, color:'azure'}} } Icon={() => {return <Entypo name="triangle-down" size={29} color="azure" />}}/> }} />
}





<View style={[styles.heading]}>
<Text style={styles.headtext}>PRIVACY POLICY</Text>
</View>


<View style={styles.content}>
<View style={styles.scroll}>
<ScrollView>
<Text style={styles.text1}> {policy?.title[lang]}</Text>
<Text style={styles.text1}>* {policy?.dataCollect[lang]}</Text>
<Text style={styles.text1}>* {policy?.dataUsage[lang]}</Text>
<Text style={styles.text1}>* {policy?.dataSharing[lang]}</Text>
<Text style={styles.text1}>* {policy?.userRights[lang]}</Text>
<Text style={styles.text1}>* {policy?.cookies[lang]}</Text>
<Text style={styles.text1}>* {policy?.dataRetent[lang]}</Text>
<Text style={styles.text1}>* {policy?.security[lang]}</Text>
<Text style={styles.text1}>* {policy?.change[lang]}</Text>
<Text style={styles.text1}>* {policy?.children[lang]}</Text>
<Text style={styles.text1}>* {policy?.contact[lang]}</Text>
</ScrollView>


</View>
</View>



</View>
)
}

export default Privacy





const styles = StyleSheet.create({

container: {
flex:1,
justifyContent:'flex-start',
alignContent:'center',
height:'100%',
width:'100%',
},

heading: {
flex:0.6,
height:80,
width:'100%',
backgroundColor:'grey',
justifyContent:'flex-end',
alignItems:'center',
},

content: {
flex:9.4,
height:700,
width:'100%',
justifyContent:'flex-start',
alignItems:'center',
},


headtext: {
color:'azure',
fontWeight:'bold',
fontSize:22
},


scroll: {
width:'100%',
minHeight:'auto',
maxHeight:'auto',
justifyContent:'center',
alignItems:'flex-start',
},




text1: {
padding:30,
fontSize:20,
color:'black'
}










})