

import { Stack} from "expo-router";



export default function Layout() {




return <Stack screenOptions={{
headerShown:false
}}>

<Stack.Screen name='profilepage' options={{title:''}} />
<Stack.Screen name='settings' options={{title:''}} />
<Stack.Screen name='[pagexy]' options={{title:''}} />
</Stack>

}