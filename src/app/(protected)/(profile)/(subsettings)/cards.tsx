

import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { typo,length } from '@/src/utils/typo'
import { Colors } from '@/src/utils/color'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useRouter } from 'expo-router'
import { Image } from 'expo-image'
import Cusloader from '@/src/components/Cusloader'
import CusWebView from '@/src/components/CusWebView'
import { lingual } from '@/src/utils/dataset'



type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";




const cards = () => {

const router = useRouter()
const { WIDTH,HEIGHT,myClient,setisloading,isloading,roomKey,socket,getlang,appLang } = useContext(AuthContext)
const [ link,setlink ] = useState('')
const [lang, setlang] = useState<langt>('en')



useEffect(() => {

if (myClient.subCode !== "null") {

setisloading(true)
socket.emit('cardlink',{ code:myClient.subCode,rkey:roomKey })

}

},[myClient])




useEffect(() => {

socket.on('userlink',(data:any) => {

setlink(data.link)
setisloading(false)

})

},[socket])




useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])


return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:Colors.light.base}]}>

<View style={styles.cupA}></View>

<View style={styles.cupB}>


<View style={styles.colA}>
<TouchableOpacity onPress={() => router.back()} style={styles.rolA}>
<EvilIcons name="chevron-left" size={typo.h1_2} color={Colors.light.icon} />
</TouchableOpacity>

<View style={styles.rolB}>

<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h1_8,color:Colors.dark.primary}]}>{lingual.Cards[lang]}</Text>

</View>

</View>

{
myClient.subCode === "null" && (<View style={styles.colC}>

<View style={[styles.box,{rowGap:typo.h2}]}>

<Image source={require('../../../../../assets/images/emptylight.png')} contentFit='contain' style={{width:'35%',height:'30%'}} />

<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h3,color:Colors.dark.primary}]}>
{lingual.freePlan[lang]}</Text>

</View>

</View>)
}


{
myClient.subCode !== "null" && (<View style={styles.colB}>

{
isloading ? (<Cusloader top={length.l3} />) : (<CusWebView link={link} />)
}


</View>)
}

</View>

</View>
)
}

export default cards




const styles = StyleSheet.create({
container:{
justifyContent:'flex-start',
alignItems:'center',
flexDirection:'column',
flex:1
},

cupA:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'8%'
},

cupB:{
justifyContent:'flex-start',
alignItems:'center',
width:'100%',
height:'92%',
flexDirection:'column',
},

colA:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'7%',
flexDirection:'row',
},

rolA:{
justifyContent:'flex-start',
alignItems:'center',
width:'14%',
height:'100%'
},

rolB:{
justifyContent:'flex-start',
alignItems:'flex-start',
width:'86%',
height:'100%',

},


colB:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'93%',
},


colC:{
justifyContent:'center',
alignItems:'center',
width:'95%',
height:'93%',

},

box:{
justifyContent:'flex-start',
alignItems:'center',
width:'100%',
height:'50%',
flexDirection:'column',
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