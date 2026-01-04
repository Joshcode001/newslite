

import { Stack } from "expo-router";
import React from 'react'
import { AuthProvider } from "../utils/authContext";
import Toast,{BaseToast,ErrorToast} from 'react-native-toast-message';
import { KeyboardProvider } from "react-native-keyboard-controller";







const Config = {
success: (props: any) => (
<BaseToast
{...props}
style={{
borderLeftColor: '#1DA1F2',
backgroundColor: '#1C1C1E',
borderRadius: 12,
marginHorizontal: 16,
paddingVertical: 8,
}}
contentContainerStyle={{ paddingHorizontal: 15 }}
text1Style={{
color:'#FF5E3A' ,
fontSize: 22,
fontWeight: '500',
fontFamily:'CabinetGrotesk-Bold'
}}
text2Style={{
color: 'azure',
fontSize: 24,
marginTop: 2,
fontWeight: '400',
fontFamily:'CabinetGrotesk-Regular'
}}
/>
),

error: (props: any) => (
<ErrorToast
{...props}
style={{
borderLeftColor: 'red',
backgroundColor: '#1C1C1E',
borderRadius: 12,
marginHorizontal: 16,
paddingVertical: 8,
}}
contentContainerStyle={{ paddingHorizontal: 15 }}
text1Style={{
color:'#FF5E3A',
fontSize: 27,
fontWeight: '500',
fontFamily:'CabinetGrotesk-Bold'
}}
text2Style={{
color: 'azure',
fontSize: 25,
marginTop: 2,
fontWeight: '400',
fontFamily:'CabinetGrotesk-Regular'
}}
/>
),

};





export default function RootLayout() {



return <AuthProvider>
<KeyboardProvider>
<Stack screenOptions={{
headerShown:false,
animation:'none'
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

</Stack>
<Toast config={Config} position="top" topOffset={60}/>
</KeyboardProvider>
</AuthProvider>
}

