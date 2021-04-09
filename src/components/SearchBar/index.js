import React from 'react'
import { 
    View,
    StyleSheet,
    TextInput,
    useWindowDimensions
} from 'react-native'
import { ICSearchs } from '../../assets'


export default function SearchBar ({search,onChangeText}) {
    const wp = useWindowDimensions().width
    return(
       <View style={[{
           width : wp*0.9, 
           marginLeft : wp*0.05},
           Style.container
        ]}>
           <View style={Style.icon} >
                <ICSearchs/>
           </View>
           <TextInput 
            onChangeText={onChangeText}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="Search"
            style={Style.input}/>
       </View>
    )
   }

const Style = StyleSheet.create ({
    container : {
        flexDirection : "row",
        backgroundColor : "white",
        borderRadius : 10,
        height : 50,
        alignContent : "center"
    },
    icon : {
        justifyContent : "center",
        marginHorizontal : 10
    },
    input : {
        width : "85%",
        fontSize : 20
    }
})