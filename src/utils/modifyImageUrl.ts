export const modifyImageUrl = (imageRef: any) => {
  const modifiedRef = String(imageRef)
    .replace("image-", "")
    .replace("-jpg", ".jpg")
    .replace("-webp", ".webp")
    .replace("-png", ".png");
  const baseUrl = "https://cdn.sanity.io/images/ouy7dg4a/production/";
  return baseUrl + modifiedRef;
};
