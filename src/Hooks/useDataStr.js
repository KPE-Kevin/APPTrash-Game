import { useState } from 'react'

function useDataStr() {
    const [data, getData] = useState('');

    return { data, getData };
}

export default useDataStr;