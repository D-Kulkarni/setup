export interface TableConfig {
  tableHeader: string;
  columns: ColumnConfig[];
  condition?: Condition;
  globalSearch?: boolean;
  pagination?: boolean;
  recordsPerPage: number;
  pagesSizes: any;
  lazyLoad: boolean;
  rowExpand: boolean;
  rowSelection: boolean;
  selectionMode: string;
  responsive: boolean;
  pageLinks?: number;
}

export interface ColumnConfig {
  field: string;
  header: string;
  sort?: boolean;
  filter?: boolean;
  templateConfig?: {
    name: string;
    format?: string;
  };
}

export interface Condition {
  name?: conditions;
  value?: any;
  style?: string;
}

export enum conditions {
  gte = "gte",
  gt = "gt",
  lt = "lt",
  e = "e",
  lte = "lte",
  ne = "ne",
}

export interface MenuItem {
  label: string;
  icon?: string;
  command: (event) => {};
}
