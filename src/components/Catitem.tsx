
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
pl:string,
id:string

}




type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id";




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







const Catitem = ({Ref, isC,router,selectedC,icon, category, color, Views, item}:cat) => {

const {appLang,getlang} = useContext(AuthContext)
const [lang, setlang] = useState<langt>('en')








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