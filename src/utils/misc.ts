export const cx = (...classes) => classes.filter(Boolean).join(' ');

export const slugify = (text: string) => text.toLowerCase().replace(/ /g, '-');