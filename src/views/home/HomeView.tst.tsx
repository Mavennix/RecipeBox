import React from 'react';
import { render, waitFor, act } from '@testing-library/react-native';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import HomeView from './HomeView';

// Mocking the axios module to control its behavior in tests
const mockAxios = new MockAdapter(axios);

// Mock data to simulate the API response
const mockApiResponse = [
  {
    id: 1,
    name: 'Recipe 1',
    allergens: ['Crustaceans', 'Fish'],
    // Add other properties based on your actual data structure
  },
  {
    id: 2,
    name: 'Recipe 2',
    allergens: ['Eggs'],
    // Add other properties based on your actual data structure
  },
];

describe('HomeView component', () => {
  beforeEach(() => {
    // Reset the axios mock before each test
    mockAxios.reset();
  });

  it('should fetch and display recipes with specified allergens', async () => {
    // Mocking the API response
    mockAxios.onGet('your-api-endpoint').reply(200, mockApiResponse);

    // Render the component
    const { getByText } = render(<HomeView />);

    // Wait for the component to fetch data
    await waitFor(() => {
      expect(getByText('Recipe 1')).toBeTruthy();
      expect(getByText('Recipe 2')).toBeTruthy();
    });
  });
});
