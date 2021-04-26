import styled from "styled-components";
import Price from "../utils/Price";
import TextButton from "../utils/button/TextButton";
import {
  CenterContainer,
  LabelList,
  StyledDescription,
  StyledTitle,
} from "../utils/styles/common";
import Label from "../utils/Label";
import IconButton from "../utils/button/IconButton";
import { useState } from "react";

const Modal = ({ product }) => {
  const [count, setCount] = useState(1);
  const [productImg, setProductImg] = useState(product.top_image);

  const thumbnailList = [...new Array(5)].map((i, index) =>
    index >= product.thumb_images.length ? (
      <BlackThumbnail />
    ) : (
      <Thumbnail
        src={product.thumb_images[index]}
        onClick={() => setProductImg(product.thumb_images[index])}
      />
    )
  );

  const getTotalPrice = (str) => Number(str.replace(/[^0-9]/g, "")) * count;

  const decreaseCount = () => count > 1 && setCount(count - 1);

  console.log(product);
  return (
    <ModalCard>
      <ProductImageDiv>
        <ProductImage src={productImg} alt="product-thumbnail" />
        <ThumbnailUL>{thumbnailList}</ThumbnailUL>
      </ProductImageDiv>
      <Information>
        <ProductMainInfo>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductLabelInfo>
            <LabelList>
              {product.badge &&
                product.badge.map((e) => <Label badgeName={e} />)}
            </LabelList>
            <Price product={product} />
          </ProductLabelInfo>
        </ProductMainInfo>
        <ProductBuyInfo>
          <ProductBuyInfoLi>
            <ProductBuyInfoTitle>적립금</ProductBuyInfoTitle>
            {product.point}
          </ProductBuyInfoLi>
          <ProductBuyInfoLi>
            <ProductBuyInfoTitle>배송정보</ProductBuyInfoTitle>
            {product.delivery_info}
          </ProductBuyInfoLi>
          <ProductBuyInfoLi>
            <ProductBuyInfoTitle>배송비</ProductBuyInfoTitle>
            {product.delivery_fee}
          </ProductBuyInfoLi>
        </ProductBuyInfo>
        <ProductCount>
          <ProductBuyInfoTitle>수량</ProductBuyInfoTitle>
          <ProductBuyCountDiv>
            <CountBox>{count}</CountBox>
            <div>
              <IncDecBtns>
                <IconButton type="UP" fn={() => setCount(count + 1)} />
              </IncDecBtns>
              <IncDecBtns>
                <IconButton type="DOWN" fn={decreaseCount} />
              </IncDecBtns>
            </div>
          </ProductBuyCountDiv>
        </ProductCount>
        <ProductPrice>
          <ProductTotalTitle>총 주문금액</ProductTotalTitle>
          <ProductTotalMoney>
            {getTotalPrice(product.prices[0])}
          </ProductTotalMoney>
        </ProductPrice>
        <TextButton type="ORDER"></TextButton>
      </Information>
    </ModalCard>
  );
};

const ModalCard = styled.div`
  background: white;
  width: 960px;
  height: 1076px;
  padding: 48px;
  display: flex;
`;

const ThumbnailUL = styled.div`
  display: flex;
`;

const Thumbnail = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 5px;
  margin: 8px 8px 8px 0;
  cursor: pointer;
`;

const BlackThumbnail = styled.div`
  width: 72px;
  height: 72px;
  background: #f5f5f7;
  border-radius: 5px;
  margin: 8px 8px 8px 0;
`;

const ProductImageDiv = styled.div`
  margin-right: 32px;
`;

const ProductImage = styled.img`
  width: 392px;
  height: 392px;
  border-radius: 5px;
`;

const ProductTitle = styled.div`
  font-size: ${(props) => props.theme.fontSizes.XL};
  font-weight: bold;
  color: ${(props) => props.theme.colors.darkGray};
`;

const ProductDescription = styled.div`
  font-size: ${(props) => props.theme.fontSizes.L};
  color: ${(props) => props.theme.colors.gray};
  margin: 8px 0px;
`;

const ProductLabelInfo = styled(CenterContainer)`
  justify-content: start;
  margin-bottom: 25px;
`;

const Information = styled.div``;

const ProductMainInfo = styled.div``;

// const LabelList = styled.div``;

const ProductBuyInfo = styled.ul`
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  padding: 25px 0;
`;

const ProductBuyInfoLi = styled.li`
  list-style: none;
  display: flex;
  font-size: ${(props) => props.theme.fontSizes.S};
`;

const ProductBuyInfoTitle = styled.div`
  min-width: 60px;
  margin-right: 16px;
  color: ${(props) => props.theme.colors.gray};
`;

const ProductBuyCountDiv = styled(CenterContainer)``;

const ProductCount = styled(CenterContainer)`
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
  padding: 25px 0;
  color: ${(props) => props.theme.colors.gray};
`;

const IncDecBtns = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #e0e0e0;
  width: fit-content;
  padding: 0 10px;
`;

const CountBox = styled.div`
  width: fit-content;
  border: 2px solid #e0e0e0;
  padding: 15px 25px;
  font-size: ${(props) => props.theme.fontSizes.M};
`;

const ProductPrice = styled(CenterContainer)`
  padding: 32px 0;
  justify-content: flex-end;
`;

const ProductTotalTitle = styled.div`
  font-size: ${(props) => props.theme.fontSizes.XL};
  font-weight: bold;
  color: ${(props) => props.theme.colors.darkGray};
  margin-right: 24px;
`;

const ProductTotalMoney = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.darkGray};
`;

export default Modal;
