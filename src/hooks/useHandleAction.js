import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { openModal } from "@/store/modals/modalsSlice";

const useHandleAction = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isExternalLink = (url) => {
    return /^https?:\/\//.test(url);
  };

  const handleAction = (url, data = null) => {
    if (!url) return;

    // 🎯 modal
    if (url === "request_form") {
      dispatch(
        openModal({
          modalName: "ServiceRequestModal",
          modalData: { ...data, type: "service_request" },
        }),
      );
      return;
    }
    if (url === "request_form_product") {
      dispatch(
        openModal({
          modalName: "ServiceRequestModal",
          modalData: { ...data, type: "product_request" },
        }),
      );
      return;
    }

    // 🌍 external link
    if (isExternalLink(url)) {
      window.open(url, "_blank"); // أو location.href لو مش عايز tab جديد
      return;
    }

    // 🧭 internal route
    navigate(url);
  };

  return handleAction;
};

export default useHandleAction;
