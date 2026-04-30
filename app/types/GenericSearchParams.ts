export type SearchParams = Promise<{
    [key: string]: string | string[] | undefined;
}>;
export default SearchParams;
