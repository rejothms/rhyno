import React, { useState } from 'react';
import { View, Image, TouchableOpacity, FlatList, StyleSheet, Text } from 'react-native';

interface ImageData {
  id: number;
  uri: string;
}

interface galleryProps {
  navigation: any
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

const PhotoGallery = (props: galleryProps) => {
  const [selectedImages, setSelectedImages] = useState<ImageData[]>([]);
  const [isLongPressActive, setIsLongPressActive] = useState(Boolean);

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
    console.log("long press");
    setIsLongPressActive(!isLongPressActive);
    //setIsLongPressActive(true);
  };
 
  const handlePressOut = () => {
    
    console.log("set out");
    //setIsLongPressActive(!isLongPressActive);
  };

  const renderCheckbox = (image: ImageData) => {
    const isSelected = selectedImages.includes(image);
    return (
     isLongPressActive &&
      <TouchableOpacity  style={styles.checkboxContainer}>
        <CustomCheckbox label="" isChecked={isSelected} onPress={() => handleImagePress(image)} />
      </TouchableOpacity>
    
    );
  };

  const renderItem = ({ item, index }: { item: ImageData; index: number }) => {
    if (index === data.length - 1) {
      return (
        <View style={styles.imageContainer} >
          <TouchableOpacity style={styles.addButton} onPress={() => props.navigation.navigate('UploadFiles', {})}>
            {/* <Image source={require('https://placekitten.com/105/100')} style={styles.plusIcon} /> */}
            <View ><Text>+</Text></View>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <TouchableOpacity
        onLongPress={handleLongPress}
        onPressOut={handlePressOut}
        onPress={() => handleImagePress(item)}
        style={styles.imageContainer}
      >
        
        <Image source={{ uri: item.uri }} style={styles.image} />
        {renderCheckbox(item)}
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      numColumns={3}
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
    marginBottom: 12,
    marginLeft: 4,
    position: 'relative',
    borderWidth: 3,
    borderColor: 'white',
  },
  image: {
    flex: 1,
    height: 100
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
    left: 4,
  },

  checkbox: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderRadius: 15,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    color: 'white',
    fontSize: 8
  },
  checkboxContainerx: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

});

export default PhotoGallery;

interface CustomCheckboxProps {
  label: string;
  isChecked: boolean;
  onPress: () => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ label, isChecked, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.checkboxContainerx}>
    <View
      style={[
        styles.checkbox,
        {
          backgroundColor: isChecked ? '#171717CC' : '#171717',
          borderColor: isChecked ? '#FDFDFD' : '#FDFDFD',
        },
      ]}
    >
      {isChecked && <Text style={styles.checkmark}>✔</Text>}
    </View>
    <Text>{label}</Text>
  </TouchableOpacity>
);