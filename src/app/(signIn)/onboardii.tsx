

import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useContext} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { Image } from 'expo-image';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';






const onboardii = () => {

const router = useRouter()
const {WIDTH,HEIGHT} = useContext(AuthContext)



return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT}]}>
<View style={styles.itemi}>
<Image source={require('../../../assets/images/contentii.png')} style={{width:'100%', height:'100%'}}/>
<View style={styles.onboard}>
<Text style={styles.textp}>Your news.{'\n'}Your language.{'\n'}Your world.</Text>
</View>
</View>
<View style={styles.itemii}>
<View style={styles.boxa}>
<Text style={styles.textc}>Translate , listen and explore global {'\n'}perspectives on news , react , Comment and {'\n'}save to read for later</Text> 
</View>
<View style={styles.footbox}>
<TouchableOpacity style={styles.nesti} onPress={() => router.back()}>
<FontAwesome name="angle-left" size={27} color='#2B47FF' />
<Text style={[styles.textii,{color:'#2B47FF'}]}>Previous</Text>
</TouchableOpacity>

<View style={styles.nestii}>
<TouchableOpacity style={styles.btn} onPress={() => router.push({pathname:'/next'})}>
<Text style={styles.textii}>Sign in</Text>
<FontAwesome name="angle-right" size={27} color="#FFFFFF" />
</TouchableOpacity>
</View>
</View>
</View>
</View>
)
}

export default onboardii








const styles = StyleSheet.create({

container: {
justifyContent:'center',
alignItems:'center',
flex:1,
flexDirection:'column'
},

itemi: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'76.1%',
},

itemii: {
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'23.9%',
backgroundColor:'#F9FAFB'
},

textp: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
fontSize:48,
lineHeight:48,
color:'#2C3239',
letterSpacing:2
},

onboard: {
justifyContent:'center',
alignItems:'flex-start',
width:'88.1%',
height:'21.7%',
position:'absolute',
top:'75.9%',

},

textc: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
fontSize:20,
lineHeight:24,
color:'#2C3239',
},

boxa: {
justifyContent:'center',
alignItems:'flex-start',
width:'88.1%',
height:'34.4%',
position:'absolute',
top:0
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

nesti: {
justifyContent:'center',
alignItems:'center',
width:'31.6%',
height:'100%',
flexDirection:'row',
columnGap:15
},

nestii: {
justifyContent:'center',
alignItems:'center',
width:'27.7%',
height:'100%',
},

btn:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'95%',
borderRadius:18,
backgroundColor:'#2B47FF',
flexDirection:'row',
columnGap:15
},

textii: {
fontFamily:'CabinetGrotesk-Medium',
fontSize:18,
fontWeight:500,
color:'#FFFFFF'
},



})