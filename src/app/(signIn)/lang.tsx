

import { View, Text,StyleSheet,TouchableOpacity,Modal,FlatList} from 'react-native'
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
import { moderateVerticalScale,vh } from '@/src/utils/scale';




type langtag = {
code:string,
name:string
}

type lgtag = {
code:string,
name:string,
value:string
}



type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";



const lang = () => {

const router = useRouter()
const {setappLang,WIDTH,HEIGHT,theme,getlang,appLang} = useContext(AuthContext)
const [modalVisible, setModalVisible] = useState(false);
const [deflang,setdeflang] = useState<langtag>({name:'English',code:'gb'})
const [lang, setlang] = useState<langt>('en')



const Langtag = ({code,name,value}:lgtag) => (
<TouchableOpacity onPress={() => {
setdeflang({name,code})
setappLang(value)
setModalVisible(false)
}}>
<View style={[styles.boxiv,{height:typo.h1_5,columnGap:typo.h3,borderRadius:typo.h6,marginVertical:typo.h6,marginHorizontal:typo.h6,paddingLeft:typo.h6,borderBottomColor:theme === 'dark' ? Colors.dark.modalBorder : Colors.light.modalBorder}]}>
<CountryFlag isoCode={code} size={typo.h4} />
<Text allowFontScaling={false} style={[styles.texti,{color:theme === 'dark' ? Colors.dark.faintText: Colors.light.faintText,fontSize:typo.h3}]}>{name}</Text>
</View>
</TouchableOpacity>
)




useEffect(() => {

getlang(appLang,setlang)

},[appLang])




return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>
<View style={styles.boxa}>
<View style={styles.iconview}>
<View style={styles.icon}>
<Image contentFit='contain' source={require('../../../assets/images/initlogo.png')} style={{width:'100%',height:'100%'}}/>
</View>
</View>
<View style={styles.inputa}>
<View style={styles.itemi}>
<Text allowFontScaling={false} style={[styles.texti,{color:theme === 'dark' ? Colors.dark.faintText: Colors.light.faintText,fontSize:typo.h3 }]}>{lingual.chooseLang[lang]}</Text>
</View>
<View style={styles.itemii}>
<View style={[styles.itemiii,{columnGap:typo.h5,borderRadius:typo.h2,borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>
<View style={[styles.boxi,{columnGap:typo.h3}]}>
<CountryFlag isoCode={deflang.code} size={typo.h4}/>
<Text allowFontScaling={false} style={[styles.texti,{color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText,fontSize:typo.h3}]}>{deflang.name}</Text>
</View>
<View style={styles.boxii}>
<TouchableOpacity onPress={() => setModalVisible(true)}>
<FontAwesome name="angle-down" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</TouchableOpacity>
</View>
</View>
</View>
</View>
</View>


<View style={styles.boxb}>
<View style={styles.btnview}>
<View style={styles.button}>
<TouchableOpacity style={[styles.btn,{borderRadius:typo.h6,columnGap:typo.h4,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn}]} onPress={() => router.push({pathname:'/onboardi'})}>
<Text allowFontScaling={false} style={[styles.textii,{color:Colors.light.primary,fontSize:typo.h3}]}>{lingual.next[lang]}</Text>
<FontAwesome name="angle-right" size={typo.h2} color={Colors.light.primary}/>
</TouchableOpacity>
</View>
</View>
</View>

<Modal animationType='fade' visible={modalVisible} onRequestClose={() => setModalVisible(false)} transparent>
<View style={styles.centeredView}>
<View style={[styles.modalView,{borderRadius:typo.h6,backgroundColor:theme === 'dark' ? Colors.dark.modal : Colors.light.modal}]}>
<View style={{width:'100%',height:'100%'}}>
<FlatList data={app_data} renderItem={({item}) => <Langtag code={item.icon} name={item.label} value={item.value} />}/>
</View>
</View>
</View>
</Modal>
</View>
)
}

export default lang





const styles = StyleSheet.create({

container: {
justifyContent:'center',
alignItems:'center',
flex:1,
flexDirection:'column'
},

boxa:{
justifyContent:'space-between',
alignItems:'center',
height:'48.3%',
width:'100%',
flexDirection:'column'
},

boxb:{
justifyContent:'flex-end',
alignItems:'center',
height:'51.7%',
width:'100%',
},

inputa:{
justifyContent:'space-between',
alignItems:'center',
width:'88%',
height:'24.2%',
flexDirection:'column'
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
},

itemiii:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'90%',
borderWidth:1,
flexDirection:'row',
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
width:'12.4%',
height:'28.9%',
},


iconview: {
width:'100%',
height:'34.1%',
justifyContent:'flex-end',
alignItems:'center'
},


btnview: {
width:'90%',
height:'18.8%',
justifyContent:'flex-start',
alignItems:'flex-end'
},


button: {
justifyContent:'center',
alignItems:'center',
width:'27.1%',
height:'47.1%'
},

btn: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'95%',
flexDirection:'row',
},

texti: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400
},

textii: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
},


centeredView: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
width:'100%',
height:'100%'
},

modalView: {
position:'absolute',
justifyContent:'center',
top:'49%',
borderRadius: 10,
width:'88%',
height:'40%',
alignItems: 'center',
},


boxiv:{
justifyContent:'flex-start',
alignItems:'center',
width:'90%',
flexDirection:'row',
borderBottomWidth:1,
},

})