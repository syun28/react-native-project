import {StyleSheet} from 'react-native';
const constants = {
    actionColor: '#24CE84'
};

let styles = StyleSheet.create({
    container: {
        backgroundColor: '#f1f1f1',
        flex: 1,
    },
    listview: {
        flex: 1,
    },
    li: {
        backgroundColor: '#fff',
        borderBottomColor: '#eee',
        borderColor: 'transparent',
        borderWidth: 1,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 14,
        paddingBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    liContainer: {
        flex: 2,
    },
    liText: {
        color: '#333',
        fontSize: 16,
    },
    liValue: {
        color: '#333',
        fontSize: 16,
    },
    navbar: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomColor: '#eee',
        borderColor: 'transparent',
        borderWidth: 1,
        justifyContent: 'center',
        height: 44,
        flexDirection: 'row',
    },
    navbarTitle: {
        color: '#444',
        fontSize: 16,
        fontWeight: "500"
    },
    navbarValue: {
        color: '#444',
        fontSize: 16,
        fontWeight: "500"
    },
    statusbar: {
        backgroundColor: '#fff',
        height: 22,
    },
    center: {
        textAlign: 'center',
    },
    actionText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    action: {
        backgroundColor: constants.actionColor,
        borderColor: 'transparent',
        borderWidth: 1,
        paddingLeft: 16,
        paddingTop: 14,
        paddingBottom: 16,
    },
});

module.exports = styles;
module.exports.constants = constants;