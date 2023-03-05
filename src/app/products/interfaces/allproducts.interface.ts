export interface AllProducts {
  current_page:   number;
  data:        Products[];
  first_page_url: string;
  from:           number;
  last_page:      number;
  last_page_url:  string;
  next_page_url:  null;
  path:           string;
  per_page:       string;
  prev_page_url:  null;
  to:             number;
  total:          number;
}

export interface Products {
  id:          string;
  sku:         string;
  name:        string;
  price:       number;
  weight:      number;
  description: string;
  thumbnail:   string;
  image:       string;
  stock:       number;
  created_at:  Date;
  updated_at:  Date;
  categories:  any[];
}
