

import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import React,{useEffect,useContext,useMemo,useRef,useState} from 'react';
import { useLocalSearchParams } from 'expo-router';
import Constants from 'expo-constants';
import { useRouter } from 'expo-router';
import { AuthContext } from '@/src/utils/authContext';
import { lingual } from '@/src/utils/dataset';


type obj = {
subCode:string,
paidAt:string,
amount:number
}


type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";





export default function Web() {

const hasHandledLoad = useRef(false);
const router = useRouter()
const { socket,setmyClient,myClient,showToast,getlang,appLang } = useContext(AuthContext)
const { url } = useLocalSearchParams()
const [isResult,setisResult] = useState(false)
const [Data,setData] = useState<obj>({ subCode:"null",paidAt:"null",amount:0})
const [lang, setlang] = useState<langt>('en')

let link = ''

if (typeof url === 'string') {
link = url
}


const source = useMemo(() => ({ uri: link }), [link]);



useEffect(() => {

const activeHandler = (data:any) => {

setData({ paidAt:data.paidAt,amount:data.amount,subCode:data.subCode })
setisResult(true)
const toast = {type:'customSuccess',name:myClient.fname,info:lingual.partOfPremium[lang],onHide:() => {}, visibilityTime:6000}
showToast(toast)
router.replace({pathname:'/(protected)/(profile)/profilepage'})

}

socket.on('activeY', activeHandler)



return () => {
socket.off('activeY',activeHandler)
}


},[socket])




useEffect(() => {

if (isResult === true) {

setmyClient(prev => ({...prev,history:[{ paidAt:Data.paidAt,amount:Data.amount,subCode:Data.subCode }],subCode:Data.subCode}))

}

},[isResult])




useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])


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