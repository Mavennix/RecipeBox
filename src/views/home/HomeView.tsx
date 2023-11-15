import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Typography from '../../components/Typography/Typography';
import Options from '../component/options/Options';
import Header from '../component/Header/Header';
import Carousel from '../component/Carousel/Carousel';
import axios from 'axios';
import { API_URL } from '../../constants/constants';

const HomeView: React.FC = () => {

  const [recipes, setRecipes] = useState([]);
  const allergensToFilter = ['Crustaceans', 'Fish', 'Eggs'];
  useEffect(() => {
    // Fetch data from the API
    axios.get(API_URL)
      .then(response =>{
        const data = response.data;
        const filteredRecipes = data.filter((recipe: { allergens: string | string[]; }) => {
          return allergensToFilter.some((allergen) => recipe.allergens.includes(allergen));
        });
        setRecipes(filteredRecipes)
      }).catch(error => console.error('Error fetching data:', error));
  }, []);
  
  useEffect(()=>{
    console.log(recipes);

  },[recipes])

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={{
        backgroundColor: "#45A562",
        padding: 20,

      }}>
        <View style={[styles.card]}>
          <Header />
          <View style={styles.container}>
            <Typography variant="subheading" bold>
              Tell us a bit about yourself so we can make your experience even better!
            </Typography>
           <View style={{marginVertical: 25}}>
           <Typography variant="body">
              Just so you know, you can <Typography bold>always</Typography> choose the recipes you receive. We’ll use this info
              if you forget to pick or fancy a surprise.
            </Typography>
           </View>
          </View>
          <Options />
          <Carousel data={recipes} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8
  },
  scrollContainer: {
    flexGrow: 1,
  },
  radioButtonContainer: {
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    height: 100,
    objectFit: 'contain'
  },
});


export default HomeView;