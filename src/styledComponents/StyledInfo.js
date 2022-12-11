import styled from 'styled-components'

export const StyledInfo = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-top: 300px;
width: 100vw;
height: 100vh;
line-height: 12;
position:absolute;
top: -120px;
.info-header{
    font-size: 36px;
    color: white;
    margin-bottom: 30px;
    margin: 10px;
    @media only screen and (max-width: 430px) {
    text-align: center;
}
}
.info-text{
    margin: 15px;
    color: white; 
    font-size: 15px;
    @media only screen and (max-width: 620px) {
        margin: 50px;
    line-height: 3;
    text-align: center;
}
}
.page-info-text{
    margin: 15px;
    color: white; 
    font-size: 15px;
    line-height: 2;
    @media only screen and (max-width: 770px) {
    text-align: center;
}
@media only screen and (max-width: 620px) {
    text-align: center;
}
}
.start-page-button{
    margin-top: 20px;
    margin: 20px;
}
.info-mail{
    position: absolute;
    bottom: -28px;
    color: white;
    font-weight: 100;
    left: -75px;
    font-size: 14px;
    @media only screen and (max-width: 430px) {
        font-size: 10px;
        left: -45px;
    bottom: -20px;
}
}
.info-phone{
    position: absolute;
    bottom: -28px;
    left: 7px;
    color: white;
    font-weight: 100;
     font-size: 14px;
     @media only screen and (max-width: 430px) {
        font-size: 10px;
        left: 12px;
        bottom: -20px;
}
}
.info-contact{
    position: 'relative';
    line-height: 2;
    margin: 20px;
    margin-right: 60px;
}

`

export default StyledInfo
