const project = {
  name: "project",
  title: "Projects", // This shows in the Studio
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug", // built-in type
      options: { source: "name" }, // grabs info from the name field above
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true }, // in Studio you can Zoom in and pick a section of the image
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }], // you're be able to use "bold", "italic"...
    },
  ],
};

export default project;
