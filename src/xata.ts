// Generated by Xata Codegen 0.26.9. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "Users",
    columns: [
      { name: "ip", type: "string" },
      { name: "platform", type: "string" },
      { name: "os", type: "string" },
      { name: "geo", type: "link", link: { table: "Geographic_Locations" } },
    ],
    revLinks: [
      { column: "user_id", table: "Sessions" },
      { column: "user_id", table: "User_Events" },
      { column: "user_id", table: "Page_Views" },
    ],
  },
  {
    name: "Page_Views",
    columns: [
      { name: "url", type: "string" },
      { name: "user_id", type: "link", link: { table: "Users" } },
      { name: "referral_id", type: "link", link: { table: "Referrals" } },
    ],
  },
  {
    name: "User_Events",
    columns: [
      { name: "name", type: "string" },
      { name: "user_id", type: "link", link: { table: "Users" } },
      { name: "data", type: "json" },
    ],
  },
  {
    name: "Referrals",
    columns: [
      { name: "referral_url", type: "string" },
      { name: "source_url", type: "string" },
    ],
    revLinks: [{ column: "referral_id", table: "Page_Views" }],
  },
  {
    name: "Geographic_Locations",
    columns: [
      { name: "country", type: "string" },
      { name: "region", type: "string" },
      { name: "city", type: "string" },
    ],
    revLinks: [{ column: "geo", table: "Users" }],
  },
  {
    name: "Sessions",
    columns: [
      { name: "user_id", type: "link", link: { table: "Users" } },
      { name: "start_date", type: "datetime" },
      { name: "end_date", type: "datetime" },
      { name: "duration", type: "int" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Users = InferredTypes["Users"];
export type UsersRecord = Users & XataRecord;

export type PageViews = InferredTypes["Page_Views"];
export type PageViewsRecord = PageViews & XataRecord;

export type UserEvents = InferredTypes["User_Events"];
export type UserEventsRecord = UserEvents & XataRecord;

export type Referrals = InferredTypes["Referrals"];
export type ReferralsRecord = Referrals & XataRecord;

export type GeographicLocations = InferredTypes["Geographic_Locations"];
export type GeographicLocationsRecord = GeographicLocations & XataRecord;

export type Sessions = InferredTypes["Sessions"];
export type SessionsRecord = Sessions & XataRecord;

export type DatabaseSchema = {
  Users: UsersRecord;
  Page_Views: PageViewsRecord;
  User_Events: UserEventsRecord;
  Referrals: ReferralsRecord;
  Geographic_Locations: GeographicLocationsRecord;
  Sessions: SessionsRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://smail-Yarar-s-workspace-r4lqpv.eu-central-1.xata.sh/db/the-analytics",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
