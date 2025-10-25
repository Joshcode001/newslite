


import {useEffect} from 'react'
import * as Linking from "expo-linking";
import { useRouter } from 'expo-router';




const useDeepLink = () => {

const router = useRouter()



useEffect(() => {

const handleDeepLink = (event:{url:string}) => {

const { path } = Linking.parse(event.url)


if (!path) {return} 

if (path.startsWith("article/")) {
const id = path.split("/")[1]

router.push({
pathname:"/disktwo/[pageii]",
params:{
pageii:id
}
})

}



}


const sub = Linking.addEventListener('url',handleDeepLink);

( async () => {
const initialUrl = await Linking.getInitialURL();
if (initialUrl) handleDeepLink({ url: initialUrl });
})();

return () => sub.remove();

},[router])




}

export default useDeepLink