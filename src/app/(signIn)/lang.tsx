

import { View, Text,StyleSheet,TouchableOpacity,FlatList} from 'react-native'
import React,{useContext, useEffect,useState} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import CountryFlag from "react-native-country-flag";
import { app_data } from '@/src/utils/dataset';
import { useRouter } from 'expo-router';
import { Colors } from '@/src/utils/color';
import { lingual } from '@/src/utils/dataset';
import { typo } from '@/src/utils/typo';
import AppIcon from '@/src/components/AppIcons';





type lgtag = {
code:string,
name:string,
value:string,
lcode:string
}



type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";



const lang = () => {

const router = useRouter()
const {setappLang,WIDTH,HEIGHT,theme,getlang,appLang,setapplangStore} = useContext(AuthContext)
const [isVisible, setisVisible] = useState(false);
const [lang, setlang] = useState<langt>('en')




const placeholderA = theme === 'dark' ? 'arrowdowndark':'arrowdownlight'
const placeholderX = theme === 'dark' ? 'xmarkdark':'xmarklight'


const Langtag = ({code,name,value,lcode}:lgtag) => (
<TouchableOpacity onPress={() => {
setappLang({value,lcode,label:name,icon:code})
setisVisible(false)
setapplangStore({value,lcode,label:name,icon:code})
}}>
<View style={[styles.taglang,{height:typo.h1_5,columnGap:typo.h3,borderRadius:typo.h6,marginVertical:typo.h6,marginHorizontal:typo.h6,paddingLeft:typo.h6,borderBottomColor:theme === 'dark' ? Colors.dark.modalBorder : Colors.light.modalBorder}]}>
<CountryFlag isoCode={code} size={typo.h4} />
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.dark.faintText: Colors.light.faintText,fontSize:typo.h3}]}>{name}</Text>
</View>
</TouchableOpacity>
)




useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])




return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>

<View style={styles.cupA}>

<View style={styles.boxA}>
<View style={styles.iconview}>
<View style={styles.icon}>
<AppIcon name='initlogo' size={typo.h60}/>
</View>
</View>
</View>


<View style={[styles.boxB,{rowGap:typo.h6}]}>

<View style={styles.itemi}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.dark.faintText: Colors.light.faintText,fontSize:typo.h3 }]}>{lingual.chooseLang[lang]}</Text>
</View>

<TouchableOpacity onPress={() => setisVisible(true)} style={[styles.itemii,{borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>

<View style={[styles.boxi,{columnGap:typo.h3}]}>

<CountryFlag isoCode={appLang.icon} size={typo.h4}/>

<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText,fontSize:typo.h3}]}>{appLang.label}</Text>
</View>
<View style={styles.boxii}>
<AppIcon name={placeholderA} size={25} />
</View>

</TouchableOpacity>
</View>

</View>

<View style={styles.cupB}>
{
isVisible && (<View style={[styles.langView,{borderRadius:typo.h6,backgroundColor:theme === 'dark' ? Colors.dark.placeholder : Colors.light.tertiary}]}>

<TouchableOpacity onPress={() => setisVisible(false)} style={styles.top}>
<AppIcon name={placeholderX} size={typo.h1_8}/>
</TouchableOpacity>

<View style={styles.flat}>
<FlatList data={app_data} style={{width:'100%',height:'100%'}}
renderItem={({item}) => <Langtag code={item.icon} name={item.label} value={item.value} lcode={item.lcode} />}/>
</View>
</View>)
}
</View>

<View style={styles.cupC}>

<TouchableOpacity style={[styles.btn,{borderRadius:typo.h6,columnGap:typo.h4,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn}]} onPress={() => router.push({pathname:'/onboardii'})}>
<Text allowFontScaling={false} style={[styles.textB700,{color:Colors.light.primary,fontSize:typo.h3}]}>{lingual.next[lang]}</Text>
<AppIcon name='arrowright' size={typo.h1_8} />
</TouchableOpacity>

</View>

</View>
)
}

export default lang





const styles = StyleSheet.create({

container:{
flex:1,
justifyContent:'flex-start',
alignItems:'center',
flexDirection:'column'
},


cupA:{
justifyContent:'space-between',
alignItems:'center',
width:'100%',
height:'42%',
flexDirection:'column',
},

cupB:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'45%',
},


cupC:{
justifyContent:'flex-start',
alignItems:'center',
width:'100%',
height:'13%',
},

boxA:{
justifyContent:'flex-end',
alignItems:'center',
width:'100%',
height:'33%',
},


boxB:{
justifyContent:'flex-start',
alignItems:'center',
width:'93%',
height:'25%',
flexDirection:'column',
},

itemi:{
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'45%',

},

itemii:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'55%',
flexDirection:'row',
borderWidth:1,
borderRadius:20
},


boxi:{
justifyContent:'flex-start',
alignItems:'center',
width:'70%',
height:'88%',
flexDirection:'row',
},


boxii:{
justifyContent:'center',
alignItems:'flex-end',
width:'16%',
height:'60%',
},


icon: {
width:'20%',
height:'80%',
},


iconview: {
width:'100%',
height:'40%',
justifyContent:'flex-end',
alignItems:'center'
},


btn: {
justifyContent:'center',
alignItems:'center',
width:'90%',
height:'35%',
flexDirection:'row',
},


flat:{
width:'100%',
height:'87%',
justifyContent:'center',
alignItems:'center',
},


top:{
alignSelf:'flex-end',
width:'16%',
height:'13%',
justifyContent:'flex-end',
alignItems:'center',
},


langView:{
justifyContent:'center',
alignItems:'center',
width:'90%',
height:'93%'
},




taglang:{
justifyContent:'flex-start',
alignItems:'center',
width:'90%',
flexDirection:'row',
borderBottomWidth:1,
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