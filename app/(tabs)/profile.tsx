import { Image, Text, View } from 'react-native';

export default function Profile() {
  return (
    <View style={{ flex: 1, alignItems: 'center', paddingTop: 60 }}>
      <Image
        source={{ uri: 'https://api.dicebear.com/7.x/adventurer/svg?seed=female' }}
        style={{ width: 120, height: 120, borderRadius: 60 }}
      />

      <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 10 }}>
        Maryam Ajaz
      </Text>

      <Text style={{ color: 'gray' }}>
        BS IT Student • 20 Years
      </Text>
    </View>
  );
}