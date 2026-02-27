

import { View, Text, StyleSheet } from 'react-native'
import React,{useContext,useEffect} from 'react'
import { AuthContext } from '../utils/authContext'
import { useRouter } from 'expo-router'
import Cusloader from '../components/Cusloader'
import { Colors } from '../utils/color'










const prelog = () => {

const router = useRouter()
const { socket,webtoken,setmyClient,iswaitingSession,isConnected,theme,WIDTH,HEIGHT,enableLocation,locationP,roomKey } = useContext(AuthContext)









useEffect(() => {

if (webtoken !== '' && isConnected) {

enableLocation()
} 

},[webtoken,isConnected])



useEffect(() => {
if (iswaitingSession === false && isConnected)  {

if (webtoken === '') {

router.push({ pathname:'/(signIn)/lang' })
}
}
},[iswaitingSession,isConnected])




useEffect(() => { 

socket.on('gateway', (data:any)=> {


if (data.message) {
setmyClient({
fname:data.client.fname,
lname:data.client.lname, 
email:data.client.email, 
dob:data.client.dob, 
uname:data.client.uname, 
gender:data.client.gender,
image:data.client.image,
comments:data.client.comments,
reactions:data.client.reactions,
saved:data.client.saved,
history:data.client.history,
subCode:data.client.subCode
})

}else if (!data.message) {

router.push({ pathname:'/(signIn)/lang' })
}

})

},[socket])



useEffect(() => {

if (locationP.country !== '' && webtoken !== '') {

socket.connect()

const data = { email:webtoken,rkey:roomKey,country:locationP.country }

socket.emit("backdoor",data)
}
},[locationP,webtoken])



return (

<View style={[styles.container,{width:WIDTH, height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>
<Cusloader top={( HEIGHT / 2) - 50 } />
</View>
)
}

export default prelog




const styles = StyleSheet.create({
container: {
justifyContent:'center',
alignItems:'center',
flex:1
}
})