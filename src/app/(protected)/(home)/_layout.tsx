
import { Stack} from "expo-router";




export default function Layout() {



return <Stack screenOptions={{
headerShown:false,
animation:'fade'
}}>

<Stack.Screen name='index' options={{title:''}} />
<Stack.Screen name='[pagexi]' options={{title:''}} />
<Stack.Screen name='inbox' options={{title:''}} />
</Stack>

}