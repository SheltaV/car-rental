import { styled } from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 12px 16px;
  width: 100%;

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 24px 128px 150px;
  }
`;

export const Page = styled.div`
  margin-top: 76px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
`;

export const TextAccent = styled.span`
  color: ${({ theme: { colors } }) => colors.lightBlue};
`;

export const Img = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const MainText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const AdditionalText = styled.span`
  &:not(:last-child)::after {
    content: '';
    vertical-align: middle;
    display: inline-block;
    width: 1px;
    height: 16px;
    margin: 0 6px;
    background-color: rgba(18, 20, 23, 0.1);
  }
`;

export const Grid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(1, 274px);
  gap: 50px 29px;
  margin-top: 70px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 353px);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 274px);
  }
`;