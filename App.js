import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';

const data = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Tooba Seemab' },
  { id: 3, name: 'Bob Smith' },
  { id: 4, name: 'Alice Johnson' },
];

const FilterSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = () => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => console.log(item)}>
      <Text style={{ padding: 10 }}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', margin: 12 }}>
        <TextInput
          style={{
            flex: 1,
            height: 60,
            paddingHorizontal: 10,
            borderRadius: 5,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          placeholder="Search"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <TouchableOpacity
          style={{
            height: 60,
            paddingHorizontal: 10,
            borderRadius: 5,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={handleSearch}
        >
          <Text style={{ color: 'white' }}>Search</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default FilterSearchBar;
