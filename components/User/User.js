import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function User({user}) {
    return (
        <View style={styles.container}>
            <Text>This is an user - {user.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: 'purple',
        margin: 5,
        padding: 2,
        borderRadius: 5
    }
})
