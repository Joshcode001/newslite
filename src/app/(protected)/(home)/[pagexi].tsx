

import { View, Text,StyleSheet,TextInput} from 'react-native'
import React,{useContext} from 'react'
import { useLocalSearchParams} from 'expo-router'
import { AuthContext } from '@/src/utils/authContext'
import { Colors } from '@/src/utils/color'
import {KeyboardStickyView} from 'react-native-keyboard-controller'


const pagexi = () => {

const {pagexi} = useLocalSearchParams()
const {theme,WIDTH,HEIGHT,platform} = useContext(AuthContext)



let page: string= ''

if (typeof pagexi === 'string') {
page = pagexi
}






return (
<View style={[styles.container,{backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base, width:WIDTH,height:HEIGHT}]}>


<View style={styles.cupOne}>
<View style={styles.header}></View>
</View>

<View style={styles.cupTwo}>
<Text style={[styles.textM500,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base}]}>{page}</Text>
</View>

<KeyboardStickyView offset={{closed:0,opened:20}}> 
<View style={styles.cupThree}>
<View style={styles.footer}>
<TextInput style={{width:'100%',height:'100%'}}/>
</View>
</View>
</KeyboardStickyView>

</View>
)
}

export default pagexi









const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center',
flexDirection:'column'
},

cupOne:{
justifyContent:'flex-end',
alignItems:'center',
width:'100%',
height:'11%',

},

header:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'40%',
backgroundColor:'pink'
},


cupTwo:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'73%',
},

cupThree:{
justifyContent:'flex-start',
alignItems:'center',
width:'100%',
height:'16%',
backgroundColor:'pink'
},


footer:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'36%',
backgroundColor:'yellow'
},




textM500: {
fontFamily:'CabinetGrotesk-Medium',
fontSize:24,
lineHeight:32,
fontWeight:500,
},








})