import { useState } from 'react'

export const useForm = (initialState = {}) => {
    const [inputValues, setInputValues] = useState(initialState);

    const resetForm = () => {
        setInputValues(initialState);
    }

    const handleInputChange = ({target}) => {
        setInputValues({
            ...inputValues,
            [target.name]: target.value
        })
    }

    const setForm = (newValues) => {
        setInputValues(newValues);
    }

    return {
        inputValues,
        handleInputChange,
        resetForm,
        setForm
    }
}
