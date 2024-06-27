import { View, TouchableOpacity, Text} from 'react-native'

import {InputCompt, ButtonGoogle, ButtonForm, IconForm} from '../Components/AllComponents.jsx'

import styles from '../Styles/main.js';
import useLogin from '../Hooks/useLogin.js';
import useBool from '../Hooks/useBool.js';
import Validate from '../Controllers/ValidateData.js';
import HttpRequests from '../Controllers/HttpRequests.js'

function Input({navigation}) {
    
    const {dataLogin, GetEmail, GetPassword} = useLogin()
    const {bool, isFalse} = useBool()

    const verfLogin = async (_data) => {
        const validator = new Validate();
        const httpReq = new HttpRequests();
        let ask;
        if(validator.CheckSize(_data.email) && validator.CheckSize(_data.password)){
            ask = await httpReq.HttpReqServGET('FireBase/User', _data);
            console.log(ask);
            if(ask.IsCorrect) navigation.navigate('MainScreen');
        }else{
            isFalse()
        }
    }
    
    return (
        <View 
        style={styles.main}>
            
            <IconForm />

            <Text style={styles.error}>
                {bool ? '': "The email address or password are incorrect"}
            </Text>

            <InputCompt _text={'Email address'} _method={GetEmail} _watch={false} _value={dataLogin.email} />
            <InputCompt _text={'Password'} _method={GetPassword} _watch={true} _value={dataLogin.password}/>

            <TouchableOpacity 
                onPress={()=>{
                    navigation.navigate('ForgotPassword');
                }}
            >
                <Text
                    style={styles.hyperlink}
                >
                    Forgot password?
                </Text>
            </TouchableOpacity>

            <ButtonForm 
                _text='Login in' 
                _method={verfLogin} 
                _data={dataLogin}
            />

            <ButtonGoogle/>
        </View>
        );
}

export default Input;