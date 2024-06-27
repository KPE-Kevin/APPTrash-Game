import { StyleSheet } from 'react-native';


export default styles = StyleSheet.create(
    {
        main: {
            backgroundColor: '#3A3838',
            display: 'flex',
            justifyContent: 'space-evenly',
            width: "100%",
            height: "100%",
            alignItems: 'center',
            padding: 30
        },
        input: {
            height: 45,
            width: 300,
            borderWidth: 1,
            padding: 10,
            backgroundColor: "#FFFCFC",
            borderRadius: 16
        },
        iconLogin: {
            width: 175,
            height: 175
        },
        buttonGoogle: {
            width: 300,
            height: 45,
            alignItems: 'center',
            backgroundColor: '#FFFCFC',
            justifyContent: 'space-evenly',
            display: 'flex',
            flexDirection: 'row',
            borderRadius: 16
        },
        buttonMain: {
            width: 300,
            height: 45,
            alignItems: 'center',
            backgroundColor: '#20892B',
            justifyContent: 'space-evenly',
            display: 'flex',
            flexDirection: 'row',
            borderRadius: 16
        },
        iconGoogle: {
            width: 20,
            height: 20
        },
        hyperlink: {
            color: '#BDE9DC',
            textDecorationLine: 'underline'
        },
        error: {
            color: "#FE6B6B",
            margin: 0
        }
    }
)