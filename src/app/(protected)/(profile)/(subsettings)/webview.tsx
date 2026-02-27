

import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import React,{useEffect,useContext,useMemo,useRef} from 'react';
import { useLocalSearchParams } from 'expo-router';
import Constants from 'expo-constants';
import { useRouter } from 'expo-router';
import { AuthContext } from '@/src/utils/authContext';




export default function Web() {

const hasHandledLoad = useRef(false);
const router = useRouter()
const { socket,setmyClient,myClient} = useContext(AuthContext)
const { url } = useLocalSearchParams()
let link = ''

if (typeof url === 'string') {
link = url
}




const source = useMemo(() => ({ uri: link }), [link]);





useEffect(() => {

socket.on('activeY', (data:any) => {

setmyClient({
...myClient,
history:[{ paidAt:data.paidAt,amount:data.amount,subCode:data.subCode }],
subCode:data.subCode
})

router.replace({pathname:'/(protected)/(profile)/profilepage'})

})

},[socket])




return (
<WebView 
style={styles.container}
source={source}
javaScriptEnabled={true}
domStorageEnabled={true}
onError={(syntheticEvent) => console.error('WebView error:', syntheticEvent.nativeEvent)}
cacheEnabled={false}
onNavigationStateChange={(nav:any) => {


if (nav.url === 'https://api.newsworldapp.org/data' && !hasHandledLoad.current) {

hasHandledLoad.current = true

router.replace({ pathname:'/(protected)/(profile)/profilepage' })

}
}}


/>
);
}







const styles = StyleSheet.create({
container: {
flex: 1,
marginTop: Constants.statusBarHeight,
},
});