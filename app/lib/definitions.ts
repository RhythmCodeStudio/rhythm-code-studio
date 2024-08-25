export type Project = {
  client: string;
  project: string;
  description: string;
  desktop_image: string;
  mobile_image: string;
  url: string;
  features: string[];
};

export type Client = {
  name: string;
  url: string;
};