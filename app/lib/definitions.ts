export type Project = {
  client: string;
  project: string;
  description: string;
  desktop_image: string[];
  mobile_images: string[];
  url: string;
  features: string[];
};

export type Client = {
  name: string;
  url: string;
};

export type Message = {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
}