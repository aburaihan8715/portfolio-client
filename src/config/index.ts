export const config = {
  BASE_URL:
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_BASE_API
      : 'http://localhost:5000',
};
