import { StyleSheet, Font } from '@react-pdf/renderer';

// Türkçe karakterleri destekleyen font tanımlaması
Font.register({
  family: 'Roboto',
  src: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxP.ttf',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxP.ttf' }, // normal
    { src: 'https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfBBc4.ttf', fontWeight: 700 } // bold
  ]
});

export const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Roboto',
    fontSize: 11,
    width: '100%',
    height: '100%'
  },
  title: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  section: {
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10
  },
  text: {
    fontSize: 11,
    marginBottom: 5,
    lineHeight: 1.5
  },
  diagnosis: {
    fontSize: 11,
    marginBottom: 8,
    color: '#2563eb'
  }
});