import { FlatList, Text, View } from 'react-native'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { Recipe } from '@/src/components/Recipe'
import { Ingredients } from '@/src/components/Ingredients'

export default function Recipes() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back"
          size={32}
          onPress={() => {
            router.back()
          }}
        />
        <Text style={styles.title}>Ingredientes</Text>
      </View>

      <FlatList
        data={['1']}
        keyExtractor={i => i}
        renderItem={() => (
          <Recipe recipe={{ name: 'Omelete', image: '', minutes: 10 }} />
        )}
      />
    </View>
  )
}
