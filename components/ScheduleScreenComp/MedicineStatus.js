import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";

const MedicineStatus = (prop) => {
    let { mstatus, notestatus, time, name } = prop

    return (
        <View>
            <View style={styles.rect4}>
                <View style={styles.group2}>
                    <View style={styles.icon5Row}>
                        {mstatus
                            ? (<FontAwesomeIcon
                                name="star"
                                style={styles.icon5}
                            ></FontAwesomeIcon>)
                            : (<MaterialCommunityIconsIcon
                                name="cards-heart"
                                style={styles.icon5}
                            ></MaterialCommunityIconsIcon>)}
                        <Text style={styles.xyz1Mg}>{name}</Text>
                    </View>
                </View>
                <View style={styles.icon6Row}>
                    {/* {notestatus == 0 && <EntypoIcon name="check" style={styles.icon6} />}
                    {notestatus == 1 && <EntypoIcon name="bell" style={styles.icon6} />}
                    {notestatus == 2 && <EntypoIcon name="block" style={styles.icon6} />} */}

                    <EntypoIcon name={notestatus == 0 ? 'check' : notestatus == 1 ? 'bell' : 'block'} style={styles.icon6} />

                    <Text style={styles.loremIpsum}>{time}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rect4: {
        backgroundColor: "#E6E6E6",
        borderRadius: 10,
        marginVertical: 5,
        padding: 5
    },
    group2: {
        flexDirection: "row",
        alignItems: 'center'
    },
    icon5Row: {
        flexDirection: "row",
        padding: 3
    },
    icon5: {
        color: "red",
        fontSize: 18,
        marginRight: 10,
        alignSelf: 'center'
    },
    xyz1Mg: {
        fontFamily: "roboto-700",
        color: "#121212",
        fontSize: 18,
    },
    icon6Row: {
        flexDirection: "row",
        justifyContent: 'flex-end',

    },
    icon6: {
        color: "rgba(128,128,128,1)",
        fontSize: 20,
    },
    loremIpsum: {
        fontFamily: "calibri-regular",
        color: "#121212",
        marginLeft: 5
    },
})

export default MedicineStatus