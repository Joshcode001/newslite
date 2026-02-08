
import { StyleSheet } from 'react-native'
import React,{useEffect,useContext,useState} from 'react'
import { TabTrigger } from 'expo-router/ui'
import CusButton from './CusButton'
import { lingual } from '../utils/dataset';
import { AuthContext } from '../utils/authContext';
import Animated,{useAnimatedStyle,withTiming} from 'react-native-reanimated';




type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";











const Custab = () => {

const {getlang,appLang,shouldntDisplay} = useContext(AuthContext)
const [lang, setlang] = useState<langt>('en')




const displayStyles = useAnimatedStyle(() => {
return {
transform: [
{
translateY: withTiming(
shouldntDisplay.value ? -('7.4%'): 0,
{ duration: 250 }
),
},
],
opacity: withTiming(shouldntDisplay.value ? 0 : 1, { duration: 200 }),
};
})







useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])




return (
<Animated.View style={[style.tablist,displayStyles]}>
<TabTrigger name="(home)"  asChild>
<CusButton name={lingual.home[lang]} icon='newspaper-outline' />
</TabTrigger>

<TabTrigger name="(search)"  asChild>
<CusButton name={lingual.search[lang]} icon='search-outline' />
</TabTrigger>

<TabTrigger name="watch"   asChild>
<CusButton name={lingual.watch[lang]} icon='tv-outline' />
</TabTrigger>

<TabTrigger name="(profile)"  asChild>
<CusButton name={lingual.profile[lang]} isprofile={true} />
</TabTrigger>
</Animated.View>
)
}

export default Custab






const style = StyleSheet.create({
tablist:{
display:'flex',
flexDirection:'row',
position: "absolute",
bottom: 32,
alignItems: "center",
justifyContent: 'space-between',
padding: 8,
width: "100%",
height:'7.4%'
}
})