
import { View, Text, StyleSheet,TextInput,TouchableOpacity,ActivityIndicator } from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { Colors } from '../utils/color'
import { typo } from '../utils/typo'
import { AuthContext } from '../utils/authContext'
import { useRouter } from 'expo-router'
import { lingual } from '../utils/dataset'


type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl"




const SearchName = () => {

const router = useRouter()
const { theme,isloading,setisloading,showToast,myClient,liveCount,roomKey,socket,setsearchArray,getlang,appLang } = useContext(AuthContext)
const [text, settext] = useState('')
const [showLoad, setshowLoad] = useState(false)
const [isBack, setisBack] = useState(false)
const [lang, setlang] = useState<langt>('en')






const getName = () => {

switch (true) {

case (myClient.subCode === 'null'):

const toast = {type:'customError',name:myClient.fname,info:lingual.getPremium[lang],onHide:() => {}, visibilityTime:4000}
showToast(toast)
break;


case (liveCount === 0):

const toastB = {type:'customError',name:myClient.fname,info:lingual.limitReach[lang],onHide:() => {}, visibilityTime:4000}
showToast(toastB)
break;


case (myClient.subCode !== 'null' && liveCount > 0):

if (isloading || showLoad) return

setisloading(true)
setshowLoad(true)

const data = { rkey:roomKey,name:text,userId:myClient.uname }
socket.emit('SearchName',data)
break;

}

}



const handleNavigate = () => {

setshowLoad(false)
setisloading(false)
settext('')
setisBack(false)
router.push({pathname:'/(protected)/(search)/second',params:{ name:text }})

}



useEffect(() => {

if (isBack && text !== '') {
handleNavigate()
}

},[isBack])




useEffect(() => {

socket.on("resultName", (obj:any) => {

setsearchArray(obj.data)
setisBack(true)
})

},[socket])



useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])





return (
<View style={styles.container}>

<View style={styles.itemi}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.primary : 
Colors.dark.base}]}>Search by Name</Text>
</View>

<View style={[styles.itemii,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>
<TextInput editable={isloading ? false : true} allowFontScaling={false}  style={[styles.input,{fontSize:typo.h4,color:theme === 'dark' ? Colors.dark.faintText : Colors.light.faintText,padding:typo.h8}]} 
value={text} onChangeText={text => settext(text)}
/>
</View>


<View style={styles.itemiii}>
<TouchableOpacity onPress={getName} style={[styles.button,{borderRadius:typo.h5,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :
Colors.light.Activebtn}]}>
{
showLoad ? (<ActivityIndicator size={typo.h4} color={Colors.light.primary} /> ): (<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h5,color: 
Colors.light.primary }]}>Search</Text>)
}
</TouchableOpacity>
</View>

</View>
)
}

export default SearchName







const styles = StyleSheet.create({
container:{
width:'100%',
height:'100%',
justifyContent:'center',
alignItems:'center',
flexDirection:'column'
},

itemi:{
width:'90%',
height:'30%',
justifyContent:'flex-end',
alignItems:'flex-start',
},



itemii:{
width:'90%',
height:'32%',
justifyContent:'center',
alignItems:'flex-start',
borderBottomWidth:2
},



itemiii:{
width:'90%',
height:'38%',
justifyContent:'center',
alignItems:'flex-end',
},

input:{
width:'100%',
height:'100%',
justifyContent:'flex-end',
alignItems:'flex-start',
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
},


button:{
width:'30%',
height:'70%',
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