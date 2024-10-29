import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './stylesRegister';
import { departments } from '../../constants/const';
import firebase from '../../firebase/firebase'; 

const Register = () => {
    const navigation = useNavigation();  
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [address, setAddress] = useState('');
    const [department, setDepartment] = useState('');
    const [country, setCountry] = useState('Colombia');
    const [showDropdown, setShowDropdown] = useState(false);
    
    const validateForm = () => {
        const today = new Date();
        const birthDate = new Date(birthdate);
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        const isValid = {
            username: username.length <= 10,
            password: password.length <= 8 && /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}/.test(password),
            email: email.includes('@'),
            age: age >= 18 && age <= 50,
            address: address.length <= 30,
            department: departments.includes(department)
        };

        return Object.values(isValid).every(Boolean);
    };

    //Basicamente lo que hice es poner la funcion del boton de enviar datos en este caso que es registrarse asincrona y guardar los estados  que empiezan en "" excepto country que solo es colombia
    const handleRegister = async () => {
        //Por aca  pasan las validaciones primero si no cumplen
        if (!validateForm()) {
            Alert.alert('Error', 'Por favor revisa todos los campos');
            return;
        }

        //Se crea automaticamente la coleccion al crear un usuario en este caso llamado "users" donde se comunica con el archivo firabase.js con la db
        try {
            //Guardamos los estamos y agregamos createAT hora de creacion
            await firebase.db.collection('users').add({
                username,
                email,
                password, 
                birthdate,
                address,
                department,
                country,
                createdAt: new Date() 
            });
            // Y eso es todo conclusion puedes basarte en este ejemplo guardar los estados de cada screen en la db de firabase.js en cuando le de al boton de cada funcionalidad besos
            Alert.alert('Registro exitoso', 'Usuario registrado correctamente');
            navigation.navigate('Login');
        } catch (error) {
            Alert.alert('Error', 'Hubo un problema al registrar el usuario: ' + error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro de Usuarios</Text>

            <TextInput
                style={styles.input}
                placeholder="Nombre de usuario (max 10 caracteres)"
                value={username}
                onChangeText={setUsername}
                maxLength={10}
            />
            <TextInput
                style={styles.input}
                placeholder="Correo electronico"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña (max 8 caracteres)"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                maxLength={8}
            />
            <TextInput
                style={styles.input}
                placeholder="Fecha de nacimiento (YYYY-MM-DD)"
                value={birthdate}
                onChangeText={setBirthdate}
            />
            <TextInput
                style={styles.input}
                placeholder="Direccion (máx 30 caracteres)"
                value={address}
                onChangeText={setAddress}
                maxLength={30}
            />

            <TextInput
                style={styles.input}
                placeholder="Pais (solo 'Colombia')"
                value={country}
                editable={false}
            />

            <Pressable onPress={() => setShowDropdown(!showDropdown)}>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Departamento"
                        value={department}
                        editable={false}
                    />
                </View>
            </Pressable>
            {showDropdown && (
                <View style={styles.dropdown}>
                    {departments.map((dept, index) => (
                        <Pressable key={index} onPress={() => { setDepartment(dept); setShowDropdown(false); }}>
                            <Text style={styles.dropdownItem}>{dept}</Text>
                        </Pressable>
                    ))}
                </View>
            )}

            <Button title="Registrar" onPress={handleRegister} color={"#6200EE"} />
        </View>
    );
};

export default Register;
