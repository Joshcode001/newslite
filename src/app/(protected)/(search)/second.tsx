
import { View, Text,StyleSheet,FlatList,TouchableOpacity } from 'react-native'
import React,{useState,useContext,useEffect} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { typo,length } from '@/src/utils/typo'
import { Colors } from '@/src/utils/color'
import { useRouter,useLocalSearchParams } from 'expo-router'
import CusNewsBox from '@/src/components/CusNewsBox'
import { lingual } from '@/src/utils/dataset'
import AppIcon from '@/src/components/AppIcons'



type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";





const second = () => {

const router = useRouter()
const { name } = useLocalSearchParams()
const { theme,searchArray,WIDTH,HEIGHT,shouldntDisplay,isloading,getlang,appLang} = useContext(AuthContext)
const [sentence, setsentence] = useState({first:'',second:''});
const [lang, setlang] = useState<langt>('en')

let searchInput:string = ''

if (typeof name === 'string') {
searchInput = name
}



const placeholderA = theme === 'dark' ? 'arrowleftdark' : 'arrowleftlight'




const handleBack = () => {

shouldntDisplay.value = false
router.back()
}




const ListEmpty = () => (
<View style={[styles.empty,{height:length.l5}]}>

<View style={styles.emptybox}>

<View style={styles.boxA}>
<View style={styles.cop}>
<Text allowFontScaling={false}  style={[styles.textB700,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary,fontSize:typo.h4}]}>{sentence.first}</Text>
</View>

<View style={styles.cop}>
<Text allowFontScaling={false}  style={[styles.textB700,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary,fontSize:typo.h4}]}>{sentence.second}</Text>
</View>

</View>

<View style={styles.boxB}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary,fontSize:typo.h4}]}>{lingual.checkBack[lang]}</Text>
</View>

</View>

</View>
)



useEffect(() => {

if (!searchArray) return

if (searchArray.length === 0 ) {

const result = lingual.noTrending[lang].replace("{label}",searchInput)
const words = result?.split(" ")

if (!words) return

setsentence({
first:words.slice(0, 3).join(" "),
second:words.slice(3).join(" ")
})

}

},[searchArray,lang])



useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])


useEffect(() => {

if (shouldntDisplay.value === false) {
shouldntDisplay.value = true
}

},[shouldntDisplay])


return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>


<View style={styles.cupA}>
<TouchableOpacity onPress={handleBack} style={styles.frame}>
<AppIcon name={placeholderA} size={typo.h1_8} />
</TouchableOpacity>
</View>


<View style={styles.cupB}>
<FlatList data={searchArray} ListEmptyComponent={() => <ListEmpty />}
ListFooterComponent={() => <View style={{width:'100%',height:33}}></View>}
showsVerticalScrollIndicator={false} keyExtractor={item => item.article_id}
getItemLayout={(data,index) => ({length:(HEIGHT / 2.4) + 5,offset:(HEIGHT / 2.4) + 5 * index,index})}
style={styles.flatlist} contentContainerStyle={styles.ccsOne}
initialNumToRender={60} ItemSeparatorComponent={() => <View style={{width:'100%',height:33}}></View>}
renderItem={({item}) => <CusNewsBox image={item.image_url} title={item.title} description={item.description} pubDate={item.pubDate} articleId={item.article_id} likes={item.likes} commentLength={item.comments.count} type='search' /> } />
</View>

</View>
)
}

export default second






const styles = StyleSheet.create({
container:{
justifyContent:'center',
alignItems:'center',
flex:1,
flexDirection:'column'
},

cupA:{
justifyContent:'flex-end',
alignItems:'flex-start',
width:'100%',
height:'10%',
},

cupB:{
justifyContent:'flex-start',
alignItems:'center',
width:'100%',
height:'88%',
},

frame:{
justifyContent:'flex-start',
alignItems:'flex-start',
width:'20%',
height:'50%',
paddingLeft:20
},

flatlist:{
width:'100%',
height:'100%'
},


ccsOne:{
justifyContent:'flex-start',
alignItems:'center'
},


empty:{
justifyContent:'center',
alignItems:'center',
width:'100%',
},

emptybox:{
justifyContent:'center',
alignItems:'center',
width:'90%',
height:'17%',
flexDirection:'column',
},


boxA:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'70%',
flexDirection:'column'
},

cop:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'50%',
},


boxB:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'30%',
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