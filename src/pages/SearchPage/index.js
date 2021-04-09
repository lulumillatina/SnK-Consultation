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
    ActivityIndicator,
    SafeAreaView
} from "react-native"
import { IMHeaderBackground, IMHomeBackground } from "../../assets"
import { Gap, GeneralButton, HomeDoctor, SearchBar } from "../../components"

export default function searchPage ({navigation}) {
    const hp = useWindowDimensions().height
    const [search, setSearch] = useState('');
    const [isLoading, setLoading] = useState(true)
    const [doctorData, setDoctorData] = useState([])
    const [offset,setOffset]= useState(1)
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetch(`https://reqres.in/api/users?page=${offset}`)
          .then((response) => response.json())
          .then((json) => {
              setDoctorData([...json.data,...doctorData]);
              setFilteredData([...json.data,...filteredData]);
            })
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

      const searchFilterFunction = (text) => {
        if (text) {
          const newData = doctorData.filter(
            function (item) {
              const itemData = item.title
                ? item.title.toUpperCase()
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
            <GeneralButton title={"Find Out More"} onPress={()=> setOffset(offset + 1)}/>
        </View>
    )}

    return (
        <ImageBackground source={IMHeaderBackground} style={{ width : "100%"}} >
        <View style={{height : (hp>600? 0.1*hp: 0.2*hp), marginTop: 35}}>
            <SearchBar 
                onChangeText={(text) => searchFilterFunction(text)}
                value={search}
            />
        </View>
        <View style={Style.container}>
           
            <Text style={Style.title}>Choose Your Doctor</Text>
            <View style={Style.doctorList}>
                {isLoading ? <ActivityIndicator/> : (
                    <FlatList
                        data={doctorData}
                        keyExtractor={({ id }, index) => id}
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
                        ListFooterComponent={footerComponent}
                    />
                )}
            </View>
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
        alignItems : "center"
    },
    title : {
        fontSize : 20,
        fontWeight : "bold",
        textAlign : "center",
        marginBottom : 20
    },
    doctorList : {
        flexDirection : "column"
    }
})