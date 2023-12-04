export interface Project {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: string;
  title: any;
  description: any;
  main_image: {
    image: {
      _type: string;
      asset: { _type: string; _ref: string };
    };
    epigraph: any;
  };
  second_description: any;
  image_list: any;
}

export interface About {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: string;
  language: any;
  description: any;
  skills: any;
  education: any;
  resume: {
    resume_image: {
      _type: string;
      asset: { _ref: string; _type: string };
    };
    resume_link: any;
  };
}
