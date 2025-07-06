import { View, Text,StyleSheet,TextInput,TouchableOpacity, ScrollView ,FlatList, ActivityIndicator, Keyboard} from 'react-native'
import React, {useRef, useState, useContext}  from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomBsheet from '@/src/components/CustomBsheet';
import { Image } from 'expo-image';
import { Newsitem} from '../(home)';
import { Router, useRouter } from 'expo-router';
import { AuthContext } from '@/src/utils/authContext';





type sbox = { 
image: string,
total: string,
name: string,
router: Router,
cate: string
}


type props  = 
{
_id: string,
fname: string,
category: string,
image: string,
total: string
}



type boxt = {
data: props[],
title: string,
router: Router,
theme: string,
WIDTH: number
}



type sbar = {
setsearch : React.Dispatch<React.SetStateAction<string>>,
search: string,
getSdata: (prop: string) => Promise<void>,
setisLoading: React.Dispatch<React.SetStateAction<boolean>>,
theme: string,
WIDTH: number
}



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






export const SearchBar = ({setsearch, search, getSdata, setisLoading, theme, WIDTH}: sbar) => (
<View style={[styles.searchbox, {width:WIDTH / 2}]}>
<TextInput style={[styles.input,{backgroundColor:theme ==='dark' ? '#363636': '#B0ADAD'},{width:WIDTH / 2}]} placeholder="write here"  value={search} onChangeText={text => setsearch(text)} 
onFocus={() =>{ setsearch('')
setisLoading(true)
}} />
<TouchableOpacity style={[styles.buttonbox,{backgroundColor:theme === 'dark'?'#0b4a2f':'#7fd1ae'}]} disabled={search === ''}
onPress={() => {
getSdata(search)
Keyboard.dismiss()
}}>
<FontAwesome5 name="search" size={24} color="azure" />
</TouchableOpacity>
</View>
)





const Sbox = ({image, total, name, router, cate}:sbox) => (
<TouchableOpacity onPress={() => {
router.push({
pathname:'./quick/[name]',
params:{
name:name,
category: cate,
image: image
}
})
}}>
<View style={styles.sbox}>
<View style={styles.scle}>
<Image  source={image} style={{width:80, height:80, borderRadius:50}} contentFit='cover'/>
</View>
<Text style={styles.boxtext}>{total} pages</Text>
</View>
</TouchableOpacity>

)









export const Stab = ({data, title, router, theme, WIDTH}:boxt) => (
<View style={[styles.stab, {backgroundColor: theme === 'dark' ?'#402306': '#8a4e12' }, {width:WIDTH / 2.2}]}>
<Text style={styles.stabtext}>{title}</Text>
<View style={styles.scard}>
<FlatList data={data} renderItem={({item}) => <Sbox image={item.image} total={item.total} router={router} name={item.fname} cate={item.category} />} keyExtractor={item => item._id} horizontal={true} showsHorizontalScrollIndicator={false}/>
</View>
</View>
)









