
import { useWindowDimensions } from "react-native";



let SCREEN_WIDTH = useWindowDimensions().width
const BASE_WIDTH = 402




const scale = (size: number) => {

return (SCREEN_WIDTH / BASE_WIDTH) * size;
}





export const moderateScale = (size: number, factor = 0.5) => {

return size + (scale(size) - size) * factor;
}


