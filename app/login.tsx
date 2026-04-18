import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 20 }}>
        Login
      </Text>

      <TextInput placeholder="Email" style={input} />
      <TextInput placeholder="Password" secureTextEntry style={input} />

      <TouchableOpacity style={button}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const input = {
  borderWidth: 1,
  padding: 12,
  marginBottom: 15,
  borderRadius: 8,
};

const button = {
  backgroundColor: '#4CAF50',
  padding: 15,
  borderRadius: 10,
};