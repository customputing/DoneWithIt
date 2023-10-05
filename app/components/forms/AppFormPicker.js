import React from 'react';
import { useFormikContext } from 'formik';

import ErrorMessage from './ErrorMessage';
import AppPicker from '../AppPicker';

function AppFormPicker({ items, name, numberOfColumns, PickerItemComponent, placeholder, width }) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    return (
        <>
            <AppPicker
                items={items}
                numberOfColumns={numberOfColumns}
                onSelectedItem={(item) => setFieldValue(name, item)}
                PickerItemComponenet={PickerItemComponent}
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;