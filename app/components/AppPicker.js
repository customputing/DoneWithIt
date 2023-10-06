import React, { useState } from 'react';
import { Dimensions, View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
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
                <Screen >
                    <View style={{ backgroundColor: 'white', width: Dimensions.get('screen').width }} >
                        <View style={styles.button}>
                            <Button 
                                //style={styles.button} 
                                title="Close" 
                                onPress={() => setModalVisible(false)}
                            />
                        </View>
                        <FlatList
                            data={items}
                            keyExtractor={item => item.value.toString()}
                            numColumns={numberOfColumns}
                            renderItem={({ item }) => (
                                <CategoryPickerItem
                                    item={item}
                                    onPress={() => {
                                        setModalVisible(false);
                                        onSelectItem(item);
                                    }}
                                /> 
                            )}
                            style={{ width: Dimensions.get('window').width }}
                        />
                    </View>
                </Screen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 50
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