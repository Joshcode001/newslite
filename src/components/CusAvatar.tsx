
import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient';



const AVATAR_SIZE = 110;
const BADGE_SIZE = 30;

const CusAvatar = () => {


return (
<View style={styles.container}>
<View style={styles.avatar}></View>

<View style={styles.badgeWrapper}>
<LinearGradient
colors={["#FFD700", "#E6B800", "#CFAF00"]}
start={{ x: 0, y: 0 }}
end={{ x: 1, y: 1 }}
style={styles.badge}
>
{/* Crown icon or star here */}
</LinearGradient>
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
backgroundColor:'blue'
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