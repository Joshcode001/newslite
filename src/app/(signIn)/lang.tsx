

import { View, Text,StyleSheet,TouchableOpacity,Modal,FlatList,TouchableWithoutFeedback,Pressable} from 'react-native'
import React,{useContext, useEffect,useState} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { Image } from 'expo-image'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import CountryFlag from "react-native-country-flag";
import { app_data } from '@/src/utils/dataset';
import { useRouter } from 'expo-router';
import { Colors } from '@/src/utils/color';
import { lingual } from '@/src/utils/dataset';
import { typo } from '@/src/utils/typo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';




type langtag = {
code:string,
name:string
}

type lgtag = {
code:string,
name:string,
value:string,
lcode:string
}



type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";



const lang = () => {

const router = useRouter()
const {setappLang,WIDTH,HEIGHT,theme,getlang,appLang} = useContext(AuthContext)
const [isVisible, setisVisible] = useState(false);
const [deflang,setdeflang] = useState<langtag>({name:'English',code:'gb'})
const [lang, setlang] = useState<langt>('en')



const Langtag = ({code,name,value,lcode}:lgtag) => (
<TouchableOpacity onPress={() => {
setdeflang({name,code})
setappLang({value,lcode,label:name,icon:code})
setisVisible(false)
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
<Image contentFit='contain' source={require('../../../assets/images/initlogo.png')} style={{width:'90%',height:'90%'}}/>
</View>
</View>
</View>


<View style={styles.boxB}>
<View style={styles.itemi}>
<Text allowFontScaling={false} style={[styles.textM400,{color:theme === 'dark' ? Colors.dark.faintText: Colors.light.faintText,fontSize:typo.h3 }]}>{lingual.chooseLang[lang]}</Text>
</View>
<TouchableOpacity onPress={() => setisVisible(true)} style={[styles.itemii,{borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>

<View style={[styles.boxi,{columnGap:typo.h3}]}>
<CountryFlag isoCode={deflang.code} size={typo.h4}/>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText,fontSize:typo.h3}]}>{deflang.name}</Text>
</View>
<View style={styles.boxii}>
<View >
<FontAwesome name="angle-down" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</View>
</View>

</TouchableOpacity>
</View>

</View>

<View style={styles.cupB}>
{
isVisible && (<View style={[styles.langView,{borderRadius:typo.h6,backgroundColor:theme === 'dark' ? Colors.dark.modal : Colors.light.modal}]}>

<TouchableOpacity onPress={() => setisVisible(false)} style={styles.top}>
<MaterialIcons name="cancel" size={30} color={Colors.light.story} />
</TouchableOpacity>

<View style={styles.flat}>
<FlatList data={app_data} style={{width:'100%',height:'100%'}}
renderItem={({item}) => <Langtag code={item.icon} name={item.label} value={item.value} lcode={item.lcode} />}/>
</View>
</View>)
}
</View>

<View style={styles.cupC}>

<TouchableOpacity style={[styles.btn,{borderRadius:typo.h6,columnGap:typo.h4,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn}]} onPress={() => router.push({pathname:'/onboardi'})}>
<Text allowFontScaling={false} style={[styles.textB700,{color:Colors.light.primary,fontSize:typo.h3}]}>{lingual.next[lang]}</Text>
<FontAwesome name="angle-right" size={typo.h2} color={Colors.light.primary}/>
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
height:'45%',
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
height:'10%',
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
rowGap:18,
},

itemi:{
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'23.5%',

},

itemii:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'52.9%',
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
height:'45%',
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


textM400: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:400,
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