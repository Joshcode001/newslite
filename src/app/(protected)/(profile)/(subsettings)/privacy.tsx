

import { View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import React,{useContext} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { Colors } from '@/src/utils/color'
import { useRouter } from 'expo-router'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { typo } from '@/src/utils/typo'
import { Image } from 'expo-image'
import Octicons from '@expo/vector-icons/Octicons';





const privacy = () => {

const router = useRouter()
const { theme,WIDTH,HEIGHT} = useContext(AuthContext)



return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>

<View style={styles.cupA}></View>

<View style={[styles.cupB,{rowGap:typo.h1_5}]}>

<View style={styles.colA}>
<TouchableOpacity onPress={() => router.back()} style={styles.rolA}>
<EvilIcons name="chevron-left" size={typo.h1_2} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</TouchableOpacity>

<View style={styles.rolB}>

<View style={styles.sideA}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h1_8,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>Settings</Text>
</View>

<View style={styles.sideB}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>Privacy & Data</Text>
</View>

</View>
</View>

<View style={[styles.colB,{rowGap:typo.h2}]}>

<View style={styles.boxab}>

<View style={styles.coola}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>Terms of Service</Text>
</View>

<View style={styles.coolb}>
<TouchableOpacity onPress={() =>router.push({pathname:'/(protected)/(profile)/(subsettings)/policy'})} 
style={[styles.displayI,{borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border,
backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderWidth:1,borderRadius:typo.h5,
paddingLeft:typo.h6}]}>

<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h4,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>Privacy Policy</Text>

</TouchableOpacity>
</View>

</View>


<View style={styles.boxab}>

<View style={styles.coola}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>Security</Text>
</View>

<View style={styles.coolb}>
<TouchableOpacity onPress={() =>router.push({pathname:'/(protected)/(profile)/(subsettings)/changepass'})} style={[styles.displayII,{borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border,
backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderWidth:1,borderRadius:typo.h5}]}>


<View style={styles.reela}>
<Octicons name="key" size={typo.h3} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon}  />
</View>

<View style={styles.reelb}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h4,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>Change Password</Text>
</View>

</TouchableOpacity>
</View>

</View>



<View style={styles.boxab}>

<View style={styles.coola}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>Data Control</Text>
</View>

<View style={styles.coolb}>
<TouchableOpacity onPress={() => router.push({pathname:'/(protected)/(profile)/(subsettings)/deletey'})} style={[styles.displayII,{borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border,
backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderWidth:1,borderRadius:typo.h5}]}>


<View style={styles.reela}>
<Image source={require('../../../../../assets/images/trash.png')} contentFit='contain'  style={styles.image}/>
</View>

<View style={styles.reelb}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h4,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>Delete my Account</Text>
</View>

</TouchableOpacity>
</View>

</View>


</View>

</View>

</View>
)
}



export default privacy





const styles = StyleSheet.create({
container:{
justifyContent:'center',
alignItems:'center',
flexDirection:'column'
},

cupA:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'8%'
},

cupB:{
justifyContent:'flex-start',
alignItems:'center',
width:'100%',
height:'92%',
flexDirection:'column',
},


colA:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'8%',
flexDirection:'row',
},

colB:{
justifyContent:'flex-start',
alignItems:'center',
width:'100%',
height:'87%',
flexDirection:'column',
},

rolA:{
justifyContent:'flex-start',
alignItems:'center',
width:'14%',
height:'100%'
},

rolB:{
justifyContent:'center',
alignItems:'center',
width:'86%',
height:'100%',
flexDirection:'column'
},

sideA:{
justifyContent:'flex-start',
alignItems:'flex-start',
width:'100%',
height:'50%'
},

sideB:{
justifyContent:'flex-start',
alignItems:'flex-start',
width:'100%',
height:'50%'
},

boxab:{
justifyContent:'center',
alignItems:'center',
width:'93%',
height:'17%',
flexDirection:'column',
},

coola:{
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'23%',
},

coolb:{
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'77%'
},

displayI:{
justifyContent:'center',
alignItems:'flex-start',
width:'95%',
height:'45%'
},

displayII:{
justifyContent:'center',
alignItems:'flex-start',
width:'95%',
height:'45%',
flexDirection:'row'
},

reela:{
justifyContent:'center',
alignItems:'center',
width:'10%',
height:'100%'
},


reelb:{
justifyContent:'center',
alignItems:'flex-start',
width:'88%',
height:'100%'
},


image:{
width:'70%',
height:'50%'
},


textM500: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
},

textR400: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
},


textT700: {
fontFamily:'CabinetGrotesk-Thin',
fontWeight:700,
},

textB700: {
fontFamily:'CabinetGrotesk-Bold',
fontWeight:700,
},

})