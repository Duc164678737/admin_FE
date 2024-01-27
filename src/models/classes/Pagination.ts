class Pagination {
  page: number;
  size: number;
  totalItems: number;
  totalPages: number;

  constructor(data?: Pagination) {
    this.page = data?.page || 1;
    this.size = data?.size || 5;
    this.totalItems = data?.totalItems || 0;
    this.totalPages = data?.totalPages || 1;
  }
}

export default Pagination;
