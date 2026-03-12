
import { View, Text, StyleSheet,TouchableOpacity,ScrollView } from 'react-native'
import React,{useContext,useEffect,useState} from 'react'
import { useRouter } from 'expo-router';
import { AuthContext } from '@/src/utils/authContext';
import { Colors } from '@/src/utils/color';
import { typo } from '@/src/utils/typo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { myPrivacyPolicy } from '@/src/utils/dataset';





type police = {
dataCollect:string,
dataUsage:string,
dataSharing:string,
userRights:string,
cookies:string,
dataRetent: string,
children:string,
contact:string,
security:string,
change:string
}








const privacyterms = () => {

const router = useRouter()
const { theme,WIDTH,HEIGHT } = useContext(AuthContext)
const [ policy, setpolicy ] = useState<police>()





useEffect(() => {

const data = myPrivacyPolicy.find(p => p.region === 'others')

if (!data) return

setpolicy({
dataCollect:data.dataCollect.en,
dataUsage:data.dataUsage.en,
dataSharing:data.dataSharing.en,
userRights:data.userRights.en,
cookies:data.cookies.en,
dataRetent:data.dataRetent.en,
children:data.children.en,
contact:data.contact.en,
security:data.security.en,
change:data.change.en
})

},[])






return (

<View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>

<View style={styles.cupA}></View>

<View style={styles.cupB}>

<View style={styles.boxA}>

<TouchableOpacity onPress={() => router.back()} style={styles.rola}>
<FontAwesome name="angle-left" size={typo.h1_8} color={theme === 'dark' ? Colors.light.secondary: Colors.dark.secondary} />
</TouchableOpacity>

<View style={styles.rolb}></View>

<View style={styles.rolc}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h2}]}>PRIVACY POLICY</Text>
</View>

</View>

<View style={styles.boxB}>

<ScrollView showsVerticalScrollIndicator={false}>

<View style={[styles.section,{marginVertical:typo.h6,padding:typo.h8}]}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>* {policy?.dataCollect}</Text>
</View>


<View style={[styles.section,{marginVertical:typo.h6,padding:typo.h8}]}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>* {policy?.dataUsage}</Text>
</View>

<View style={[styles.section,{marginVertical:typo.h6,padding:typo.h8}]}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>* {policy?.dataSharing}</Text>
</View>

<View style={[styles.section,{marginVertical:typo.h6,padding:typo.h8}]}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>* {policy?.userRights}</Text>
</View>

<View style={[styles.section,{marginVertical:typo.h6,padding:typo.h8}]}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>* {policy?.cookies}</Text>
</View>

<View style={[styles.section,{marginVertical:typo.h6,padding:typo.h8}]}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>* {policy?.dataRetent}</Text>
</View>

<View style={[styles.section,{marginVertical:typo.h6,padding:typo.h8}]}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>* {policy?.security}</Text>
</View>

<View style={[styles.section,{marginVertical:typo.h6,padding:typo.h8}]}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>* {policy?.change}</Text>
</View>

<View style={[styles.section,{marginVertical:typo.h6,padding:typo.h8}]}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>* {policy?.children}</Text>
</View>

<View style={[styles.section,{marginVertical:typo.h6,padding:typo.h8}]}>
<Text allowFontScaling={false} style={[styles.textR400,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>* {policy?.contact}</Text>
</View>

</ScrollView>

</View>

</View>

</View>
)
}

export default privacyterms





const styles = StyleSheet.create({
container:{
justifyContent:'center',
alignItems:'center',
flex:1
},

cupA:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'8%',
flexDirection:'column',
},

cupB:{
justifyContent:'space-between',
alignItems:'center',
width:'100%',
height:'92%',
flexDirection:'column'
},


boxA:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'5%',
flexDirection:'row'
},

boxB:{
justifyContent:'space-between',
alignItems:'center',
width:'95%',
height:'93%',
flexDirection:'column',
},


rola:{
justifyContent:'flex-start',
alignItems:'center',
width:'14%',
height:'100%',
},

rolb:{
justifyContent:'flex-start',
alignItems:'center',
width:'16%',
height:'100%',
},



rolc:{
justifyContent:'flex-start',
alignItems:'flex-start',
width:'70%',
height:'100%',
},


section:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'auto',
},





textM500: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
},


textR400: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:400,
},


textT400: {
fontFamily:'CabinetGrotesk-Thin',
fontWeight:400,
},

textB700: {
fontFamily:'CabinetGrotesk-Bold',
fontWeight:700,
},



})