import React, {useState} from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from './styles';
import { Button } from '../../components/Button';

export function Home(){
    return (
        <>
            <View style={styles.topContainer}>
                <Text>Oi</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.form}>
                    <TextInput style={styles.input} />
                    <Button />
                </View>
            </View>
        </>
    )
}