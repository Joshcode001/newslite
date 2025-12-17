

import { View, Text, StyleSheet,TextInput,TouchableOpacity,Keyboard,NativeSyntheticEvent,TextInputKeyPressEventData,ActivityIndicator} from 'react-native'
import React,{useState,useRef,useEffect,useContext} from 'react'
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../utils/authContext';




type props = {
getCode:(id:string) => void,
isReset:boolean,
resendCode:() => Promise<void>
}







const CustomOtp = ({getCode,isReset,resendCode}:props) => {


const {setiscdactive,iscdactive,appStatus} = useContext(AuthContext)
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






return (
<View style={styles.container}>
<View style={styles.coli}>
<View style={styles.box}>
<TextInput value={otp[0]} ref={ref => {if (ref) inputRefs.current[0] = ref}} placeholder='0' placeholderTextColor='#9AA3AF' onKeyPress={(e) => handleKeyPress(e,0)} onChangeText={text => handleChange(text,0)} style={styles.input} />
</View>
<View style={styles.box}>
<TextInput value={otp[1]}  ref={ref => {if (ref) inputRefs.current[1] = ref}} placeholder='0' placeholderTextColor='#9AA3AF' onKeyPress={(e) => handleKeyPress(e,1)} onChangeText={text => handleChange(text,1)} style={styles.input}/>
</View>
<View style={styles.box}>
<TextInput value={otp[2]} ref={ref => {if (ref) inputRefs.current[2] = ref}} placeholder='0' placeholderTextColor='#9AA3AF' onKeyPress={(e) => handleKeyPress(e,2)} onChangeText={text => handleChange(text,2)} style={styles.input}/>
</View>
<Octicons name="dash" size={20} color="#9AA3AF" />
<View style={styles.box}>
<TextInput value={otp[3]}  ref={ref => {if (ref) inputRefs.current[3] = ref}} placeholder='0' placeholderTextColor='#9AA3AF' onKeyPress={(e) => handleKeyPress(e,3)} onChangeText={text => handleChange(text,3)} style={styles.input}/>
</View>
<View style={styles.box}>
<TextInput value={otp[4]}  ref={ref => {if (ref) inputRefs.current[4] = ref}} placeholder='0' placeholderTextColor='#9AA3AF' onKeyPress={(e) => handleKeyPress(e,4)} onChangeText={text => handleChange(text,4)} style={styles.input}/>
</View>
<View style={styles.box}>
<TextInput value={otp[5]} ref={ref => {if (ref) inputRefs.current[5] = ref}} placeholder='0' placeholderTextColor='#9AA3AF' onKeyPress={(e) => handleKeyPress(e,5)} onChangeText={text => handleChange(text,5)} style={styles.input}/>
</View>
</View>

<View style={styles.colii}>
<View style={styles.nest}>
<View style={styles.itema}>
<Text style={[styles.textii,{color:'#424A55'}]}>{formatTime(secondsLeft)}</Text>
</View>
{
isloading ? (<View style={styles.itemb}><ActivityIndicator color='black' size={14}/></View>) : (<TouchableOpacity style={styles.itemb}
onPress={() => {

if (!isresend) return
setendTime(0)
setiscdactive(false)
setisloading(true)
resendCode()
}}>
<Text style={[styles.textii,{color:isresend ? '#1A1D21':'grey'}]}>Resend</Text>
<View style={{transform:[{ scaleX: -1 }]}}>
<MaterialCommunityIcons name="refresh" size={17} color={isresend ? "#424A55" : 'grey'} />
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
backgroundColor:'#FFFFFF',
borderBottomWidth:2,
borderBottomColor:'#CBD2D9'
},

input: {
width:'100%',
height:'100%',
color:'#424A55',
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
fontSize:24,
paddingLeft:22
},

coli: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'57.4%',
flexDirection:'row',
columnGap:10,

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
columnGap:10
},

textii: {
fontFamily:'CabinetGrotesk-Regular',
fontSize:18,
lineHeight:24,
fontWeight:400,
color:'#1A1D21'
},

})