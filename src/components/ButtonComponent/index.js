import React from "react"
import {
    View,
    StyleSheet,
    Text,
    TouchableWithoutFeedback
} from "react-native"

export default function GeneralButton ({title,onPress}) {
    return (
        <View style={Style.container} >
            <TouchableWithoutFeedback onPress={onPress} >
                <View style={Style.button} >
                    <Text style={Style.title} >{title}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const Style = StyleSheet.create ({
    container : {
        justifyContent : "center",
        width : 250
    },
    button : {
        paddingHorizontal : 10,
        backgroundColor : "#A9C851",
        elevation : 4,
        height : 40,
        borderRadius : 15,
        alignItems : "center",
        justifyContent : "center"
    },
    title : {
        fontSize : 18,
        fontWeight : "bold"
    }
})