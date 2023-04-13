const getPublicId = (imageURL) => {
  if (!imageURL) return "";

  const CLOUDINARY_REGEX =
    /^.+\.cloudinary\.com\/(?:[^\/]+\/)(?:(image|video|raw)\/)?(?:(upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)\/)?(?:(?:[^_/]+_[^,/]+,?)*\/)?(?:v(\d+|\w{1,2})\/)?([^\.^\s]+)(?:\.(.+))?$/;

  const parts = CLOUDINARY_REGEX.exec(imageURL);

  return parts && parts.length > 2 ? parts[parts.length - 2] : imageURL;
};

module.exports = getPublicId;
