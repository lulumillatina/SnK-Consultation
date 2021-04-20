import React from "react"
import { 
    useState, 
    useEffect 
} from "react"
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    useWindowDimensions,
    FlatList,
    ActivityIndicator
} from "react-native"
import axios from "axios"
import { IMHeaderBackground} from "../../assets"
import { Gap, GeneralButton, HomeDoctor, SearchBar } from "../../components"

export default function searchPage ({navigation}) {
    const hp = useWindowDimensions().height

    const [search, setSearch] = useState('');
    const [isLoading, setLoading] = useState(true)
    const [doctorData, setDoctorData] = useState([])
    const [page,setPage]= useState(1)
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {    
        axios.get(`https://reqres.in/api/users?page=${page}`)
            .then(res => {
                setDoctorData(res.data.data.concat(doctorData))
                setFilteredData(res.data.data.concat(filteredData))
                console.log(doctorData)
                setLoading(false)
            })
    },[page]);

      const searchFilterFunction = (text) => {
        if (text) {
          const newData = doctorData.filter(
            function (item) {
              const itemData = item.first_name
                ? item.first_name.toUpperCase()
                : ''.toUpperCase();
              const textData = text.toUpperCase();
              return itemData.indexOf(textData) > -1;
          });
          setFilteredData(newData);
          setSearch(text);
        } else {
          setFilteredData(doctorData);
          setSearch(text);
        }
      };

    const footerComponent = () => {
        return (
        <View style={{alignItems : "center", marginBottom : 10}}>
            <Gap height={5}/>
            <GeneralButton title={"Find Out More"} onPress={()=> {
                if(page<2) {
                     setPage(page + 1)
            }}}/>
        </View>
    )}

    return (
        <ImageBackground source={IMHeaderBackground} style={{ width : "100%", flex : 1}} >
        <View style={{height : (hp>600? 0.1*hp: 0.2*hp), marginTop: 35}}>
            <SearchBar 
                onChangeText={(text) => searchFilterFunction(text)}
                value={search}
            />
        </View>
        <View style={Style.container}>
           
            <Text style={Style.title}>Choose Your Doctor</Text>
                {isLoading ? <ActivityIndicator/> : (
                    <View style={{flexGrow : 1}}>
                    <FlatList
                        data={filteredData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View>
                                <HomeDoctor doctorName={item.first_name} 
                                    link={item.avatar} 
                                    onPress={() => {
                                        navigation.navigate('profileDoctor', {
                                            avatar : item.avatar,
                                            doctorName : item.first_name
                                })}} />
                            </View>
                        )}
                        numColumns={3}
                        ListFooterComponent={(page<2? footerComponent : null)}
                    />
                    </View>
                )}
            </View>
        </ImageBackground>
    )
}
const Style = StyleSheet.create({
    container : {
        backgroundColor : "white",
        borderTopRightRadius : 25,
        borderTopLeftRadius : 25,
        paddingHorizontal : 10,
        paddingTop : 15,
        alignItems : "center",
        flex : 1
    },
    title : {
        fontSize : 20,
        fontWeight : "bold",
        textAlign : "center",
        marginBottom : 20
    }
})