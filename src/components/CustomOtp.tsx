

import { View, Text, StyleSheet,TextInput,TouchableOpacity,NativeSyntheticEvent,TextInputKeyPressEventData,ActivityIndicator} from 'react-native'
import React,{useState,useRef,useEffect,useContext} from 'react'
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../utils/authContext';
import { Colors } from '../utils/color';
import { lingual } from '../utils/dataset';
import { typo } from '../utils/typo';
import AppIcon from './AppIcons';



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
const [secondsLeft,setsecondsLeft] = useState(300)
const [endTime, setendTime] = useState(0)




const placeholderR = theme === 'dark' ? 'rotatedark' : 'rotatelight'




const handleChange = (text:string,index:number) => {

if (text === '') {
const newOtp = [...otp]
newOtp[index] = text

setOtp(newOtp)

}

if (text.length > 6)return

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

let interval = 0;

if (iscdactive) {
setisloading(false);
setisresend(false);

const target = Date.now() + 300 * 1000;
setendTime(target);

interval = window.setInterval(() => {
const now = Date.now();
const remaining = Math.round((target - now) / 1000);

if (remaining <= 0) {
window.clearInterval(interval);
setsecondsLeft(0);
setisresend(true);
} else {
setsecondsLeft(remaining);
}
}, 1000);
} else {

setsecondsLeft(300);
if (interval) window.clearInterval(interval);
}

return () => {
if (interval) clearInterval(interval);
};
}, [iscdactive]);




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

<View style={styles.boxz}>
<Text allowFontScaling={false} style={[styles.textii,{fontSize:typo.h4,color:isresend ? (theme === 'dark' ? Colors.light.primary:Colors.dark.base):'grey'}]}>{lingual.resend[lang]}</Text>
</View>

<View style={[styles.boxq,]}>
<AppIcon name={placeholderR} size={15} />
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
width:'95%',
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
justifyContent:'space-between',
alignItems:'center',
width:'100%',
height:'60%',
flexDirection:'row'
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
width:'45%',
height:'100%',
position:'absolute',
right:0,
flexDirection:'row',
},

boxq:{
width:'10%',
height:'100%',
justifyContent:'center',
alignItems:'flex-end'
},

boxz:{
width:'90%',
height:'100%',
justifyContent:'center',
alignItems:'flex-end'
},


textii: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
},

})