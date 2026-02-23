

import { View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import React,{useContext} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { Colors } from '@/src/utils/color'
import { useRouter } from 'expo-router'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { typo } from '@/src/utils/typo'
import { Image } from 'expo-image'
import Ionicons from '@expo/vector-icons/Ionicons';









const artificial = () => {


const router = useRouter()
const { theme,WIDTH,HEIGHT,voice,setvoice } = useContext(AuthContext)



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
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>AI Settings</Text>
</View>

</View>
</View>


<View style={styles.colB}>

<View style={[styles.boxq]}>

<View style={styles.colx}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h3}]}>Choose AI Identity</Text>
</View>

<View style={[styles.coly,{borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border,
backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderWidth:1,borderRadius:typo.h5}]}>

<TouchableOpacity onPress={() => setvoice('m')}
style={[styles.xqcol,{borderBottomWidth:1,borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>

<View style={styles.reli}>
<Image source={require('../../../../../assets/images/male.png')} contentFit='contain'  style={styles.image}/>
</View>

<View style={styles.relii}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h4,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>Male</Text>
</View>

<View style={styles.reliii}>
{
voice === 'm' && (<Ionicons name="checkmark-circle-sharp" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon:Colors.light.icon } />)
}
</View>

</TouchableOpacity>

<TouchableOpacity onPress={() => setvoice('f')} style={styles.xqcol}>

<View style={styles.reli}>
<Image source={require('../../../../../assets/images/female.png')} contentFit='contain'  style={styles.image}/>
</View>

<View style={styles.relii}>
<Text allowFontScaling={false} style={[styles.textM500,{fontSize:typo.h4,color:theme === 'dark' ? Colors.light.border : Colors.dark.primary}]}>Female</Text>
</View>

<View style={styles.reliii}>
{
voice === 'f' && (<Ionicons name="checkmark-circle-sharp" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon:Colors.light.icon } />)
}
</View>


</TouchableOpacity>

</View>

</View>

</View>

</View>

</View>
)
}

export default artificial










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

boxq:{
justifyContent:'center',
alignItems:'flex-start',
width:'90%',
height:'23%',
},

colx:{
justifyContent:'center',
alignItems:'flex-start',
width:'100%',
height:'23%',
},


coly:{
justifyContent:'center',
alignItems:'center',
width:'95%',
height:'77%',
flexDirection:'column',
borderWidth:1
},

xqcol:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'48%',
flexDirection:'row'
},

reli:{
justifyContent:'center',
alignItems:'center',
width:'20%',
height:'100%',
},

relii:{
justifyContent:'center',
alignItems:'flex-start',
width:'67%',
height:'100%',
},

reliii:{
justifyContent:'center',
alignItems:'center',
width:'10%',
height:'100%',
},


image:{
width:'98%',
height:'75%'
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