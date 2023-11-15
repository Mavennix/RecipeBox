import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomRadioBtn from './CustomRadioBtn';

describe('CustomRadioBtn', () => {
  const onSelectMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with unchecked status', () => {
    const { getByTestId } = render(
      <CustomRadioBtn option="Option 1" selectedOption={null} onSelect={onSelectMock} />,
    );

    const radioButton = getByTestId('Option 1');
    expect(radioButton).toBeDefined();
    expect(radioButton.props.status).toBe('unchecked');
  });

  it('renders correctly with checked status', () => {
    const { getByTestId } = render(
      <CustomRadioBtn option="Option 2" selectedOption="Option 2" onSelect={onSelectMock} />,
    );

    const radioButton = getByTestId('Option 2');
    expect(radioButton).toBeDefined();
    expect(radioButton.props.status).toBe('checked');
  });

  it('calls onSelect when pressed', () => {
    const { getByTestId } = render(
      <CustomRadioBtn option="Option 3" selectedOption={null} onSelect={onSelectMock} />,
    );

    const radioButton = getByTestId('Option 3');
    fireEvent.press(radioButton);

    expect(onSelectMock).toHaveBeenCalledWith('Option 3');
  });
});
