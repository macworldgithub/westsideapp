import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';

const ReportScreen = () => {
  const [selectedService, setSelectedService] = useState('');
  const [link, setLink] = useState('');
  const [email, setEmail] = useState('');

  const services = [
    { id: 'brakes', label: 'Brakes', price: '$120' },
    { id: 'paint', label: 'Paint', price: '$120' },
    { id: 'denting', label: 'Denting', price: '$120' },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#191919' }}>
      <ScrollView contentContainerStyle={{ padding: 10 }} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 28, marginTop: 26 }}>
          <Ionicons name="arrow-back" size={24} color="white" />
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '600', marginLeft: 8 }}>
            Report
          </Text>
        </View>

        {/* Services */}
        {services.map(service => (
          <View
            key={service.id}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderWidth: 1,
              borderColor: '#555',
              borderRadius: 12,
              paddingVertical: 12,
              paddingHorizontal: 16,
              marginBottom: 12,
              backgroundColor: 'black',
            }}
          >
            <RadioButton
              value={service.id}
              status={selectedService === service.id ? 'checked' : 'unchecked'}
              onPress={() => setSelectedService(service.id)}
              color="white"
              uncheckedColor="white"
            />
            <Text style={{ color: 'white', flex: 1, marginLeft: 8 }}>{service.label}</Text>
            <Text style={{ color: 'white' }}>{service.price}</Text>
          </View>
        ))}

        {/* Generate Link */}
        <Text style={{ color: 'white', marginBottom: 6, marginTop: 16 }}>Generate Link</Text>
        <TextInput
          value={link}
          onChangeText={setLink}
          placeholder="Link////"
          placeholderTextColor="#999"
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            paddingVertical: 12,
            paddingHorizontal: 16,
            color: 'black',
            marginBottom: 12,
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            borderRadius: 12,
            paddingVertical: 12,
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'white',
            marginBottom: 8,
          }}
        >
          <Text style={{ color: 'white' }}>Generate</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            borderRadius: 12,
            paddingVertical: 12,
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'white',
            marginBottom: 16,
          }}
        >
          <Text style={{ color: 'white' }}>Download Report</Text>
        </TouchableOpacity>

        {/* Email Section */}
        <Text style={{ color: 'white', marginBottom: 6 }}>Send to Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#999"
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            paddingVertical: 12,
            paddingHorizontal: 16,
            color: 'black',
            marginBottom: 12,
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            borderRadius: 12,
            paddingVertical: 12,
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'white',
          }}
        >
          <Text style={{ color: 'white' }}>Sent</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReportScreen;
