import { styled } from 'styled-components';

export const Content = styled.div`
  position: relative;
    width: 461px;
`;

export const ImgContainer = styled.div`
  height: 248px;
  margin-bottom: 14px;
  border-radius: 14px;
  overflow: hidden;
`;

export const Description = styled.p`
  margin-top: 14px;
  line-height: 1.42;
`;

export const BlockTitle = styled.h3`
  margin-top: 24px;
  margin-bottom: 8px;
  line-height: 1.42;
`;

export const AdditionalTextBlock = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const ConditionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Condition = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;

export const Value = styled.span`
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.lightBlue};
`;

export const Btn = styled.a`
  display: flex;
  width: 168px;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-top: 28px;
  background: ${({ theme: { colors } }) => colors.lightBlue};
  color: ${({ theme: { colors } }) => colors.primaryWhite};
  font-weight: 600;
  line-height: 1.43;
  cursor: pointer;

  transition: background-color var(--animation-time) var(--animation-cubic);

  &:hover,
  &:focus {
    background: ${({ theme: { colors } }) => colors.darkBlue};
  }
`;