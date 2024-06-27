import {TextInput, View, Text} from 'react-native';
import styles from '../Styles/main.js';


function InputCompt({_text = '', _method = ()=>{}, _watch=false, _error ='', _value}) {
    

    return (
        <View>
            <TextInput 
                placeholder={_text}
                onChangeText={_method}  
                value = {_value} 
                style={styles.input}
                secureTextEntry={_watch}
            />
            <Text style={styles.error}>{_error}</Text>
        </View>
    );
}


export default InputCompt;
