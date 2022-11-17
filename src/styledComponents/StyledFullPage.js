import styled from 'styled-components'

export const StyledFullPage = styled.div`
background-color: white;
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;

background-image: url('https://bi.im-g.pl/im/f0/05/1b/z28334320IH,Bieszczady--Polonina-Carynska.jpg');
background-repeat: no-repeat;
background-position: center;
background-size: cover;

&.message {
    flex-direction: column;
};

`

export default StyledFullPage
