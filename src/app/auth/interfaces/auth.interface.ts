export interface Auth {
  code:       number;
  message:    string;
  token:      string;
  token_type: string;
  expires_in: string;
}

export interface ErrorAuth {
  code:       number;
  message:    string;
}
