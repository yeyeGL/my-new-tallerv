import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../components/stylesRegister';

const departments = [
    'Antioquia', 'Bolivar', 'Boyaca', 'Cundinamarca', 'Santander'
];

const Register = () => {
    const navigation = useNavigation();  
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [department, setDepartment] = useState('');
    const [showCountryDropdown, setShowCountryDropdown] = useState(false);
    const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);

    const handleRegister = () => {
        if (!username || !email || !password || !birthdate || !address || !country || !department) {
            Alert.alert('Error', 'Todos los campos deben ser rellenados');
            return;
        }

        if (username.length > 10) {
            Alert.alert('Error', 'El nombre de usuario debe tener un maximo de 10 caracteres');
            return;
        }

        if (password.length > 8) {
            Alert.alert('Error', 'La contraseña debe tener un maximo de 8 caracteres');
            return;
        }

        if (!/(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}/.test(password)) {
            Alert.alert('Error', 'La contraseña debe incluir al menos una mayuscula, un caracter especial, letras y numeros');
            return;
        }

        if (!email.includes('@')) {
            Alert.alert('Error', 'El correo debe tener un @ para que se valido por el sistema');
            return;
        }

        const today = new Date();
        const birthDate = new Date(birthdate);
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        if (age < 18 || age > 50) {
            Alert.alert('Error', 'La edad debe estar entre 18 y 50 años');
            return;
        }

        if (address.length > 30) {
            Alert.alert('Error', 'La direccion debe tener un maximo de 30 caracteres');
            return;
        }

        if (country !== 'Colombia') {
            Alert.alert('Error', 'El pais solo puede ser Colombia');
            return;
        }

        if (!departments.includes(department)) {
            Alert.alert('Error', 'El departamento seleccionado no es valido');
            return;
        }
        
        Alert.alert('Registro', `Usuario: ${username}\nCorreo: ${email}\nContraseña: ${password}\nFecha de nacimiento: ${birthdate}\nDireccion: ${address}\nPais: ${country}\nDepartamento: ${department}`);

        navigation.navigate('Login');
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

            <TouchableOpacity onPress={() => setShowCountryDropdown(!showCountryDropdown)}>
                <TextInput
                    style={styles.input}
                    placeholder="Pais (solo 'Colombia')"
                    value={country}
                    editable={false}
                />
            </TouchableOpacity>
            {showCountryDropdown && (
                <View style={styles.dropdown}>
                    <TouchableOpacity onPress={() => { setCountry('Colombia'); setShowCountryDropdown(false); }}>
                        <Text style={styles.dropdownItem}>Colombia</Text>
                    </TouchableOpacity>
                </View>
            )}

            <TouchableOpacity onPress={() => setShowDepartmentDropdown(!showDepartmentDropdown)}>
                <TextInput
                    style={styles.input}
                    placeholder="Departamento"
                    value={department}
                    editable={false}
                />
            </TouchableOpacity>
            {showDepartmentDropdown && (
                <View style={styles.dropdown}>
                    {departments.map((dept, index) => (
                        <TouchableOpacity key={index} onPress={() => { setDepartment(dept); setShowDepartmentDropdown(false); }}>
                            <Text style={styles.dropdownItem}>{dept}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
            
            <Button title="Registrar" onPress={handleRegister} />
        </View>
    );
};

export default Register;
