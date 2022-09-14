export interface IModel<T> {
  read(): Promise<T>,
  readOne(): Promise<T>,
  create(): Promise<T>,
  update(): Promise<T>,
  delete(): Promise<T>,
}