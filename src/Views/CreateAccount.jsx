import { View } from "react-native";
import styles from '../Styles/main.js';
import {IconForm, InputCompt, ButtonForm, ButtonGoogle} from '../Components/AllComponents.jsx';
import HttpRequests from '../Controllers/HttpRequests.js';
import useCreateAccount from "../Hooks/useCreateAccount.js";
import ValidateData from '../Controllers/ValidateData.js';


function CreateAccount() {
    const req = new HttpRequests();
    const verf = new ValidateData
    const { info, setName, setLastName, setEmail, setPassword, setVerifPassword } = useCreateAccount();

    const VerificarDatos =()=>{
        if(verf.CheckSize(info.name) && 
        verf.CheckSize(info.lastName) && 
        verf.CheckSize(info.email) &&
        verf.CheckSize(info.password) &&
        verf.CheckSize(info.verifPassword)){

        }
    }
    const Register = async ()=>{
        let ask;
        // if()
        ask = await req.HttpReqServPOST('FireBase/User',info);
        console.log(info)
    }


    return ( 
        <View style={styles.main}>
            <IconForm />
            <InputCompt 
                _text='Name(s)'
                _method={setName}
                _value={info.name}
            />
            <InputCompt 
                _text='Last Name'
                _method={setLastName}
                _value={info.lastName}
            />
            <InputCompt 
                _text='Email address'
                _method={setEmail}
                _value={info.email}
            />
            <InputCompt 
                _text='Password' 
                _method={setPassword}
                _value={info.password}
                _watch={true}
            />
            <InputCompt 
                _text='Confirm Password' 
                _method={setVerifPassword}
                _value={info.verifPassword}
                _watch={true}
            />
            <ButtonForm _text='Registrar' _method={Register}/>
            <ButtonGoogle />
        </View>
    );
}

export default CreateAccount;