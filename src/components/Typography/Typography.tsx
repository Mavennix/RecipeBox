import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TypographyProps {
  variant?: 'heading' | 'subheading' | 'body' | 'caption';
  bold?: boolean;
  color?: string;
  textAlign?: 'left' | 'center' | 'right';
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ variant = 'body', bold = false,textAlign = 'left' , color, children }) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: variant === 'heading' ? 24 : variant === 'subheading' ? 20 : variant === 'caption' ? 12 : 16,
      fontWeight: bold ? 'bold' : 'normal',
      color: color || 'black',
      fontFamily: bold ? 'Montserrat-Bold' : 'Montserrat-Regular', // Use custom fonts
      marginBottom: variant === 'caption' ? 8 : 0,
      textAlign

    },
  });

  return <Text style={styles.text}>{children}</Text>;
};

export default Typography;