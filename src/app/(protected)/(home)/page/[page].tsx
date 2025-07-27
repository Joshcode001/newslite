import { Text, View ,StyleSheet,TouchableOpacity, Modal,FlatList,ActivityIndicator} from "react-native";
import { Stack,useRouter,useLocalSearchParams } from "expo-router";
import React, {useState, useEffect,useRef, useContext} from "react";
import { Notifybar,Countrybar, CountryTag, Searchbar, Newsitem} from '..'
import { AuthContext} from "@/src/utils/authContext";
import { useAnimatedRef } from 'react-native-reanimated'
import CustomNav from "@/src/components/CustomNav";
import { ActiveColors } from "@/src/utils/color";





type res = {
title: string,
sourcen: string,
source_icon: string,
pubDate: string,
image_url: string,
description: string,
link: string,
article_id: string
}







const fifth = () => {
const animatedRef = useAnimatedRef<FlatList>()
const authState = useContext(AuthContext)
const [isLoading, setisLoading] = useState(false)
const {country, category, page}= useLocalSearchParams()
const Ref = useRef('')
const router = useRouter()
const [Post, setPost] = useState<res[]>([])
const [isActive, setisActive] = useState(true)
const [nextPage, setnextPage] = useState('')
const [Search, setSearch] = useState('')
const [IsModal, setIsModal] = useState('a')
const [selectedC, setSelectedC] = useState({
name: 'Select Country',
icon: 'wo'
})

let bcon:string = '';
let bates:string = '';
let belect:string = ''

if (typeof country === 'string') {
bcon = country
}
if (typeof category === 'string') {
bates = category;
}
if (typeof page === 'string') {
belect = page;
}






const cpick = () => {
setIsModal('b')
}
const notifymod = () => {
setIsModal('c')
}

const closeModal = () => {
setIsModal('a')
}



const data = authState.data
const theme = authState.theme
const api = authState.api


const newData = data.filter((item) => ((item.name).toLowerCase().includes(Search.toLowerCase())))






const getNewss = async (cty:string, cte:string, pn:string) => {
try {
setisLoading(true)
const resp = await api.post('/data/more' , {cty:cty, cte:cte , pn:pn})
const json = resp.data.json
setisLoading(false)
setnextPage(json.nextPage)
setPost(json.results)
} catch(err) {
console.log(err) 
}
}

useEffect(() => {
getNewss(bcon,bates,belect);
}, [])




return (
<View style={[styles.container, {width: authState.WIDTH}]}>
<Stack.Screen options={{
title: '',
headerRight: ()=> <Notifybar  onPressb={notifymod}/>,
headerLeft: () => <Countrybar onPressc={cpick} cicon={selectedC.icon} cname={selectedC.name}/>,
animation:'none',
}}/>
<View style={[styles.navbar,{backgroundColor:theme === 'dark' ? ActiveColors.dark.tertiary :ActiveColors.light.base},{width: authState.WIDTH}]}>
<CustomNav animatedRef={animatedRef} router={router} isActive={isActive}   data={authState.category}
selectedC={selectedC.name} Ref={Ref} icon={selectedC.icon}/>
</View>
<View style={[styles.content, {backgroundColor:theme === 'dark' ? ActiveColors.dark.base: ActiveColors.light.base},{width: authState.WIDTH}]}>
{isLoading ? (<ActivityIndicator animating={true} color='#15389A' size={60}/>) : (
<FlatList data={Post} renderItem={
({item}) => <Newsitem WIDTH={authState.WIDTH} title={item.title}  theme={theme}
source_icon={item.source_icon}
 image_url={item.image_url} description={item.description} 
pubDate={item.pubDate} article_id={item.article_id}/>
} keyExtractor={item => item.article_id}
ListFooterComponent={()=> <View style={[styles.foot,{backgroundColor:theme === 'dark' ? ActiveColors.dark.accent :ActiveColors.light.tertiary},{width: authState.WIDTH}]}>
<TouchableOpacity  disabled={nextPage === null}
onPress={() => {
router.push({
pathname: './[page]',
params:{
country:bcon,
category: bates,
page:nextPage
}

})
}}>
<Text style={[{color: theme === 'dark' ? ActiveColors.light.primary: ActiveColors.dark.base }, styles.loadtxt]}>Load More...</Text>
</TouchableOpacity>
</View> }/>
)}
<View style={styles.emptyvw}>
</View>
</View>


<Modal visible={IsModal === 'b'} animationType="slide"
onRequestClose={()=> {setIsModal('a')}} presentationStyle="pageSheet">
<View style={[styles.centeredView,{backgroundColor:theme === 'dark' ? ActiveColors.dark.accent : ActiveColors.light.accent},{width: authState.WIDTH}]}>
<Searchbar  search={Search} setSearch={setSearch} theme={theme}/>
<View style={[styles.modalView, {backgroundColor:theme === 'dark' ? ActiveColors.dark.dpink :  ActiveColors.light.dpink}, {width:authState.WIDTH / 2.2}, {height:authState.HEIGHT -  200}]}>
<FlatList  data={newData} renderItem={({item}) => 
<CountryTag theme={theme} cname={item.name} icon={item.icon} onPressc={
() => {
setSelectedC({
name: item.name,
icon: item.icon
});
closeModal();
setSearch('');
setisActive(false)
} }/>
} keyExtractor={item => item.icon}/>
</View>
</View>
</Modal>

<Modal visible={IsModal === 'c'} animationType="slide"
onRequestClose={()=> {setIsModal('a')}} presentationStyle="pageSheet">
<View style={[styles.centeredView,{backgroundColor:theme === 'dark' ? ActiveColors.dark.accent :ActiveColors.light.accent}, {width: authState.WIDTH}]}>
<View style={[styles.modalView, {backgroundColor:theme === 'dark' ? ActiveColors.dark.dpink :  ActiveColors.light.dpink},{width:authState.WIDTH / 2.2}, {height:authState.HEIGHT -  200}]}>
<Text>Hi there!</Text>
</View>
</View>
</Modal>
</View>
);
}





export default fifth






const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
alignItems: "center",
},


centeredView: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},


modalView: {
borderRadius: 30,
alignItems: 'center',
shadowColor: '#000',
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4,
elevation: 5,
},


navbar: {
flex: 0.8,
justifyContent: 'center',
alignItems:'center',
},


content: {
flex: 9.2,
maxHeight:2000,
justifyContent: 'center',
alignItems:'center',
alignContent:'center'
},


foot: {
height:50,
justifyContent: 'center',
alignItems:'center',
},


image2: {
width: 60,
height: 60,
},




emptyvw: {
width:"100%",
padding:40,
height:50
},




loadtxt:{
width:'100%',
justifyContent:'center',
alignItems:'center'
}
})