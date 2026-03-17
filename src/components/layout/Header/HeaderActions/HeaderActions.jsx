import LanguageSwitcher from "./LanguageSwitcher";
import { useDispatch } from "react-redux";
import { HiMenuAlt3 } from "react-icons/hi";
import { openModal } from "@/store/modals/modalsSlice";
import { Button } from "@/components/ui/button";

const HeaderActions = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 md:gap-4">
      <LanguageSwitcher />

      <Button variant="secondary">اطلب الخدمه</Button>

      <HiMenuAlt3
        className="text-white lg:hidden text-3xl!"
        onClick={() => dispatch(openModal({ modalName: "mobileNav" }))}
      />
    </div>
  );
};

export default HeaderActions;
