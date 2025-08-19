import { View ,StyleSheet,FlatList, ViewToken} from "react-native";
import Animated, { AnimatedRef,  useSharedValue} from 'react-native-reanimated'
import React, {useContext} from 'react'
import Catitem from "./Catitem";
import { AuthContext } from "../utils/authContext";





type item = {
item: string,
color: string
}

type natag = {
router: any,
selectedC: string,
icon: string,
Ref: any,
isC?: string,
data: item[],
animatedRef:AnimatedRef<FlatList<any>>

}






const CustomNav = ({ router,selectedC,Ref, icon,  isC, data, animatedRef}:natag) => {

const {WIDTH} = useContext(AuthContext)
const Views = useSharedValue<ViewToken<item>[]>([])





return (

<View style={[styles.navcon, {width: WIDTH}]}>
<Animated.FlatList onViewableItemsChanged={({viewableItems}) => {Views.value = viewableItems}}  data={data} ref={animatedRef} renderItem={({item}) => <Catitem  item={item} Views={Views} router={router} selectedC={selectedC} Ref={Ref} icon={icon} isC={isC} category={item.item} color={item.color}/>} showsHorizontalScrollIndicator={false} horizontal={true}  />
</View>

)
}










export default CustomNav









const styles = StyleSheet.create({
nav: {
width:100,
justifyContent:'center',
alignItems: 'center',
marginHorizontal:20,
borderRadius: 20,
height:45,
shadowColor: '#000',
shadowOffset: {
width: 6,
height: 4,
},
shadowOpacity: 0.50,
shadowRadius: 4,
elevation: 10,
},

coloaz: {
color:'azure'
},

navcon:{
justifyContent:'center',
alignItems:'center',
alignContent:'center',
height:'100%'
}
})