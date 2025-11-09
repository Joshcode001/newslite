
import { View, Text, StyleSheet,TextInput,TouchableOpacity,Keyboard,NativeSyntheticEvent,TextInputKeyPressEventData } from 'react-native'
import React,{useState,useRef} from 'react'
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';





type props = {
getCode:(id:string) => void
}







const CustomOtp = ({getCode}:props) => {

const inputRefs = useRef<TextInput[]>([])
const [otp,setOtp] = useState(["","","","","",""])






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
<Text style={[styles.textii,{color:'#424A55'}]}>05:00</Text>
</View>
<TouchableOpacity style={styles.itemb}>
<Text style={styles.textii}>Resend</Text>
<View style={{transform:[{ scaleX: -1 }]}}>
<MaterialCommunityIcons name="refresh" size={17} color="#424A55" />
</View>
</TouchableOpacity>
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