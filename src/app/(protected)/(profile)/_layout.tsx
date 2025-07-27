import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Drawer } from 'expo-router/drawer';
import { TouchableOpacity } from 'react-native';
import { ActiveColors } from "@/src/utils/color";
import { AuthContext } from '@/src/utils/authContext';
import { useContext } from 'react';








export default function Layout() {
const {theme} = useContext(AuthContext)


return (
<GestureHandlerRootView style={{ flex: 1 }}>
<Drawer screenOptions={({navigation})=> ({
headerLeft: () => <TouchableOpacity style={{marginLeft:15}} onPress={()=> navigation.toggleDrawer()}>
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
drawerLabel:'Profile',
title:'',
drawerIcon:() => <MaterialIcons name="account-circle" size={21} color="#3a1670" />


}}/>
<Drawer.Screen name='sixth'options={{
drawerLabel:'Settings',
title:'',
drawerIcon:() => <MaterialIcons name="app-settings-alt" size={21} color="#3a1670" />
}}/>
<Drawer.Screen name='seventh'options={{
drawerLabel:'Subscription',
title:'',
drawerIcon:() => <FontAwesome name="credit-card" size={21} color="#3a1670" />
}}/>
<Drawer.Screen name='eighth'options={{
drawerLabel:'Saved',
title:'',
drawerIcon:() => <MaterialIcons name='save' size={21} color="#3a1670" />
}}/>
</Drawer>
</GestureHandlerRootView>
);
}
