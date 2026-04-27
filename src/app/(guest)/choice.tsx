
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useState,useContext,useEffect} from 'react'
import { typo,length } from '@/src/utils/typo'
import { lingual } from '@/src/utils/dataset'
import { AuthContext } from '@/src/utils/authContext'
import { Colors } from '@/src/utils/color'
import { useRouter } from 'expo-router'




type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl"





const choice = () => {

const router = useRouter()
const { theme,WIDTH,HEIGHT,appLang,getlang } = useContext(AuthContext)
const [lang, setlang] = useState<langt>('en')










useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])


return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>

<View style={styles.cupa}></View>

<View style={styles.cupb}>

<View style={styles.partx}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h3}]}>{lingual.betterExperience[lang]}</Text>
</View>

<View style={styles.partx}>

<View style={styles.rowcup}>

<TouchableOpacity onPress={() => router.replace({pathname:'/(guest)/home'})} style={[styles.button,{backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}>
<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h3,color:Colors.light.primary}]} >{lingual.guest[lang]}</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => router.replace({pathname:'/(signIn)/onboardii'})} style={[styles.button,{backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :Colors.light.Activebtn}]}>
<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h3,color:Colors.light.primary}]} >{lingual.signUP[lang]}</Text>
</TouchableOpacity>

</View>

</View>

</View>

<View style={styles.cupc}></View>

</View>
)
}

export default choice




const styles = StyleSheet.create({

container:{
justifyContent:'center',
alignItems:'center',
flex:1,
flexDirection:'column',
},

cupa:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'15%',
},

cupb:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'55%',
},

cupc:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'30%',
},

partx:{
justifyContent:'flex-start',
alignItems:'center',
width:'95%',
height:'50%',
},


rowcup:{
justifyContent:'space-between',
alignItems:'center',
width:'90%',
height:'30%',
flexDirection:'row'
},

button:{
justifyContent:'center',
alignItems:'center',
width:'40%',
height:'60%',
borderWidth:1,
borderRadius:15,
},

textM500: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
},


textR400: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
},


textT400: {
fontFamily:'CabinetGrotesk-Thin',
fontWeight:400,
},

textB700: {
fontFamily:'CabinetGrotesk-Bold',
fontWeight:700,
},


})