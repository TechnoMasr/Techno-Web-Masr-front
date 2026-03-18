import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { openModal } from "@/store/modals/modalsSlice";

const useHandleAction = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAction = (url) => {
    if (!url) return;

    if (url === "request_form") {
      dispatch(openModal({ modalName: "ServiceRequestModal" }));
    } else {
      navigate(url);
    }
  };

  return handleAction;
};

export default useHandleAction;
