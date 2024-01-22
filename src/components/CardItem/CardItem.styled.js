import { styled } from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImgContainer = styled.div`
  height: 268px;
  margin-bottom: 14px;
  border-radius: 14px;
  overflow: hidden;
`;

export const AdditionalTextBlock = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const Btn = styled.button`
  display: flex;
  width: 100%;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  margin-top: 28px;
  background: ${({ theme: { colors } }) => colors.lightBlue};
  color: ${({ theme: { colors } }) => colors.primaryWhite};
  font-weight: 600;
  line-height: 1.43;
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${({ theme: { colors } }) => colors.darkBlue};
  }
`;

export const LikeBtn = styled.button`
  position: absolute;
  right: 14px;
  top: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;