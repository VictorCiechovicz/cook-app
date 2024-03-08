import { FlatList, Text, View } from 'react-native'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'
import { Recipe } from '@/src/components/Recipe'

export default function Recipes() {
  const params = useLocalSearchParams<{ ingredientsIds: string }>()
  const ingredientesIds = params.ingredientsIds.split(',')
  console.log(ingredientesIds)
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
