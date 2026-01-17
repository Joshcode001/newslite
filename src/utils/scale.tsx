
import { useWindowDimensions } from "react-native";



let SCREEN_WIDTH = useWindowDimensions().width
let SCREEN_HEIGHT = useWindowDimensions().height
const BASE_WIDTH = 402
const BASE_HEIGHT = SCREEN_HEIGHT



const scale = (size: number) => {

return (SCREEN_WIDTH / BASE_WIDTH) * size;
}


const verticalScale = (size: number) => {

return (SCREEN_HEIGHT / BASE_HEIGHT) * size;
}






export const moderateScale = (size: number, factor = 0.5) => {

return size + (scale(size) - size) * factor;
}


export const moderateVerticalScale = (size: number, factor = 0.5) => {

return size + (verticalScale(size) - size) * factor;
}



export const vh = (percent: number) => {

return (BASE_HEIGHT * percent) / 100;
}
