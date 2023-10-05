import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import defaultStyles from '../config/styles'
import AppText from './AppText';
import Screen from './AppText';
import PickerItem from './PickerItem';
import CategoryPickerItem from './CategoryPickerItem';

function AppPicker({ icon, items, numberOfColumns=1, onSelectItem, PickerItemComponent = PickerItem, placeholder, selectedItem, width="100%" }) {
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, { width } ]}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
                    {selectedItem ? (<AppText style={styles.text}>{selectedItem.label}</AppText>) : (<AppText style={styles.placeholder}>{placeholder}</AppText>)}
                    <MaterialCommunityIcons name={'chevron-down'} size={20} color={defaultStyles.colors.medium} />

                </View>
            </TouchableWithoutFeedback >

            <Modal visible={modalVisible} animationType="slide" >
                <Screen  >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
                        <Button 
                            style={styles.button} 
                            title="Close" 
                            onPress={() => setModalVisible(false)}
                        />
                        <FlatList 
                            data={items}
                            keyExtractor={item => item.value.toString()}
                            numColumns={numberOfColumns}
                            renderItem={({ item }) => (
                                <CategoryPickerItem
                                    item={item}
                                    label={item.label}
                                    onPress={() => {
                                        setModalVisible(false);
                                        onSelectItem(item);
                                    }}
                                /> 
                            )} 
                        />
                    </View>
                </Screen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center'

    },
    container:{
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10
    },
    icon:{
        marginRight: 10
    },
    placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1,
    },  
    text:{
        flex: 1,
    }

})

export default AppPicker;