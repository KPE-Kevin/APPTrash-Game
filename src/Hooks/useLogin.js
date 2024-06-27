import { useState } from "react";

function useLogin() {
    const objLogin = {
        email: '',
        password: ''
    }
    const [dataLogin, getDataLogin] = useState(objLogin)

    const GetEmail = (data) => {
        getDataLogin({
            ...dataLogin,
            email: data
        })
    }

    const GetPassword = (data) => {
        getDataLogin({
            ...dataLogin,
            password: data
        })
    }

    return { dataLogin, GetEmail, GetPassword };
}

export default useLogin;