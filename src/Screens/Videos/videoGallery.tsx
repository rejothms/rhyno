import React, { useState } from 'react';
import { View, Image, TouchableOpacity, FlatList, StyleSheet, Text } from 'react-native';

interface ImageData {
  id: number;
  uri: string;
}

const data: ImageData[] = [
  { id: 1, uri: 'https://source.unsplash.com/1600x900/?bike' },
  { id: 2, uri: 'https://source.unsplash.com/1600x900/?ride' },
  { id: 3, uri: 'https://source.unsplash.com/1600x900/?biker' },
  { id: 4, uri: 'https://source.unsplash.com/1600x900/?cycling' },
  { id: 5, uri: 'https://source.unsplash.com/1600x900/?motorbike' },
  { id: 6, uri: 'https://source.unsplash.com/1600x900/?scooter' },
  { id: 2, uri: 'https://source.unsplash.com/1600x900/?ride' },
  { id: 3, uri: 'https://source.unsplash.com/1600x900/?biker' },
  { id: 4, uri: 'https://source.unsplash.com/1600x900/?cycling' },
  { id: 5, uri: 'https://source.unsplash.com/1600x900/?motorbike' },
  { id: 6, uri: 'https://source.unsplash.com/1600x900/?scooter' },
  { id: 2, uri: 'https://source.unsplash.com/1600x900/?ride' },
  { id: 3, uri: 'https://source.unsplash.com/1600x900/?biker' },
  { id: 4, uri: 'https://source.unsplash.com/1600x900/?cycling' },
  { id: 5, uri: 'https://source.unsplash.com/1600x900/?motorbike' },

  // Add more images as needed
];

const VideoGallery: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<ImageData[]>([]);
  const [isLongPressActive, setIsLongPressActive] = useState(false);

  const handleImagePress = (image: ImageData) => {
    if (isLongPressActive) {
      const isSelected = selectedImages.includes(image);

      if (isSelected) {
        setSelectedImages(selectedImages.filter(item => item !== image));
      } else {
        setSelectedImages([...selectedImages, image]);
      }
    }
  };

  const handleLongPress = () => {
    setIsLongPressActive(true);
  };

  const handlePressOut = () => {
    setIsLongPressActive(true);
  };

  const renderCheckbox = (image: ImageData) => {
    const isSelected = selectedImages.includes(image);

    return (
      <TouchableOpacity onPress={() => handleImagePress(image)} style={styles.checkboxContainer}>
        <View style={isSelected ? styles.checkboxSelected : styles.checkbox} />
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item, index }: { item: ImageData; index: number }) => {
    if (index === data.length - 1) {
      // This is the last item, render an add button
      return (
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.addButton}>
            {/* <Image source={require('https://placekitten.com/105/100')} style={styles.plusIcon} /> */}
            <View><Text>+</Text></View>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <TouchableOpacity
        onLongPress={handleLongPress}
        onPressOut={handlePressOut}
        style={styles.imageContainer}
      >
        {renderCheckbox(item)}
        <Image source={{ uri: item.uri }} style={styles.image} />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      numColumns={1}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'black',
  },
  imageContainer: {
    flex: 1,
    margin: 2,
    position: 'relative',
    borderWidth: 2,
    borderColor: 'white',
  },
  image: {
    flex: 1,
    height: 200, // Adjust as needed
    //borderRadius: 8,
  },
  addButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
   // borderRadius: 8,
    backgroundColor: '#fff',
  },
  plusIcon: {
    width: 50, // Adjust as needed
    height: 50, // Adjust as needed
    resizeMode: 'contain',
  },
  checkboxContainer: {
    position: 'absolute',
    top: 4,
    right: 4,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
  },
  checkboxSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#00f', // Selected color
  },
});

export default VideoGallery;
