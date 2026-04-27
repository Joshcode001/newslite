
import { Stack } from "expo-router";



export default function layout () {


return <Stack screenOptions={{
headerShown:false,
animation:'fade'
}}>
<Stack.Screen name='choice' options={{title:''}} />
<Stack.Screen  name='home' options={{title:''}}/>
<Stack.Screen  name='[pagexx]' options={{title:''}}/>
</Stack>


}