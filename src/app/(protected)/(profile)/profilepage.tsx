

import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { useContext,useState,useEffect ,useRef} from 'react'
import { AuthContext } from '@/src/utils/authContext'
import { Colors } from '@/src/utils/color'
import Feather from '@expo/vector-icons/Feather';
import { Image } from 'expo-image'
import { typo,length } from '@/src/utils/typo'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Animated, { useSharedValue, withTiming,useAnimatedStyle,useAnimatedProps } from 'react-native-reanimated';
import PagerView from 'react-native-pager-view'







const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);



const profilepage = () => {

const {theme,WIDTH,HEIGHT,myClient,locationP} = useContext(AuthContext)
const offset = useSharedValue(0);
const position = useSharedValue(0);
const pagerRef = useRef<PagerView>(null);
const tabWidth = WIDTH / 3;


const animatedIndicatorStyle = useAnimatedStyle(() => {
return {
width: tabWidth,
transform: [
{ translateX: (position.value + offset.value) * tabWidth }
],
};
});








return (
<View style={[styles.container,{backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base,width:WIDTH,height:HEIGHT}]}>

<View style={styles.cupOne}>

<View style={styles.headerBox}>
<View style={styles.header}>
<TouchableOpacity style={styles.box}>
<Feather name="settings" size={24} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</TouchableOpacity>
</View>
</View>


<View style={styles.imageBox}>
<View style={styles.imageLine}>
<Image source={myClient.image} style={styles.image} />
</View>
</View>


<View style={styles.detailsBox}>

<View style={[styles.info]}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h2}]}>{`${myClient.fname} ${myClient.lname}`}</Text>
</View>

<View style={[styles.info]}>
<Text allowFontScaling={false} style={[styles.textR700,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h3}]}>{`@${myClient.uname}`}</Text>
</View>

<View style={[styles.info]}>
<View style={styles.infoBox}>
<Text numberOfLines={2} allowFontScaling={false} style={[styles.textM700,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h4}]}><Ionicons name="location-outline" size={16} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />{" "}{`${locationP.city} , ${locationP.region} , ${locationP.country}`}</Text>
</View>
</View>

</View>


</View>



<View style={styles.cupTwo}>

<View style={styles.control}>

<View style={styles.tag}>

<View style={styles.tagOne}>
<TouchableOpacity style={styles.tag1} onPress={() => pagerRef.current?.setPage(0)}>
<View style={styles.tag1a}>
<MaterialCommunityIcons name="sticker-emoji" size={24} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</View>

<View style={styles.tag1b}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h4}]}>Reactions</Text>
</View>
</TouchableOpacity>
</View>

<View style={styles.tagOne}>
<TouchableOpacity style={styles.tag1} onPress={() => pagerRef.current?.setPage(1)}>
<View style={styles.tag1a}>
<Ionicons name="chatbox-ellipses-outline" size={24} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</View>

<View style={styles.tag1b}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h4}]}>Comments</Text>
</View>
</TouchableOpacity>
</View>

<View style={[styles.tagOne,{alignItems:'flex-end'}]}>
<TouchableOpacity style={styles.tag1} onPress={() => pagerRef.current?.setPage(2)}>
<View style={styles.tag1a}>
{
theme === 'dark' ? (<Image source={require('../../../../assets/images/Defsavedark.png')} style={styles.controlImage} contentFit='contain' />) : (<Image source={require('../../../../assets/images/Defsavelight.png')} style={styles.controlImage} contentFit='contain' />)
}
</View>

<View style={styles.tag1b}>
<Text allowFontScaling={false} style={[styles.textB700,{color:theme === 'dark' ? Colors.light.primary : Colors.dark.base,fontSize:typo.h4}]}>Saved</Text>
</View>
</TouchableOpacity>
</View>


</View>

<View style={[styles.indicator,{backgroundColor:theme === 'dark' ?  Colors.dark.border : Colors.light.border}]}>
<Animated.View style={[{backgroundColor:'green'},animatedIndicatorStyle]}></Animated.View>
</View>

</View>


<View style={styles.content}>
<AnimatedPagerView orientation='horizontal' style={styles.pagerView} initialPage={0} ref={pagerRef} 
onPageScroll={(e) => {
'worklet';

offset.value = e.nativeEvent.offset;
position.value = e.nativeEvent.position;

}}>

<View key='1' style={[styles.page,{backgroundColor:'orange'}]}></View>
<View key='2' style={[styles.page,{backgroundColor:'green'}]}></View>
<View key='3' style={[styles.page,{backgroundColor:'yellow'}]}></View>

</AnimatedPagerView>
</View>


<View style={[styles.bottom,{backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base,borderTopColor:theme === 'dark' ? Colors.dark.border : Colors.light.border}]}></View>
</View>



</View>
)
}

export default profilepage






const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center',
flexDirection:'column'
},

cupOne:{
width:'100%',
height:'47%',
justifyContent:'flex-start',
alignItems:'center'
},

headerBox:{
width:'100%',
height:'25%',
justifyContent:'flex-end',
alignItems:'center'
},

header:{
width:'100%',
height:'35%',
justifyContent:'center',
alignItems:'flex-end'
},

box:{
width:'17%',
height:'100%',
justifyContent:'center',
alignItems:'center',
},


imageBox:{
width:'100%',
height:'48%',
justifyContent:'flex-end',
alignItems:'center',
},


imageLine:{
width:'27%',
aspectRatio:1,
borderRadius:9999,
overflow:'hidden',
borderWidth:4,
borderColor:'blue',

},

image:{
width:'100%',
aspectRatio:1,
borderRadius:9999,
overflow:'hidden',
},

detailsBox:{
width:'100%',
height:'27%',
justifyContent:'center',
alignItems:'center',
flexDirection:'column'
},

infoBox:{
width:'80%',
height:'100%',
justifyContent:'center',
alignItems:'center',
flexDirection:'row',
columnGap:10
},

info:{
width:'100%',
height:'33.3%',
justifyContent:'flex-end',
alignItems:'center',
},


cupTwo:{
width:'100%',
height:'53%',
justifyContent:'flex-start',
alignItems:'center'
},

bottom:{
width:'100%',
height:'23%',
justifyContent:'center',
alignItems:'center',
position:'absolute',
bottom:0,
borderTopWidth:2
},

control:{
width:'100%',
height:'10%',
justifyContent:'center',
alignItems:'center',
flexDirection:'column'
},


tag:{
width:'100%',
height:'95%',
justifyContent:'center',
alignItems:'center',
flexDirection:'row',
},

tagOne:{
width:'33.3%',
height:'100%',
justifyContent:'center',
alignItems:'center',
},


tag1:{
width:'80%',
height:'100%',
justifyContent:'center',
alignItems:'center',
flexDirection:'row',
},

tag1a:{
width:'25%',
height:'100%',
justifyContent:'center',
alignItems:'center',
},


tag1b:{
width:'75%',
height:'100%',
justifyContent:'center',
alignItems:'flex-start',
},


controlImage:{
width:'70%',
height:'70%'
},


indicator:{
width:'100%',
height:'5%',
justifyContent:'center',
alignItems:'center',
},


pagerView:{
flex:1,
width:'100%',
height:'100%'
},

page:{
width:'100%',
height:'100%',
justifyContent:'center',
alignItems:'center'
},


content:{
width:'100%',
height:'67%',
justifyContent:'flex-start',
alignItems:'center'
},

textM700: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:700,
},


textR700: {
fontFamily:'CabinetGrotesk-Regular',
fontWeight:700,
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