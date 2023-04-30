// @ts-nocheck
import {
  Box,
  BaseContainer,
  Header,
  SearchInput,
  Footer,
} from "@stagepass/osiris-ui";
import { FiMenu, FiChevronsUp } from "@assets/icons";
import LogoImg from "@assets/logo-inline.png";

import { NavBarContent, UserAccountContent } from "@components/Header/";
import { HomeCards } from "@components/HomeCards";
import { useUser } from "@hooks";
import { useQuery } from "react-query";
import { useEventsService } from "@hooks/useAPI/events/event.service";

export function Home() {
  const { userInitials, userSession, email } = useUser();
  const { getEventsSummary } = useEventsService();

  const { data, isLoading, isFetching, error } = useQuery(
    "events_summary",
    getEventsSummary
  );

  return (
    <BaseContainer>
      <Header
        leftIcon={<FiMenu size={34} color="F26A0F" />}
        logoImg={LogoImg}
        {...(userSession && {
          userProfile: userInitials,
        })}
        leftIconModalContent={<NavBarContent />}
        rightIconModalContent={<UserAccountContent />}
        leftModalTitle="Menu"
        rightModalTitle="Profile"
        bgDecoration
      />

      <Box mt="2rem">
        <SearchInput />
      </Box>

      <HomeCards />

      <Footer iconButton={<FiChevronsUp size={64} color="F26A0F" />} />
    </BaseContainer>
  );
}
