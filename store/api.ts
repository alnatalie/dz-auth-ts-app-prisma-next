import { createFetcherStore } from "./fetcher";
import type { Buyers, Categories } from "@prisma/client";

export const $myaccount = createFetcherStore(["/api/myaccount/"]);
export const $buyers = createFetcherStore<Buyers[]>(["/api/buyer/"]);
export const $categories = createFetcherStore<Categories[]>(["/api/category/"]);
