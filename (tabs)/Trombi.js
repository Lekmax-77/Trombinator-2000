import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { useMemo } from 'react';


const apiUrl_login = 'https://masurao.fr/api/employees/login'; // Endpoint de l'API
const apiUrl_emplo = 'https://masurao.fr/api/employees'; // Endpoint de l'API
const apiUrl_me = 'https://masurao.fr/api/employees/me'; // Endpoint de l'API
const apiUrl_lead = 'https://masurao.fr/api/employees/leaders'; // Endpoint de l'API
//const apiUrl = 'https://masurao.fr/api/employees/{{id}} '; // Endpoint de l'API
//const apiUrl = 'https://masurao.fr/api/employees/{{id}}/image'; // Endpoint de l'API

const LoadingIndicator = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#545F71" />
      <Text>Chargement en cours...</Text>
    </View>
  );
};



const TrombiScreen = ({ token }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [employeeData, setEmployeeData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const imageCache = useMemo(() => new Map(), []);

  
    // Fonction pour récupérer l'image de l'employé en fonction de son ID
    const getEmployeeImage = async (employeeId, token) => {
        if (imageCache.has(employeeId)) {
          return imageCache.get(employeeId);
        }
        try {
          const response = await fetch(`https://masurao.fr/api/employees/${employeeId}/image`, {
            method: 'GET',
            headers: {
              Accept: 'image/png',
              'X-Group-Authorization': 'TbncsMiix52ZJ00c6ZAB7x5gAKmva6BB',
              Authorization: `Bearer ${token}`,
            },
          });
      
          if (response.status === 200) {
            // Convertissez la réponse en données binaires (image)
            const imageBlob = await response.blob();
      
            // Créez une URL d'objet blob pour afficher l'image
            const imageUrl = URL.createObjectURL(imageBlob);
      
            imageCache.set(employeeId, imageUrl);
            
            return imageUrl;
          } else {
            throw new Error('An error occurred while fetching the image.');
          }
        } catch (error) {
          console.error(error);
          return null;
        }
      };
      
      const EmployeeProfile = ({ employeeId, token }) => {
        const [imageUrl, setImageUrl] = useState(null);
      
        useEffect(() => {
          const fetchEmployeeImage = async () => {
            const url = await getEmployeeImage(employeeId, token);
            setImageUrl(url);
          };
      
          fetchEmployeeImage();
        }, [employeeId, token]);
      
        return (
          <View>
            {imageUrl ? (
              <Image
                source={{ uri: imageUrl }}
                style={{ width: 100, height: 100, borderRadius: 50}} // Vous pouvez ajuster la taille de l'image
              />
            ) : (
              <ActivityIndicator size="large" color="#545F71" marginLeft="15%" />
            )}
          </View>
        );
      };
      
    
      useEffect(() => {
        if (searchQuery.trim() === '') {
          // Si la recherche est vide, affichez tous les employés non filtrés
          setFilteredData(employeeData);
        } else {
          // Sinon, filtrez les employés en fonction de la recherche
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
              <View style={styles.employeeItem}>
                <EmployeeProfile employeeId={item.id} token={token} />
                <Text style={styles.employeeText}>{item.name} {item.surname}</Text>
              </View>
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
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    employeeItem: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 380,
      height: 100,
      marginBottom: 16,
      backgroundColor: "#ccc",
      borderRadius: 50,
      borderColor: "black",
    },
    employeeText: {
      marginLeft: 40,
    },
    employeeImage: {
      width: 50,
      height: 50,
      borderRadius: 52,
      marginRight: 8,
    },
  });

export default TrombiScreen;
