import { StyleSheet, Dimensions } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 150,
        // paddingTop: 10,
        // height: WINDOW_HEIGHT
    },
    logo: {
        width: '80%',
    },
    logoImg: {
        resizeMode: 'stretch',
        width: '100%',
    },
    inputContainer: {
        width: '80%',
        marginTop: 10,
        marginBottom: 10,
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    button: {
        margin: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    buttonOutlineText: {
        color: 'blue',
        fontWeight: '700',
        fontSize: 16,
    },
});

export { styles }