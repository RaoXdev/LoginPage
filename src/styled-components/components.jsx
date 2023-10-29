import styled from 'styled-components'

export const Outer=styled.section`
display: flex;
flex-wrap: wrap;
background-color:rgba(0,0,0,0.35);
justify-content: center;
align-items: center;
height: 90vmin;
width: 75vmin;
box-shadow: 5px 5px 4px rgba(255, 255, 255, 1);
border-radius: 50px;
`;

export const Pic=styled.img.attrs({src:"https://media.tenor.com/XdFv1bbfOdEAAAAd/user-icons.gif"})`
height: 19vmin;
border-radius:50%
`;

export const Username=styled.input.attrs({ type: "username",placeholder: "Username / Email" })`
text-align:center;
width:60vmin;
height: 10vmin;
border: 1px solid rgba(0,0,0,0.4);
border-radius: 50px;
cursor:text;
transition:0.5s;
&:hover{
    font-size: larger;
    transition: 0.3s;
}
`;

export const Passwordbox=styled.div`
display:flex;
align-items:center;
position:relative;
width:60vmin;
height: 10vmin;
background-color:white;
border: 1px solid rgba(0,0,0,0.4);
border-radius: 50px;
transition:0.5s;
`;

export const Password=styled.input.attrs({placeholder: "Password"})`
text-align:center;
width:60vmin;
height: 9vmin;
border: 0;
border-radius: 50px;
cursor:text;
transition:0.5s;
&:hover{
    font-size: larger;
    transition: 0.3s;
}
`;

export const Eye=styled.img`
height:7vmin;
right:2%;
position:absolute;
z-index:1;
cursor:pointer;
`

export const Login=styled.input.attrs({ type: "button",value: "Submit" })`
width:60vmin;
height: 10vmin;
border: 1px solid rgba(0,0,0,0.4);
border-radius: 50px;
cursor: pointer;
background-color:rgb(51,52,89);
font-size: 1.2em;
font-weight: bold;
transition:0.5s;
color: white;
&:hover{
    background-color:rgb(52,58,235);
    transition: 0.3s;
}
`;