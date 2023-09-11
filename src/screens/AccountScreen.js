import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfilePicture = ({ token }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const navigation = useNavigation();

  const handleProfilePress = () => {
    navigation.navigate('Account', { token });
  };

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const response = await fetch('https://masurao.fr/api/employees/me', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'X-Group-Authorization': 'TbncsMiix52ZJ00c6ZAB7x5gAKmva6BB',
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          const data = await response.json();
          const profileImageUrl = data.id;
          
          setImageUrl(profileImageUrl);
        } else {
          throw new Error('An error occurred while fetching the profile image.');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfileImage();
  }, [token]);

  return (
    <TouchableOpacity onPress={handleProfilePress} style={styles.container}>
      {imageUrl ? (
        <Image
          source={{ uri: imageUrl }}
          style={styles.profileImage}
        />
      ) : (
        <ActivityIndicator size="large" color="#545F71" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default ProfilePicture;
