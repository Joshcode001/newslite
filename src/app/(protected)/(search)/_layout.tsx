import React from 'react'
import { Stack } from 'expo-router'
import { useContext } from "react";
import { AuthContext } from "@/src/utils/authContext";
import { ActiveColors } from "@/src/utils/color";






export default function RootLayout() {

const {theme} = useContext(AuthContext)


return <Stack screenOptions={{
headerShown:false,
animation:'none',
}}>
<Stack.Screen  name='second' options={{
title:''
}}/>
<Stack.Screen  name='[paged]' options={{
title:'' }}/>
<Stack.Screen  name='quick/[name]' options={{
title:''
}}/>
<Stack.Screen  name='delay/[pagef]' options={{
title:''
}}/>
<Stack.Screen name="petailx/[pagex]" options={{
title:'',
headerShown:true,
headerStyle:{
backgroundColor:theme === 'dark' ? ActiveColors.dark.hgreen : ActiveColors.light.hgreen
}
}}/>
</Stack>
}