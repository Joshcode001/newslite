

import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useContext,useEffect,useState} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { typo } from '@/src/utils/typo'
import { Colors } from '@/src/utils/color'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useRouter } from 'expo-router'
import { Image } from 'expo-image'
import { lingual } from '@/src/utils/dataset'




type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";





const settings = () => {

const router = useRouter()
const { theme,WIDTH,HEIGHT,shouldntDisplay,LogOut,appLang,getlang } = useContext(AuthContext)
const [lang, setlang] = useState<langt>('en')



useEffect(() => {

if (shouldntDisplay.value === false) {
shouldntDisplay.value = true
}

},[shouldntDisplay])



useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])


return (
<View style={[styles.container,{rowGap:typo.h2,width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base :
Colors.light.base}]}>

<View style={[styles.cupA,{rowGap:typo.h1_2}]}>

<View style={styles.itemA}>

<View style={styles.boxA}>

<TouchableOpacity style={styles.rowA} 
onPress={() => {
shouldntDisplay.value = false
router.back()
}}>
<EvilIcons name="chevron-left" size={typo.h1_2} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</TouchableOpacity>

<View style={styles.rowB}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h1_8,color:theme === 'dark' ? Colors.light.border :
Colors.dark.primary}]}>{lingual.Settings[lang]}</Text>
</View>

</View>

</View>


<View style={styles.itemB}>

<TouchableOpacity onPress={() => router.push({pathname:'/(protected)/(profile)/(subsettings)/account'})} style={[styles.bpad,{borderTopLeftRadius:typo.h3,borderTopRightRadius:typo.h3,backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary}]}>

<View style={styles.sideA}>

<Image source={theme === 'dark' ? require('../../../../assets/images/useraccountdark.png') : require('../../../../assets/images/useraccountlight.png')} style={styles.image} contentFit='contain' />

</View>


<View style={styles.sideB}>

<View style={styles.colA}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.tertiary : Colors.dark.primary,fontSize:typo.h4}]}>
{lingual.AccSettings[lang]}</Text>
</View>

<View style={styles.colB}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h5}]}>{lingual.EditProfile[lang]}</Text>
</View>

</View>


</TouchableOpacity>


<TouchableOpacity onPress={() => router.push({pathname:'/(protected)/(profile)/(subsettings)/theme'})} style={[styles.bpad,{backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary}]}>


<View style={styles.sideA}>

<Image source={theme === 'dark' ? require('../../../../assets/images/sundark.png') : require('../../../../assets/images/sunlight.png')} style={styles.image} contentFit='contain' />

</View>


<View style={styles.sideB}>

<View style={styles.colA}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.tertiary : Colors.dark.primary,fontSize:typo.h4}]}>{lingual.Theme[lang]}</Text>
</View>

<View style={styles.colB}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h5}]}>
{lingual.Light[lang]}{', '}{lingual.Dark[lang]}{', '}{lingual.System[lang]}</Text>
</View>

</View>


</TouchableOpacity>


<TouchableOpacity onPress={() => router.push({pathname:'/(protected)/(profile)/(subsettings)/language'})} style={[styles.bpad,{backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary}]}>


<View style={styles.sideA}>

<Image source={theme === 'dark' ? require('../../../../assets/images/locationdark.png') : require('../../../../assets/images/locationlight.png')} style={styles.image} contentFit='contain' />

</View>



<View style={styles.sideB}>

<View style={styles.colA}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.tertiary : Colors.dark.primary,fontSize:typo.h4}]}>{lingual.LangLocal[lang]}</Text>
</View>

<View style={styles.colB}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h5}]}>{lingual.Applang[lang]}{', '}{lingual.Translate[lang]}</Text>
</View>

</View>



</TouchableOpacity>


<TouchableOpacity onPress={() => router.push({pathname:'/(protected)/(profile)/(subsettings)/notify'})} style={[styles.bpad,{backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary}]}>


<View style={styles.sideA}>

<Image source={theme === 'dark' ? require('../../../../assets/images/notificationdark.png') : require('../../../../assets/images/notificationlight.png')} style={styles.image} contentFit='contain' />

</View>



<View style={styles.sideB}>

<View style={styles.colA}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.tertiary : Colors.dark.primary,fontSize:typo.h4}]}>{lingual.NotifyPref[lang]}</Text>
</View>

<View style={styles.colB}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h5}]}>{lingual.customNotify[lang]}</Text>
</View>

</View>

</TouchableOpacity>


<TouchableOpacity onPress={() => router.push({pathname:'/(protected)/(profile)/(subsettings)/artificial'})} style={[styles.bpad,{backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary}]}>


<View style={styles.sideA}>

<Image source={theme === 'dark' ? require('../../../../assets/images/magicstardark.png') : require('../../../../assets/images/magicstarlight.png')} style={styles.image} contentFit='contain' />

</View>



