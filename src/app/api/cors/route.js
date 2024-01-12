// This function will handle the logic for your API route
export default function handler(req, res) {
  // Set CORS headers to allow requests from a specific origin
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://cdn.consentmanager.net"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type");

  // Your API logic goes here

  // Send the response
  res.status(200).json({ message: "API response" });
}