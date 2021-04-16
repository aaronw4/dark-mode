import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage('dark');

    useEffect(() => {
        if (value === true) {
            document.querySelector('body').classList.add("dark-mode");
        } else {   
            document.querySelector('body').classList.remove('dark-mode');
        }
    },[value])

    return([value, setValue])
}