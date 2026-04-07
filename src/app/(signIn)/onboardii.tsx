

import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useContext,useState,useEffect,useRef} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { Image } from 'expo-image';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import { Colors } from '@/src/utils/color';
import { lingual } from '@/src/utils/dataset';
import { typo } from '@/src/utils/typo';
import PagerView from 'react-native-pager-view'
import AppIcon from '@/src/components/AppIcons';

type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";





const onboardii = () => {


const router = useRouter()
const pagerRef = useRef<PagerView>(null);
const {WIDTH,HEIGHT,theme,getlang,appLang} = useContext(AuthContext)
const [lang, setlang] = useState<langt>('en')
const [position,setposition] = useState(0)


const placeholderA = theme === 'dark' ? 'actarrowleftdark':'actarrowleft'
const placeholderI = position === 0 ? 'pagei' : 'pageii'
const placeholderG = theme === 'dark' ? 'onboarda': 'onboardalight'
const placeholderF = theme === 'dark' ? 'onboardb':'onboardblight'



const Previous = () => (
<TouchableOpacity onPress={() => pagerRef.current?.setPage(0)} style={styles.board}>
<View style={styles.boardi}>
<AppIcon name={placeholderA} size={25} />
</View>

<View style={styles.boardii}>
<Text style={[styles.textB700,{fontSize:20,color:theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn}]}>
{lingual.previous[lang]}</Text>
</View>
</TouchableOpacity>
)


const Skip = () => (
<TouchableOpacity onPress={() => router.replace({pathname:'/(signIn)/next'})}>
<Text style={[styles.textB700,{fontSize:20,color:theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn}]}>
{lingual.skip[lang]}</Text>
</TouchableOpacity>
)


const handleNavigate = () => {

switch(position) {

case 0:
pagerRef.current?.setPage(1)
break;

case 1:
router.replace({pathname:'/(signIn)/next'})

}
}


useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])


return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>


<View style={styles.cupA} >

<View style={styles.frame} >
<View style={styles.frameBox} >
<AppIcon name='initlogo' size={50}/>
</View>
</View>

</View>


<View style={styles.cupB} >
<PagerView orientation='horizontal' ref={pagerRef}  style={styles.pagerView} initialPage={0} 
onPageSelected={(e) => setposition(e.nativeEvent.position)}>


<View key="1" style={[styles.page]}>

<View style={styles.pageI}>
<AppIcon name={placeholderG} size={400} />
</View>

<View style={styles.pageII}>

<View style={styles.boxa}>

<Text style={[styles.textM500,{lineHeight:48,fontSize:48,letterSpacing:2}]}>

<Text style={{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.base}}>{lingual.onboardia[lang]}</Text>{' '}
<Text style={{color:theme === 'dark' ? Colors.dark.story : Colors.light.story}}>{lingual.oneStory[lang]}</Text>

</Text>

</View>


<View style={styles.boxb}>

<Text style={[styles.textR400,{fontSize:20,lineHeight:24,color:theme === 'dark' ? Colors.dark.icon : Colors.dark.primary}]}>{lingual.onboardib[lang]}</Text>

</View>

</View>

</View>

<View key="2"style={[styles.page]}>

<View style={styles.pageI}>
<AppIcon name={placeholderF} size={350}/>
</View>

<View style={styles.pageII}>

<View style={styles.boxq}>
<View style={styles.main}>
<Text style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.base,fontSize:48}]}>{lingual.yourNews[lang]}</Text>
</View>

<View style={styles.main}>
<Text style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.base,fontSize:48}]}>{lingual.yourLang[lang]}</Text>
</View>

<View style={styles.main}>
<Text style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.base,fontSize:48}]}>{lingual.yourWorld[lang]}</Text>
</View>

</View>


<View style={styles.boxb}>

<Text style={[styles.textR400,{fontSize:20,lineHeight:24,color:theme === 'dark' ? Colors.dark.icon : Colors.dark.primary}]}>{lingual.onboardiib[lang]}</Text>

</View>

</View>


</View>

</PagerView>
</View>


<View style={styles.cupC}>

<View style={styles.cola}>
<AppIcon name={placeholderI} size={50}/>
</View>

<View style={styles.colb}>

<View style={styles.tap}>

<View style={styles.tapa}>
{
position === 0 ? (<Skip />) : (<Previous />)
}
</View>

<TouchableOpacity onPress={handleNavigate} style={[styles.tapb,{borderRadius:15,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn}]}>

<View style={[styles.boardii,{alignItems:'center'}]}>
<Text style={[styles.textB700,{fontSize:20,color:Colors.light.primary}]}>
{
position === 0 ? lingual.next[lang] : lingual.signIn[lang] 
}
</Text>
</View>

<View style={styles.boardi}>
<AppIcon name='arrowright' size={25}/>
</View>

</TouchableOpacity>

</View>

</View>

</View>


</View>
)
}

export default onboardii








const styles = StyleSheet.create({

container: {
justifyContent:'center',
alignItems:'center',
flex:1,
flexDirection:'column'
},

cupA:{
justifyContent:'flex-end',
alignItems:'center',
width:'100%',
height:'12%',
},


cupB:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'70%',
},


cupC:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'18%',
flexDirection:'column'
},

frame:{
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'50%',
},

frameBox:{
justifyContent:'center',
alignItems:'center',
width:'17%',
height:'100%',
},

cola:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'15%',
},


colb:{
justifyContent:'flex-start',
alignItems:'center',
width:'90%',
height:'85%',
},


tap:{
justifyContent:'space-between',
alignItems:'center',
width:'100%',
height:'50%',
flexDirection:"row",
},

tapa:{
justifyContent:'center',
alignItems:'flex-start',
width:'40%',
height:'60%',
},


tapb:{
justifyContent:'center',
alignItems:'center',
width:'40%',
height:'60%',
flexDirection:'row'
},


pagerView:{
flex:1,
width:'100%',
height:'100%'
},


page:{
width:'100%',
height:'100%',
justifyContent:'center',
alignItems:'center',
flexDirection:'column'
},


pageI:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'60%',
},

pageII:{
justifyContent:'center',
alignItems:'center',
width:'90%',
height:'40%',
flexDirection:'column'
},

boxa:{
justifyContent:'flex-start',
alignItems:'center',
width:'100%',
height:'70%',
},


boxb:{
justifyContent:'flex-start',
alignItems:'flex-start',
width:'100%',
height:'30%'
},


boxq:{
justifyContent:'flex-start',
alignItems:'flex-start',
width:'100%',
height:'70%',
flexDirection:'column',

},

main:{
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'33.3%',
},

board:{
width:'100%',
height:'100%',
justifyContent:'center',
alignItems:'flex-start',
flexDirection:'row'
},

boardi:{
width:'15%',
height:'100%',
justifyContent:'center',
alignItems:'flex-start'
},


boardii:{
width:'85%',
height:'100%',
justifyContent:'center',
alignItems:'flex-start'
},



textM500: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
},


textR400: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
},


textT500: {
fontFamily:'CabinetGrotesk-Thin',
fontWeight:500,
},

textB700: {
fontFamily:'CabinetGrotesk-Bold',
fontWeight:700,
},


})