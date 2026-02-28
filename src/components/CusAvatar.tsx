
import { View, Text,StyleSheet } from 'react-native'
import React,{useContext} from 'react'
import { Image } from 'expo-image'
import { Colors } from '../utils/color'
import { AuthContext } from '../utils/authContext'



const CusAvatar = () => {

const { theme,myClient } = useContext(AuthContext)

return (
<View style={styles.container}>
<View style={[styles.avatar,{borderColor:theme === 'dark' ? Colors.dark.Activebtn: Colors.light.Activebtn}]}></View>

<View style={styles.badgeWrapper}>
<View style={[styles.badge,{backgroundColor:theme === 'dark' ? Colors.dark.Activebtn: Colors.light.Activebtn}]}>

</View>
</View>
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
borderWidth:3
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
overflow:'hidden',
justifyContent: "center",
borderWidth: 3,
borderColor: "#fff",
shadowColor: "#000",
shadowOpacity: 0.25,
shadowRadius: 5,
shadowOffset: { width: 0, height: 2 },
elevation: 6,
},
});