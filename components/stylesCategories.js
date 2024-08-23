import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    categoryCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
    },
    categoryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    categoryContainer: {
        margin: 10,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
    },
    backButton: {
        fontSize: 16,
        color: 'blue',
        marginBottom: 10,
    },
    itemContainer: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent:'space-between',
        
    },
    item: {
        maxWidth: '100%',
        flexDirection: 'row',
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        alignItems: 'center',
        justifyContent: 'start',
    },
    categoryImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    text: {
        marginTop: 5,
        marginLeft: 20,
        fontSize: 14,
    },
});
export default styles;