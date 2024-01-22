import {
  AdditionalText,
  Img,
  MainText,
  TextAccent,
} from '../Global/Global.styled';
import {
  AdditionalTextBlock,
  BlockTitle,
  Btn,
  Condition,
  ConditionList,
  Content,
  Description,
  ImgContainer,
  Value,
} from './AdvertModal.styled';
import { Modal } from '../Global/GlobalModal/Modal';

export const AdvertModal = ({ data, close }) => {
  const {
    item: {
      id,
      make,
      year,
      model,
      type,
      img,
      rentalPrice,
      mileage,
      functionalities,
      fuelConsumption,
      engineSize,
      description,
      accessories,
      rentalConditions,
    },
    city,
    country,
  } = data;

  const parsedRentalConditions = rentalConditions.split('\n');
  const formattedMileage = mileage
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <Modal close={close}>
      <Content>
        <ImgContainer>
          <Img src={img} alt="" />
        </ImgContainer>
        <MainText>
          <h2>
            {make}
            <TextAccent> {model}</TextAccent>, {year}
          </h2>
        </MainText>
        <AdditionalTextBlock>
          <AdditionalText>{city}</AdditionalText>
          <AdditionalText>{country}</AdditionalText>
          <AdditionalText>Id: {id}</AdditionalText>
          <AdditionalText>Year: {year}</AdditionalText>
          <AdditionalText>Type: {type}</AdditionalText>
        </AdditionalTextBlock>
        <AdditionalTextBlock>
          <AdditionalText>Fuel Consumption: {fuelConsumption}</AdditionalText>
          <AdditionalText>Engine Size: {engineSize}</AdditionalText>
        </AdditionalTextBlock>
        <Description>{description}</Description>
        <BlockTitle>Accessories and functionalities:</BlockTitle>
        <AdditionalTextBlock>
          {accessories.map(item => (
            <AdditionalText key={item}>{item}</AdditionalText>
          ))}
        </AdditionalTextBlock>
        <AdditionalTextBlock>
          {functionalities.map(item => (
            <AdditionalText key={item}>{item}</AdditionalText>
          ))}
        </AdditionalTextBlock>
        <BlockTitle>Rental Conditions:</BlockTitle>
        <ConditionList>
          {parsedRentalConditions.map(item => (
            <Condition key={item}>{item}</Condition>
          ))}
          <Condition>
            Mileage: <Value>{formattedMileage}</Value>
          </Condition>
          <Condition>
            Price: <Value>{rentalPrice}</Value>
          </Condition>
        </ConditionList>
        <Btn href="tel:+380730000000">Rental car</Btn>
      </Content>
    </Modal>
  );
};