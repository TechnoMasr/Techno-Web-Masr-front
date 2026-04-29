import LanguageSwitcher from "./LanguageSwitcher";
import { useDispatch } from "react-redux";
import { HiMenuAlt3 } from "react-icons/hi";
import { openModal } from "@/store/modals/modalsSlice";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import useHandleAction from "@/hooks/useHandleAction";

const HeaderActions = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const handleAction = useHandleAction();

  return (
    <div className="flex gap-2 md:gap-4">
      <LanguageSwitcher />

      <Button
        className={`py-2! text-sm!`}
        onClick={() =>
          // dispatch(openModal({ modalName: "ServiceRequestModal" }))
          handleAction("request_form")
        }
        variant="secondary"
      >
        {t("HeaderActions.requestService")}
      </Button>

      <HiMenuAlt3
        className="text-white lg:hidden text-3xl! cursor-pointer"
        onClick={() => dispatch(openModal({ modalName: "mobileNav" }))}
      />
    </div>
  );
};

export default HeaderActions;
