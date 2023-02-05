import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
        map: {
        width: '100%',
        height: '100%',
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10,
        width: windowWidth,
        height: 20,
    },
    
});

export { styles };