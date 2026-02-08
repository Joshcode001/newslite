

import { View, Text, StyleSheet,TextInput,TouchableOpacity,Keyboard,NativeSyntheticEvent,TextInputKeyPressEventData,ActivityIndicator} from 'react-native'
import React,{useState,useRef,useEffect,useContext} from 'react'
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../utils/authContext';
import { Colors } from '../utils/color';
import { lingual } from '../utils/dataset';
import { typo } from '../utils/typo';



type props = {
getCode:(id:string) => void,
isReset:boolean,
resendCode:() => Promise<void>
}


type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";











const CustomOtp = ({getCode,isReset,resendCode}:props) => {


const [lang, setlang] = useState<langt>('en')
const {setiscdactive,iscdactive,appStatus,theme,getlang,appLang} = useContext(AuthContext)
const inputRefs = useRef<TextInput[]>([])
const [isloading,setisloading] = useState(false)
const [isresend,setisresend] = useState(false)
const [otp,setOtp] = useState(["","","","","",""])
const intervalRef = useRef<number>(null)
const [secondsLeft,setsecondsLeft] = useState(300)
const [endTime, setendTime] = useState(0)




const handleChange = (text:string,index:number) => {

if (text === '') {
const newOtp = [...otp]
newOtp[index] = text

setOtp(newOtp)

}

if (text.length > 1) {

const pasted = text.slice(0, 6).split("")
const newOtp = [...otp]

for (let i = 0; i < pasted.length; i++ ) {
newOtp[i] = pasted[i]
}

setOtp(newOtp)
inputRefs.current[index].blur()

const isComplete = newOtp.every(d => d !== "")

if (isComplete) {
const set = newOtp.join("")
getCode(set)

}



} else if (text.length === 1) {

const newOtp = [...otp]
newOtp[index] = text

setOtp(newOtp)

if (index !== 5) {
inputRefs.current[index + 1].focus()

} else if (index === 5 ) {
Keyboard.dismiss()
}

const isComplete = newOtp.every(d => d !== "")

if (isComplete) {
const set = newOtp.join("")
getCode(set)

}


}






}


const handleKeyPress = (e:NativeSyntheticEvent<TextInputKeyPressEventData>,index:number) => {

if ((e.nativeEvent.key === "Backspace" && !otp[index] && index > 0)) {
inputRefs.current[index - 1].focus()
}
}




function formatTime(seconds:number) {

const minute = Math.floor(seconds / 60)
const second = Math.floor(seconds % 60)

const fmt_minute = String(minute).padStart(2,'0')
const fmt_second = String(second).padStart(2,'0')

return `${fmt_minute}:${fmt_second}`
}





useEffect(()=> {

if (isReset) {
const newotp = ["","","","","",""]
setOtp(newotp)
}
},[isReset]) 





useEffect(() => {

if (iscdactive) {

setisloading(false)
setisresend(false)

setendTime(Date.now() + (300 * 1000))

intervalRef.current = setInterval(() => {
setsecondsLeft(prev => {
if (prev <= 1 && intervalRef.current) {
clearInterval(intervalRef.current)
setisresend(true)
return 0
}

return prev - 1


})
},1000)



} else if (!iscdactive) {

if (intervalRef.current) {
clearInterval(intervalRef.current)
}

setsecondsLeft(300)
}





return () => {
if (intervalRef.current) {
clearInterval(intervalRef.current)
}
}


},[iscdactive])




useEffect(() => {

if (appStatus === 'active' && endTime !== 0) {

const currTime = Date.now()

if (currTime > endTime) {
setsecondsLeft(0)

}else if (endTime > currTime) {
setsecondsLeft((endTime - currTime) / 1000)
}


}


},[appStatus,endTime])




useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])





