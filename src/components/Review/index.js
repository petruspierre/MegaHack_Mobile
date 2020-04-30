import React from 'react'

import {View, Text, Image, TouchableOpacity} from 'react-native'
import styles from './styles'

import commonStyles from '../../commonStyles'

export default function Review(props) {
    return (
        <View style={styles.container}>
            <View style={styles.profileInfo}>
                <View style={styles.bordinhaImagem}>
                    <Image style={styles.profileImage} source={{uri: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"}} />
                </View>
                <View style={{justifyContent: "center"}}>
                    <Text style={styles.nameProfile}>{props.name}</Text>
                    <Text style={styles.shopProfile}>{props.shop}</Text>
                </View>
            </View>
            <Text style={styles.reviewText}>{props.review}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Fale com {props.name}</Text>
            </TouchableOpacity>
        </View>
    )
}