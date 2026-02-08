

import { View, Text ,StyleSheet} from 'react-native'
import {Redirect} from "expo-router";
import { AuthContext } from "@/src/utils/authContext";
import { useContext, useState, useEffect} from "react";
import {lingual } from "@/src/utils/dataset";
import { Tabs, TabList, TabTrigger, TabSlot } from 'expo-router/ui';
import Custab from '@/src/components/Custab';




type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";






export default function RootLayout() {

const [lang, setlang] = useState<langt>('en')
const authState = useContext(AuthContext)
const getlang = authState.getlang




useEffect(() => {
if (authState?.appLang) {
getlang(authState.appLang.value, setlang);
}
}, [authState?.appLang]);



if (!authState.isLoggedIn) {
return <Redirect href='../prelog'/>
} 




return <Tabs>
<TabSlot />
<Custab />
<TabList style={styles.tabList}>
<TabTrigger name='(home)' href="/(protected)/(home)"/>
<TabTrigger name='(search)' href="/(protected)/(search)/searchpage"/>
<TabTrigger name='watch' href="/(protected)/watch"/>
<TabTrigger name='(profile)' href="/(protected)/(profile)/profilepage"/>
</TabList>
</Tabs>
}








const styles = StyleSheet.create({
tabList: {
display: "none",

},



});