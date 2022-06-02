import styled from "styled-components";

const HeroStyled = styled.div`
  margin: 1rem;
  text-align: center;

  h2 {
    color: #4361ee;
    margin-bottom: 1rem;
  }

  h3 {
    color: #b5179e;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    border-radius: 20px;
  }

  @media screen and (min-width: 992px) {
    text-align: left;
    align-items: center;
    max-width: 1200px;
    margin: 3rem auto;

    section {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero__right {
      flex-basis: 60%;
    }

    .hero__left {
      flex-basis: 40%;
    }

    img {
      padding-left: 8rem;
    }
  }
`;

export default HeroStyled;
