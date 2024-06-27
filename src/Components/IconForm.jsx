import {Image} from 'react-native';
import styles from '../Styles/main.js';

function IconForm() {
    return ( 
        <>
            <Image 
                style={styles.iconLogin}
                source={require('../../assets/LogoEco.png')}
            />
        </>
    );
}

export default IconForm;