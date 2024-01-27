export const KEY_TOKEN = "token";
export const COOKIE_EXPIRED_DATE = 7;
export const KEY_USER_INFO = "userInfo";

export const NOT_HAVE_VALUE_LABEL = "- -";
export const NOT_AVAILABLE_VALUE = "N/A";

export const DEBOUNCE_TIME_IN_MILLISECOND = 500;

export const SIZE_PAGINATION_DEFAULT = 5;
export const DEFAULT_PAGINATION = {
  page: 1,
  size: SIZE_PAGINATION_DEFAULT,
};
export const SORT_DIRECTION = {
  asc: 1,
  desc: -1,
};

export const DEFAULT_LANGUAGE = [{ value: "en", label: "English" }];

// Date, Time Format
export const DATE_FORMAT = "dd/MM/yy";
export const FULL_DATE_FORMAT = "dd/MM/yyyy";
export const TIME_FORMAT = "HH:mm";
export const DEFAULT_TIMEZONE = "+07:00";

export type MENU_DATA_TYPE = {
  value: string;
  label: string;
};

export enum RARITY_TYPE {
  UNCOMMON = 1,
  RARE,
  EPIC,
}

export enum ROUND_TYPE {
  OG = 1,
  WL,
  Public,
}

export enum TYPE_ACTION {
  ADD = 1,
  SAVE,
  DELETE,
}

export enum TRANSACTION_STATUS_TYPE {
  complete = "complete",
  failed = "failed",
  loading = "loading",
  cancel = "cancel",
}

export enum INVENTORY_TYPE {
  ALL = "all",
  RARE = "rare",
  EPIC = "epic",
  UNCOMMON = "uncommon",
}

export enum SELLING_TYPE {
  OG = "OG",
  WHITELIST = "WHITELIST",
  PUBLIC = "PUBLIC",
}
