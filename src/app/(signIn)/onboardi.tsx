

import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React,{useContext,useEffect} from 'react'
import { useRouter } from 'expo-router';
import { AuthContext } from '@/src/utils/authContext'
import { Image } from 'expo-image';
import FontAwesome from '@expo/vector-icons/FontAwesome';












const onboardi = () => {

const router = useRouter()
const {WIDTH,HEIGHT} = useContext(AuthContext)






return (
<View style={[styles.container,{width:WIDTH, height:HEIGHT}]}>
<View style={styles.content}>
<Image source={require('../../../assets/images/Content.png')} style={{width:'100%',height:'100%'}}/>
<View style={styles.onboard}>
<Text style={styles.textp}>Understand the world,<Text style={[styles.textp,{color:'#B93F27'}]}> One story {'\n'}</Text> at a time.</Text>
</View>
</View>
<View style={styles.footer}>
<View style={styles.footboxa}>
<Text style={styles.textc}>Access global curated news from every part{'\n'} of the world, Niche down to any local Location</Text>
</View>

<View style={styles.footbox}>
<TouchableOpacity style={styles.itemi} onPress={() => router.push({pathname:'/next'})}>
<Text style={[styles.textii,{color:'#2B47FF'}]}>Skip</Text>
<FontAwesome name="angle-double-right" size={27} color='#2B47FF' />
</TouchableOpacity>

<View style={styles.itemii}>
<TouchableOpacity style={styles.button} onPress={() => router.push({pathname:'/onboardii'})}>
<Text style={styles.textii}>Next</Text>
<FontAwesome name="angle-right" size={27} color="#FFFFFF" />
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
backgroundColor:'#F9FAFB',

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
color:'#2C3239',
letterSpacing:2
},

textc: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
fontSize:20,
lineHeight:24,
color:'#2C3239',
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
backgroundColor:'#2B47FF',
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
color:'#FFFFFF'
},



})