

import { View, Text ,StyleSheet} from 'react-native'
import React,{ useContext } from 'react'
import { WebView } from 'react-native-webview';
import { AuthContext } from '../utils/authContext';



type view = {
link:string
}


const CusWebView = ({ link }:view) => {

const {WIDTH,HEIGHT} = useContext(AuthContext)

return (
<WebView javaScriptEnabled={true} domStorageEnabled={true} cacheEnabled={false} 
style={[styles.container,{width:WIDTH,height:HEIGHT - 180}]}
onError={(syntheticEvent) => console.error('WebView error:', syntheticEvent.nativeEvent)} source={{ uri:link}} />
)
}

export default CusWebView




const styles = StyleSheet.create({
container:{

flex:1
}
})