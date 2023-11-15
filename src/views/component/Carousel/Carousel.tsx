import React, {  useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FlipCard from 'react-native-flip-card';
import { FlatList } from 'react-native-gesture-handler';
import Typography from '../../../components/Typography/Typography';
import Icon from 'react-native-vector-icons/Ionicons';


const Carousel = ({ data }:any) => {

    return (
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CarouselItem item={item} />}
      />
    );
  };

const CarouselItem = ({ item }: any) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <TouchableOpacity onPress={handleFlip} activeOpacity={0.8}>
      <FlipCard
        style={styles.flipCard}
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={isFlipped}
        clickable={false}
      >
        {/* Card Front */}
        <View style={styles.cardFront}>
         <View style={styles.imageContainer}>
         <Image source={{ uri: item.image }} style={styles.image} />
          <TouchableOpacity style={styles.likeButton}>
          <Icon name="heart-sharp" style={styles.icon} size={16} />
          </TouchableOpacity>
         </View>
         <Typography variant='caption'>{item.shortDescription}</Typography>
        </View>

        {/* Card Back */}
        <View style={styles.cardBack}>
          <Typography>Name : {item.name}</Typography>
          <Typography>CookingTime: {item.cookingTime}</Typography>
          <Typography>Rating: {item.averageRating}</Typography>
          <Typography>Chilli Level: {item.chilli}</Typography>
        </View>
      </FlipCard>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  flipCard: {
    width: 300,
    height: 400,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  cardFront: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  cardBack: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  imageContainer: {
   position:'relative',
   marginBottom:10,
   width: '100%',
   height: '60%',
  },
  icon:{
    color:'red'
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  likeButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 40,
    width:40,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 100,
  },
  likeButtonText: {
    color: 'white',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  subheading: {
    fontSize: 16,
    color: 'black',
  },
});

export default Carousel;
