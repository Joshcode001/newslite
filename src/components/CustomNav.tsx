

import { View ,StyleSheet,FlatList, ViewToken,ListRenderItem} from "react-native";
import Animated, { AnimatedRef,  useSharedValue,useDerivedValue,scrollTo, withTiming} from 'react-native-reanimated'
import React, {useCallback, useContext,useEffect} from 'react'
import Catitem from "./Catitem";
import { AuthContext } from "../utils/authContext";
import { category } from "../utils/dataset";
import { Colors } from "../utils/color";


type langobj = {
en:string,
fr:string,
de:string,
ar:string,
es:string,
tr:string,
nl:string,
it:string,
ja:string,
zh:string,
ko:string,
hi:string,
pt:string,
ru:string,
sw:string,
pl:string,
id:string,
fa:string,
pa:string,
uk:string,
ro:string,
tl:string,

}



type item = {
item: langobj,
id: string
}



type natag = {
animatedRef:AnimatedRef<FlatList<any>>,
setelyCount:React.Dispatch<React.SetStateAction<number>>
}






const CustomNav = ({animatedRef,setelyCount}:natag) => {

const {theme,clickCategory,isClick,shouldScroll,setshouldScroll} = useContext(AuthContext)
const Views = useSharedValue<ViewToken<item>[]>([])

const scrollX = useSharedValue(0);


useDerivedValue(() => {
scrollTo(
animatedRef,
scrollX.value,
0,
true
);
});








useEffect(() => {

if (shouldScroll === true) {
scrollX.value = withTiming(1)
}else if (shouldScroll === false){
scrollX.value = 0
}

setshouldScroll(false)

},[shouldScroll])






return (

<View style={[styles.navcon,{backgroundColor:theme === 'dark' ? Colors.dark.base : Colors.light.base}]}>
<Animated.FlatList getItemLayout={(data,index) => ({length:115,offset:115 * index,index})} onViewableItemsChanged={({viewableItems}) => {Views.value = viewableItems}}  data={category} ref={animatedRef} renderItem={({item}) => <Catitem setelyCount={setelyCount} isClick={isClick} clickCategory={clickCategory}  item={item} Views={Views}/>} showsHorizontalScrollIndicator={false} horizontal={true}  />
</View>

)
}










export default CustomNav









const styles = StyleSheet.create({

navcon:{
justifyContent:'center',
alignItems:'center',
height:'100%',
width:'100%'
}
})