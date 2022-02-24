import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class FilmDetail extends Component {


    render() {
        return (
            <View style={styles.main_container}>
                <Text> FilmDetail </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    }
})