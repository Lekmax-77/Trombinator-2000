import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import LoadingIndicator from './LoadingIndicator';
import EmployeeProfile from './EmployeeProfile';

const apiUrl_emplo = 'https://masurao.fr/api/employees';

const TrombiScreen = ({ token }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [employeeData, setEmployeeData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredData(employeeData);
    } else {
      const filteredEmployees = employeeData.filter((employee) => {
        const fullName = `${employee.name} ${employee.surname}`;
        return fullName.toLowerCase().includes(searchQuery.trim().toLowerCase());
      });
      setFilteredData(filteredEmployees);
    }
  }, [searchQuery, employeeData]);

  useEffect(() => {
    fetch(apiUrl_emplo, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'X-Group-Authorization': 'TbncsMiix52ZJ00c6ZAB7x5gAKmva6BB',
        'Authorization': 'Bearer ' + token
      }
    })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('An error occurred.');
      }
    })
    .then((data) => {
      setEmployeeData(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error(error);
      setErrorMessage('An error occurred.');
    });
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Rechercher un employé"
        style={styles.searchInput}
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
      />
      {loading ? (
        <LoadingIndicator />
      ) : errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <FlatList
          data={filteredData}
          renderItem={({ item }) => (
            <EmployeeProfile employeeId={item.id} token={token} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
});

export default TrombiScreen;
