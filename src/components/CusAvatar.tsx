
import { View, Text,StyleSheet } from 'react-native'
import React,{useContext} from 'react'
import { Image } from 'expo-image'
import { Colors } from '../utils/color'
import { AuthContext } from '../utils/authContext'








const CusAvatar = () => {

const { theme,myClient } = useContext(AuthContext)



const placeholder = theme === 'dark' ? require('../../assets/images/bigusericondark.png') :
require('../../assets/images/bigusericonlight.png')

const proline = myClient.subCode !== "null" ? (theme === 'dark' ? Colors.light.story : Colors.dark.story):
(theme === 'dark' ? Colors.dark.icon : Colors.light.icon)



return (
<View style={styles.container}>
<View style={[styles.avatar,{borderColor:proline}]}>
<Image source={myClient.image === "null" ? placeholder : myClient.image } style={styles.image} contentFit='contain' />
</View>




{
myClient.subCode !== "null" && (<View style={styles.badgeWrapper}>
<View style={[styles.badge,{borderColor:theme === 'dark' ? Colors.dark.base : Colors.light.base,backgroundColor:theme === 'dark' ? Colors.dark.story : Colors.light.story}]}>
<Image source={require('../../assets/images/Crown.png')} style={styles.imageB} contentFit='contain' />
</View>
</View>)
}
</View>
)
}

export default CusAvatar






const styles = StyleSheet.create({
container: {
width: '50%',
height: '100%',
position: "relative",
justifyContent:'flex-end',
alignItems:'center'
},

avatar: {
width:'65%',
aspectRatio:1,
borderRadius:9999,
overflow:'hidden',
borderWidth:5,
justifyContent:'center',
alignItems:'center'
},



image: {
width:'90%',
aspectRatio:1,
borderRadius:9999,
overflow:'hidden',
},

imageB: {
width:'70%',
aspectRatio:1,
borderRadius:9999,
overflow:'hidden',
},

badgeWrapper: {
position: "absolute",
width:'25%',
height:'25%',
top:59,
right:20,
zIndex: 10,
justifyContent:'center',
alignItems:'center'
},

badge: {
width:'80%',
aspectRatio:1,
borderRadius:9999,
borderWidth:3,
overflow:'hidden',
justifyContent:'center',
alignItems:'center',

shadowColor: "#000",
shadowOpacity: 0.25,
shadowRadius: 5,
shadowOffset: { width: 0, height: 2 },
elevation: 6,
},
});