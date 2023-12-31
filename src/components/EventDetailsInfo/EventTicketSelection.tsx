import {
  Box,
  Button,
  Divider,
  Flex,
  Modal,
  Text,
  TextBadge,
  Toaster,
  useToast,
} from "@stagepass/osiris-ui";
import { IoTicketSharp } from "@assets/icons";
import { TicketOptions, TicketsDTO } from "@services/mock/DTO";
import { DateFormatter } from "@util/DateFormatter";
import { useStore } from "@hooks/useStore";
import { useUser } from "@hooks/useUser";
import { navigateToUrl } from "single-spa";
import { useEffect, useState } from "react";

function HeaderModal() {
  return (
    <Text
      mt="2.5rem"
      textAlign="center"
      text="Select Ticket Type"
      fontSize="3xl"
      color="os-primary.100"
      fontWeight="normal"
    />
  );
}

function FooterModal({ goBack }: any) {
  return (
    <Button
      color="os-ternary.300"
      flex={1}
      fontWeight="normal"
      onClick={goBack}
    >
      go back to event page
    </Button>
  );
}

type EventTicketSelectionProps = {
  isOpen: boolean;
  onClose: any;
  data: TicketsDTO;
};

export function EventTicketSelection({
  isOpen,
  onClose,
  data,
}: EventTicketSelectionProps) {
  const { setTicketInfo, setUserInfo, setRedirectUrl } = useStore();
  const { userSession } = useUser();
  const isUserAuthenticated = !!userSession?.access_token;
  const [toggleLoginRequirement, setToggleLoginRequirement] = useState(false);

  const redirectToSignIn = () => {
    setRedirectUrl(`/event?eventId=${data.id}`);
    navigateToUrl(`/SignIn`);
  };

  const handleProceedToCheckout = (ticketId: string) => {
    if (!isUserAuthenticated) {
      setToggleLoginRequirement(true);
    } else {
      const ticketInfo = data.ticketOptions.find(
        (ticketOption) => ticketOption.id === ticketId
      );

      setTicketInfo({ ...data, ticketOptions: [ticketInfo] });
      setUserInfo();
      navigateToUrl(`/checkout`);
    }
  };

  return (
    <Modal
      {...{ isOpen, onClose }}
      size="full"
      bgColor="white"
      headerModal={<HeaderModal />}
      footerModal={<FooterModal goBack={onClose} />}
    >
      {data.ticketOptions.map((ticketOption: TicketOptions) => (
        <Box key={ticketOption.id}>
          <Flex mt="2rem" alignItems="center" justifyContent="space-between">
            <Flex flexDir="column" justifyContent="flex-start">
              <Text color="os-ternary.300" fontWeight="normal" fontSize="3xl">
                {ticketOption.type}
              </Text>
              <Text
                color="os-ternary.300"
                fontWeight="light"
                fontSize="sm"
                maxW="8rem"
              >
                Location: {data.location} - {data.city},{data.country}
              </Text>
              <Text
                mt="0.5rem"
                color="os-ternary.300"
                fontWeight="light"
                fontSize="x-small"
              >
                When:{" "}
                {DateFormatter(data.date, "en-us", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                })}
              </Text>
            </Flex>

            <IoTicketSharp size={54} color="F26A0F" />

            <Flex
              flexDir="column"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Text color="os-primary.100" fontWeight="normal" fontSize="xl">
                R$ {ticketOption.price}
              </Text>
              <TextBadge
                variant="subtle"
                p={2}
                fontSize="xx-small"
                boxShadow="basic"
                bgColor="highlightOrange"
              >
                {ticketOption.amountAvailable} Available
              </TextBadge>
            </Flex>
          </Flex>
          <Flex flexDir="column">
            <Button
              alignSelf="center"
              mt="2rem"
              bgColor="os-primary.100"
              py="1rem"
              px="3rem"
              maxW="40rem"
              width="100%"
              fontWeight="semibold"
              borderRadius="20px"
              color="white"
              flex={1}
              onClick={() => handleProceedToCheckout(ticketOption.id)}
            >
              proceed to checkout
            </Button>
          </Flex>

          {ticketOption.id !==
            data.ticketOptions[data.ticketOptions.length - 1].id && (
            <Box mt="2rem" mb="2rem">
              <Divider borderColor="os-ternary.300" />
            </Box>
          )}
        </Box>
      ))}
      {toggleLoginRequirement && (
        <Modal
          isOpen={toggleLoginRequirement}
          onClose={() => setToggleLoginRequirement(false)}
          size="full"
          headerModal={
            <Text
              mt="2.5rem"
              textAlign="center"
              text="Login Required"
              fontSize="3xl"
              color="os-primary.100"
              fontWeight="normal"
              alignSelf="center"
            />
          }
          footerModal={
            <Button
              color="os-ternary.300"
              flex={1}
              fontWeight="normal"
              onClick={() => setToggleLoginRequirement(false)}
            >
              cancel
            </Button>
          }
        >
          <Flex flexDirection="column">
            <Text>You need to be logged in to proceed to checkout.</Text>
            <Button
              alignSelf="center"
              mt="2rem"
              bgColor="os-primary.100"
              py="1rem"
              px="3rem"
              maxW="40rem"
              width="100%"
              fontWeight="semibold"
              borderRadius="20px"
              color="white"
              flex={1}
              onClick={redirectToSignIn}
            >
              Go to Login Page
            </Button>
          </Flex>
        </Modal>
      )}
    </Modal>
  );
}
