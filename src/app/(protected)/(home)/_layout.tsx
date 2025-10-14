import { Stack} from "expo-router";
import { useContext } from "react";
import { AuthContext } from "@/src/utils/authContext";
import { ActiveColors } from "@/src/utils/color";


export default function RootLayout() {

const {theme} = useContext(AuthContext)



return <Stack screenOptions={{
headerStyle:{
backgroundColor:theme === 'dark' ? ActiveColors.dark.hgreen : ActiveColors.light.hgreen
}
}}>
<Stack.Screen name='index' options={{
title:'Home'
}}></Stack.Screen>
<Stack.Screen name='page/[page]' options={{
title:'page b'
}}></Stack.Screen>
<Stack.Screen name='[category]' options={{
title:'Page C'
}}></Stack.Screen>
<Stack.Screen name="pagec/[page]" options={{
title:''
}}></Stack.Screen>
<Stack.Screen name="disktwo/[pageii]" options={{
title:''
}}></Stack.Screen>

</Stack>

}