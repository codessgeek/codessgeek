import { StyleSheet } from "react-native";
import Color from "../color/Colors";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
    boxui: {
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 7,
        backgroundColor: Color.secondary_bg,
        borderWidth: 1,
        borderColor: Color.primary_border,
        borderRadius: 15
    },
    boxtitle: {
        fontFamily: "roboto-700",
        color: Color.primary_text,
        textAlign: "left",
        marginHorizontal: 5,
        fontSize: 18
    },
    scrollArea: {
        justifyContent: 'center',
        flex: 1
    },
    scrollArea_contentContainerStyle: {
        justifyContent: 'center',
        flexGrow: 1,
        margin: 5
        // =======
        //         flex: 1,
        //         flexGrow: 1,
        //     },
        //     scrollArea_contentContainerStyle: {
        //         padding: 5,
    },
});

export default globalStyles;