const second = () => {
const authState = useContext(AuthContext)
const router = useRouter()
const [result, setresult] = useState<res[]>([])
const [isLoading, setisLoading] = useState(false)
const [isDom, setisDom] = useState(true)
const [nextPage, setnextPage] = useState('')
const [search, setsearch] = useState('')
const Ref = useRef<any>(null)
const title = `Today's Global Searches`
const {theme, WIDTH} = authState




const getSdata = async (prop: string) => {
setisDom(false)
setisLoading(true)
try {
const data = await fetch(`https://newsdata.io/api/1/latest?image=1&qInTitle=${prop}`, {
method: 'GET',
headers: {
'X-ACCESS-KEY': 'pub_69410d56c49515d9f48a36495db4edf051d57',
'User-Agent': 'Joshapp/1.0'
}
})
const json = await data.json()
setnextPage(json.nextPage)
setresult(json.results)
setisLoading(false)
} catch (err) {
console.log(err)
}
}






return (
<GestureHandlerRootView style={{flex: 1}}>
<View style={[styles.container, {width: WIDTH}]}>
<View style={[styles.head, {backgroundColor:theme === 'dark' ? '#021526':'#20394f' }]}>
<SearchBar WIDTH={WIDTH} search={search} setsearch={setsearch} getSdata={getSdata} setisLoading={setisLoading} theme={theme} />
</View>

<View style={[styles.content, {backgroundColor:theme === 'dark' ? '#1b1c1c' :'#dedcdc'}, {width: WIDTH}]}>

{
(isDom) ? (<Text style={{color:theme === 'dark' ? 'azure' : 'grey'}}>Joshua's Search Engine</Text>) :
(isLoading) ? (<ActivityIndicator />) : 
(result.length === 0) ? (<Text>{search} is not Trending at this Hour, Check Later</Text>) :
(<FlatList data={result}  renderItem={({item}) => (
<Newsitem WIDTH={WIDTH} title={item.title} theme={theme}
source_icon={item.source_icon}
image_url={item.image_url} description={item.description} 
pubDate={item.pubDate} article_id={item.article_id}/>)} keyExtractor={item => item.article_id}
ListFooterComponent={()=> (
<View style={[styles.foot,{backgroundColor:theme === 'dark' ? '#383838' :'white'}, {width: WIDTH}]}>
<TouchableOpacity disabled={nextPage === null} onPress={()=> {
router.push({
pathname: './[paged]',
params: {
props:search,
paged:nextPage

}
})
}}>
<Text style={[{color: theme === 'dark' ?'azure':'#1b1c1c' },styles.loadtxt]}>Load More...</Text>
</TouchableOpacity>
</View>)}
/>)

}
</View>

<View style={styles.emptyvw}>
</View>

</View>
<CustomBsheet  Ref={Ref} title={title} >
<View style={[styles.child, {backgroundColor:theme === 'dark' ?'#5e5e5e':'#EAE8E8'}]}>
<ScrollView  nestedScrollEnabled={true} scrollEnabled={true} showsVerticalScrollIndicator={false}>
<Stab  theme={theme} data={authState.listp} router={router} title='Popular People!' WIDTH={WIDTH}/>
<Stab theme={theme} data={authState.lists} router={router} title='Popular Sources!' WIDTH={WIDTH}/>
<Stab theme={theme} data={authState.listc} router={router} title='Popular CryptoCoins!' WIDTH={WIDTH}/>
<Stab theme={theme} data={authState.listt} router={router} title='Popular Teams!' WIDTH={WIDTH}/>

</ScrollView>
</View>

</CustomBsheet>
</GestureHandlerRootView>
)
}

export default second



















const styles = StyleSheet.create({

container: {
flex: 1,
justifyContent: "center",
alignItems: "center",
backgroundColor:'#EDEDED'
},

head: {
flex:1.7,
justifyContent: "center",
alignItems: "center",
width:'100%'
},

content: {
flex:8.3,
justifyContent: "center",
alignItems: "center",
maxHeight:2000,
alignContent:'center'
},

searchbox: {
flexDirection:'row',
justifyContent: "center",
alignItems: "flex-end",
height:150,
columnGap:10,
paddingBottom:20
},

input: {
justifyContent: "center",
alignItems: "center",
height:50,
borderRadius:50,
textAlign:'center',
color:'azure',
fontSize:22,
marginRight:8
},


button: {
justifyContent: "center",
alignItems: "center",
},

buttonbox: {
justifyContent: "center",
alignItems: "center",
padding:10,
marginBottom:2
},

child: {
 flex:1,
height:700,
width:'100%',
justifyContent:'center',
alignItems:'center',
marginTop:30
},


scard:{
width: '100%',
height: 200,
justifyContent:'center',
alignItems:'center',
}, 

scle:{
width: 80,
height: 80,
borderRadius:'50%',
backgroundColor:'white',
margin:10,
},

stab: {
marginRight:8,
height: 300,
justifyContent:'flex-end',
alignItems:'center',
flexDirection:'column',
rowGap:20,
marginTop:10,
borderRadius:25,
marginBottom:20,
shadowColor: '#000',
shadowOffset: {
width: 8,
height: 6,
},
shadowOpacity: 0.50,
shadowRadius: 4,
elevation: 10
},

stabtext: {
fontSize: 26,
color: 'azure',
alignSelf:'flex-start',
paddingLeft:6
},

sbox:{
width: 100,
flexDirection:'column',
justifyContent:'center',
alignItems:'center',
},

boxtext: {
fontSize:10,
color:'azure', 
},


foot: {
height:50,
justifyContent: 'center',
alignItems:'center',
marginBottom:5
},

emptyvw: {
width:"100%",
padding:40,
height:50
},

loadtxt:{
width:"100%",
justifyContent:'center',
alignItems:'center'
}

})