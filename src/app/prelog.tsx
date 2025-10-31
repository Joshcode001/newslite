

import { View, Text, StyleSheet } from 'react-native'
import React,{useContext,useEffect} from 'react'
import { AuthContext } from '../utils/authContext'
import { useRouter } from 'expo-router'












const prelog = () => {

const router = useRouter()
const {socket,webtoken,setmyClient,LogIn,iswaiting,iswaitingL,setsessionID,sessionID,isConnected} = useContext(AuthContext)







useEffect(() => {

if (webtoken !== '' && isConnected) {

socket.auth = {email:webtoken}
socket.connect()
} 


if (iswaiting === false && isConnected)  {

if (webtoken === '') {

router.push({pathname:'./lang'})
}
}

},[webtoken,iswaiting])




useEffect(() => {

socket.on('session', (data:any)=> {

setsessionID(data.sessionID)


setmyClient({
fname:data.fname,
lname: data.lname,
uname: data.uname,
dob: data.dob,
email:data.email,
gender:data.gender,
image:data.image
})



})

},[socket])



useEffect(() => {

if ((iswaitingL === false && webtoken !== '') && (sessionID !== '' && isConnected)) {
LogIn()
}

},[iswaitingL,sessionID])






return (

<View style={styles.container}>

</View>
)
}

export default prelog




const styles = StyleSheet.create({
container: {
backgroundColor:'white',
width:'100%',
height:'100%'
}
})