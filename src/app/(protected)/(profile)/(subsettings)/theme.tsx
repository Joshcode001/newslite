

import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { typo } from '@/src/utils/typo'
import { Colors } from '@/src/utils/color'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useRouter } from 'expo-router'
import { Image } from 'expo-image';
import Ionicons from '@expo/vector-icons/Ionicons';
import { lingual } from '@/src/utils/dataset'




type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";



const theme = () => {


const router = useRouter()
const { theme,WIDTH,HEIGHT,isSys,useSystem,toggleTheme,getlang,appLang } = useContext(AuthContext)
const [key,setkey] = useState({a:false,b:false,c:false})
const [lang, setlang] = useState<langt>('en')




useEffect(() => {

if (isSys === true) {
setkey({ a:false,b:false,c:true })

}else if (isSys === false && theme === 'dark') {
setkey({ a:false,b:true,c:false })

}else if (isSys === false && theme === 'light')
setkey({ a:true,b:false,c:false })

},[isSys,theme])



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
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>{lingual.Theme[lang]}</Text>
</View>

</View>
</View>



<View style={[styles.colB,{borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border,
backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderWidth:1,borderRadius:typo.h3}]}>
<TouchableOpacity onPress={() => toggleTheme('light')} style={[styles.box,{borderBottomWidth:1,
borderBottomColor:theme === 'dark' ? Colors.dark.border :
Colors.light.border}]}>
<View style={styles.boxA}>
<Image  source={theme === 'dark' ? require('../../../../../assets/images/sundark.png') :  
require('../../../../../assets/images/sunlight.png')} style={styles.image} contentFit='contain' />
</View>
<View style={styles.boxB}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>{lingual.Light[lang]}</Text>
</View>
<View style={styles.boxC}>
{
key.a === true && (<Ionicons name="checkmark-circle-sharp" size={typo.h2} 
color={theme === 'dark' ? Colors.dark.icon:Colors.light.icon } />)
}
</View>
</TouchableOpacity>



<TouchableOpacity onPress={() => toggleTheme('dark')} style={[styles.box,{borderBottomWidth:1,borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>
<View style={styles.boxA}>
<Image  source={theme === 'dark' ? require('../../../../../assets/images/moondark.png') :  
require('../../../../../assets/images/moonlight.png')} style={styles.image} contentFit='contain' />
</View>
<View style={styles.boxB}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>{lingual.Dark[lang]}</Text>
</View>
<View style={styles.boxC}>
{
key.b === true && (<Ionicons name="checkmark-circle-sharp" size={typo.h2} 
color={theme === 'dark' ? Colors.dark.icon:Colors.light.icon } />)
}
</View>
</TouchableOpacity>





<TouchableOpacity onPress={useSystem} style={styles.box}>
<View style={styles.boxA}>
<Image  source={theme === 'dark' ? require('../../../../../assets/images/systemdark.png') :  
require('../../../../../assets/images/systemlight.png')} style={styles.image} contentFit='contain' />
</View>
<View style={styles.boxB}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>{lingual.System[lang]}</Text>
</View>
<View style={styles.boxC}>
{
key.c === true && (<Ionicons name="checkmark-circle-sharp" size={typo.h2} 
color={theme === 'dark' ? Colors.dark.icon:Colors.light.icon } />)
}
</View>
</TouchableOpacity>



</View>

</View>

</View>
)
}

export default theme






const styles = StyleSheet.create({
container:{
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
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
justifyContent:'center',
alignItems:'center',
width:'88%',
height:'30%',
flexDirection:'column',
},


box:{
justifyContent:'center',
alignItems:'center',
width:'95%',
height:'28%',
flexDirection:'row',
},

boxA:{
justifyContent:'center',
alignItems:'center',
width:'14%',
height:'100%'
},


boxB:{
justifyContent:'center',
alignItems:'flex-start',
width:'79%',
height:'100%'
},

boxC:{
justifyContent:'center',
alignItems:'center',
width:'8%',
height:'100%'
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


image:{
width:'40%',
height:'50%'
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





