import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  balanceCard: {
    padding: 25,
    borderRadius: 15,
    marginBottom: 15,
  },

  balanceLabel: {
    fontSize: 16,
  },

  balance: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
  },

  row: {
    flexDirection: 'row',
    gap: 10,
  },

  infoCard: {
    flex: 1,
    padding: 20,
    borderRadius: 15,
  },
});