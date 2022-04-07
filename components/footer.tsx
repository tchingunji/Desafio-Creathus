import { View, Text, Image } from 'react-native'
import React from 'react'

export default function footer() {
  return (
    <View style={{backgroundColor:"#B3B6B7"}}>
        <View style={{padding:40}}>            
            <Text style={{marginLeft:70,marginBottom:20}}>Outros Links</Text>    
            <View style={{flexDirection:"row", justifyContent:"center"}}>
                <Image source={ require('../imgs/instagram.png') } style={{width:'25px',height:'25px',justifyContent:"center",marginLeft:20}}/>  
                <Image source={ require('../imgs/facebook.png') } style={{width:'25px',height:'25px',justifyContent:"center",marginLeft:20}}/>  
                <Image source={ require('../imgs/linkedin.png') } style={{width:'25px',height:'25px',justifyContent:"center",marginLeft:20}}/>  
                <Image source={ require('../imgs/email.png') } style={{width:'25px',height:'25px',justifyContent:"center",marginLeft:20}}/>  
            </View>            
        </View>    
        <Text style={{color:"#7C8487",marginBottom:17}}>SungElectronics 2022. All Rights Reserved</Text>    
    </View>
  )
}