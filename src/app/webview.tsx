

import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import React,{useEffect,useContext} from 'react';
import { useLocalSearchParams } from 'expo-router';
import Constants from 'expo-constants';
import { useRouter } from 'expo-router';
import { AuthContext } from '../utils/authContext';




export default function Web() {


const router = useRouter()
const {socket} = useContext(AuthContext)
const {url} = useLocalSearchParams()
let link = ''

if (typeof url === 'string') {
link = url
}



// useEffect(() => {

// socket.on('verify', (data:any) => {

// if (data.isVerify === true) {

// setTimeout(() => {router.push({pathname:'/(protected)/(profile)/seventh'})},2000)
// }

// })

// },[socket])




return (
<WebView 
style={styles.container}
source={{uri:link}}
javaScriptEnabled={true}
domStorageEnabled={true}
onLoadStart={() => console.log('Loading started')}
onLoadEnd={() => console.log('Loading ended')}
onError={(syntheticEvent) => console.error('WebView error:', syntheticEvent.nativeEvent)}
cacheEnabled={false}
// onNavigationStateChange={(nav) => {
// if (nav.url === 'https://1add63c82721.ngrok-free.app/data/initdata') {

// router.push({pathname:'/(protected)/(profile)/seventh'})
// }
// }}


/>
);
}







const styles = StyleSheet.create({
container: {
flex: 1,
marginTop: Constants.statusBarHeight,
},
});