import { DefaultFooter } from "@components/Footer";
import { DefaultHeader } from "@components/Header";
import { BaseContainer, Box, SearchInput } from "@stagepass/osiris-ui";

type PageWrapperProps = {
  children: React.ReactNode;
  hasSearch?: boolean;
};

export function PageWrapper({ children, hasSearch }: PageWrapperProps) {
  return (
    <BaseContainer>
      <DefaultHeader />
      {hasSearch && (
        <Box mt="2rem">
          <SearchInput />
        </Box>
      )}
      {children}
      <DefaultFooter />
    </BaseContainer>
  );
}

PageWrapper.defaultProps = {
  hasSearch: true,
};
