import {TouchableOpacity, Text} from 'react-native';
import Request from '../Controllers/HttpRequests'

function ButtonForm({_text, _method=()=>{}, _data}) {
    const apiRest = new Request();
    return ( 
    <>
        <TouchableOpacity 
            style={styles.buttonMain}
            onPress={()=>{
                _method(_data)
            }}
        >
            <Text>{_text}</Text>
        </TouchableOpacity>
    </> 
    );
}

export default ButtonForm;