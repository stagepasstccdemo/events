// @ts-ignore
import { useStore as useUtilStateStore } from "@stagepass/util-state";
import { useUser } from "@hooks/useUser";
import { TicketsDTO } from "@services/mock/DTO";

export const useStore = () => {
  const store = useUtilStateStore();
  const { userData } = useUser();

  const setUserInfo = () => {
    store.setUserInfo(userData);
  };

  const setTicketInfo = (payload: TicketsDTO) => {
    store.setTicketInfo(payload);
  };

  const setRedirectUrl = (payload: string) => {
    store.setRedirectUrl(payload);
  };

  return {
    store,
    setUserInfo,
    setTicketInfo,
    setRedirectUrl,
  };
};
