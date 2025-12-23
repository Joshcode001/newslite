
import { Stack } from "expo-router";



export default function Rootlayout () {


return <Stack screenOptions={{
headerShown:false
}}>
<Stack.Screen name='lang' options={{title:''}} />
<Stack.Screen name='onboardi' options={{title:''}} />
<Stack.Screen  name='onboardii' options={{title:''}}/>
<Stack.Screen  name='forgotpass' options={{title:''}}/>
<Stack.Screen  name='newpass' options={{title:''}}/>
<Stack.Screen  name='newuser' options={{title:''}}/>
<Stack.Screen name='next' options={{title:''}} />
<Stack.Screen name='profile' options={{title:''}} />
<Stack.Screen name='sign' options={{title:''}} />
<Stack.Screen name='verifymail' options={{title:''}} />
</Stack>


}