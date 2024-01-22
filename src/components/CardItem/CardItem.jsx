import {
  AdditionalText,
  Img,
  MainText,
  TextAccent,
} from '../Global/Global.styled';
import {
  AdditionalTextBlock,
  Btn,
  Card,
  ImgContainer,
  LikeBtn,
} from './CardItem.styled';
import { ReactComponent as FavoritesIconNormal } from '../../icons/normal.svg';
import { ReactComponent as FavoritesIconActive } from '../../icons/active.svg';
import { useState } from 'react';
import { AdvertModal } from '../Modal/AdvertModal'
import { useDispatch, useSelector } from 'react-redux';
import { addFavorites, removeFavorites } from '../../redux/advertsSlice';
import { selectFavorites } from '../../redux/selectors';

export const CardItem  = ({ item }) => {
  const {
    id,
    make,
    year,
    model,
    type,
    img,
    rentalPrice,
    address,
    rentalCompany,
    functionalities,
  } = item;
  const parseAdress = address.split(',');
  const city = parseAdress[1];
  const country = parseAdress[2];

  const favorites = useSelector(selectFavorites);

  const dispatch = useDispatch();

  const isFavorite = id => {
    return favorites.some(item => item.id === id);
  };

  const onToggle = () => {
    if (isFavorite(id)) {
      dispatch(removeFavorites(item.id));
    } else {
      dispatch(addFavorites(item));
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Card>
      <div>
        <LikeBtn
          onClick={() => {
            onToggle();
          }}
        >
          {isFavorite(id) ? <FavoritesIconActive /> : <FavoritesIconNormal />}
        </LikeBtn>
        <ImgContainer>
          <Img src={img} alt="" />
        </ImgContainer>
        <MainText>
          <h2>
            {make}
            <TextAccent> {model}</TextAccent>, {year}
          </h2>
          <p>{rentalPrice}</p>
        </MainText>
      </div>
      <div>
        <AdditionalTextBlock>
          <AdditionalText>{city}</AdditionalText>
          <AdditionalText>{country}</AdditionalText>
          <AdditionalText>{rentalCompany}</AdditionalText>
          <AdditionalText>Premium</AdditionalText>
        </AdditionalTextBlock>
        <AdditionalTextBlock>
          <AdditionalText>{type}</AdditionalText>
          <AdditionalText>{model}</AdditionalText>
          <AdditionalText>{id}</AdditionalText>
          <AdditionalText>{functionalities[0]}</AdditionalText>
        </AdditionalTextBlock>
        <Btn onClick={openModal}>Learn more</Btn>
      </div>
      {isModalOpen && (
        <AdvertModal
          close={closeModal}
          data={{ item, city, country }}
        ></AdvertModal>
      )}
    </Card>
  );
};