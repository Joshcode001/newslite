

import { View, Text,StyleSheet ,Pressable} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { TabTriggerSlotProps } from 'expo-router/ui';
import { Image } from 'expo-image';
import { Colors } from '../utils/color';
import { AuthContext } from '../utils/authContext';
import { useContext} from 'react';
import { typo } from '../utils/typo';
import AppIcon from './AppIcons';
import { iconName } from './AppIcons';



type tabbuton = TabTriggerSlotProps & {
name:string,
icon:"home"|"search"|"watch",
isprofile?:boolean
}


type iconObj = {
home:iconName,
search:iconName,
watch:iconName
}





const CusButton = ({isprofile,icon,name,isFocused,...props}:tabbuton )=> {

const {theme,myClient,shouldntDisplay,WIDTH} = useContext(AuthContext)




const placeholder = theme === 'dark' ? 'profiledark' : 'profilelight'



const iconObj:iconObj = {
home:theme === 'dark' ? 'homedark' : 'homelight',
search:theme === 'dark' ? 'homesearchdark' : 'homesearchlight',
watch:theme === 'dark' ? 'watchdark' : 'watchlight'
}







return (
<Pressable onPress={() => shouldntDisplay.value = false} {...props} style={[styles.box,isFocused && {width:'35%',backgroundColor:theme === 'dark' ? Colors.dark.primary : Colors.light.inappbutn},{borderRadius:typo.h4,padding:typo.h8}]}>
<View style={styles.itema}>
{
isprofile === true ? ( myClient.image === 'null' ?

<AppIcon name={placeholder} size={typo.h1_8}/> :

<Image source={myClient.image} 
style={[styles.image2,{width:WIDTH > 500 ? (isFocused ? "45%":"55%") : (isFocused ? "70%":"100%")}]} />

) 
: 
(<AppIcon name={iconObj[icon]} size={iconObj[icon] === iconObj.home && theme === 'dark' ? typo.h50 : typo.h1_8} />)
}
</View>
<View style={[styles.itemb,{display:isFocused ? 'flex' :'none'}]}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.primary : Colors.light.Activebtn,fontSize:typo.h4}]}>{name}</Text>
</View>
</Pressable>
)
}

export default CusButton




const styles = StyleSheet.create({
box:{
justifyContent:'center',
alignItems:'center',
flexDirection:'row',
width:'20%',
height:'50%',
},


itema:{
justifyContent:'center',
alignItems:'center',
width:'35%',
height:'100%',
},

itemb:{
justifyContent:'center',
alignItems:'flex-start',
width:'65%',
height:'100%',
},



image2: {
aspectRatio:1,
borderRadius:9999,
overflow:'hidden'
},


textB700: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:700,
},


})