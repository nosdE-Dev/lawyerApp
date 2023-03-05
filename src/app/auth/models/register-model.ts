export class RegisterModel {
  public full_name?: string | null ;
  public email?: string| null ;
  public password?: string| null;
  public password_confirmation?: string| null;
  public billing_address?: string| null;
  public default_shipping_address?: string| null;
  public country?: string| null;
  public phone?: string| null;

  constructor(email: string, password: string,
              full_name: string,password_confirmation: string,
              billing_address: string,default_shipping_address: string,
              country: string,phone: string) {

    this.email = email;
    this.password = password;
    this.full_name = full_name;
    this.password_confirmation = password_confirmation;
    this.billing_address = billing_address;
    this.default_shipping_address = default_shipping_address;
    this.country = country;
    this.phone = phone;
}
}
