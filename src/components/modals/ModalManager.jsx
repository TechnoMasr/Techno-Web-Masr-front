import LoadingModal from "./LoadingModal";
import MobileNav from "./MobileNav";
import ServiceRequestModal from "./ServiceRequestModal";

const ModalManager = () => {
  return (
    <>
      <MobileNav />
      <LoadingModal />
      <ServiceRequestModal />
    </>
  );
};

export default ModalManager;
