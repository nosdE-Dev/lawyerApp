export class ProductModel {
  public sku?: string | null;
  public description?: string | null;
  public thumbnail?: string | null;
  public image?: string | null;
  public price?: number | null;
  public weight?: number | null;
  public stock?: number | null;

  constructor(
    sku: string,  description: string,
    thumbnail: string,  image: string,
    price: number,  weight: number,
    stock: number,
    ) {
      this.sku = sku;
      this.description = description;
      this.thumbnail = thumbnail;
      this.image = image;
      this.price = price;
      this.weight = weight;
      this.stock = stock;
  }
}
