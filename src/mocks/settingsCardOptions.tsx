import {
  FaTicketAlt,
  FaChevronRight,
  MdSettings,
  HiIdentification,
} from "@assets/icons";

export const settingsCardOptions = [
  {
    text: "My Tickets Orders",
    leftIcon: <FaTicketAlt size={38} color="F26A0F" />,
    rightIcon: <FaChevronRight size={24} color="F26A0F" />,
  },
  {
    text: "App Settings",
    leftIcon: <MdSettings size={38} color="F26A0F" />,
    rightIcon: <FaChevronRight size={24} color="F26A0F" />,
  },
  {
    text: "My Account",
    leftIcon: <HiIdentification size={38} color="F26A0F" />,
    rightIcon: <FaChevronRight size={24} color="F26A0F" />,
  },
];
