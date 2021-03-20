// Note: This is a companion problem to the System Design problem: Design TinyURL.
// TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.

// Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.

const pool = new Map();

// hashCode :: String -> Integer
// (https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript)
const hashCode = (str) => {
  var hash = 0;
  if (str.length === 0) return hash;
  
  for(let i = 0; i < str.length; i++) {
    const chr = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

// encode :: String -> String
const encode = (longUrl) => {
    const code = hashCode(longUrl);
    pool.set(code, longUrl);
    return code;
};

// decode :: String -> String
const decode = (shortUrl) => {
    return pool.get(shortUrl);
};