
import { Tabs,Redirect} from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { AuthContext } from "@/src/utils/authContext";
import { useContext, useState, useEffect} from "react";
import { multilingual } from "@/src/utils/dataset";





type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id";


export default function RootLayout() {

const [lang, setlang] = useState<langt>('en')
const authState = useContext(AuthContext)
const getlang = authState.getlang




useEffect(() => {
if (authState?.appLang) {
getlang(authState.appLang, setlang);
}
}, [authState?.appLang]);



if (!authState.isLoggedIn) {
return <Redirect href='../login'/>
} 




return <Tabs screenOptions={{
tabBarActiveTintColor:'#5a8bed',
tabBarInactiveTintColor: '#C5C5C5',
tabBarStyle:{
backgroundColor:'#010a1c'
}
}}>
<Tabs.Screen name='(home)' options={{
title:'Home',
tabBarLabel:multilingual.Home[lang],
tabBarIcon: ({color}) => <MaterialCommunityIcons name="home" size={24} color={color} />,
headerShown:false,
popToTopOnBlur:true
}}></Tabs.Screen>
<Tabs.Screen  name='(search)' options={{
title:'Search',
tabBarLabel: multilingual.search[lang],
headerShown:false,
popToTopOnBlur:true,
tabBarIcon: ({color}) => <MaterialCommunityIcons name="search-web" size={24} color={color} />
}}></Tabs.Screen>
<Tabs.Screen  name='watch' options={{
headerShown:false,
tabBarLabel: multilingual.Watch[lang],
popToTopOnBlur:true,
tabBarIcon: ({color}) => <Entypo name="folder-video" size={24} color={color} />
}}></Tabs.Screen>
<Tabs.Screen  name='(profile)' options={{
title:'Profile',
tabBarLabel: multilingual.Profile[lang],
headerShown:false,
popToTopOnBlur:true,
tabBarIcon: ({color}) => <MaterialCommunityIcons name="account" size={24} color={color} />
}}></Tabs.Screen>
</Tabs>;
}
