import styled from 'styled-components';

export const Section1 = styled.section`
    height: 650px;
    display: flex;
    justify-conten: space-between;
    padding: 0 40px;
    align-items: center;
    background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
    
    h2{
        font-size: 50px;
        font-weight: 500;
        margin-bottom: 5px;
        margin-left: 2rem;
    }
    
    p{
        font-weight: 500;
        margin-bottom: 15px;
        margin-left: 2rem;
    }

    img{
        margin-left: 20rem;
        height: 60%;
    }
`;

export const Section2 = styled(Section1)`
    background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
    img{
        margin-left: 4rem;
    }
`;

export const Section3 = styled(Section1)`
    background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);
    img{
        margin-left: 5rem;
    }
    h2{
        margin-right: 2rem;
    }
`;