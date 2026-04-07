

import { View,StyleSheet,ActivityIndicator,TouchableOpacity,Text} from 'react-native'
import React,{useEffect,useContext,useState} from 'react'
import { AuthContext } from '../utils/authContext';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../utils/color';
import { typo} from '../utils/typo';
import Animated, { useSharedValue, withTiming,useAnimatedStyle } from 'react-native-reanimated';
import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';
import { lingual } from '../utils/dataset';




type player = {
isLoading:boolean,
setisLoading:React.Dispatch<React.SetStateAction<boolean>>,
setshouldShow:React.Dispatch<React.SetStateAction<boolean>>,
setisPlaying:React.Dispatch<React.SetStateAction<boolean>>
}



type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";









const CusPlayer = ({isLoading,setisLoading,setshouldShow,setisPlaying}:player) => {

const {theme,socket,getlang,appLang} = useContext(AuthContext)
const [source,setsource] = useState('')
const player = useAudioPlayer(source,100)
const status = useAudioPlayerStatus(player);
const {currentTime,duration,didJustFinish,playing} = status
const [lang, setlang] = useState<langt>('en')
const progress = useSharedValue(0);






const animatedStyle = useAnimatedStyle(() => ({
width: `${progress.value * 100}%`,
}));




const controlPlay = () => {

if (playing === true) {
player.pause()

}else if (playing === false) {
player.play()

}
}


const skipForward = () => {
player.seekTo(currentTime + 5);
};

const skipBackward = () => {
player.seekTo(Math.max(0,currentTime - 5));
};



useEffect(() => {

if (duration > 0) {
progress.value = withTiming(currentTime / duration, { duration: 100 });
}


},[currentTime,duration])



useEffect(() => {

socket.on("ttsAudio",(data:any) => {

if (data.postId) {

setsource(data.url)

}
})

},[socket])




useEffect(() => {

if (didJustFinish === true) {
player.seekTo(0)
setsource('')
setshouldShow(false)
}
},[didJustFinish])



useEffect(() => {

if (source !== '') {
setisLoading(false)
player.play()
}
},[source])


useEffect(() => {
setisPlaying(playing)
},[playing])



useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])



return (
<View style={[styles.container,{width:typo.h300,marginRight:typo.h3}]}>
{
isLoading === true ? (
<View style={styles.boxOne}>
<Text style={[styles.textM500,{lineHeight:typo.h2,fontSize:typo.h3,color:theme === 'dark' ? Colors.light.border :Colors.dark.primary }]}>{lingual.encode[lang]}</Text>

<ActivityIndicator color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} size={typo.h1_5} />
</View>) : 

(<View style={styles.boxTwo}>

<View style={styles.discA}>
<View style={[styles.discaa,{borderRadius:typo.h3,backgroundColor:Colors.light.placeholder}]}>
<Animated.View style={[styles.progress,animatedStyle,{backgroundColor:Colors.light.primary}]}></Animated.View>
</View>
</View>


<View style={styles.discB}>
<View style={styles.discbb}>

<TouchableOpacity style={styles.rowOne} onPress={skipBackward}>
<Ionicons name="play-back" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</TouchableOpacity>


<TouchableOpacity style={styles.rowTwo} onPress={controlPlay}>
{
playing ? (<Ionicons name="pause" size={typo.h1_5} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />) : (<Ionicons name="play" size={typo.h1_5} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />)
}
</TouchableOpacity>


<TouchableOpacity style={styles.rowThree} onPress={skipForward}>
<Ionicons name="play-forward" size={typo.h2} color={theme === 'dark' ? Colors.dark.icon : Colors.light.icon} />
</TouchableOpacity>


</View>
</View>


</View>)
}
</View>
)
}

export default CusPlayer





const styles = StyleSheet.create({

container:{
justifyContent:'center',
alignItems:'center',
height:'100%'
},

boxOne:{
justifyContent:'space-between',
alignItems:'center',
width:'90%',
height:'90%',
flexDirection:'row'
},


boxTwo:{
justifyContent:'center',
alignItems:'center',
width:'90%',
height:'90%',
flexDirection:'column'
},

discA:{
justifyContent:'flex-end',
alignItems:'center',
width:'100%',
height:'50%'
},

discaa:{
justifyContent:'center',
alignItems:'flex-start',
width:'90%',
height:'17%',
},


discB:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'50%'
},

discbb:{
justifyContent:'center',
alignItems:'center',
width:'65%',
height:'100%',
flexDirection:'row'
},

rowOne:{
justifyContent:'flex-end',
alignItems:'flex-start',
width:'33.3%',
height:'100%'
},

rowTwo:{
justifyContent:'flex-end',
alignItems:'center',
width:'33.3%',
height:'100%'
},


rowThree:{
justifyContent:'flex-end',
alignItems:'flex-end',
width:'33.3%',
height:'100%'
},


progress:{
justifyContent:'center',
alignItems:'center',
width:'100%',
height:'98%'
},


textM500: {
fontFamily:'CabinetGrotesk-Medium',
fontWeight:500,
},



})