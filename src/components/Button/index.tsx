import { View, TouchableOpacity, Text } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'

import { styles } from './styles';

export function Button(){
    return(
        <>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </>
    )
}