import { Text, TouchableOpacity } from 'react-native';

type Props = {
  title: string;
  onPress?: () => void;
};

export default function CustomButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
      }}
    >
      <Text style={{ color: '#fff', textAlign: 'center' }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}