import {
  OwnerShipPosts,
  Product,
  ProductBanner,
  Promo,
  ShippingInformation,
} from "../../router/routing";

export const Home = () => {
  return (
    <>
      <Promo />
      <Product />
      <ProductBanner />
      <ShippingInformation />
      <OwnerShipPosts />
    </>
  );
};
