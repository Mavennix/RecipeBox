import React from 'react';
import { render } from '@testing-library/react-native';
import Typography from './Typography'; // Adjust the import path based on your project structure

describe('Typography component', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<Typography>Hello, World!</Typography>);
    
    // Assuming 'Hello, World!' is the children text in this case
    const textElement = getByText('Hello, World!');
    
    expect(textElement).toBeTruthy();
  });

  it('renders correctly with custom props', () => {
    const { getByText } = render(
      <Typography variant="heading" bold color="red" textAlign="center">
        Custom Text
      </Typography>
    );

    const textElement = getByText('Custom Text');
    expect(textElement).toBeTruthy();
  });
});
