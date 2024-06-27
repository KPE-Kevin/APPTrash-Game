import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import {View, Text, Image} from 'react-native'




function Upload({navigation}) {
    const [data, getData]= useState(0)
    const cargar= useCallback(()=>{
        for(let i = 0; i<=100; i++){
            setTimeout(()=>{getData(i)},i*25)
        }
        setTimeout(()=>{navigation.navigate('OptionCaLi')}, 100*25);
    })
    useEffect(()=>{
        cargar();
        
    },[])

    return ( 
        <View style={{width:"100%", backgroundColor:"#3A3838", height:"100%"}}>
            <Image 
                style={{width: 400, height: 400, marginTop:"50%"}}
                source={require('../../assets/LogoEco.png')}
            />
            <View style={{backgroundColor: "#AAAAAA", width:"100%", marginTop:"45.5%", height:"6%", borderRadius:10, position:"relative"}}>
                <View style={{backgroundColor: "#20892B", width:`${data}%`, height:"100%", borderRadius:10}}></View>
                <Text style={{position:"absolute", marginLeft: "42%", color:'#FFF', fontSize:30, marginTop:5}}>{data}%</Text>
            </View>
            <StatusBar style='auto'/>
        </View>
    );
}

export default Upload;