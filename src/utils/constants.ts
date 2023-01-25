const CONSTANTS = {
  DOMAIN_CLIENT: process.env.REACT_DOMAIN_CLIENT,
  VIDEO_DUMMY: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  IMAGE_DUMMY: 'https://source.unsplash.com/random',
  LOCAL_STORAGE: {
    AUTHENTICATE: 'AUTHENTICATE',
    THEME: 'THEME',
  },
  THEME_MODE_OPTIONS: {
    darkMode: 'darkMode',
    lightMode: 'lightMode',
  },
  ACCEPT_FILE_IMAGE: ['image/png', 'image/jpeg'],
  LANGUAGE_LIST: ['EN', 'VI'],
  DEFAULT_QUERY_OPTION: {
    retry: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  },
};

export default CONSTANTS;
