import React, {useEffect,useCallback,useImperativeHandle,useContext,forwardRef,} from "react";
import {View,Text,StyleSheet,AccessibilityInfo,ScrollView,} from "react-native";
import {GestureDetector,Gesture,} from "react-native-gesture-handler";
import Animated, {useAnimatedStyle,useAnimatedProps,useSharedValue,withSpring,withTiming,interpolate,} from"react-native-reanimated";
import Feather from "@expo/vector-icons/Feather";
import { AuthContext } from "../utils/authContext";
import { ActiveColors } from "@/src/utils/color";



type CustomBsheetProps = {
title: string;
children: React.ReactNode;
};





const CustomBsheet = forwardRef(({ title, children }: CustomBsheetProps, ref) => {

const translateY = useSharedValue(0);
const context = useSharedValue({ y: 0 });
const rotY = useSharedValue(0);
const active = useSharedValue(false);
const reduceMotion = useSharedValue(false);

const { theme, HEIGHT } = useContext(AuthContext);
const SCREEN_HEIGHT = HEIGHT;




const aniprop = useAnimatedProps(() => {
return {
pointerEvents:active.value ? 'box-only' : 'box-none'
} as any
})





// Detect reduce motion setting
useEffect(() => {
AccessibilityInfo.isReduceMotionEnabled().then((enabled) => {
reduceMotion.value = enabled;
});
const subscription = AccessibilityInfo.addEventListener(
"reduceMotionChanged",
(enabled) => {
reduceMotion.value = enabled;
}
);
return () => subscription.remove();
}, []);



// Initial position
useEffect(() => {
translateY.value = withSpring(-(SCREEN_HEIGHT / 7), {
mass: 0.8,
damping: 20,
stiffness: 150,
});
}, []);



const ScrollTo = useCallback((dest: number) => {
"worklet";
translateY.value = reduceMotion.value
? dest
: withSpring(dest, {
mass: 0.8,
damping: 18,
stiffness: 180,
});
}, []);

useImperativeHandle(ref, () => ({ ScrollTo }), []);



  // Backdrop fade style
const bkdropstyle = useAnimatedStyle(() => {
return {
opacity: reduceMotion.value
? active.value
? 1
: 0
: withTiming(active.value ? 1 : 0, { duration: 300 }),
};
});

  // Chevron rotation style
const iconstyle = useAnimatedStyle(() => {
const rotation = reduceMotion.value ? active.value ? 180 : 0 : interpolate(rotY.value, [0, 1], [0, 180]);
return {
transform: [{ rotate: `${rotation}deg` }],
};
});

// Sheet position style
const anistyle = useAnimatedStyle(() => {
return {
transform: [{ translateY: translateY.value }],
};
});



// Pan gesture
const gesture = Gesture.Pan()
.onStart(() => {
context.value = { y: translateY.value };
})
.onUpdate((event) => {
active.value = true;
rotY.value = 1; // trigger rotate
translateY.value = event.translationY + context.value.y;
translateY.value = Math.max(translateY.value, - SCREEN_HEIGHT +200);
})
.onEnd((event) => {
// Decide final snap position
if (event.translationY < -50 && translateY.value <= -(SCREEN_HEIGHT / 7)) {
ScrollTo(-SCREEN_HEIGHT / 1.6);
} else if (
event.translationY > 50 &&
translateY.value > -(SCREEN_HEIGHT / 2)
) {
ScrollTo(-(SCREEN_HEIGHT / 7));
rotY.value = 0;
active.value = false;
}
});

return (
<>
<Animated.View
style={[
{ ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.6)" },
bkdropstyle,
]} animatedProps={aniprop}

/>
<GestureDetector gesture={gesture}>
<Animated.View
style={[
styles.bscontainer,
anistyle,
{
backgroundColor:
theme === "dark"
? ActiveColors.dark.cgrey
: ActiveColors.light.secondary,
height: HEIGHT,
top: HEIGHT,
},
]}
>
<View
style={[
styles.thead,
{
backgroundColor:
theme === "dark"
? ActiveColors.dark.sblue
: ActiveColors.light.sblue,
},
]}
>
<Text style={styles.ttext}>{title}</Text>
<Animated.View style={iconstyle}>
<Feather name="chevrons-up" size={15} color="azure" />
</Animated.View>
</View>

{/* Scrollable children */}
<ScrollView
style={styles.child}
contentContainerStyle={{ paddingBottom: 40 }}
showsVerticalScrollIndicator={false}
nestedScrollEnabled={true} // Important for Android
>
{children}
</ScrollView>
</Animated.View>
</GestureDetector>
</>
);
});





const styles = StyleSheet.create({
bscontainer: {
flex: 1,
borderRadius: 15,
width: "100%",
position: "absolute",
justifyContent: "flex-start",
alignItems: "center",
},
thead: {
flexDirection: "row",
columnGap: 10,
height: 50,
width: "100%",
justifyContent: "center",
alignItems: "center",
marginTop: 2,
marginBottom: 5,
borderRadius: 8,
},
ttext: {
fontSize: 17,
color: "azure",
},
child: {
flex: 1,
width: "100%",
},
});

export default CustomBsheet;