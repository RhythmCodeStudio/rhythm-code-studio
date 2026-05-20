type ProjectBase = {
  client: string;
  project: string;
  description: string;
  desktop_image: string[];
  mobile_images: string[];
  features: string[];
};

type LiveProject = ProjectBase & {
  status: "live";
  url: string;
};

type InDevelopmentProject = ProjectBase & {
  status: "in-development";
};

export type Project = LiveProject | InDevelopmentProject;

export type Client = {
  id: string;
  name: string;
  url: string;
};

export type Message = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  message: string;
  date: string;
};
