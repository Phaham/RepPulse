// fetchExercises.js
import fs from 'fs/promises';
import fetch from 'node-fetch';            // npm install node-fetch@2
import dotenv from 'dotenv';
dotenv.config();

const DATA_FILE = './exercises.json';

const EXERCISES_URL = 'https://exercisedb.p.rapidapi.com/exercises';
const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.VITE_RAPID_API_KEY,
  },
};

async function fetchFromApi() {
  const res = await fetch(EXERCISES_URL, OPTIONS);
  if (res.status === 429) {
    throw new Error('RATE_LIMIT');
  }
  if (!res.ok) {
    throw new Error(`API_ERROR: ${res.status}`);
  }
  return res.json();
}

async function readLocalData() {
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to read local data file:', err);
    throw err;
  }
}

async function writeLocalData(data) {
  try {
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
    console.log(`Wrote ${data.length} items to ${DATA_FILE}`);
  } catch (err) {
    console.error('Failed to write local data file:', err);
  }
}

async function getAllExercises() {
  try {
    console.log('Fetching from RapidAPI…');
    const data = await fetchFromApi();
    console.log(`Fetched ${data.length} exercises from API.`);
    await writeLocalData(data);
    return data;
  } catch (err) {
    if (err.message === 'RATE_LIMIT') {
      console.warn('Rate limit hit! Loading from local JSON file instead.');
      return readLocalData();
    }
    console.error(err);
    throw err;
  }
}

(async () => {
  try {
    const exercises = await getAllExercises();
    console.log('Got', exercises.length, 'exercises.');
    // you can do further processing here…
  } catch (err) {
    console.error('Fatal error:', err);
  }
})();
