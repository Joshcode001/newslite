
import { View, Text,StyleSheet,TouchableOpacity,FlatList } from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { typo,length } from '@/src/utils/typo'
import { AuthContext } from '@/src/utils/authContext'
import { Colors } from '@/src/utils/color'
import { useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { lingual } from '@/src/utils/dataset'





type filter = {
label:string,
value:string
}


type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";



const inbox = () => {


const router = useRouter()
const { theme,WIDTH,HEIGHT,getlang,appLang,shouldntDisplay } = useContext(AuthContext)
const [lang, setlang] = useState<langt>('en')




const imageFolder = {
news:require('../../../../assets/images/newsicon.png'),
reaction:require('../../../../assets/images/reactionicon.png'),
reply:require('../../../../assets/images/replyicon.png')
}


const filterList = [
{label:"All",value:"all"},
{label:"Reactions",value:"reaction"},
{label:"Replies",value:"reply"},
{label:"For you",value:"news"},
{label:"Updates",value:"update"},
]


const FilterBox = ({label,value}:filter) => (
<View style={[styles.filterBox,{width:98,height:30,borderRadius:20,
borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border ,
backgroundColor:theme === 'dark' ? Colors.dark.primary : Colors.light.primary }]}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h5,color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary}]}>{label}</Text>
</View>
)





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
<View style={[styles.container,
{backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base, width:WIDTH,height:HEIGHT,rowGap:10}]}>

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

<View style={[styles.rold,{paddingRight:18}]}>
<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h3,color:theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn}]}>{lingual.ReadAll[lang]}</Text>
</View>


</View>

<View style={styles.frameii}>
<FlatList data={filterList} horizontal={true} ItemSeparatorComponent={() => <View style={styles.space}></View>}
keyExtractor={item => item.value} style={styles.flist} contentContainerStyle={styles.ccstyle}
showsHorizontalScrollIndicator={false} renderItem={({item}) => <FilterBox label={item.label} value={item.value}/>} />
</View>


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
flexDirection:'column',
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
backgroundColor:'orange'
},

frame:{
width:'100%',
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
width:'12%',
height:'100%',
justifyContent:'center',
alignItems:'center',
},


rolb:{
width:'28%',
height:'100%',
justifyContent:'center',
alignItems:'flex-start',

},


rolc:{
width:'11%',
height:'100%',
justifyContent:'center',
alignItems:'flex-start',

},


rold:{
width:'49%',
height:'100%',
justifyContent:'center',
alignItems:'flex-end',
},


circle:{
width:'60%',
aspectRatio:1,
borderRadius:9999,
overflow:'hidden',
justifyContent:'center',
alignItems:'center',
},


flist:{
width:'100%',
height:'100%'
},


ccstyle:{
justifyContent:'center',
alignItems:'center'
},


space:{
width:20,
height:'100%'
},


filterBox:{
borderWidth:1,
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