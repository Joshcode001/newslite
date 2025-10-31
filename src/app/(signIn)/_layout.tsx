
import { Stack } from "expo-router";



export default function Rootlayout () {


return <Stack screenOptions={{
headerShown:false
}}>
<Stack.Screen name='lang' options={{title:''}} />
<Stack.Screen name='onboardi' options={{title:''}} />
<Stack.Screen  name='onboardii' options={{title:''}}/>
<Stack.Screen name='next' options={{title:''}} />
</Stack>


}