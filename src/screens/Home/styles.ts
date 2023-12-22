import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    topContainer:{
        backgroundColor: '#0D0D0D',
        height: 173,
    },
    bottomContainer:{
        flex: 1,
        backgroundColor: '#1A1A1A',
        padding: 24
    },
    form:{
        width: '100%',
        flexDirection: 'row',
        marginTop: -50,
        marginBottom: 42
    },
    input:{
        flex: 1,
        height: 56,
        backgroundColor: '#262626',
        borderRadius: 5,
        color: '#F2F2F2',
        padding: 10,
        fontSize: 16,
        marginRight: 5
    }
})