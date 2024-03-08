import { StyleSheet } from 'react-native'
import { theme } from '@/src/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    paddingHorizontal: 32,
    paddingTop: 62,
    marginBottom: 12
  },
  title: {
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.size.heading.md,
    marginTop: 22
  },
  subtitle: {
    fontFamily: theme.fonts.family.regular
  },
  message: {
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.heading.md,
    marginTop: 12,
    marginBottom: 38,
    color: theme.colors.gray_400
  },
  ingredient: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingBottom: 200,
    gap: 12
  }
})
