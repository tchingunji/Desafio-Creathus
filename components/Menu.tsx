import { View, Image} from 'react-native'
import React from 'react' 

export default function Menu() {
    
  return (
    <View>
        <View style={{backgroundColor:"#13249F",padding:18}}>

        </View>
    <View style={{backgroundColor:"#fff", padding:"20px", flexDirection:"row", shadowColor:"#171717",shadowOffset: {width: -2, height: 4},shadowOpacity: 0.2,shadowRadius: 3,marginBottom:40}}>
        <Image source={ require('../imgs/menus.png') } style={{width:'32px',height:'32px', marginRight:"9px"}}/>
        <Image source={ require('../imgs/logo.png') } style={{width:'240px',height:'30px', marginRight:"8px"}}/>
        <Image source={ require('../imgs/profile.png') } style={{width:'32px',height:'32px'}}/>
    </View>
    </View>
  )
}