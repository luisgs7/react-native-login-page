import React from "react"
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


const Login = () => {
    return (
        <SafeAreaView>
            <Text style={styles.appBar}>Delivery App</Text>
            <View style={{marginTop: '30%'}}/>

            <View>
                <Text style={styles.title}>Email</Text>
                    <TextInput style={styles.input} placeholder="Email"
                     keyboardType="email-address"/>
            </View>

            <View>
                <Text style={styles.title}>Password</Text>
                    <TextInput style={styles.input} placeholder="Password"
                     secureTextEntry={true}
                        />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text
                    style={styles.buttonText}
                >Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    appBar: {
        fontSize: 20,
        backgroundColor: 'green',
        color: 'white',
        padding: 15,
        paddingTop: 30,
    },
    title : {
        paddingStart: 20,
        fontSize: 20,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        margin: 20,
    },
    button: {
        backgroundColor: 'green',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        padding: 5,
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    },
})

export default Login

