import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from "yup";

import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from '../components/CategoryPickerItem';

const validateSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(1000).label("Price"),
    description:Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
});

const categories = [
    {label: "Furniture", value: 1, backgroundColor: 'red', icon: 'apps'},
    {label: "Clothing", value: 2, backgroundColor: 'green', icon: 'email'},
    {label: "Camera", value: 3, backgroundColor: 'blue', icon: 'lock'},
    {label: "Bedding and Things", value: 3, backgroundColor: 'blue', icon: 'lock'},
    {label: "Another Long named category", value: 3, backgroundColor: 'blue', icon: 'lock'},
];

function ListingEditScreen() {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validateSchema}
            >
                <AppFormField maxLength={255} name="title" placeholder="Title" />
                <AppFormField 
                    keyboardType='numeric'
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <AppFormPicker 
                    items= {categories}
                    name="categpry"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                    width="50%"
                />
                <AppFormField 
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
});

export default ListingEditScreen;