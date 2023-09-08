import React, { useState, useEffect } from 'react';
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';

const imageCache = new Map();

const EmployeeProfile = ({ employeeId, token }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const getEmployeeImage = async () => {
      if (imageCache.has(employeeId)) {
        setImageUrl(imageCache.get(employeeId));
        return;
      }
      try {
        const response = await fetch(
          `https://masurao.fr/api/employees/${employeeId}/image`,
          {
            method: 'GET',
            headers: {
              Accept: 'image/png',
              'X-Group-Authorization': 'TbncsMiix52ZJ00c6ZAB7x5gAKmva6BB',
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          const imageBlob = await response.blob();
          const url = URL.createObjectURL(imageBlob);
          imageCache.set(employeeId, url);
          setImageUrl(url);
        } else {
          throw new Error('An error occurred while fetching the image.');
        }
      } catch (error) {
        console.error(error);
      }
    };

    getEmployeeImage();
  }, [employeeId, token]);

  return (
    <View>
      {imageUrl ? (
        <Image
          source={{ uri: imageUrl }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
      ) : (
        <ActivityIndicator size="large" color="#545F71" marginLeft="15%" />
      )}
    </View>
  );
};

export default EmployeeProfile;
