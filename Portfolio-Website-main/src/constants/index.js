const photo = (id, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const localGalleryPhotos = import.meta.glob(
  "../assets/gallery/*/*.{avif,jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

const photosForGallery = (galleryId, samplePhotos) => {
  const folder = `/gallery/${galleryId}/`;
  const photos = Object.entries(localGalleryPhotos)
    .filter(([path]) => path.includes(folder))
    .map(([path, src]) => {
      const filename = path.split("/").pop().replace(/\.[^.]+$/, "");
      return {
        src,
        alt: filename.replace(/[-_]+/g, " "),
      };
    });

  return photos.length > 0 ? photos : samplePhotos;
};

export const navLinks = [
  { id: "about", title: "About" },
  { id: "services", title: "Services" },
  { id: "gallery", title: "Gallery" },
  { id: "contact", title: "Contact" },
];

export const serviceGalleries = [
  {
    id: "portraits",
    title: "Portraits",
    description: "Personal portraits that let your personality shine.",
    photos: photosForGallery("portraits", [
      { src: photo("photo-1534528741775-53994a69daeb"), alt: "Portrait in soft natural light" },
      { src: photo("photo-1506794778202-cad84cf45f1d"), alt: "Outdoor portrait session" },
      { src: photo("photo-1531123897727-8f129e1688ce"), alt: "Creative fashion portrait" },
    ]),
  },
  {
    id: "studio",
    title: "Studio",
    description: "Polished studio sessions with considered lighting and style.",
    photos: photosForGallery("studio", [
      { src: photo("photo-1544005313-94ddf0286df2"), alt: "Studio beauty portrait" },
      { src: photo("photo-1500648767791-00dcc994a43e"), alt: "Classic studio headshot" },
      { src: photo("photo-1534528741775-53994a69daeb"), alt: "Studio portrait with a warm backdrop" },
    ]),
  },
  {
    id: "birthdays",
    title: "Birthdays",
    description: "Bright, joyful photographs of the people and moments you celebrate.",
    photos: photosForGallery("birthdays", [
      { src: photo("photo-1530103862676-de8c9debad1d"), alt: "Colorful birthday celebration" },
      { src: photo("photo-1464366400600-7168b8af9bc3"), alt: "Birthday cake and celebration details" },
      { src: photo("photo-1513151233558-d860c5398176"), alt: "Festive birthday party decorations" },
    ]),
  },
  {
    id: "events",
    title: "Events",
    description: "Candid coverage of the atmosphere, details, and people at your event.",
    photos: photosForGallery("events", [
      { src: photo("photo-1511795409834-ef04bbd61622"), alt: "Guests gathered at an event" },
      { src: photo("photo-1511578314322-379afb476865"), alt: "Live event and audience" },
      { src: photo("photo-1470229722913-7c0e2dbbafd3"), alt: "Stage lights at a live event" },
    ]),
  },
  {
    id: "weddings",
    title: "Weddings",
    description: "Meaningful moments and details from your wedding day, captured with care.",
    photos: photosForGallery("weddings", [
      { src: photo("photo-1519741497674-611481863552"), alt: "Wedding celebration outdoors" },
      { src: photo("photo-1537633552985-df8429e8048b"), alt: "Newlyweds celebrating together" },
      { src: photo("photo-1511285560929-80b456fea0bc"), alt: "Wedding couple sharing a joyful moment" },
    ]),
  },
  {
    id: "graduations",
    title: "Graduations",
    description: "Celebrate your hard work with portraits and memories to keep.",
    photos: photosForGallery("graduations", [
      { src: photo("photo-1627556704302-624286467c65"), alt: "Graduate celebrating in cap and gown" },
      { src: photo("photo-1523580494863-6f3031224c94"), alt: "Graduation ceremony and caps" },
      { src: photo("photo-1523240795612-9a054b0db644"), alt: "Friends celebrating a graduation" },
    ]),
  },
];
