export interface APIRespuesta<T> {
    status: number,
    statusText: string,
    data: T,
}