import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Button, BG } from './styled';




const File = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <BG>
            <h2>
               click button
            </h2>
            <Button onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}> Change theme </Button> 
        </BG>
    )
};
export default File;
