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
        flexWrap: 'wrap'
    },
    liContainer: {
        flex: 2,
    },
    liText: {
        color: '#333',
        fontSize: 16,
        flex: 0.5

    },
    liValue: {
        color: '#333',
        fontSize: 16,
        flex: 0.5,
        textAlign: 'right'
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
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 16,
        paddingTop: 14,
        paddingBottom: 16,
    },
    disabled: {
        backgroundColor: '#adadad',
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 16,
        paddingTop: 14,
        paddingBottom: 16,
        color: '#000'
    },
    limitSafe: {
        borderBottomColor: '#eee',
        borderWidth: 1,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 14,
        paddingBottom: 16,
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#02ce16'
    },
    limitWarning: {
        borderBottomColor: '#eee',
        borderWidth: 1,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 14,
        paddingBottom: 16,
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#fff600'
    },
    limitDanger: {
        borderBottomColor: '#eee',
        borderWidth: 1,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 14,
        paddingBottom: 16,
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#ff0000'
    }
});

module.exports = styles;
module.exports.constants = constants;