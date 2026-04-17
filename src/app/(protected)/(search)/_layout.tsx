
import { Stack } from 'expo-router'






export default function Layout() {



return <Stack screenOptions={{
headerShown:false,
animation:'fade'
}}>

<Stack.Screen  name='searchpage' options={{title:''}}/>
<Stack.Screen  name='second' options={{title:''}}/>
<Stack.Screen  name='[pagez]' options={{title:''}}/>
</Stack>
}