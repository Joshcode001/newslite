import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Drawer } from 'expo-router/drawer';
import { TouchableOpacity } from 'react-native';
import { ActiveColors } from "@/src/utils/color";
import { AuthContext } from '@/src/utils/authContext';
import { useContext, useEffect, useState} from 'react';
import { multilingual } from '@/src/utils/dataset';






type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id";


export default function Layout() {

const [lang, setlang] = useState<langt>('en')
const {theme,appLang,getlang} = useContext(AuthContext)




useEffect(() => {

getlang(appLang,setlang)

},[appLang])



return (
<GestureHandlerRootView style={{ flex: 1 }}>
<Drawer screenOptions={({navigation})=> ({
headerLeft: () => 
<TouchableOpacity style={{marginLeft:15}} onPress={()=> navigation.toggleDrawer()}>
<MaterialIcons name="settings-suggest" size={29} color="#ebebed" />
</TouchableOpacity> ,
drawerHideStatusBarOnOpen:true,
drawerStatusBarAnimation:'slide',
drawerActiveTintColor:theme === 'dark' ? ActiveColors.light.primary : ActiveColors.dark.dblue,
drawerStyle:{
width: 300,
backgroundColor:theme === 'dark' ? ActiveColors.dark.secondary : ActiveColors.light.tertiary
},
headerStyle:{
backgroundColor: theme === 'dark' ? ActiveColors.dark.ablue : ActiveColors.light.ablue
},
drawerActiveBackgroundColor:theme === 'dark' ? ActiveColors.dark.sgreen : ActiveColors.light.sgreen
})}>
<Drawer.Screen name='fourth' options={{
drawerLabel:multilingual.Profile[lang],
title:'',
drawerIcon:() => <MaterialIcons name="account-circle" size={21} color="#3a1670" />


}}/>
<Drawer.Screen name='sixth'options={{
drawerLabel:multilingual.Settings[lang],
title:'',
drawerIcon:() => <MaterialIcons name="app-settings-alt" size={21} color="#3a1670" />
}}/>
<Drawer.Screen name='seventh'options={{
drawerLabel:multilingual.Subscription[lang],
title:'',
drawerIcon:() => <FontAwesome name="credit-card" size={21} color="#3a1670" />
}}/>
<Drawer.Screen name='eighth'options={{
drawerLabel:multilingual.PrivacyPolicy[lang],
title:'',
drawerIcon:() => <MaterialIcons name='info-outline' size={21} color="#3a1670" />
}}/>
<Drawer.Screen name='ninth'options={{
drawerLabel:multilingual.ContactSupport[lang],
title:'',
drawerIcon:() => <MaterialIcons name='contact-support' size={21} color="#3a1670" />
}}/>
</Drawer>
</GestureHandlerRootView>
);
}
