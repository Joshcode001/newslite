
import { View, Text,StyleSheet,TouchableOpacity,ActivityIndicator } from 'react-native'
import React,{useContext,useState,useEffect } from 'react'
import { AuthContext } from '../utils/authContext'
import { Colors } from '../utils/color'
import { typo } from '../utils/typo'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'



type bols = {
show:string,
send:string,
type:string
}



type cat = {
show:string,
send:string
}



type tops = {
setshowModal:React.Dispatch<React.SetStateAction<boolean>>,
setaction:React.Dispatch<React.SetStateAction<string>>,
country:cat,
setgoAuto:React.Dispatch<React.SetStateAction<boolean>>,
setliveArray:React.Dispatch<React.SetStateAction<bols[]>>
liveDynamic:bols
}



const SearchCity = ({setshowModal,setaction,country,setgoAuto,setliveArray,liveDynamic}:tops) => {


const router = useRouter()
const { theme,isloading,setisloading,socket,roomKey,myClient,liveCount,showToast } = useContext(AuthContext)
const [showLoad, setshowLoad] = useState(false)
const [location, setlocation] = useState('null')
const [state,setstate] = useState<cat>({show:'null',send:'null'})
const [city,setcity] = useState<cat>({show:'null',send:'null'})


const placeholderL = theme === 'dark' ? require('../../assets/images/locationdark.png') : 
require('../../assets/images/locationlight.png')



const showCountry = () => {
if(isloading) return 

setaction('showCountryC')
setshowModal(true)
}



const getCity = async () => {


switch (true) {

case (myClient.subCode === 'null'):

const toast = {type:'error',name:myClient.fname,info:'Get Premium to use this Feature',onHide:() => {}, visibilityTime:4000}
showToast(toast)
break;


case (liveCount === 0):

const toastB = {type:'error',name:myClient.fname,info:'Daily Limit Reached,continue tommorow',onHide:() => {}, visibilityTime:4000}
showToast(toastB)
break;


case (myClient.subCode !== 'null' && liveCount > 0):

if (isloading || country.send === 'null' || showLoad) return

setisloading(true)
setshowLoad(true)

const data = { country:country.send.toLowerCase(),state:state.send.toLowerCase(),rkey:roomKey}
await socket.emit('getLocation',data)


}

}




useEffect(() => {

switch (true) {

case (country.show !== 'null' && state.show === 'null') :
setlocation(country.show)
break;


case (state.show !== 'null' && city.show === 'null') :
setlocation(state.show)
break;


case (city.show !== 'null') :
setlocation(city.show)
break;

}

},[country,state,city])



useEffect(() => {

if (liveDynamic.send === 'null') return

switch (true) {

case (liveDynamic.type === 'state'):
setstate({show:liveDynamic.show,send:liveDynamic.send})
const data = { country:country.send,state:liveDynamic.send,rkey:roomKey}
socket.emit('getLocation',data)
break;



case (liveDynamic.type === 'city'):
setcity({show:liveDynamic.show,send:liveDynamic.send})
setgoAuto(false)
const dataZ = { country:country.show.toLowerCase(),state:state.send.toLowerCase(),city:liveDynamic.send.toLowerCase(),rkey:roomKey,userId:myClient.uname}
socket.emit('SearchRegion',dataZ)


break;



}

},[liveDynamic])





useEffect(() => {

socket.on('statesIn',(data:any) => {

setaction('statesIn')
setgoAuto(true)
setliveArray(data.list)
setshowModal(true)
})


socket.on('citiesIn',(data:any) => {

setaction('citiesIn')
setgoAuto(true)
setliveArray(data.list)
setshowModal(true)
})


},[socket])




return (
<View style={styles.container}>

<View style={styles.capi}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.primary : 
Colors.dark.base}]}>Search by City</Text>
</View>

<View style={styles.capii}>
<View style={styles.poda}>

<View style={styles.rola}>
<Image source={placeholderL} style={{width:'60%',height:'65%'}} contentFit='contain'/>
</View>

<View style={styles.rolb}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h4,color:theme === 'dark' ? Colors.light.primary : 
Colors.dark.base}]}>
Location</Text>
</View>

</View>

<TouchableOpacity onPress={showCountry} style={[styles.podb,{borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>

<View style={styles.rolla}>
<Text allowFontScaling={false} style={[styles.textR400,{fontSize:typo.h4,color:theme === 'dark' ? Colors.dark.faintText : 
Colors.light.faintText}]}>{location === 'null' ? 'Select Country' : location}</Text>
</View>

<View style={styles.rollb}>
<MaterialIcons name="keyboard-arrow-down" size={26} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</View>

</TouchableOpacity>
</View>

<View style={styles.capiii}>
<TouchableOpacity onPress={getCity}
style={[styles.button,{borderRadius:typo.h5,backgroundColor:theme === 'dark' ? Colors.dark.Activebtn :
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

export default SearchCity








const styles = StyleSheet.create({
container:{
width:'100%',
height:'100%',
justifyContent:'center',
alignItems:'center',
flexDirection:'column'
},



capi:{
width:'90%',
height:'19%',
justifyContent:'flex-end',
alignItems:'flex-start',

},

capii:{
width:'90%',
height:'51%',
justifyContent:'center',
alignItems:'center',

},


capiii:{
width:'90%',
height:'30%',
justifyContent:'center',
alignItems:'flex-end',
},

rola:{
width:'8%',
height:'100%',
justifyContent:'flex-end',
alignItems:'flex-start',
},


rolb:{
width:'92%',
height:'100%',
justifyContent:'flex-end',
alignItems:'flex-start',
},

rolla:{
width:'80%',
height:'90%',
justifyContent:'center',
alignItems:'flex-start',
paddingLeft:5
},

rollb:{
width:'20%',
height:'90%',
justifyContent:'center',
alignItems:'flex-end',
},

button:{
width:'30%',
height:'70%',
justifyContent:'center',
alignItems:'center',
},
poda:{
width:'100%',
height:'50%',
justifyContent:'center',
alignItems:'center',
flexDirection:'row'
},


podb:{
width:'100%',
height:'50%',
justifyContent:'center',
alignItems:'center',
borderBottomWidth:2,
flexDirection:'row'
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