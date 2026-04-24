
import { View,StyleSheet } from 'react-native'
import React,{useContext} from 'react'
import { Image } from 'expo-image'
import { Colors } from '../utils/color'
import { AuthContext } from '../utils/authContext'
import AppIcon from './AppIcons'
import { typo } from '../utils/typo'





const CusAvatar = () => {

const { theme,myClient,WIDTH,liveSubCode } = useContext(AuthContext)



const placeholderU = theme === 'dark' ? 'profiledark' : 'profilelight'
const placeholderB = theme === 'dark' ? 'badgedark': 'badgelight'








return (
<View style={styles.container}>
<View style={[styles.avatar]}>
{
myClient.image === "null" ? (<AppIcon name={placeholderU} size={typo.h180} />) :
(<Image source={ myClient.image } style={[styles.image,{width:WIDTH > 500 ? "50%" : "90%"}]}/>)
}

</View>



{
liveSubCode !== "null" && (<View style={[styles.badgeWrapper,{top:WIDTH > 500 ? "10%" : "6%",right:WIDTH > 500 ? "22%" : "11%"}]}>
<View style={[styles.badge,{borderColor:theme === 'dark' ? Colors.dark.base : Colors.light.base,backgroundColor:theme === 'dark' ? Colors.light.story : Colors.light.badge,width:WIDTH > 500 ? "40%" : "60%"}]}>
<AppIcon name={placeholderB} size={typo.h1_5} />
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
justifyContent:'center',
alignItems:'center',
},

avatar: {
width:'85%',
aspectRatio:1,
borderRadius:9999,
overflow:'hidden',
justifyContent:'center',
alignItems:'center'
},



image: {
aspectRatio:1,
borderRadius:9999,
overflow:'hidden',
},

imageB: {
width:'67%',
aspectRatio:1,
borderRadius:9999,
overflow:'hidden',
},

badgeWrapper: {
position: "absolute",
width:'23%',
height:'23%',
zIndex: 10,
justifyContent:'center',
alignItems:'center'
},

badge: {
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