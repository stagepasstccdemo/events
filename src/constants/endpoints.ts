export const ENDPOINTS = {
  baseURL: "stagepass.api/v1",

  // Events Listing
  LIST_EVENTS_SUMMARY: "/listEventsSummary",
  LIST_EVENTS_TRENDING: "/listEventsTrending",
  LIST_QUICK_FILTER_OPTIONS: "/eventsQuickFilterOptions",
  LIST_EVENT_KIND_CATEGORIES: "/listEventKindCategories",
  LIST_EVENT_DETAILS_BY_ID: (eventId: string) => `/listEventDetails/${eventId}`,
};
