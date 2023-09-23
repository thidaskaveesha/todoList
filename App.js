import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, ScrollView } from 'react-native';

export default function App() {
  const [text, onChangeText] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (text.trim() !== '') {
      setTasks([...tasks, text]);
      onChangeText('');
    }
  };

  const popTask = (indexToRemove) => {
    if (indexToRemove >= 0 && indexToRemove < tasks.length) {
      const updatedTasks = tasks.filter((_, index) => index !== indexToRemove);
      setTasks(updatedTasks);
    }
  };

  return (
    <View style={styles.container}>

      <StatusBar style="auto" backgroundColor="#F79327" barStyle="light-content" />

      <Text style={styles.titleText}>TO DO LIST</Text>

      <Image source={require('./assets/mainimg.png')} style={{ marginTop: 20, width: 200, height: 200 }} />

      <ScrollView style={styles.taskList}>
        {tasks.map((task, index) => (
          <View style={styles.listitem} key={index}>
            <Text style={styles.listtext}>{index + 1 + ". "}{task}</Text>
            <TouchableHighlight
              style={styles.removeButton}
              underlayColor="#CCCCCC"
              onPress={() => popTask(index)}
            >
              <Text style={styles.buttonText}>Completed</Text>
            </TouchableHighlight>
          </View>
        ))}
      </ScrollView>

      <View style={styles.rowitems}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Add a new task...."
          value={text}
        />
        <TouchableHighlight
          style={styles.addButton}
          underlayColor="#CCCCCC"
          onPress={addTask}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listitem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 0,
    marginBottom: 10,
    backgroundColor: '#F79327',
    padding: 25,
  },
  listtext: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white'
  },
  container: {
    marginTop: 10,
    padding: 0,
    flex: 1,
    backgroundColor: '#FFE569',
    alignItems: 'center',
  },
  rowitems: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  titleText: {
    color: 'white',
    padding: 20,
    backgroundColor: '#F79327',
    width: '100%',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '900',
  },
  input: {
    flex: 1,
    height: 40,
    margin: 0,
    marginRight: 10,
    borderWidth: 1,
    padding: 10,
  },
  taskList: {
    marginTop: 20,
    paddingHorizontal: 10,
    maxHeight: '90%',
    width: '100%',
  },
  addButton: {
    backgroundColor: '#F79327',
    borderRadius: 100,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButton: {
    backgroundColor: 'red',
    borderRadius: 100,
    width: 'auto',
    padding: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
});
