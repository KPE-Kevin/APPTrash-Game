import { useState } from "react";

function useBool() {
    const [bool, getBool] = useState(true)

    const isTrue = () => {
        getBool(true)
    }

    const isFalse = () => {
        getBool(false)
    }

    return {
        bool,
        isTrue,
        isFalse
    };
}

export default useBool;