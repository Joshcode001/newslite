

import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React,{useContext,useEffect} from 'react'
import { useRouter } from 'expo-router';
import { AuthContext } from '@/src/utils/authContext'
import { Image } from 'expo-image';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Colors } from '@/src/utils/color';











const onboardi = () => {

const router = useRouter()
const {WIDTH,HEIGHT,theme} = useContext(AuthContext)






return (
<View style={[styles.container,{width:WIDTH, height:HEIGHT}]}>
<View style={styles.content}>
{
theme === 'dark' ? (<Image source={require('../../../assets/images/content-dark.png')} style={{width:'100%',height:'100%'}}/>) : (<Image source={require('../../../assets/images/content-light.png')} style={{width:'100%',height:'100%'}}/>)
}
<View style={styles.onboard}>
<Text style={[styles.textp,{color:theme === 'dark' ? Colors.light.base : Colors.dark.primary}]}>Understand the world,<Text style={[styles.textp,{color:theme === 'dark' ? Colors.dark.story : Colors.light.story}]}> One story {'\n'}</Text> at a time.</Text>
</View>
</View>
<View style={[styles.footer,{backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>
<View style={styles.footboxa}>
<Text style={[styles.textc,{color: theme === 'dark' ? Colors.light.base : Colors.dark.primary}]}>Access global curated news from every part{'\n'} of the world, Niche down to any local Location</Text>
</View>

<View style={styles.footbox}>
<TouchableOpacity style={styles.itemi} onPress={() => router.push({pathname:'/next'})}>
<Text style={[styles.textii,{color:theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn}]}>Skip</Text>
<FontAwesome name="angle-double-right" size={27} color={theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn} />
</TouchableOpacity>

<View style={styles.itemii}>
<TouchableOpacity style={[styles.button,{backgroundColor:theme === 'dark' ? Colors.dark.Activebtn : Colors.light.Activebtn}]} onPress={() => router.push({pathname:'/onboardii'})}>
<Text style={[styles.textii,{color:Colors.light.primary}]}>Next</Text>
<FontAwesome name="angle-right" size={27} color={Colors.light.primary} />
</TouchableOpacity>
</View>
</View>
</View>
</View>
)
}

export default onboardi





const styles = StyleSheet.create({

container: {
justifyContent:'center',
alignItems:'center',
flex:1,
flexDirection:'column'
},

content: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'76.1%'
},

footer: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'23.9%',

},

onboard: {
justifyContent:'center',
alignItems:'center',
width:'88.1%',
height:'21.7%',
position:'absolute',
top:'75.9%',
left:'7%'
},

textp: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
fontSize:48,
lineHeight:48,
letterSpacing:2
},

textc: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
fontSize:20,
lineHeight:24,
},

footbox: {
justifyContent:'space-between',
alignItems:'center',
width:'88.1%',
height:'19.1%',
position:'absolute',
bottom:'21.5%',
flexDirection:'row',
},

itemi: {
justifyContent:'center',
alignItems:'center',
width:'24%',
height:'100%',
flexDirection:'row',
columnGap:15
},

itemii: {
justifyContent:'center',
alignItems:'center',
width:'24%',
height:'100%',
},

footboxa: {
justifyContent:'center',
alignItems:'flex-start',
width:'88.1%',
height:'23%',
position:'absolute',
top:0,
letterSpacing:2,
},

button: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'95%',
borderRadius:18,
flexDirection:'row',
columnGap:15
},

btn: {

},

textii: {
fontFamily:'CabinetGrotesk-Medium',
fontSize:18,
fontWeight:500,
},



})