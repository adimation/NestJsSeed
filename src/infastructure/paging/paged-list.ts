export class PagedList<T> {
    public Source: T[];
    public PageIndex: number;
    public PageSize: number;
    public TotalRows: number;
    public TotalPages: number;

    public HasPerviousPage(): boolean {
        return this.PageIndex > 1 && this.TotalPages > 0;
    }

    public HasNextPage(): boolean {
        return this.PageIndex + 1 < this.TotalPages;
    }
}
