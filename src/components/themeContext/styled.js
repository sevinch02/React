import styled from "styled-components";

export const Button = styled.button`
    border: none;
    border-radius: 8px;
    padding: 8px 20px;
    width:81px;
    height:40px; 
    background:${(props)=> props.theme.btnBg};
    color: ${(props) => props.theme.btnColor}; 
`;
export const BG = styled.div`
width:400px;
height:350px;
margin: 80px auto;
padding:12px;
border: ${(props) => props.theme.border};
border-radius: 12px;
background:${(props)=> props.theme.backgroundColor};
color:${(props) => props.theme.color};
text-align:center;
`;
export const DarkTheme = {
    color: '#fff',
    backgroundColor: '#222',
    border: '2px solid #f6f6f6',
    btnBg: '#f6f6f6',
    btnColor: 'red',
};

export const LightTheme = {
    color: '#222',
    backgroundColor: ' #FFF',
    border: '2px solid #222',
    btnBg: '#000',
    btnColor: 'green',
};
 