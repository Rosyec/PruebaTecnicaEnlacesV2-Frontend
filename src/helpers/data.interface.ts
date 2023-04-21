export interface Login {
  id: string
  name: string
  email: string
  message: string
}

export interface Register {
  _id:     string;
  name:    string;
  email:   string;
  token:   string;
  message: string;
}

export interface Post {
  _id:     string;
  title:   string;
  content: string;
  author:  string;
}

export interface CustomPost {
  title: string,
  content: string
}