<View style={styles.sideB}>

<View style={styles.colA}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.tertiary : Colors.dark.primary,fontSize:typo.h4}]}>{lingual.AISettings[lang]}</Text>
</View>

<View style={styles.colB}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h5}]}>{lingual.voiceIdentity[lang]}</Text>
</View>

</View>



</TouchableOpacity>


<TouchableOpacity onPress={() => router.push({pathname:'/(protected)/(profile)/(subsettings)/privacy'})} style={[styles.bpad,{backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary}]}>


<View style={styles.sideA}>

<Image source={theme === 'dark' ? require('../../../../assets/images/lockdark.png') : require('../../../../assets/images/locklight.png')} style={styles.image} contentFit='contain' />

</View>


<View style={styles.sideB}>

<View style={styles.colA}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.tertiary : Colors.dark.primary,fontSize:typo.h4}]}>{lingual.PrivacyData[lang]}</Text>
</View>

<View style={styles.colB}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h5}]}>{lingual.dataControl[lang]}</Text>
</View>

</View>



</TouchableOpacity>


<TouchableOpacity onPress={() => router.push({pathname:'/(protected)/(profile)/(subsettings)/billing'})} style={[styles.bpad,{backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary}]}>


<View style={styles.sideA}>

<Image source={theme === 'dark' ? require('../../../../assets/images/dollardark.png') : require('../../../../assets/images/dollarlight.png')} style={styles.image} contentFit='contain' />

</View>


<View style={styles.sideB}>

<View style={styles.colA}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.tertiary : Colors.dark.primary,fontSize:typo.h4}]}>{lingual.PlanBill[lang]}</Text>
</View>

<View style={styles.colB}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h5}]}>{lingual.manageSub[lang]}</Text>
</View>

</View>



</TouchableOpacity>



<TouchableOpacity onPress={() => router.push({pathname:'/(protected)/(profile)/(subsettings)/support'})} style={[styles.bpad,{borderBottomLeftRadius:typo.h3,borderBottomRightRadius:typo.h3,backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary}]}>


<View style={styles.sideA}>

<Image source={theme === 'dark' ? require('../../../../assets/images/Supportdark.png') : require('../../../../assets/images/Supportlight.png')} style={styles.image} contentFit='contain' />

</View>


<View style={styles.sideB}>

<View style={styles.colA}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.tertiary : Colors.dark.primary,fontSize:typo.h4}]}>{lingual.Support[lang]}</Text>
</View>

<View style={styles.colB}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h5}]}>{lingual.report[lang]}{', '}{lingual.feedback[lang]}</Text>
</View>

</View>


</TouchableOpacity>


</View>

</View>


<View style={styles.cupB}>

<TouchableOpacity onPress={LogOut}
style={[styles.boxB,{borderRadius:typo.h4,backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary}]}>


<View style={styles.sideA}>

<Image source={require('../../../../assets/images/logout.png') } style={styles.image} contentFit='contain' />

</View>


<View style={styles.sideB}>

<View style={styles.colA}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.dark.error : Colors.light.error,fontSize:typo.h4}]}>{lingual.LogOut[lang]}</Text>
</View>


</View>


</TouchableOpacity>
</View>

</View>
)
}

export default settings







const styles = StyleSheet.create({

container: {
justifyContent:'center',
alignItems:'center',
flex:1,
flexDirection:'column',
},


cupA:{
justifyContent:'flex-start',
alignItems:'center',
width:'95%',
height:'84%',
flexDirection:'column',
},

itemA:{
justifyContent:'flex-end',
alignItems:'center',
width:'100%',
height:'12%',
},


itemB:{
justifyContent:'center',
alignSelf:'flex-end',
alignItems:'center',
width:'100%',
height:'84%',
},


bpad:{
justifyContent:'center',
alignItems:'center',
width:'97%',
height:'12.4%',
borderWidth:1,
flexDirection:'row',
},


sideA:{
justifyContent:'center',
alignItems:'center',
width:'17%',
height:'100%',
},


sideB:{
justifyContent:'center',
alignItems:'center',
width:'83%',
height:'100%',
flexDirection:'column',
},


colA:{
justifyContent:'flex-end',
alignItems:'flex-start',
width:'100%',
height:'50%',
},

colB:{
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'50%',
},


cupB:{
justifyContent:'flex-start',
alignItems:'center',
width:'95%',
height:'12%',
},

boxA:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'45%',
flexDirection:'row'
},

rowA:{
justifyContent:'flex-end',
alignItems:'center',
width:'13%',
height:'100%',
},

rowB:{
justifyContent:'flex-end',
alignItems:'flex-start',
width:'87%',
height:'100%',
},



boxB:{
justifyContent:'center',
alignItems:'center',
width:'97%',
height:'45%',
borderWidth:1,
flexDirection:'row',
},

image:{
width:'40%',
height:'50%',
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