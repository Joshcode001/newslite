
import { View,Text,StyleSheet,TouchableOpacity,TextInput,ActivityIndicator,Keyboard} from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { Colors } from '@/src/utils/color'
import { useRouter } from 'expo-router'
import { typo } from '@/src/utils/typo'
import {KeyboardStickyView} from 'react-native-keyboard-controller'
import { lingual } from '@/src/utils/dataset'
import AppIcon from '@/src/components/AppIcons'



type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";







const deletez = () => {

const router = useRouter()
const { theme,WIDTH,HEIGHT,isloading,setisloading,roomKey,myClient,socket,showToast,LogOut,platform,getlang,appLang} = useContext(AuthContext)
const [pass,setpass] = useState('')
const [lang, setlang] = useState<langt>('en')


const placeholderA = theme === 'dark' ? 'arrowleftdark' : 'arrowleftlight'




const handleDelete = async () => {

if (pass === '' && !isloading) return

setisloading(true)

const data = { pass,rkey:roomKey,userId:myClient.uname }

await socket.emit('terminate', data)

}




useEffect(() => {


const killHandler = (data:any) => {

if (data.isKilled) {

LogOut()

}else if (!data.isKilled) {

setisloading(false)

const toast = {type:'customError',name:myClient.fname,info:lingual.wrongPassword[lang],onHide:() => {}, visibilityTime:4000}
showToast(toast)

}

}

socket.on('kill',killHandler)



return () => {

socket.off('kill',killHandler)

}


},[socket])





useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])





return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}> 

<View style={styles.cupA}></View>


<View style={[styles.cupB,{rowGap:typo.h1_5}]}>

<View style={styles.colA}>
<TouchableOpacity onPress={() => router.back()} style={styles.rolA}>
<AppIcon name={placeholderA}  size={typo.h1_8} />
</TouchableOpacity>

<View style={styles.rolB}>

<View style={styles.sideA}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h1_8,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>{lingual.Settings[lang]}</Text>
</View>

<View style={styles.sideB}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>{lingual.ConfirmDelete[lang]}</Text>
</View>

</View>
</View>


<View style={styles.colB}>

<View style={styles.boxa}>

<View style={[styles.imageBox,{marginVertical:typo.h6}]}>
<AppIcon name='remove'  size={typo.h100} />
</View>

<View style={[styles.textBox,{marginVertical:typo.h6}]}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h3}]}>{lingual.ConfirmDelAcc[lang]}</Text>
</View>

<View style={[styles.inputBox,{marginVertical:typo.h6}]}>
<View style={[styles.inputboard,{borderBottomWidth:1,borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>

<View style={[styles.boxi]}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h3}]}>{lingual.enterPass[lang]}</Text>
</View>

<View style={[styles.boxii]}>
<TextInput allowFontScaling={false} style={[styles.input,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h2}]}  secureTextEntry={true} onChangeText={(text) => setpass(text)} value={pass}
/>
</View>

</View>

</View>

</View>

</View>

</View>


<View style={styles.cupC}>

<KeyboardStickyView
style={[styles.stickyB,{columnGap:typo.h6}]} offset={platform === 'ios' ? {closed:-60,opened:0}:{closed:-60,opened:0}}>

<TouchableOpacity 
onPress={() => {
Keyboard.dismiss()
router.back()
}} 

style={[styles.button,{backgroundColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary,borderRadius:typo.h2}]}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.border : Colors.dark.primary,fontSize:typo.h4}]}>{lingual.Cancel[lang]}</Text>
</TouchableOpacity>

<TouchableOpacity  
onPress={() => {
Keyboard.dismiss()
handleDelete()
}} 
style={[styles.button,{backgroundColor:theme === 'dark' ? Colors.light.trash : Colors.dark.trash,borderRadius:typo.h2}]}>

{
isloading ? (<ActivityIndicator size={typo.h4} color={Colors.light.primary}  />) :
(<Text allowFontScaling={false} style={[styles.textB700,{color:Colors.light.primary,fontSize:typo.h4}]}>
{lingual.deleteAccount[lang]}</Text>)
}

</TouchableOpacity>

</KeyboardStickyView>

</View>

</View>
)
}

export default deletez











const styles = StyleSheet.create({
container:{
justifyContent:'center',
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
height:'77%',
flexDirection:'column',
},



colA:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'8%',
flexDirection:'row',
},

colB:{
justifyContent:'flex-start',
alignItems:'center',
width:'100%',
height:'87%',
},


rolA:{
justifyContent:'flex-start',
alignItems:'center',
width:'14%',
height:'100%'
},

rolB:{
justifyContent:'center',
alignItems:'center',
width:'86%',
height:'100%',
flexDirection:'column'
},


sideA:{
justifyContent:'flex-start',
alignItems:'flex-start',
width:'100%',
height:'55%'
},



sideB:{
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'45%'
},


stickyB:{
justifyContent:'center',
alignItems:'flex-end',
width:'100%',
height:'50%',
flexDirection:'row',
},


cupC:{
justifyContent:'flex-end',
alignItems:'center',
width:'100%',
height:'15%',
},


button:{
justifyContent:'center',
alignItems:'center',
width:'43%',
height:'70%',
borderWidth:1
},

input:{
width:'100%',
height:'100%',
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
},


inputboard:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'100%',
flexDirection:'column',
},


boxa:{
justifyContent:'flex-end',
alignItems:'center',
width:'95%',
height:'50%',
flexDirection:'column'
},

imageBox:{
justifyContent:'center',
alignItems:'center',
width:'50%',
height:'28%',
},


textBox:{
justifyContent:'center',
alignItems:'center',
width:'98%',
height:'17%',
},

inputBox:{
justifyContent:'center',
alignItems:'flex-start',
width:'95%',
height:'30%',
},

boxi:{
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'35%',

},


boxii:{
justifyContent:'flex-end',
alignItems:'flex-start',
width:'100%',
height:'65%',
},

image:{
width:'70%',
height:'60%'
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

textError: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
color:'red',
},





})