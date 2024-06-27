import { useState } from "react";


function useCreateAccount() {
    const obj = {
        name: null,
        lastName: null,
        email: null,
        password: null,
        verifPassword: null
    };
    const [info, setInfo] = useState(obj)

    const setName = (data) => {
        setInfo({ ...info, name: data });
    }

    const setLastName = (data) => {
        setInfo({ ...info, lastName: data });
    }

    const setEmail = (data) => {
        setInfo({ ...info, email: data });
    }

    const setPassword = (data) => {
        setInfo({ ...info, password: data });
    }

    const setVerifPassword = (data) => {
        setInfo({ ...info, verifPassword: data });
    }

    return { info, setName, setLastName, setEmail, setPassword, setVerifPassword };
}

export default useCreateAccount;