

import { Stack } from "expo-router";
import React from 'react'
import { AuthProvider } from "../utils/authContext";
import Toast,{BaseToast,ErrorToast} from 'react-native-toast-message';
import { KeyboardProvider } from "react-native-keyboard-controller";
import CusToast from "../components/CusToast";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';






const Config = {

customSuccess:({text1,props}:any) => (
<CusToast type="success" title={text1} body={props.body} />
),


customError:({text1,props}:any) => (
<CusToast type="error" title={text1} body={props.body} />
)


};





export default function RootLayout() {



return <AuthProvider>
<KeyboardProvider>
<SafeAreaProvider>
<StatusBar style="auto" /> 
<Stack screenOptions={{
headerShown:false,
animation:'fade'
}}>
<Stack.Screen name='prelog' options={{
title:''
}}/>
<Stack.Screen name= '(signIn)' options={{
title:''
}} />

<Stack.Screen  name= '(protected)' options={{
title:''
}}/>

<Stack.Screen  name= '[...unmatched]' options={{
title:''
}}/>



</Stack>
<Toast config={Config} position="top" topOffset={60}/>
</SafeAreaProvider>
</KeyboardProvider>
</AuthProvider>

}

