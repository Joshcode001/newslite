

import { Stack} from "expo-router";



export default function Layout() {




return <Stack screenOptions={{
headerShown:false
}}>

<Stack.Screen name='profilepage' options={{title:''}} />
<Stack.Screen name='settings' options={{title:''}} />
<Stack.Screen name='[pagexy]' options={{title:''}} />
<Stack.Screen name='(subsettings)/account' options={{title:''}} />
<Stack.Screen name='(subsettings)/artificial' options={{title:''}} />
<Stack.Screen name='(subsettings)/billing' options={{title:''}} />
<Stack.Screen name='(subsettings)/language' options={{title:''}} />
<Stack.Screen name='(subsettings)/notify' options={{title:''}} />
<Stack.Screen name='(subsettings)/privacy' options={{title:''}} />
<Stack.Screen name='(subsettings)/support' options={{title:''}} />
<Stack.Screen name='(subsettings)/theme' options={{title:''}} />
<Stack.Screen name='(subsettings)/policy' options={{title:''}} />
<Stack.Screen name='(subsettings)/changepass' options={{title:''}} />
<Stack.Screen name='(subsettings)/deletey' options={{title:''}} />
<Stack.Screen name='(subsettings)/deletez' options={{title:''}} />
</Stack>

}