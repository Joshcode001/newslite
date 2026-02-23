


import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';
import React,{ PropsWithChildren } from 'react'


export default function PremiumView({children}:PropsWithChildren) {
return (
<LinearGradient
colors={[
'#4C2F7A',   // rich violet
'#2D3F8F',   // royal indigo
'#1C2747',   // deep navy
'#2A1F1F'    // subtle warm undertone
]}
start={{ x: 0, y: 0 }}
end={{ x: 1, y: 1 }}
locations={[0, 0.35, 0.75, 1]}
style={styles.container}
>
{/* Glow Layer */}
<LinearGradient
colors={[
'rgba(255,120,80,0.15)', 
'transparent'
]}
start={{ x: 1, y: 1 }}
end={{ x: 0.5, y: 0.5 }}
style={styles.glow}
/>

{/* Subtle Dark Overlay for Depth */}
<View style={styles.overlay} />

{children}
</LinearGradient>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
borderRadius: 28,
overflow: 'hidden',
width:'100%',
height:'100%',
flexDirection:'column'
},
glow: {
position: 'absolute',
width: '70%',
height: '70%',
bottom: -40,
right: -40,
borderRadius: 400,
},
overlay: {
...StyleSheet.absoluteFillObject,
backgroundColor: 'rgba(0,0,0,0.08)',
},
});
