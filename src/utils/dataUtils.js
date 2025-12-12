export function isValidArray(data) {
  return Array.isArray(data) && data.length > 0;
}

export function isValidString(value) {
  return typeof value === "string" && value.trim() !== "";
}

export function filterValidItems(items, validator) {
  if (!Array.isArray(items)) {
    return [];
  }

  return items.filter((item) => {
    try {
      return item != null && validator(item);
    } catch {
      return false;
    }
  });
}

export const validators = {
  headerMenuItem: (item) => {
    return (
      item &&
      typeof item === "object" &&
      isValidString(item.label) &&
      isValidString(item.href)
    );
  },
  faqItem: (item) => {
    return (
      item &&
      typeof item === "object" &&
      isValidString(item.question) &&
      isValidString(item.answer)
    );
  },

  benefit: (item) => {
    return (
      item &&
      typeof item === "object" &&
      isValidString(item.title) &&
      isValidString(item.icon)
    );
  },

  testimonial: (item) => {
    return (
      item &&
      typeof item === "object" &&
      isValidString(item.text) &&
      isValidString(item.name) &&
      isValidString(item.role)
    );
  },

  feature: (item) => {
    return (
      item &&
      typeof item === "object" &&
      isValidString(item.title) &&
      isValidString(item.description)
    );
  },

  visionItem: (item) => {
    return (
      item &&
      typeof item === "object" &&
      isValidString(item.title) &&
      isValidString(item.text)
    );
  },

  trustItem: (item) => {
    return (
      item &&
      typeof item === "object" &&
      isValidString(item.title) &&
      isValidString(item.text)
    );
  },

  howWeBuildItem: (item) => {
    return (
      item &&
      typeof item === "object" &&
      isValidString(item.number) &&
      isValidString(item.title) &&
      isValidString(item.text)
    );
  },

  footerColumn: (item) => {
    return (
      item &&
      typeof item === "object" &&
      isValidString(item.title) &&
      Array.isArray(item.links)
    );
  },
};

export function getWithFallback(value, fallback) {
  return value != null && value !== "" ? value : fallback;
}
