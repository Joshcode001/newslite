

import { View, Text,StyleSheet,TextInput,Keyboard,Pressable,ScrollView,TouchableOpacity} from 'react-native'
import React,{useContext,useEffect,useState,useRef} from 'react'
import { useLocalSearchParams} from 'expo-router'
import { AuthContext } from '@/src/utils/authContext'
import { Colors } from '@/src/utils/color'
import {KeyboardStickyView,KeyboardEvents,KeyboardAwareScrollView} from 'react-native-keyboard-controller'
import Animated, { useSharedValue, withTiming,useAnimatedStyle } from 'react-native-reanimated';
import { Image } from 'expo-image';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';





const pagexi = () => {



const {pagexi} = useLocalSearchParams()
const {theme,WIDTH,HEIGHT} = useContext(AuthContext)
const AnimatedSticky = Animated.createAnimatedComponent(KeyboardStickyView)
const isShowing = useSharedValue(0)



let page: string= ''

if (typeof pagexi === 'string') {
page = pagexi
}


const animatedStyle = useAnimatedStyle(() => {
return {
justifyContent:isShowing.value === 1 ? 'flex-end': 'flex-start'
}
})



useEffect(() => {

const show = KeyboardEvents.addListener('keyboardWillShow',(e) => {
isShowing.value = withTiming(1,{duration:60})
})

const notShow = KeyboardEvents.addListener('keyboardWillHide',(e)=> {
isShowing.value = withTiming(0,{duration:60})
})


return () => {
show.remove()
notShow.remove()
}

},[])





return (
<View style={[styles.container,{backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base, width:WIDTH,height:HEIGHT}]}>


<View style={styles.cupOne}>
<View style={styles.header}>
<View style={styles.rowA}>
<TouchableOpacity style={styles.rowBbox}>
<Ionicons name="chevron-back" size={22} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</TouchableOpacity>
</View>
<View style={styles.rowB}>
<TouchableOpacity style={styles.rowBbox}>
{
theme === 'dark' ? (<Image source={require('../../../../assets/images/Defsavedark.png')} style={{width:'47%',height:'57%'}}/>) :
(<Image source={require('../../../../assets/images/Defsavelight.png')} style={{width:'47%',height:'57%'}}/>)
}
</TouchableOpacity>
<TouchableOpacity style={styles.rowBbox}>
<MaterialCommunityIcons name="account-voice" size={22} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</TouchableOpacity>
<TouchableOpacity style={styles.rowBbox}>
{
theme === 'dark' ? (<Image source={require('../../../../assets/images/translatedark.png')} style={{width:'47%',height:'57%'}}/>) :
(<Image source={require('../../../../assets/images/translatelight.png')} style={{width:'47%',height:'57%'}}/>)
}
</TouchableOpacity>
</View>
</View>
</View>

<View style={styles.cupTwo}>


<ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
<View style={[styles.headerBox,{width:400,height:75}]}></View>
<View style={[styles.imageBox,{width:400,height:300}]}></View>
<View style={[styles.descBox,{width:400,height:300}]}></View>
<View style={[styles.sourceBox,{width:400,height:200}]}></View>
</ScrollView>


</View>



<AnimatedSticky style={[styles.cupThree,animatedStyle]} offset={{closed:0,opened:-7}} pointerEvents='box-none'> 
<View style={[styles.footer,{backgroundColor:theme === 'dark' ? Colors.dark.secondary : Colors.light.secondary,borderColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}>

<View style={styles.footBox1}>
<View style={styles.circle}></View>
</View>


<View style={styles.footBox2}>
<TextInput multiline={true} placeholder='Enter Comment...' placeholderTextColor={theme === 'dark' ? Colors.dark.placeholder :Colors.light.placeholder} style={[styles.input,{color:theme === 'dark' ? Colors.light.primary :Colors.dark.base}]}/>
</View>



<TouchableOpacity style={styles.footBox3}>
{
theme === 'dark' ? (<Image source={require('../../../../assets/images/senddark.png')} style={{width:'50%',height:'80%'}} />) : (<Image source={require('../../../../assets/images/sendlight.png')} style={{width:'50%',height:'80%'}} />)
}
</TouchableOpacity>

</View>
</AnimatedSticky>




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
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'40%',

},

rowA:{
justifyContent:'center',
alignItems:'flex-start',
width:'55%',
height:'100%'
},

rowB:{
justifyContent:'space-between',
alignItems:'center',
width:'45%',
height:'100%',
flexDirection:'row',
},

rowBbox:{
justifyContent:'center',
alignItems:'center',
width:'23%',
height:'100%',
backgroundColor:'pink'
},




cupTwo:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'73%',
},

cupThree:{
alignItems:'center',
width:'100%',
height:'16%',
},


footer:{
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
width:'95%',
height:'34%',
borderRadius:15,
borderWidth:1,
},

footBox1:{
justifyContent:'center',
alignItems:'center',
width:'15%',
height:'100%',
},

circle:{
justifyContent:'center',
alignItems:'center',
width:'65%',
aspectRatio:1,
borderRadius:9999,
backgroundColor:'brown',
overflow:'hidden'
},


footBox2:{
justifyContent:'center',
alignItems:'center',
width:'70%',
height:'100%',
},

footBox3:{
justifyContent:'center',
alignItems:'center',
width:'15%',
height:'100%',
paddingTop:4,
},


textM500: {
fontFamily:'CabinetGrotesk-Medium',
fontSize:24,
lineHeight:32,
fontWeight:500,
},

input:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'100%',
paddingTop:15,
fontSize:22,
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
},

contentContainer:{
justifyContent:'flex-start',
alignItems:'center',
width:'100%',
height:'auto'
},

headerBox:{
justifyContent:'center',
alignItems:'center',
maxHeight:'auto',
backgroundColor:'pink',
marginVertical:15
},


imageBox:{
justifyContent:'center',
alignItems:'center',
backgroundColor:'brown',
marginVertical:15,

},

descBox:{
justifyContent:'center',
alignItems:'center',
backgroundColor:'yellow',
marginVertical:15,
maxHeight:'auto'
},

sourceBox:{
justifyContent:'center',
alignItems:'center',
backgroundColor:'green',
marginVertical:15,

}






})