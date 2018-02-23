import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../styles.js')
const { View, TouchableHighlight, Text } = ReactNative;

class ListItem extends Component {
    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress}>
                <View style={styles.li}>
                    <Text style={styles.liText}>{this.props.item.title}</Text>
                    <Text style={styles.liValue}>${this.props.item.value}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

module.exports = ListItem;