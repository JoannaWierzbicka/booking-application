import styled from 'styled-components'

export const StyledInfo = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-top: 300px;
width: 100vw;
height: 100vh;
line-height: 12;
@media only screen and (max-width: 430px) {
    text-align: center;
    margin-top: 100px;
}
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
.start-page-button{
    margin-top: 20px;
    margin: 20px;
}
@media only screen and (max-width: 620px) {
  
}
`

export default StyledInfo
