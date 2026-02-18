

import { View, Text,StyleSheet,TouchableOpacity,FlatList} from 'react-native'
import React,{useContext} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { typo,length } from '@/src/utils/typo'
import { Colors } from '@/src/utils/color'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import CountryFlag from "react-native-country-flag";
import { AI_prop,app_data } from '@/src/utils/dataset'





type lang = {
codeic:string,
lang:string,
lcode:string,
lcodex:string
name:{
male:string,
female:string
}
}


type app = {
label:string,
value:string,
icon:string,
lcode:string
}









const language = () => {


const router = useRouter()
const { theme,WIDTH,HEIGHT,appLang,setappLang,langset,setlangset } = useContext(AuthContext)




const Langtag = ({codeic,lang,lcode,lcodex,name}:lang) => (
<TouchableOpacity onPress={() => setlangset({lang, lcode,lcodex, name,codeic})} style={[styles.tag,{height:length.l2 / 3}]}>

<View style={styles.tagA}>
<CountryFlag isoCode={codeic.toLowerCase()} size={typo.h4} />
</View>

<View style={styles.tagB}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>{lang}</Text>
</View>

</TouchableOpacity>
)




const Apptag = ({label,value,icon,lcode}:app) => (
<TouchableOpacity onPress={() => setappLang({label,value,icon,lcode})} style={[styles.tag,{height:length.l2 / 3}]}>

<View style={styles.tagA}>
<CountryFlag isoCode={icon} size={typo.h4} />
</View>

<View style={styles.tagB}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>{label}</Text>
</View>

</TouchableOpacity>
)








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
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h1_8,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>Settings</Text>
</View>

<View style={styles.sideB}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>Language</Text>
</View>

</View>
</View>


<View style={[styles.colB,{rowGap:typo.h2}]}>

<View style={[styles.clubA,{rowGap:typo.h6}]}>

<View style={styles.culA}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h3}]}>App Language</Text>
</View>

<View style={[styles.culB,{borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border,
backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderWidth:1,borderRadius:typo.h5}]}>

<View style={styles.relA}>
<CountryFlag isoCode={appLang.icon} size={typo.h3} />
</View>

<View style={styles.relB}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>{appLang.label}</Text>
</View>

<View style={styles.relC}>
<Ionicons name="checkmark-circle-sharp" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon:Colors.light.icon } />
</View>


</View>

</View>

<View style={[styles.clubB,{rowGap:typo.h6}]}>

<View style={styles.culD}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h3}]}>Choose App Language</Text>
</View>

<View style={[styles.culC,{borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border,
backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderWidth:1,borderRadius:typo.h3}]}>
<FlatList data={app_data} keyExtractor={item => item.value} renderItem={({item}) => <Apptag label={item.label} icon={item.icon} 
value={item.value} lcode={item.lcode}/>}/>
</View>

</View>

<View style={[styles.clubA,{rowGap:typo.h6}]}>

<View style={styles.culA}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h3}]}>Translate language</Text>
</View>

<View style={[styles.culB,{borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border,
backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderWidth:1,borderRadius:typo.h5}]}>

<View style={styles.relA}>
<CountryFlag isoCode={langset.codeic} size={typo.h3} />
</View>

<View style={styles.relB}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>{langset.lang}</Text>
</View>

<View style={styles.relC}>
<Ionicons name="checkmark-circle-sharp" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon:Colors.light.icon } />
</View>

</View>

</View>

<View style={[styles.clubB,{rowGap:typo.h6}]}>

<View style={styles.culD}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h3}]}>Choose Translate language</Text>
</View>

<View style={[styles.culC,{borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border,
backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderWidth:1,borderRadius:typo.h3}]}>
<FlatList data={AI_prop} keyExtractor={item => item.lang} renderItem={({item}) => <Langtag codeic={item.codeic} lang={item.lang} 
lcode={item.lcode} lcodex={item.lcodex} name={item.name}/>} />
</View>

</View>

</View>


</View>

</View>
)
}

export default language




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


colB:{
justifyContent:'flex-start',
alignItems:'center',
width:'100%',
height:'85%',
flexDirection:'column',
},


clubA:{
justifyContent:'center',
alignItems:'flex-start',
width:'88%',
height:'11%',
flexDirection:'column',
},


clubB:{
justifyContent:'center',
alignItems:'flex-start',
width:'88%',
height:'34%',
flexDirection:'column',
},


culA:{
justifyContent:'flex-start',
alignItems:'flex-start',
width:'100%',
height:'36%',
},


culB:{
justifyContent:'center',
alignItems:'flex-start',
width:'95%',
height:'60%',
flexDirection:'row'
},


culC:{
justifyContent:'center',
alignItems:'flex-start',
width:'95%',
height:'85%',
},

culD:{
justifyContent:'flex-start',
alignItems:'flex-start',
width:'100%',
height:'10%',
},


relA:{
justifyContent:'center',
alignItems:'center',
width:'14%',
height:'100%',
},

relB:{
justifyContent:'center',
alignItems:'flex-start',
width:'78%',
height:'100%',
},


relC:{
justifyContent:'center',
alignItems:'flex-start',
width:'8%',
height:'100%',
},


tag:{
justifyContent:'center',
alignItems:'center',
width:'98%',
flexDirection:'row'
},


tagA:{
justifyContent:'center',
alignItems:'center',
width:'16%',
height:'100%',
},

tagB:{
justifyContent:'center',
alignItems:'flex-start',
width:'84%',
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