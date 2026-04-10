
import { View, Text,StyleSheet } from 'react-native'
import React,{useContext} from 'react'
import { AuthContext } from '../utils/authContext'
import { Colors } from '../utils/color'
import { typo } from '../utils/typo';
import AppIcon from './AppIcons';




type toast = {
type:"success"|"error",
title:string,
body:string
}



const CusToast = ({type,title,body}:toast) => {

const { theme } = useContext(AuthContext)


const placeholderN = type === 'success' ? "check": "warning"


return (
<View style={[styles.container,{height:68,width:'95%',backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.primary,borderRadius:15,borderColor:theme === 'dark' ? Colors.dark.primary : Colors.light.secondary}]}>


<View style={styles.rola}>
<AppIcon name={placeholderN} size={25} />
</View>


<View style={styles.rolb}>

<View style={styles.cola}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h3}]}>{title}</Text>
</View>


<View style={styles.colb}>
<Text allowFontScaling={false} style={[styles.textM500,{color:theme === 'dark' ? Colors.light.secondary : Colors.dark.primary,fontSize:typo.h4}]}>{body}</Text>
</View>


</View>

</View>
)
}

export default CusToast





const styles = StyleSheet.create({
container:{
justifyContent:'center',
alignItems:'center',
borderWidth:2,
flexDirection:'row'
},

rola:{
justifyContent:'center',
alignItems:'center',
width:'13%',
height:'80%',
},


rolb:{
justifyContent:'center',
alignItems:'center',
width:'85%',
height:'80%',
flexDirection:'column'
},

cola:{
justifyContent:'flex-start',
alignItems:'flex-start',
width:'100%',
height:'58%'
},

colb:{
justifyContent:'flex-end',
alignItems:'flex-start',
width:'100%',
height:'42%'
},

textM500: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
},





})