return (
<View style={styles.container}>
<View style={[styles.coli,{columnGap:typo.h6}]}>
<View style={[styles.box,{backgroundColor:theme === 'dark' ? Colors.dark.primary : Colors.light.primary,borderBottomColor:theme === 'dark' ? Colors.light.border : Colors.light.border}]}>
<TextInput value={otp[0]} ref={ref => {if (ref) inputRefs.current[0] = ref}} placeholder='0' placeholderTextColor={theme === 'dark' ? Colors.dark.placeholder : Colors.light.placeholder} onKeyPress={(e) => handleKeyPress(e,0)} onChangeText={text => handleChange(text,0)} style={[styles.input,{paddingLeft:typo.h3,color:theme === 'dark' ? Colors.light.secondary : Colors.dark.secondary,fontSize:typo.h2}]} />
</View>
<View style={[styles.box,{backgroundColor:theme === 'dark' ? Colors.dark.primary : Colors.light.primary,borderBottomColor:theme === 'dark' ? Colors.light.border : Colors.light.border}]}>
<TextInput value={otp[1]}  ref={ref => {if (ref) inputRefs.current[1] = ref}} placeholder='0' placeholderTextColor={theme === 'dark' ? Colors.dark.placeholder : Colors.light.placeholder} onKeyPress={(e) => handleKeyPress(e,1)} onChangeText={text => handleChange(text,1)} style={[styles.input,{paddingLeft:typo.h3,color:theme === 'dark' ? Colors.light.secondary : Colors.dark.secondary,fontSize:typo.h2}]}/>
</View>
<View style={[styles.box,{backgroundColor:theme === 'dark' ? Colors.dark.primary : Colors.light.primary,borderBottomColor:theme === 'dark' ? Colors.light.border : Colors.light.border}]}>
<TextInput value={otp[2]} ref={ref => {if (ref) inputRefs.current[2] = ref}} placeholder='0' placeholderTextColor={theme === 'dark' ? Colors.dark.placeholder : Colors.light.placeholder} onKeyPress={(e) => handleKeyPress(e,2)} onChangeText={text => handleChange(text,2)} style={[styles.input,{paddingLeft:typo.h3,color:theme === 'dark' ? Colors.light.secondary : Colors.dark.secondary,fontSize:typo.h2}]}/>
</View>
<Octicons name="dash" size={typo.h3} color="#9AA3AF" />
<View style={[styles.box,{backgroundColor:theme === 'dark' ? Colors.dark.primary : Colors.light.primary,borderBottomColor:theme === 'dark' ? Colors.light.border : Colors.light.border}]}>
<TextInput value={otp[3]}  ref={ref => {if (ref) inputRefs.current[3] = ref}} placeholder='0' placeholderTextColor={theme === 'dark' ? Colors.dark.placeholder : Colors.light.placeholder} onKeyPress={(e) => handleKeyPress(e,3)} onChangeText={text => handleChange(text,3)} style={[styles.input,{paddingLeft:typo.h3,color:theme === 'dark' ? Colors.light.secondary : Colors.dark.secondary,fontSize:typo.h2}]}/>
</View>
<View style={[styles.box,{backgroundColor:theme === 'dark' ? Colors.dark.primary : Colors.light.primary,borderBottomColor:theme === 'dark' ? Colors.light.border : Colors.light.border}]}>
<TextInput value={otp[4]}  ref={ref => {if (ref) inputRefs.current[4] = ref}} placeholder='0' placeholderTextColor={theme === 'dark' ? Colors.dark.placeholder : Colors.light.placeholder} onKeyPress={(e) => handleKeyPress(e,4)} onChangeText={text => handleChange(text,4)} style={[styles.input,{paddingLeft:typo.h3,color:theme === 'dark' ? Colors.light.secondary : Colors.dark.secondary,fontSize:typo.h2}]}/>
</View>
<View style={[styles.box,{backgroundColor:theme === 'dark' ? Colors.dark.primary : Colors.light.primary,borderBottomColor:theme === 'dark' ? Colors.light.border : Colors.light.border}]}>
<TextInput value={otp[5]} ref={ref => {if (ref) inputRefs.current[5] = ref}} placeholder='0' placeholderTextColor={theme === 'dark' ? Colors.dark.placeholder : Colors.light.placeholder} onKeyPress={(e) => handleKeyPress(e,5)} onChangeText={text => handleChange(text,5)} style={[styles.input,{paddingLeft:typo.h3,color:theme === 'dark' ? Colors.light.secondary : Colors.dark.secondary,fontSize:typo.h2}]}/>
</View>
</View>

<View style={styles.colii}>
<View style={styles.nest}>
<View style={styles.itema}>
<Text allowFontScaling={false} style={[styles.textii,{fontSize:typo.h4,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>{formatTime(secondsLeft)}</Text>
</View>
{
isloading ? (<View style={[styles.itemb,{columnGap:typo.h6}]}><ActivityIndicator color={theme === 'dark' ? Colors.light.border : Colors.dark.primary} size={typo.h4}/></View>) : (<TouchableOpacity style={[styles.itemb,{columnGap:typo.h6}]}
onPress={() => {

if (!isresend) return
setendTime(0)
setiscdactive(false)
setisloading(true)
resendCode()
}}>
<Text allowFontScaling={false} style={[styles.textii,{fontSize:typo.h4,color:isresend ? (theme === 'dark' ? Colors.light.primary:Colors.dark.base):'grey'}]}>{lingual.resend[lang]}</Text>
<View style={{transform:[{ scaleX: -1 }]}}>
<MaterialCommunityIcons name="refresh" size={typo.h3} color={isresend ? (theme === 'dark' ? Colors.light.primary:Colors.dark.base) : 'grey'} />
</View>
</TouchableOpacity>)
}
</View>
</View>
</View>
)
}

export default CustomOtp





const styles = StyleSheet.create({

container: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'100%',
flexDirection:'column',
},

box: {
justifyContent:'center',
alignItems:'center',
width:'13.8%',
height:'100%',
borderBottomWidth:2,
},

input: {
width:'100%',
height:'100%',
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
},

coli: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'57.4%',
flexDirection:'row',
},


colii: {
justifyContent:'flex-end',
alignItems:'center',
width:'100%',
height:'42.6%',
},


nest: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'60%',
},

itema: {
justifyContent:'center',
alignItems:'center',
width:'13%',
height:'100%',
position:'absolute',
left:0
},

itemb: {
justifyContent:'flex-end',
alignItems:'center',
width:'25%',
height:'100%',
position:'absolute',
right:0,
flexDirection:'row',
},

textii: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
},

})