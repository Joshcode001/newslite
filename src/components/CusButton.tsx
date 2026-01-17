

import { View, Text,StyleSheet ,Pressable} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { TabTriggerSlotProps } from 'expo-router/ui';
import { Image } from 'expo-image';
import { Colors } from '../utils/color';
import { AuthContext } from '../utils/authContext';
import { useContext } from 'react';
import { typo } from '../utils/typo';





type tabbuton = TabTriggerSlotProps & {
name:string,
icon?:"newspaper-outline"|"search-outline"|"tv-outline",
isprofile?:boolean
}






const CusButton = ({isprofile,icon,name,isFocused,...props}:tabbuton )=> {

const {theme} = useContext(AuthContext)







return (
<Pressable {...props} style={[styles.box,isFocused && {width:'35%',backgroundColor:theme === 'dark' ? Colors.dark.inappbutn : Colors.light.inappbutn},{borderRadius:typo.h2,padding:typo.h8}]}>
<View style={styles.itema}>
{
isprofile === true  ? (theme === 'dark' ? <Image source={require('../../assets/images/usericondark.png')}  style={[styles.image, isFocused && {width:'68%',height:'76%'}]}/> : <Image source={require('../../assets/images/usericonlight.png')}  style={[styles.image, isFocused && {width:'68%',height:'76%'}]}/>) :(<Ionicons name={icon} size={22} color={theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn} />)
}
</View>
<View style={[styles.itemb,{display:isFocused ? 'flex' :'none'}]}>
<Text style={[styles.textB700,{color:theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn,fontSize:typo.h3}]}>{name}</Text>
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
height:'100%',
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


image:{
width:'100%',
height:'60%'
},



textB700: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:700,
},


})