import React from "react"
import {
    View,
    StyleSheet,
    Text,
    useWindowDimensions,
    ImageBackground,
    ScrollView,
    TouchableWithoutFeedback,
    Linking,
    Image
} from "react-native"
import { 
    ICBack, 
    IMBackgroundProfile 
} from "../../assets"
import { 
    GeneralButton,
    Gap 
} from "../../components"

export default function ProfilePage ({route,navigation}) {
    const hp = useWindowDimensions().height
    const wp = useWindowDimensions().width
    const {avatar, doctorName} = route.params
    const WhatsAppChat = () => {
        let msg = "Hi, I’d like to make an appointment for dr." + doctorName + " today"
        let phone = "81216778692"
        let url = 'whatsapp://send?text=' + msg + '&phone=62'+ phone;
        Linking.openURL(url)
        .then((data) => {
            console.log('WhatsApp Opened');
        })
        .catch(() => {
            alert('Make sure Whatsapp installed on your device');
        });
    }
    return (
        <View style={Style.container} >
            <ScrollView>             
            <ImageBackground 
                    source={{uri : avatar}} 
                    style={{
                        height : (hp>600? hp*0.4 : hp*0.7),
                        width : "100%"
                    }}
            >
                <View style={Style.profileUpBox}>
                    <View style={Style.avatarBox} >
                        <Image style={Style.avatar} source={{uri : avatar}}/>
                        <Gap height={2}/>
                        <Text style={Style.nameText}>{doctorName}</Text>
                        <Gap height={2}/>
                        <Text style={Style.specialistText}>Peditriacian</Text>
                        <Gap height={2}/>
                        <Text style={Style.locationText}>Surabaya, ID</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={Style.profileDownBox}>
            <View style={[{
                height : hp*0.5,
                width : wp*0.85},
                Style.descriptionBox
            ]}>
                <Text style={Style.descriptionText} >Description</Text>
                <ScrollView
                    nestedScrollEnabled={true}
                >
                <Gap height={15}/>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum interdum metus nec suscipit. Nam ut lacus eget lacus pretium vehicula. Phasellus vitae quam nulla. Fusce in lectus dignissim, mollis nulla id, auctor lacus. Vestibulum viverra, erat sed ornare faucibus, lacus augue mattis augue, faucibus maximus elit ante vitae risus. Maecenas vulputate varius neque ut faucibus. In ut arcu gravida, dignissim felis tristique, tristique quam. Mauris a euismod augue, ac mattis eros. Integer porta eleifend efficitur. Vivamus non nisi massa. Aliquam ex mauris, ornare id leo in, convallis consequat justo. Ut placerat orci vel tortor sodales, at porta sem vestibulum. Quisque tincidunt felis lorem, sit amet aliquet lectus bibendum et. Vivamus vitae tortor a nisi venenatis bibendum in vel justo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum interdum metus nec suscipit. Nam ut lacus eget lacus pretium vehicula. Phasellus vitae quam nulla. Fusce in lectus dignissim, mollis nulla id, auctor lacus. Vestibulum viverra, erat sed ornare faucibus, lacus augue mattis augue, faucibus maximus elit ante vitae risus. Maecenas vulputate varius neque ut faucibus. In ut arcu gravida, dignissim felis tristique, tristique quam. Mauris a euismod augue, ac mattis eros. Integer porta eleifend efficitur. Vivamus non nisi massa. Aliquam ex mauris, ornare id leo in, convallis consequat justo. Ut placerat orci vel tortor sodales, at porta sem vestibulum. Quisque tincidunt felis lorem, sit amet aliquet lectus bibendum et. Vivamus vitae tortor a nisi venenatis bibendum in vel justo.
                </Text>
                </ScrollView>
            </View>
            <Gap height={20}/>
            <GeneralButton title={"Make an Appointment"} onPress={WhatsAppChat} />
            </View>
            </ScrollView>
            <View style={Style.icon} >
                <TouchableWithoutFeedback onPress={() => navigation.navigate('searchScreen')} >
                    <ICBack/>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const Style = StyleSheet.create ({
    container : {
        flex : 1
    },
    profileUpBox : {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        height : "100%",
        width : "100%"
    },
    icon : {
        marginLeft : 10,
        marginTop : 35,
        position : "absolute"
    },
    avatarBox : {
        justifyContent : "center",
        alignItems : "center",
        marginTop : 55
    },
    avatar : {
        height : 100,
        width : 100,
        borderRadius : 50
    },
    nameText : {
        color : "white",
        fontSize : 21,
        fontWeight : "bold"
    },
    specialistText : {
        color : "white",
        fontSize : 17
    },
    locationText : {
        color : "white",
        fontSize : 16
    },
    profileDownBox : {
        alignItems : "center",
        paddingBottom : 10
    },
    descriptionBox : {
        alignItems : "center",
        backgroundColor : "white",
        borderRadius : 20,
        marginTop : -40,
        elevation : 2,
        padding : 10
    },
    descriptionText : {
        fontSize : 20,
        fontWeight : "bold"
    }
})