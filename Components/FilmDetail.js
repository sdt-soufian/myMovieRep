import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getOneFilm, getImageFromApi } from '../API/TMDBApi'
import moment from 'moment';

export default class FilmDetail extends Component {
    state = {
        film: undefined,
    }



    getInfo = () => {
        chaine = " "
        this.state.film.production_companies.map(elem => chaine += " * Name : " + elem.name + " \n Origin Country : " + elem.origin_country + "\n")
        return chaine
    }

    filmGenre = () => {
        chaine = " "
        this.state.film.genres.map(elem => chaine += elem.name + "/")
        return chaine.slice(0, chaine.length - 1)
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
                <ScrollView style={styles.scrollview_container}>

                    <Image
                        style={styles.image_view}
                        source={{ uri: getImageFromApi(this.state.film.poster_path) }}
                    />
                    <View>
                        <Text style={styles.title_style}> Film Name : {this.state.film.original_title}</Text>
                        <Text style={styles.overview_style}>
                            Overview: {`\n${this.state.film.overview}`}
                        </Text>
                        <View style={{ flex: 1, flexDirection: 'row', padding: 8 }}>
                            <Text style={{ flex: 1, fontSize: 14 }}>Original Language : {this.state.film.original_language}</Text>
                            <Text style={{ flex: 1, fontSize: 14 }}>Release Date : {moment(new Date(this.state.film.release_date)).format('DD/MM/YYYY')}</Text>
                        </View>
                        <Text style={styles.overview_style}> Genres :
                            {this.filmGenre()}
                        </Text>
                        <Text>
                            Production Companie(s) :{`\n${this.getInfo()}`}
                        </Text>
                    </View>


                </ScrollView>

            )
        }
    }

    render() {

        return (
            <View style={styles.main_container}>
                {this._displayFilmContent()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    scrollview_container: {
        flex: 1,
    },
    image_view: {
        flex: 1,
        width: '100%',
        height: 350,
        resizeMode: 'contain',
        borderWidth: 1,
        borderColor: 'red',
        padding: 20,
        // backgroundColor: 'orange',
    },
    title_style: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    overview_style: {
        fontSize: 15,
        padding: 15,
        textAlign: 'justify',
        fontStyle: 'italic',
        color: 'grey',
    }
})