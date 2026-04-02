
import { View, Text, StyleSheet,TouchableOpacity,FlatList} from 'react-native'
import React, { useEffect, useState,useContext} from 'react'
import YoutubePlayer from "react-native-youtube-iframe";
import { AuthContext } from '@/src/utils/authContext';
import {lingual } from '@/src/utils/dataset';
import { Colors } from '@/src/utils/color';
import { typo } from '@/src/utils/typo';
import Cusloader from '@/src/components/Cusloader';



type langt = "en"|"fr"|"de"|"ar"|"es"|"tr"|"nl"|"it"|"ja"|"zh"|"ko"|"hi"|"pt"|"ru"|"sw"|"pl"|"id"|"fa"|"pa"|"uk"|"ro"|"tl";




type seltor ={
item: bnit
}



type bnit = {
videoId:string,
title: string
}




const watch = () => {

const [lang, setlang] = useState<langt>('en')
const {HEIGHT,WIDTH,appLang,getlang,theme,socket,roomKey} = useContext(AuthContext)
const [playing, setPlaying] = useState(false);
const [isloading, setisloading] = useState(false)
const [selected, setselected] = useState<bnit>()
const [videoArray, setvideoArray]= useState<bnit[]>([])




const handlePress = (title:string,videoId:string) => {

setselected({ title,videoId })
Play()

}


const Selector = ({title,videoId}:bnit) => (
<TouchableOpacity onPress={() => handlePress(title,videoId)}
style={[styles.select,{padding:typo.h8,width:WIDTH - 20,height:60,borderBottomWidth:2,borderBottomColor:theme === 'dark' ? Colors.dark.border : Colors.light.border},(videoId === selected?.videoId) && {backgroundColor:theme === 'dark' ? Colors.dark.primary : Colors.light.tertiary}]}>
<Text allowFontScaling={false} style={[styles.textR400,{fontSize:typo.h5,color:theme === 'dark' ? Colors.light.primary : 
Colors.dark.base}]}>{title.toUpperCase()}</Text>
</TouchableOpacity>
)


const onStateChange = (state:any) => {
if (state === "ended") {
setPlaying(false);
}
}



const Play = () => {
setPlaying(true);
}



useEffect(() => {

setisloading(true)

const data = { rkey:roomKey }
socket.emit('youtube', data)


},[])



useEffect(() => {

socket.on('youtubeList', (data:any) => {

setselected({videoId:data.list[0].videoId,title:data.list[0].title})
setvideoArray(data.list)
setisloading(false)
Play()
})

},[socket])



useEffect(() => {

getlang(appLang.value,setlang)

},[appLang])



return (
<View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>

<View style={styles.cupA}></View>

{
isloading ? (<View style={styles.cupQ}><Cusloader top={300} /></View>) : 

(<View style={styles.cupQ}>
<View style={styles.cupB}>
<YoutubePlayer width={'100%'} height={'100%'} videoId={selected?.videoId} play={playing} onChangeState={onStateChange} />
</View>

<View style={styles.cupC}>

<View style={styles.framei}>
<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h3,color:theme === 'dark' ? Colors.light.primary : 
Colors.dark.base}]}>{selected?.title.toUpperCase()}</Text>
</View>

<View style={styles.frameii}>

<View style={[styles.boxi]}>
<Text allowFontScaling={false} style={[styles.textB700,{fontSize:typo.h4,color:theme === 'dark' ? Colors.light.primary : 
Colors.dark.base}]}>{lingual.livechannels[lang]}</Text>
</View>


<View style={styles.boxii}>
<FlatList data={videoArray} renderItem={({item}) => <Selector title={item.title} videoId={item.videoId} />} 
keyExtractor={item => item.videoId} style={{width:'100%',height:'100%'}} contentContainerStyle={{justifyContent:'center',alignItems:'center'}} showsVerticalScrollIndicator={false} 
ItemSeparatorComponent={() => <View style={{width:'100%',height:20}}></View>}/>
</View>

</View>

</View>

</View>)
}

</View>
)

}

export default watch







const styles = StyleSheet.create({
container: {
flex:1,
justifyContent:'center',
alignItems: 'center',
},

cupA:{
width:'100%',
height:'13%',
justifyContent:'center',
alignItems:'center'
},

cupQ:{
width:'100%',
height:'87%',
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
},

cupB:{
width:'100%',
height:'32%',
justifyContent:'center',
alignItems:'center',
},

cupC:{
width:'100%',
height:'68%',
justifyContent:'space-between',
alignItems:'center',
flexDirection:'column',
},

framei:{
width:'95%',
height:'12%',
justifyContent:'flex-start',
alignItems:'center',
},

frameii:{
width:'95%',
height:'85%',
justifyContent:'flex-start',
alignItems:'center',
flexDirection:'column'
},

boxi:{
width:'100%',
height:'11%',
justifyContent:'center',
alignItems:'flex-start',
},



boxii:{
width:'100%',
height:'67%',
justifyContent:'center',
alignItems:'center',
},

select:{
justifyContent:'center',
alignItems:'flex-start'
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