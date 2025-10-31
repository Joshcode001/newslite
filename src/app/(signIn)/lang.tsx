

import { View, Text,StyleSheet } from 'react-native'
import React,{useContext, useEffect} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { Image } from 'expo-image'




const lang = () => {

const {appLang,setappLang,WIDTH,HEIGHT} = useContext(AuthContext)




return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT}]}>
<View style={styles.boxa}>
<View style={styles.iconview}>
<View style={styles.icon}>
<Image contentFit='contain' source={require('./assets/images/initlogo.png')}/>
</View>
</View>
<View style={styles.inputa}></View>
</View>
<View style={styles.boxb}>
<View style={styles.btnview}>
<View style={styles.button}></View>
</View>
</View>
</View>
)
}

export default lang





const styles = StyleSheet.create({

container: {
justifyContent:'center',
alignItems:'center',
backgroundColor:'white',
flex:1,
flexDirection:'column'
},

boxa:{
justifyContent:'space-between',
alignItems:'center',
height:'48.3%',
width:'100%',
backgroundColor:'brown'
},

boxb:{
justifyContent:'flex-end',
alignItems:'center',
height:'51.7%',
width:'100%',
backgroundColor:'green'
},

inputa:{

justifyContent:'center',
alignItems:'center',
backgroundColor:'yellow',
width:'88%',
height:'24.2%'
},

icon: {
width:'12.4%',
height:'28.9%',
},

iconview: {
width:'100%',
height:'34.1%',
backgroundColor:'white',
justifyContent:'flex-end',
alignItems:'center'
},

btnview: {
backgroundColor:'pink',
width:'88%',
height:'18.8%',
justifyContent:'flex-start',
alignItems:'flex-end'
},

button: {
justifyContent:'center',
alignItems:'center',
backgroundColor:'red',
width:'27.1%',
height:'47.1%'
},

texti: {
fontFamily:'CabinetGrotesk-Regular',
fontSize:18
}
})