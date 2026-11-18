import type { ServicePage } from "../../_lib/services";
import cdpImplementation from "./cdp-implementation";
import performanceMarketing from "./performance-marketing";
import programmaticDooh from "./programmatic-dooh-advertising";

// Order is display order on the home page's "Specialist services" row.
export const SERVICE_PAGE_ENTRIES: ServicePage[] = [
  performanceMarketing,
  programmaticDooh,
  cdpImplementation,
];
