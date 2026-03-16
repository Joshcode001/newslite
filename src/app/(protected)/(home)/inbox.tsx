
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { typo,length } from '@/src/utils/typo'
import { AuthContext } from '@/src/utils/authContext'
import { Colors } from '@/src/utils/color'
import { useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { lingual } from '@/src/utils/dataset'


type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";



const inbox = () => {


const router = useRouter()
const { theme,WIDTH,HEIGHT,getlang,appLang,shouldntDisplay } = useContext(AuthContext)
const [lang, setlang] = useState<langt>('en')




const handleBack = () => {

shouldntDisplay.value = false
router.back()
}



useEffect(() => {

shouldntDisplay.value = true
},[shouldntDisplay])


useEffect(() => {

getlang(appLang.value,setlang)
},[appLang])



return (
<View style={[styles.container,{backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base, width:WIDTH,height:HEIGHT}]}>

<View style={styles.cupA}>

<View style={styles.frame}>
<View style={styles.framei}>

<TouchableOpacity style={styles.rola} onPress={handleBack}>
<Ionicons name="chevron-back" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</TouchableOpacity>

<View style={styles.rolb}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h2,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>{lingual.Activity[lang]}</Text>
</View>


<View style={styles.rolc}>
<View style={[styles.circle,{backgroundColor:theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn,}]}>
<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h5,color:Colors.light.primary}]}>5</Text>
</View>
</View>

<View style={styles.rold}>
<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h3,color:theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn}]}>{lingual.ReadAll[lang]}</Text>
</View>


</View>
<View style={styles.frameii}></View>
</View>

</View>

<View style={styles.cupB}></View>
</View>
)
}

export default inbox





const styles = StyleSheet.create({
container:{
justifyContent:'center',
alignItems:'center',
flex:1,
flexDirection:'column'
},


cupA:{
width:'100%',
height:'17%',
justifyContent:'flex-end',
alignItems:'center',
},


cupB:{
width:'100%',
height:'83%',
justifyContent:'center',
alignItems:'center',
},

frame:{
width:'95%',
height:'58%',
justifyContent:'center',
alignItems:'center',
flexDirection:'column'
},


framei:{
width:'100%',
height:'43%',
justifyContent:'center',
alignItems:'center',
flexDirection:'row'
},

frameii:{
width:'100%',
height:'57%',
justifyContent:'center',
alignItems:'center',
},


rola:{
flexBasis:'10%',
height:'100%',
justifyContent:'center',
alignItems:'center',
flexGrow:0,
flexShrink:1

},


rolb:{
flexBasis:'28%',
height:'100%',
justifyContent:'center',
alignItems:'flex-start',
flexGrow:0,
flexShrink:1
},


rolc:{
flexBasis:'11%',
height:'100%',
justifyContent:'center',
alignItems:'flex-start',
flexGrow:0,
flexShrink:1
},


rold:{
flexBasis:'51%',
height:'100%',
justifyContent:'center',
alignItems:'flex-end',
flexGrow:0,
flexShrink:1
},


circle:{
width:'60%',
aspectRatio:1,
borderRadius:9999,
overflow:'hidden',
justifyContent:'center',
alignItems:'center',
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