

import { Stack } from "expo-router";
import React from 'react'
import { AuthProvider } from "../utils/authContext";

export default function RootLayout() {
return <AuthProvider>
<Stack screenOptions={{
headerShown:false,
animation:'none'
}}>
<Stack.Screen name='prelog' options={{
title:''
}}/>
<Stack.Screen name='login' options={{
title:''
}}/>
<Stack.Screen  name= '(protected)' options={{
title:''
}}/>
<Stack.Screen name='signup' options={{
title:''
}}/>
<Stack.Screen name='forgot' options={{
title:''
}}/>
</Stack>
</AuthProvider>
}

