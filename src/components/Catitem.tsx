
import { Text,StyleSheet,TouchableOpacity, ViewToken} from "react-native";
import Animated, { useAnimatedStyle, SharedValue, withTiming} from 'react-native-reanimated'
import React, {useContext, useState, useEffect} from 'react'
import { AuthContext } from "../utils/authContext";
import { Colors } from "../utils/color";
import { typo } from "../utils/typo";




type langobj = {
en:string,
fr:string,
de:string,
ar:string,
es:string,
tr:string,
nl:string,
it:string,
ja:string,
zh:string,
ko:string,
hi:string,
pt:string,
ru:string,
sw:string,
pl:string,
id:string,
fa:string,
pa:string,
uk:string,
ro:string,
tl:string
}




type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";



type item = {
item: langobj,
id: string
}



type cat = {
Views: SharedValue<ViewToken<item>[]>,
item: any,
clickCategory:(id:string) => void,
isClick:string,
setelyCount:React.Dispatch<React.SetStateAction<number>>
}







const Catitem = ({ Views, item,clickCategory,isClick,setelyCount}:cat) => {

const {appLang,getlang,theme} = useContext(AuthContext)
const [lang, setlang] = useState<langt>('en')








const rstyle = useAnimatedStyle(() => {
const isVisible = Boolean(
Views.value.filter((item) => item.isViewable).find((vitem) =>vitem.item.id === item.id )
)

return {
opacity: withTiming(isVisible ? 1 : 0.5),
transform: [{scale: withTiming(isVisible ? 1 : 0.2)}] 
}
})



useEffect(() => {

getlang(appLang,setlang)

},[appLang])





return (
<TouchableOpacity style={{alignSelf:'center'}} onPress={() => {
setelyCount(2)
clickCategory(item.item.en)
}}>
<Animated.View style={[styles.nav,{marginHorizontal:typo.h6,borderRadius:typo.h1_5,padding:typo.h8,backgroundColor:theme === 'dark' ? (isClick === item.item.en ? Colors.dark.surface : Colors.dark.primary) : (isClick === item.item.en ? Colors.light.surface : Colors.light.primary),width:typo.h100,height:typo.h1_5,borderColor:theme === 'dark' ? (isClick === item.item.en ? Colors.dark.extra : Colors.dark.border) : (isClick === item.item.en ? Colors.light.Activebtn : Colors.light.border)}, rstyle]}>
<Text style={[styles.textM500,{fontSize:typo.h3,color:theme === 'dark' ? (isClick === item.item.en ? Colors.dark.extra : Colors.light.secondary) :(isClick === item.item.en ? Colors.dark.Activebtn : Colors.dark.primary)}]}>{item.item[lang]}</Text>
</Animated.View>
</TouchableOpacity>
)
}











const styles = StyleSheet.create({
nav: {
justifyContent:'center',
alignItems: 'center',
borderWidth:1,
},

textM500: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
},


})








export default Catitem