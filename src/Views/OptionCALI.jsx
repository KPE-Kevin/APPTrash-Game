import { View, Image , TouchableOpacity, StyleSheet, Text, Button} from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles/main.js'

function OptionCaLi({navigation}) {
    return ( <View style={styles.main}>
                <Image 
                style={styles.iconLogin}
                source={require('../../assets/LogoEco.png')}
            />
            <TouchableOpacity 
                style={stylesButtons.ButtonLI} 
                onPress={()=>{navigation.navigate('Login')}}
            >
                <Text>Iniciar sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={stylesButtons.ButtonCA}
                onPress={()=>{navigation.navigate('CreateAccount')}}
            >
                <Text>Registrarse</Text>
            </TouchableOpacity>
            <StatusBar style='auto'/>
    </View> );
}

const stylesButtons = StyleSheet.create({
    ButtonLI:{
        width:350,
        height:60,
        backgroundColor:'#20892B',
        borderRadius:30,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        },
        ButtonCA:{
            width:350,
            height:60,
            backgroundColor:'#FFFCFC',
            borderRadius:30,
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            },
})
export default OptionCaLi;