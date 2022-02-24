// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { getImageFromApi } from '../API/TMDBApi'

class FilmItem extends React.Component {
    banana = this.props.film
    //filmDetail = this.props.getIdFilm

    _showId = () => this.props.getIdFilm(this.banana.id)

    render() {
        //const banana = this.props.banana
        return (
            <TouchableOpacity style={styles.main_container} onPress={this._showId}>
                <Image
                    style={styles.image}
                    source={{ uri: getImageFromApi(this.banana.poster_path) }}
                />
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.title_text}>{this.banana.original_title}</Text>
                        <Text style={styles.vote_text}>{this.banana.vote_average}</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text} numberOfLines={6}>{this.banana.overview}</Text>
                        {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
                    </View>
                    <View style={styles.date_container}>
                        <Text style={styles.date_text}>{this.banana.release_date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: '#80847c',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,

        elevation: 0,
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'grey'

    },
    content_container: {
        flex: 1,
        margin: 5
    },
    header_container: {
        flex: 3,
        flexDirection: 'row'
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    vote_text: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
    },
    description_container: {
        flex: 7
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666'
    },
    date_container: {
        flex: 1,

    },
    date_text: {
        textAlign: 'right',
        fontSize: 14
    }
})

export default FilmItem