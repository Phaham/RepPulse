export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};


// // src/utils/fetchData.js
// import localExercises from '../../exercises.json';

// export const exerciseOptions = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
//     'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
//   },
// };

// export const youtubeOptions = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
//     'X-RapidAPI-Key': import.meta.env.YOUTUBE_RAPID_API_KEY,
//   },
// };

// // Generic fetchData for JSON array endpoints (e.g., ExerciseDB)
// export const fetchData = async (url, options, fallback = localExercises) => {
//   try {
//     const res = await fetch(url, options);

//     if (!res.ok) {
//       console.warn(`Fetch failed (${res.status}) for ${url}, using fallback.`);
//       return fallback;
//     }

//     const data = await res.json();

//     if (!Array.isArray(data)) {
//       console.warn(`Expected array from ${url}, got`, data, '—using fallback.');
//       return fallback;
//     }

//     return data;
//   } catch (err) {
//     console.error(`Network/API error for ${url}:`, err, '—using fallback.');
//     return fallback;
//   }
// };

// // Specialized fetch for YouTube searches
// // Returns an object with a `contents` array
// export const fetchYoutube = async (url, options) => {
//   const emptyResponse = { contents: [] };
//   try {
//     const res = await fetch(url, options);
//     if (!res.ok) {
//       console.warn(`YouTube fetch failed (${res.status}) for ${url}, returning empty.`);
//       return emptyResponse;
//     }
//     const data = await res.json();
//     if (!data || !Array.isArray(data.contents)) {
//       console.warn(`YouTube data.contents not array for ${url}, returning empty.`);
//       return emptyResponse;
//     }
//     return data;
//   } catch (err) {
//     console.error(`YouTube fetch error for ${url}:`, err, '—returning empty.');
//     return emptyResponse;
//   }
// };
