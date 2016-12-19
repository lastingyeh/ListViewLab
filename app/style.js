import {
    StyleSheet,
}from 'react-native';
import Dimensions from 'Dimensions';

let {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    bookItem: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#AAAAAA',
        borderBottomWidth: 2,
        padding: 5
    },
    cover: {
        flex: 1,
        height: 150,
        resizeMode: 'contain'
    },
    info: {
        flex: 3,
        alignItems: 'flex-end',
        flexDirection: 'column',
        alignSelf: 'center',
        padding: 20
    },
    author: {
        fontSize: 18
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    sectionDivider: {
        padding: 8,
        backgroundColor: '#3385ff',
        alignItems: 'center',
        borderRadius: 5
    },
    headingText: {
        color: '#FFFFFF',
        fontSize: 24,
        alignSelf: 'center'
    },
    listView: {
        marginTop: 24
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingTop: 24,
    },
    fixedHeader: {
        fontSize: 26,
        color: '#0052cc',
        alignSelf: 'center',

    },
    footerText: {
        backgroundColor: '#FFFFFF',
        alignItems: 'flex-end',
        fontSize: 16
    },
    img: {
        position: 'absolute',
        top: height / 2 - 16,
        left: width / 2 - 16,
        zIndex: 1,
    }
});

export default styles;