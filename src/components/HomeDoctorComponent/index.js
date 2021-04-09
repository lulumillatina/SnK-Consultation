import React from "react"
import {
    View,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    Image
} from "react-native"

export default function HomeDoctor ({link,onPress,doctorName}) {
    return (
        <View style={Style.container}>
        <TouchableWithoutFeedback onPress={onPress} >
            <View>
            <View style={Style.photoProfileBox}>
                <Image source={{uri : link}} style={Style.photoProfile}/>
            </View>
            <View style={Style.description} >
                <Text style={Style.doctorName} >dr. {doctorName}</Text>
                <Text style={Style.specialist} >Peditriacian</Text>
            </View>
            </View>
        </TouchableWithoutFeedback>
        </View>
    )
}

const Style = StyleSheet.create ({
    container : {
        width : 105,
        marginHorizontal : 5,
        marginBottom : 10,
        padding : 5,
        justifyContent : "center"
    },
    photoProfileBox : {
        alignItems : "center"
    },
    photoProfile : {
        width : 80,
        height : 80,
        borderRadius : 80,
        backgroundColor : "#C4C4C4"
    },
    description : {
        alignItems : "center"
    },
    doctorName : {
        fontSize : 17,
        textAlign : "center"
    },
    specialist : {
        color : "#7CA508",
        fontSize : 14
    }
})