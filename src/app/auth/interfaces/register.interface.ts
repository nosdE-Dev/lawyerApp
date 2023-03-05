export interface Register {
  email:                    string;
  full_name:                string;
  billing_address:          string;
  default_shipping_address: string;
  country:                  string;
  phone:                    string;
  enabled:                  boolean;
  id:                       string;
  updated_at:               Date;
  created_at:               Date;
}

export interface RegisterError {
  email:                    string[];
  password:                 string[];
  full_name:                string[];
  billing_address:          string[];
  default_shipping_address: string[];
  country:                  string[];
  phone:                    string[];
}
