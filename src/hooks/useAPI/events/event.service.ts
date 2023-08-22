import { ENDPOINTS } from "@constants/endpoints";
import { api } from "@services/api";

import {
  EventDetailsDTO,
  EventSummaryDTO,
  EventTrendingDTO,
  TicketsDTO,
} from "@services/mock/DTO";

export const useEventsService = () => {
  const getEventsSummary = async () => {
    const response = await api.get<EventSummaryDTO[]>(
      ENDPOINTS.LIST_EVENTS_SUMMARY
    );

    const formattedData = response.data.map((event) => ({
      key: event.id,
      sourceBannerImg: event.eventImageURL,
      titleCard: event.eventName,
      legendCard: event.fullDateWithHour,
      detailsDescriptionCard: event.location,
      priceTag: event.priceTag,
      textButtonLabel: "GET TICKETS RIGHT NOW",
      parentalRating: event.parentalRating,
    }));

    return formattedData;
  };

  const getEventsTrending = async () => {
    const response = await api.get<EventTrendingDTO[]>(
      ENDPOINTS.LIST_EVENTS_TRENDING
    );

    const formattedData = response.data.map((event) => ({
      key: event.id,
      sourceBannerImg: event.eventImageURL,
      titleCard: event.eventName,
      numberInCard: event.trendingPosition,
    }));

    return formattedData;
  };

  const getQuickFilterOptions = async () => {
    const baseProps = {
      bgColor: "lightPurple",
      color: "os-ternary.300",
      px: "19px",
      py: "10px",
      rounded: "full",
      variant: "solid",
      alignSelf: "center",
      boxShadow: "",
    };

    const response = await api.get(ENDPOINTS.LIST_QUICK_FILTER_OPTIONS);

    const formattedData = response.data.map(
      (option: { id: number; categoryName: string }) => ({
        key: option.id,
        text: option.categoryName,
        ...baseProps,
      })
    );

    return formattedData;
  };

  const getEventKindCategories = async () => {
    const { data } = await api.get(ENDPOINTS.LIST_EVENT_KIND_CATEGORIES);

    return data;
  };

  const getEventDetails = async (eventId: string) => {
    try {
      const { data } = await api.get(
        ENDPOINTS.LIST_EVENT_DETAILS_BY_ID(eventId)
      );

      if (!data) {
        return null;
      }

      const {
        eventImageURL,
        eventMainTitle,
        eventSubTitle,
        parentalRating,
        locationsAmount,
        peopleInterestedAtThisEvent,
        aboutEvent,
        tickets,
        tourSetlist,
        eventVideoURL,
        recommendedEvents,
      } = data.listEventDetails;

      const summaryHeader: Pick<
        EventDetailsDTO,
        | "eventImageURL"
        | "eventMainTitle"
        | "eventSubTitle"
        | "parentalRating"
        | "locationsAmount"
        | "peopleInterestedAtThisEvent"
        | "aboutEvent"
      > = {
        eventImageURL,
        eventMainTitle,
        eventSubTitle,
        parentalRating,
        locationsAmount,
        peopleInterestedAtThisEvent,
        aboutEvent,
      };

      const eventExtraContent: Pick<
        EventDetailsDTO,
        "tourSetlist" | "eventVideoURL" | "recommendedEvents"
      > = {
        tourSetlist,
        eventVideoURL,
        recommendedEvents,
      };

      return {
        summaryHeader,
        eventTicketsList: <TicketsDTO>tickets,
        eventExtraContent,
      };
    } catch (error) {
      throw new Error(error);
    }
  };

  const services = {
    getEventsSummary,
    getEventsTrending,
    getQuickFilterOptions,
    getEventKindCategories,
    getEventDetails,
  };

  return services;
};
