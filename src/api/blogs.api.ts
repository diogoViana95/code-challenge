import { Blog } from "../models";

export class BlogsApi {
  async getAll(): Promise<Blog[]> {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return [
      {
        id: "1",
        title: "Remote tachograph download.",
        description:
          "‘Helaing holidays’ are on the rise tohelp maximise your health and happines...",
        imageDescription: "tachograph download",
        image:
          "https://img.freepik.com/premium-photo/businessman-using-tech-devices-icons-thin-line-interface_117023-904.jpg?w=2000",
      },
      {
        id: "2",
        title: "Mobile workforce management.",
        description:
          "Morbi facilisis metus magna, sit amet sollicitudin ante tincidunt et. Mauris et magna id lorem molestie aliquet.",
        imageDescription: "workforce management",
        image: "https://www.example.com/images/blog/blog-2.png",
      },
      {
        id: "3",
        title: "Integration with supply chain visibility platforms.",
        description:
          "Vestibulum nunc arcu, sagittis ac libero eu, mattis tincidunt felis. Cras sit amet porttitor lectus...",
        imageDescription: "chain visibility platforms",
        image:
          "https://img.freepik.com/premium-photo/businessman-using-tech-devices-icons-thin-line-interface_117023-904.jpg?w=2000",
      },
      {
        id: "4",
        title: "Integration with tachograph files analysis software.",
        description:
          "Do you have a hard time managing and analyzing all tachographs' data? That's why Frotcom is integrated...",
        imageDescription: "tachograph files",
        image: "https://www.example.com/images/blog/blog-4.png",
      },
    ];
  }
}
