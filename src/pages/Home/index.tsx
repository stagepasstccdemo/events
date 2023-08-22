import { Box, BaseContainer, SearchInput } from "@stagepass/osiris-ui";

import { DefaultHeader } from "@components/Header/";
import { HomeCards } from "@components/HomeCards";
import { DefaultFooter } from "@components/Footer";

export function Home() {
  return (
    <BaseContainer>
      <DefaultHeader />
      <Box mt="2rem">
        <SearchInput />
      </Box>
      <HomeCards />
      <DefaultFooter />
    </BaseContainer>
  );
}
