// Components/Search.js

import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, FlatList, ActivityIndicator } from 'react-native'
import data from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'


class Search extends React.Component {
    page = 0
    totalePages = 0
    state = {
        films: [],
        textSearch: " ",
        isLoading: false,
    }



    _searchText(text) {
        this.setState({ textSearch: text })
    }

    _loadFilms = () => {
        if (this.state.textSearch.length > 0) {
            this.setState({ isLoading: true })
            getFilmsFromApiWithSearchedText(this.state.textSearch, this.page + 1).then(data => {
                this.page = data.page
                this.totalePages = data.total_pages
                this.setState({ films: [...this.state.films, ...data.results], isLoading: false })
            });
            //this.setState({ textSearch: " " })
        }

    }

    _searchFilms = () => {
        this.page = 0
        this.totalePages = 0
        this.setState({ films: [] }, () => {
            console.log(this.state.films.length)
            this._loadFilms()

        })
    }


    _setText = (textInput) => {
        this._searchText(textInput)
    }

    _getId = (id) => console.log(`Detail Film : ${id}`)

    render() {
        console.log(this.state.isLoading);
        return (
            <View style={styles.main_container}>
                <Text style={styles.titleText}>
                    Chercher un film
                </Text>
                <TextInput style={styles.textinput}
                    //value={this.state.textSearch}
                    onChangeText={(filmName) => { this._setText(filmName) }}
                    onSubmitEditing={() => this._loadFilms()}
                    placeholder='Titre du film'
                />
                <Button title="Rechercher" color='#e76526' onPress={() => this._searchFilms()} />

                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <FilmItem film={item} getIdFilm={this._getId} />}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if (this.page < this.totalePages) {
                            this._loadFilms()
                        }
                    }
                    }
                />
                {this.state.isLoading ?
                    <View style={styles.load_container}>
                        <ActivityIndicator size="large" color="#a9a9a9" />
                    </View> :
                    null
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20

    },
    textinput: {
        borderWidth: 1,
        borderColor: '#80847c',
        borderRadius: 5,
        marginBottom: 10,
        padding: 10,
    },
    titleText: {
        color: '#808080',
        fontSize: 20,
        fontWeight: "bold",
        //textAlign: 'center',
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }

})
export default Search