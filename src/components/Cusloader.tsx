



import { StyleSheet } from 'react-native'
import React,{useContext,useEffect} from 'react'
import { Image } from 'expo-image';
import { AuthContext } from '../utils/authContext';
import Animated, { useSharedValue,useAnimatedStyle,withTiming,Easing,withRepeat} from 'react-native-reanimated'
import AppIcon from './AppIcons';

type load = {
top:number
}




const Cusloader = ({top}:load) => {




const {theme,WIDTH} = useContext(AuthContext)
const sv = useSharedValue(1);

const placeholder = theme === 'dark' ? 'logodark' : 'Logolight'



const duration = 2000;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);




const animatedStyle = useAnimatedStyle(() => ({
transform: [{ rotate: `${sv.value * 360}deg` },{scale:sv.value}]
}));



useEffect(() => {

sv.value = withRepeat(withTiming(2, { duration, easing, }), -1,true);
},[])



return (
<Animated.View style={[styles.container,animatedStyle,{top:top}]}>
<AppIcon  name={placeholder} size={25}/>
</Animated.View>
)
}

export default Cusloader






const styles = StyleSheet.create({
container:{
justifyContent:'center',
alignItems:'center',
width:'30%',
height:'7%',
position:'absolute',
}
})