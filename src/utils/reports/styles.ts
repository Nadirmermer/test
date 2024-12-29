import { StyleSheet, Font } from '@react-pdf/renderer';

// Font dosyalarının public klasöründen yüklenmesi
Font.register({
  family: 'Roboto',
  fonts: [
    { src: '/Roboto-Regular.ttf' }, // normal
    { src: '/Roboto-Bold.ttf', fontWeight: 700 } // bold
  ]
});

export const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Roboto',
    fontSize: 11
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