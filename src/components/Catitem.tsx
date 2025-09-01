
import { Text,StyleSheet,TouchableOpacity, ViewToken} from "react-native";
import Animated, { useAnimatedStyle, SharedValue, withTiming} from 'react-native-reanimated'
import React, {useContext, useState, useEffect} from 'react'
import { AuthContext } from "../utils/authContext";





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
pl:string

}




type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl";




type item = {
item: langobj,
color: string
}

type cat = {
router: any,
selectedC: string,
icon: string,
Ref: any,
isC?: string,
category: langobj,
color: string,
Views: SharedValue<ViewToken<item>[]>,
item: any
}


export const getlang = (id:string, setlang:React.Dispatch<React.SetStateAction<langt>>) => {


switch (id) {

case "en": 

setlang("en")
break;

case "fr":

setlang("fr")
break;

case "de": 

setlang("de")
break;

case "ar":

setlang("ar")
break;

case "es": 

setlang("es")
break;

case "tr":

setlang("tr")
break;

case "nl":

setlang("nl")
break;


case "it":

setlang("it")
break;

case "ja":

setlang("ja")
break;

case "zh":

setlang("zh")
break;

case "ko":

setlang("ko")
break;

case "hi":

setlang("hi")
break;

case "pt":

setlang("pt")
break;

case "ru":

setlang("ru")
break;

case "sw":

setlang("sw")
break;

case "pl":

setlang("pl")
break;


}
}




const Catitem = ({Ref, isC,router,selectedC,icon, category, color, Views, item}:cat) => {

const {appLang} = useContext(AuthContext)
const [lang, setlang] = useState<langt>('en')






// const getlang = (id:string) => {


// switch (id) {

// case "en": 

// setlang("en")
// break;

// case "fr":

// setlang("fr")
// break;

// case "de": 

// setlang("de")
// break;

// case "ar":

// setlang("ar")
// break;

// case "es": 

// setlang("es")
// break;

// case "tr":

// setlang("tr")
// break;

// case "nl":

// setlang("nl")
// break;


// case "it":

// setlang("it")
// break;

// case "ja":

// setlang("ja")
// break;

// case "zh":

// setlang("zh")
// break;

// case "ko":

// setlang("ko")
// break;

// case "hi":

// setlang("hi")
// break;

// case "pt":

// setlang("pt")
// break;

// case "ru":

// setlang("ru")
// break;

// case "sw":

// setlang("sw")
// break;

// case "pl":

// setlang("pl")
// break;


// }
// }





const rstyle = useAnimatedStyle(() => {
const isVisible = Boolean(
Views.value.filter((item) => item.isViewable).find((vitem) =>vitem.item.color === item.color )
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
<TouchableOpacity style={{alignSelf:'center'}}
ref={Ref}
onPress={()=>{
Ref.current = category.en
router.push({
pathname: '/[category]',
params:{
country:selectedC,
Category:Ref.current,
icon:icon,
}
})
}}>
<Animated.View style={[styles.nav,{shadowColor: (isC === category.en ) ? '#E51807': '#0000'}, {backgroundColor:color}, rstyle]}>
<Text style={styles.coloaz}>{category[lang]}</Text>
</Animated.View>
</TouchableOpacity>
)
}











const styles = StyleSheet.create({
nav: {
width:100,
justifyContent:'center',
alignItems: 'center',
marginHorizontal:20,
borderRadius: 20,
height:45,
shadowColor: '#0000',
shadowOffset: {
width: 14,
height: 7,
},
shadowOpacity: 0.9,
shadowRadius: 9,
elevation: 15,
},

coloaz: {
color:'azure'
},


})








export default Catitem