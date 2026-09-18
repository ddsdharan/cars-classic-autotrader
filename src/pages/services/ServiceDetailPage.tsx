import { useParams } from "react-router-dom";
import ShippingPage from "./Shipping";
import WarrantyPurchasePage from "./WarrantyPurchase";
import FinancingPage from "./Financing";

const ServiceDetailPage = () => {
  const { slug } = useParams();

  if (slug === "shipping") return <ShippingPage />;
  if (slug === "warranty-purchase") return <WarrantyPurchasePage />;
  if (slug === "financing") return <FinancingPage />;

  return <div>Service not found</div>;
};

export default ServiceDetailPage;