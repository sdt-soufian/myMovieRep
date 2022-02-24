import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { getOneFilm } from '../API/TMDBApi'

export default class FilmDetail extends Component {
    state = {
        film: undefined,
    }

    componentDidMount() {
        getOneFilm(this.props.navigation.state.params.setIdFilm).then(data => {
            this.setState({ film: data })

        });
    }

    componentWillUnmount() {
        console.log("is unmount");
    }

    _displayFilmContent = () => {
        if (this.state.film != undefined) {
            return (
                <Text> Film Name : {this.state.film.original_title}</Text>
            )
        }
    }

    render() {

        return (
            <View style={styles.main_container}>
                <Text> FilmDetail {this.props.navigation.state.params.setIdFilm} </Text>
                {this._displayFilmContent()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    }
})