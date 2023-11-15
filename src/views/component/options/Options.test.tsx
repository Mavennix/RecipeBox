import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Options from './Options';

test('it renders the Options component', () => {
  const { getByText } = render(<Options />);

  expect(getByText('Do you have allergies?')).toBeTruthy();
});

test('it handles DietOptions selection', async () => {
  const { getByText, findByTestId } = render(<Options />);

  fireEvent.press(getByText('Vegetarian'));

  const vegetarianOption = await findByTestId('Vegetarian');

  expect(vegetarianOption).toBeTruthy();
  expect(vegetarianOption.props.style.borderColor).toBe(undefined);
});

test('it handles NumberOptions selection', async () => {
  const { getByText, findByTestId } = render(<Options />);

  fireEvent.press(getByText('2 people'));

  const twoPeopleOption = await findByTestId('2 people');

  expect(twoPeopleOption).toBeTruthy();
  expect(twoPeopleOption.props.style.borderColor).toBe(undefined);
});

test('it handles AllergiesOptions selection', async () => {
  const { getByText, findByTestId } = render(<Options />);

  fireEvent.press(getByText('yes'));

  const yesOption = await findByTestId('yes');

  expect(yesOption).toBeTruthy();
  expect(yesOption.props.style.borderColor).toBe(undefined);
});
