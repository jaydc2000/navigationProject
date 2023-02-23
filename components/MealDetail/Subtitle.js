import { View, Text, StyleSheet } from "react-native";

function Subtitle({children}){
    return <View style={styles.subtitleContainer}>
    <Text style={styles.subtitle}>{children}</Text>
  </View>
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: "#71a551",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
      },
      subtitleContainer: {
        padding: 6,
        margin: 4,
        borderBottomWidth: 2,
        marginHorizontal: 24,
        marginVertical: 4,
        borderBottomColor:  "#a7be99",
      },
})