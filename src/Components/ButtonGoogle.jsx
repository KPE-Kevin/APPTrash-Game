import {TouchableOpacity, Image, Text} from 'react-native';
import styles from '../Styles/main.js';

function ButtonGoogle() {
    return ( 
        <>
            <TouchableOpacity 
                style={styles.buttonGoogle}
                onPress={()=>{}}
            >
                <Image 
                        style={styles.iconGoogle}
                        source={require('../../assets/IconGoogle.png')}
                />
                <Text>
                    CONTINUE WITH GOOGLE
                </Text>
            </TouchableOpacity>
        </> 
    );
}

export default ButtonGoogle;